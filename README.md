# Payzy Test Frontend

This is the frontend application for Payzy, a fintech company. It is built using Next.js, a React framework for building server-side rendered and static web applications. This readme provides instructions on how to set up and run the frontend application.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [1. Development Server](#1-development-server)
  - [2. Production Build](#2-production-build)
  - [3. Production Server](#3-production-server)
  - [4. Docker Build](#4-docker-build)
  - [5. Docker Run](#5-docker-run)

## Prerequisites
Before setting up the frontend application, ensure you have the following dependencies installed:
- Node.js (version 16 or above)
- Docker (optional, for running the application in a containerized environment)

## Getting Started
Follow the instructions below to set up and run the Payzy Test Frontend application.

### 1. Development Server
1. Open a terminal and navigate to the project directory.
2. Run the following command to install the required dependencies:
   ```
   npm install
   ```
3. Start the development server by running the command:
   ```
   npm run start
   ```
   The frontend application will be up and running on `http://localhost:3000` by default.

### 2. Production Build
1. Open a terminal and navigate to the project directory.
2. Run the following command to install the required dependencies:
   ```
   npm install
   ```
3. Build the production-ready assets by running the command:
   ```
   npm run build
   ```
   This will generate optimized and minified files for deployment.

### 3. Production Server
1. After successfully building the production assets, you can start the production server.
2. Run the following command:
   ```
   npm run start
   ```
   The frontend application will be up and running on `http://localhost:3000`.

### 4. Docker Build
1. Ensure you have Docker installed and running on your system.
2. Open a terminal and navigate to the project directory.
3. Run the following command to build the Docker image:
   ```
   docker build -t payzy-test-frontend .
   ```
   This will build a Docker image named `payzy-test-frontend` using the provided Dockerfile.

### 5. Docker Run
1. After successfully building the Docker image, you can run the frontend application inside a Docker container.
2. Use the following command to start a container:
   ```
   docker run --name payzy-test-frontend-container -p 3000:3000 -d payzy-test-frontend
   ```
   This command creates a Docker container named `payzy-test-frontend-container` from the `payzy-test-frontend` image and maps port 3000 of the container to port 3000 of the host machine.

Congratulations! You have successfully set up and run the Payzy Test Frontend application. The frontend is now ready to communicate with the backend service.

For any questions or issues, please contact Thruka Ruwna at tharukaruwan@outlook.com.