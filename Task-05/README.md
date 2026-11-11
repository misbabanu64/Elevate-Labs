# Task 05 - Host a Static Website with GitHub Pages

**Elevate Labs DevOps Internship**

## Objective
Deploy a simple static HTML and CSS website for free using **GitHub Pages**.

## Deliverables
- **Live Website:** https://misbabanu64.github.io/Elevate-Labs/Task-05/
- **GitHub Repo:** https://github.com/misbabanu64/Elevate-Labs/tree/main/Task-05

## Tools Used
- **HTML5** - page structure (`index.html`)
- **CSS3** - custom styling (`style.css`)
- **Git & GitHub** - version control and code hosting
- **GitHub Pages** - free static hosting

## Project Structure
```text
Task-05/
├── index.html          # Main page (default file served)
├── style.css           # Custom styling
├── screenshots/
│   └── screenshot.png  # Live deployment proof
└── README.md           # Documentation
```

## Steps Performed
1. Created `index.html` and styled it with `style.css`.
2. Placed all files in the `Task-05` folder of the repo.
3. Committed and pushed to the `main` branch:
   ```bash
   git add .
   git commit -m "Add Task 05 static website"
   git push origin main
   ```
4. Went to **Repo -> Settings -> Pages**, chose **Deploy from a branch**, selected branch `main` and folder `/ (root)`, then clicked **Save**.
5. Opened the live link GitHub provided and confirmed the site loads.
6. Customized the look with CSS.

## Output Screenshot
![Live Website](screenshots/screenshot.png)

## Interview Questions & Answers

**1. What is GitHub Pages?**
A free static hosting service that publishes HTML, CSS and JS files straight from a GitHub repository as a live website.

**2. Can you host dynamic apps here?**
No. It serves only static client-side files. Server-side code (Python, Node.js, PHP) and databases are not supported.

**3. What are the limits of GitHub Pages?**
Published site size up to 1 GB, soft bandwidth limit of 100 GB per month, and soft limit of 10 builds per hour. Repos are also recommended to stay under 1 GB.

**4. How do you update the website?**
Edit files, commit and push to the configured branch. GitHub Pages rebuilds and updates the site automatically.

**5. What happens when you delete the repo?**
The source files are removed and the Pages site goes offline.

**6. What is the default file that loads?**
`index.html` in the published folder.

**7. Can you use a custom domain?**
Yes. Add it under Settings -> Pages -> Custom domain and point your DNS records (CNAME or A records) to GitHub.

## Outcome
Learned how to deploy static content for free using GitHub Pages.
