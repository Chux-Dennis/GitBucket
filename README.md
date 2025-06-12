<p align="center">
  <img src="./assets/gitbucket-logo.png" alt="GitBucket Logo" width="200"/>
</p>

# 🪣 GitBucket — Use GitHub as an Image Storage Bucket

**GitBucket** is a simple Express.js server that allows you to upload images to a GitHub repository using GitHub’s REST API. It validates file type and size, uploads the image, and returns a public URL (if the repo is public) or keeps it private.

---

## 🚀 Features

- 🖼️ Upload image files to a GitHub repo via API
- ✅ Validates image file type and max size (5MB)
- 🔒 Works with private or public repositories
- 🔗 Returns raw GitHub URL to the uploaded image
- 📁 Images are stored in a structured `uploads/` folder

---

## 🛠️ Getting Started

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/gitbucket.git
cd gitbucket
