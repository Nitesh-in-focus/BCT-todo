# BCT Todo App

A web application with signup/login along with todo functionality, built during BCT training using the MEAN stack.

---

## Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Getting Started](#getting-started)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [License](#license)
- [Contact](#contact)

---

## Features

- User authentication: Sign up and log in
- Full CRUD: Create, Read, Update, Delete todos
- Responsive and user-friendly UI (Angular)
- RESTful backend API (Node.js + Express)
- Easy setup and configuration

---

## Technology Stack

- **Frontend:** Angular, HTML, CSS (Tailwind CSS)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Other:** Chart.js

---

## Getting Started

### Prerequisites

- Node.js and npm installed
- Angular CLI installed (`npm install -g @angular/cli`)
- MongoDB instance (local or remote)

### Installation

```bash
# Clone the repository
git clone https://github.com/Nitesh-in-focus/BCT-todo.git
cd BCT-todo

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
 ```


## Environment Setup

Create a `.env` file in your backend directory with the following content:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

## Running the App

```bash
# Start the backend server
cd backend
npm start

# Start the frontend server
cd ../frontend
ng serve
```

Visit http://localhost:4200 in your browser.

You can copy and paste this directly into your README.md file!

## API Endpoints

| Method | Endpoint           | Description             |
|--------|--------------------|-------------------------|
| GET    | /api/todos         | Fetch all todos         |
| POST   | /api/todos         | Create a new todo       |
| PUT    | /api/todos/:id     | Update a specific todo  |
| DELETE | /api/todos/:id     | Delete a specific todo  |

---

## Screenshots

_Add screenshots of your app UI here. For example:_

![Login Page](screenshots/login-page.png)
![Todos Dashboard](screenshots/todos-dashboard.png)

---

## License

MIT License

Copyright (c) 2025 Nitesh-in-focus

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
---

## Contact

Created by [Nitesh-in-focus](https://github.com/Nitesh-in-focus)
