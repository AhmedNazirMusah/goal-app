# Goal App

A full-stack goal management application built using the MERN stack (MongoDB, Express, React, Node.js). This app allows users to create, update, and delete personal goals.

## Table of Contents

- [Features](#features)
- [API Endpoints](#api-endpoints)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Live App](#live-app)

## Features

- User authentication (Register/Login)
- Create, read, update, and delete goals
- User-specific goals

## API Endpoints
## Authentication
POST /api/users/register: Register a new user
POST /api/users/login: Authenticate a user and get a token

## Goals
GET /api/goals: Get all goals for the logged-in user
POST /api/goals: Create a new goal
PUT /api/goals/:id: Update a goal
DELETE /api/goals/:id: Delete a goal

## Technologies Used
MongoDB
Express.js
React.js
Node.js

## Contributing
Contributions are welcome! Please open an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

Live App
Check out the live application [here](https://goal-app-1.onrender.com/).
