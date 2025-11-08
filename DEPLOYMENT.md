# GitHub Deployment Guide for KGRCET Website

## Step-by-Step Process to Deploy to GitHub

### Prerequisites
- Git installed on your system
- GitHub account created
- Terminal access (Cursor's integrated terminal or PowerShell)

---

## Step 1: Initialize Git Repository

Open terminal in Cursor (Ctrl + ` or Terminal → New Terminal) and run:

```bash
cd C:\KGRCET
git init
```

This creates a new Git repository in your project folder.

---

## Step 2: Add All Files

```bash
git add .
```

This stages all files for commit (except those in .gitignore).

---

## Step 3: Create Your First Commit

```bash
git commit -m "Initial commit: KGRCET website with Supabase integration"
```

---

## Step 4: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: `KGRCET` (or your preferred name)
3. Description: "Official public website for KG Reddy College of Engineering & Technology"
4. Choose **Public** or **Private**
5. **DO NOT** check "Initialize with README" (we already have one)
6. Click **"Create repository"**

---

## Step 5: Connect Local Repository to GitHub

After creating the repo, GitHub will show you commands. Use these (replace `YOUR_USERNAME` with your actual GitHub username):

```bash
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/KGRCET.git
git push -u origin main
```

**Example:**
If your GitHub username is `sande123`, the commands would be:
```bash
git branch -M main
git remote add origin https://github.com/sande123/KGRCET.git
git push -u origin main
```

---

## Step 6: Enter GitHub Credentials

When you run `git push`, you'll be prompted for:
- **Username**: Your GitHub username
- **Password**: Use a **Personal Access Token** (not your GitHub password)

### How to Create Personal Access Token:

1. Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Click "Generate new token (classic)"
3. Give it a name like "KGRCET Deployment"
4. Select scopes: Check **`repo`** (full control of private repositories)
5. Click "Generate token"
6. **Copy the token immediately** (you won't see it again!)
7. Use this token as your password when pushing

---

## Step 7: Verify Deployment

After successful push:
1. Go to `https://github.com/YOUR_USERNAME/KGRCET`
2. You should see all your files there!

---

## Step 8: Enable GitHub Pages (Optional)

To make your website live:

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **"main"** branch and **"/ (root)"** folder
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/KGRCET`

---

## Important Notes

### About config.js

The `.gitignore` file excludes `assets/js/config.js` (your Supabase keys). 

**For GitHub Pages deployment, you have two options:**

**Option A: Include config.js in repository** (Recommended for public sites)
- The anon key is meant to be public, so this is safe
- Remove `assets/js/config.js` from `.gitignore` temporarily
- Add and commit it:
  ```bash
  git add assets/js/config.js
  git commit -m "Add Supabase config for deployment"
  git push
  ```

**Option B: Use GitHub Secrets** (For private repos or better security)
- Keep config.js in .gitignore
- Use environment variables in your hosting platform
- More complex setup

---

## Quick Command Summary

```bash
# Navigate to project
cd C:\KGRCET

# Initialize git
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: KGRCET website"

# Rename branch to main
git branch -M main

# Connect to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/KGRCET.git

# Push to GitHub
git push -u origin main
```

---

## Troubleshooting

### Error: "fatal: remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/KGRCET.git
```

### Error: "Permission denied"
- Make sure you're using Personal Access Token, not password
- Check your GitHub username is correct

### Error: "fatal: not a git repository"
- Make sure you're in the C:\KGRCET directory
- Run `git init` first

### Want to update files later?
```bash
git add .
git commit -m "Update: description of changes"
git push
```

---

## Next Steps After Deployment

1. **Test GitHub Pages**: Visit your live site URL
2. **Update README**: Add your live site link to README.md
3. **Share**: Share your repository with others!

---

**Need help?** Check GitHub documentation or ask for assistance!

