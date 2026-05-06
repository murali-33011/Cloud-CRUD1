# Cloud-CRUD1 — Task Manager on AWS

Node.js REST API backend for task management, deployed on AWS EC2 with S3 storage and CloudFront CDN for content delivery.

---

## What it does

Full CRUD task manager — create, read, update, delete tasks through a REST API. The backend runs on an EC2 instance, static assets are served via CloudFront CDN backed by S3.

---

## Architecture

```
Client → CloudFront CDN → S3 (static assets)
                       → EC2 (Node.js API)
                              → data.json (persistence)
```

---

## API Endpoints

| Method | Route | Description |
|---|---|---|
| GET | `/tasks` | Fetch all tasks |
| POST | `/tasks` | Create a new task |
| PUT | `/tasks/:id` | Update a task |
| DELETE | `/tasks/:id` | Delete a task |

---

## Stack

![Node.js](https://img.shields.io/badge/Node.js-6DA55F?style=flat&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat&logo=javascript&logoColor=%23F7DF1E)
![AWS](https://img.shields.io/badge/AWS_EC2-232F3E?style=flat&logo=amazon-aws&logoColor=white)
![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=flat&logo=amazon-s3&logoColor=white)
![CloudFront](https://img.shields.io/badge/CloudFront-8C4FFF?style=flat&logo=amazon-aws&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-404d59?style=flat&logo=express&logoColor=white)

---

## Setup

```bash
git clone https://github.com/murali-33011/Cloud-CRUD1
cd Cloud-CRUD1
npm install
node server.js
```

Server runs on `http://localhost:3000` by default.

---

## Author

[Muralikrishnan N](https://github.com/murali-33011)
