# Team Member Setup Instructions

To customize the team member information in the footer:

1. Open the file: `src/components/Footer.tsx`

2. Find the `teamMembers` array (around line 9):

```typescript
const teamMembers: TeamMember[] = [
  { name: "Team Member 1", github: "https://github.com/username1" },
  { name: "Team Member 2", github: "https://github.com/username2" },
  { name: "Team Member 3", github: "https://github.com/username3" },
];
```

3. Replace with your actual team member names and GitHub URLs:

```typescript
const teamMembers: TeamMember[] = [
  { name: "John Doe", github: "https://github.com/johndoe" },
  { name: "Jane Smith", github: "https://github.com/janesmith" },
  { name: "Alex Johnson", github: "https://github.com/alexj" },
];
```

4. You can add or remove team members as needed. Just follow the same format.

5. Save the file and the changes will be reflected in your application.

## Example with 4 Team Members:

```typescript
const teamMembers: TeamMember[] = [
  { name: "Alice Brown", github: "https://github.com/alicebrown" },
  { name: "Bob Wilson", github: "https://github.com/bobwilson" },
  { name: "Carol Davis", github: "https://github.com/caroldavis" },
  { name: "David Lee", github: "https://github.com/davidlee" },
];
```
