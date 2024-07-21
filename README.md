# Simple user manegment using node js
 

This is a simple Node.js application using Express to manage a list of users stored in a JSON file. The application provides RESTful endpoints to get, create, update, and delete users.

## Features

- List all users
- Get user details by ID
- Create a new user
- Update user details by ID
- Delete a user by ID

## Prerequisites

- Node.js (version 16 or higher)
- npm (Node Package Manager)
- Docker (optional, for containerized deployment)

## Installation



1. Install the dependencies:

```bash
npm install
```


## Usage

1. Start the application:

```bash
npm start
```

2. The application will be available at `http://localhost:8000`.

## API Endpoints

- **GET** `/users`: Returns a list of user first names in HTML format.
- **GET** `/api/users`: Returns a list of all users in JSON format.
- **GET** `/api/users/:id`: Returns the details of a specific user by ID.
- **POST** `/api/users`: Creates a new user.
- **PATCH** `/api/users/:id`: Updates the details of a specific user by ID.
- **DELETE** `/api/users/:id`: Deletes a specific user by ID.

## Docker

To run the application in a Docker container, follow these steps:

1. Build the Docker image:

```bash
docker build -t App-name .
```

2. Run the Docker container:

```bash
docker run -p 8000:8000 App-name
```

The application will be available at `http://localhost:8000`.
