# Node.js Quiz Application

This is a simple quiz application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The application tests users' knowledge on Node.js concepts through a set of multiple-choice questions.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Prerequisites

Before running this application, ensure you have the following installed on your local machine:

- Node.js: [Download and install Node.js](https://nodejs.org/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Soura700/Quiz.git

```

2. Install dependencies for both the server and client:

```bash
cd backend && npm install
cd frontend && npm install
```

4. Set up environment variables:

   - Create a `.env` file in the `server` directory.
   - Define the following environment variables in the `.env` file:

     ```plaintext
     PORT=8080
     MONGODB_URI=mongodb://localhost:27017/nodejs-quiz (Example)
     ```

## Usage

1. Start the MongoDB server:

```bash
mongod
```

2. Start the Node.js server:

```bash
cd backend && nodemon server.js 
```

3. Start the React.js client:

```bash
cd frontend && npm start
```

4. Open your web browser and navigate to `http://localhost:3000` to access the quiz application.
