from django.shortcuts import render
import os
import json
import fitz
import requests
from django.http import JsonResponse
from rest_framework.decorators import api_view, parser_classes
from rest_framework.parsers import MultiPartParser
from pymongo import MongoClient
from django.conf import settings

# Ensure the media directory exists
os.makedirs(settings.MEDIA_ROOT, exist_ok=True)

# MongoDB client setup
client = MongoClient(settings.MONGO_URI)
db = client['projectdb']
collection = db['summaries']
@api_view(['POST'])
@parser_classes([MultiPartParser])
def upload_pdf(request):
    if 'file' not in request.FILES:
        return JsonResponse({"error": "No file uploaded"}, status=400)

    pdf = request.FILES['file']

    # Save uploaded file inside MEDIA_ROOT
    file_path = os.path.join(settings.MEDIA_ROOT, pdf.name)
    with open(file_path, 'wb+') as dest:
        for chunk in pdf.chunks():
            dest.write(chunk)

    # Extract text from PDF
    doc = fitz.open(file_path)
    text = ""
    for page in doc:
        text += page.get_text("text")

    # Send text to Gemini API
    headers = {
        "Authorization": f"Bearer {settings.OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    }

    payload = {
        "model": "google/gemini-2.0-flash-exp:free",
        "messages": [
            {"role": "user", "content": [{"type": "text", "text": f"Summarize this content:\n{text}"}]}
        ],
    }

    response = requests.post(
        "https://openrouter.ai/api/v1/chat/completions",
        headers=headers,
        data=json.dumps(payload)
    )

    if response.status_code != 200:
        return JsonResponse({"error": "Failed to get summary from Gemini API", "details": response.text}, status=500)

    # Fix: content is a string, not a list
    summary = response.json()["choices"][0]["message"]["content"]

    # Store summary in MongoDB
    collection.insert_one({"filename": pdf.name, "summary": summary})

    return JsonResponse({"summary": summary})
