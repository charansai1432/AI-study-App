#  AI Study Buddy

**AI Study Buddy** is an intelligent web application that helps students summarize their study materials automatically using **AI-powered text summarization**.  
It allows users to upload PDF or text files, and the backend (powered by Django + Gemini API) processes and generates concise, easy-to-understand summaries.  

This project combines:
- **Frontend**: React + Vite (modern UI)
- **Backend**: Django REST API
- **AI Integration**: Gemini API via OpenRouter
- **Database**: MongoDB (for storing summaries and user data)

---

##  Features

 Upload PDF or text files for summarization  
 AI-powered content summarization (Gemini model)  
 Simple, responsive React UI  
 REST API built with Django  
 MongoDB integration for data storage  
 Easy to run locally using virtual environments  


##  Setup Instructions

Follow these steps to run the project locally 

### 1️ Clone the repository
```bash
git clone https://github.com/your-username/ai-study-buddy.git
cd ai-study-buddy


### 2️ Backend Setup (Django)
a. Activate Virtual Environment
Install the venv environment
python -m venv venv

# Windows
venv\Scripts\activate

b. Navigate to backend folder
cd backend

c. Install dependencies for backend
pip install -r requirements.txt
pip install pymongo
pip install requests
pip install django djangorestframework django-cors-headers pyMuPDF
pip install fitz
pip install dotenv


d. Set up environment variables

Create a .env file inside the backend folder with the following content:

OPENROUTER_API_KEY= your_api_key_here
MONGO_URI= your_mongodb_connection_string

e . Fix VS Code environment injection warning

You got this message:

An environment file is configured but terminal environment injection is disabled.

That’s from VS Code’s Python extension.

To fix it:

Open VS Code Settings (Ctrl + ,)

Search for:

python.terminal.useEnvFile


 Enable (turn on) that setting.
Then restart VS Code (or at least close and reopen the integrated terminal).

 Note: Make sure python-dotenv is installed and loaded in settings.py.

e. Run backend server
python manage.py runserver


Your backend will run at  http://127.0.0.1:8000/

3️ Frontend Setup (React + Vite)

Open a new terminal (keep backend running).

a. Navigate to frontend folder
cd frontend

b. Install dependencies
npm install

c. Run frontend development server
npm run dev


The frontend will usually start at  http://localhost:5173/

4️ Access the App

Once both servers are running:

Frontend: http://localhost:5173

Backend API: http://127.0.0.1:8000 (which display the output Welcome to AI-Study-Buddy application)

Contributed by
    -  Charan sai (Backend part)                - https://www.github.com/charansai1432
    -  H R Kruthika (Backend Part)              - https://www.github.com/Kruthikaramesh
    -  K. Mahesh (Frontend part)                - https://www.github.com/Maheshroyce
    - Mahammad Mujeeb (Frontend Part)           - https://www.github.com/MUJEEB76
    -  sahana (frontend and documentation Part) - https://www.github.com/Sandyaramu
