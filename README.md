# Blog App (Backend)

A simple REST API for a blog-style app (posts, comments, likes) built with **Node.js**, **Express**, and **MongoDB (Mongoose)**.

## Tech Stack

- Node.js (CommonJS)
- Express
- MongoDB + Mongoose
- dotenv
- nodemon

## Project Structure

- `server.js` — Express app entrypoint
- `Routes/blog.js` — API routes
- `controllers/` — route handlers
- `models/` — Mongoose models
- `config/database.js` — MongoDB connection

## Getting Started

### 1) Install dependencies

```bash
npm install
```

### 2) Configure environment variables

Create a `.env` file in the project root (it is **ignored by git**):

```env
PORT=3000
DATABASE_URL=mongodb://127.0.0.1:27017/blog_app
```

- `PORT` is optional (defaults to `3000`)
- `DATABASE_URL` is required

### 3) Run the server

```bash
npm start
```

Server starts on `http://localhost:3000` by default.

## API

Base path: `/api/v1`

### Create Post

- **POST** `/api/v1/posts/create`

Example JSON body:

```json
{
  "title": "My first post",
  "body": "Hello world"
}
```

### Create Comment

- **POST** `/api/v1/comments/create`

Example JSON body (fields depend on your controller/model):

```json
{
  "post": "<postId>",
  "user": "Raghav",
  "body": "Nice post!"
}
```

### Like / Unlike Post

- **POST** `/api/v1/likes/like`
- **POST** `/api/v1/likes/unlike`

Example JSON body:

```json
{
  "post": "<postId>",
  "user": "<userIdOrName>"
}
```

## Notes

- If you run into “cannot find module …Controller” errors on Linux/CI, it may be due to filename casing differences between imports and files.
