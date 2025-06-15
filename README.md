
  

# 🪣 GitBucket — Use GitHub as an Image Storage Bucket
GitBucket is a simple Express.js server that allows you to upload images to a GitHub repository using GitHub’s REST API. It validates file type and size, uploads the image, and returns a public URL (if the repo is public) or keeps it private.

## 🚀 Features

1.🖼️ Upload image files to a GitHub repo via API
2.✅ Validates image file type and max size (5MB)
3.🔒 Works with private or public repositories
4.🔗 Returns raw GitHub URL to the uploaded image
5.📁 Images are stored in a structured uploads/ folder


## 🛠️ Getting Started
# 1. Clone the Repo

```bash
git clone https://github.com/your-username/gitbucket.git
cd gitbucket
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Setup Environment Variables
Create a .env file in the root of the project:

```bash
GITHUB_USERNAME=your-github-username
REPO_NAME=your-repo-name
GITHUB_TOKEN=your-access-token
BRANCH=main
```

## 🔐 How to Create a GitHub Personal Access Token
To allow the server to upload images to your repo, you need to create a Personal Access Token on GitHub with the proper permissions.

### ✅ Steps:

1.Go to Settings → Developer Settings → Personal Access TokensURL: https://github.com/settings/tokens

2.Click "Generate new token" (choose "Personal Access Token" preferred)


Copy the token and paste it into your .env



3.📤 Uploading an Image
Send a POST request to:
http://localhost:3000/upload


Example with curl:

```bash
curl -X POST http://localhost:3000/upload \
  -F "image=@./example.jpg"
```

✅ Successful Response:

```bash
{
  "message": "Image uploaded successfully",
  "url": "https://raw.githubusercontent.com/your-username/your-repo/main/uploads/1689000000000-example.jpg"
}
```


4.📁 See Uploaded Images in GitHub
After uploading, you can view images directly in your repo:
https://github.com/your-username/your-repo/tree/main/uploads




## 🧰 Tech Stack

1.Node.js
2.Express.js
3.Multer (for file uploads)
4.Axios (for GitHub API calls)


## 📝 License
MIT License. Use at your own discretion. Not affiliated with GitHub Inc.

## 🤝 Contributing
Pull requests and stars welcome! For major changes, please open an issue first to discuss.
