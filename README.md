# Loan Application System

Welcome to the Loan Application System repository. This repository contains both the backend and frontend components of our loan application system. The backend is built using Node.js with Express.js and MongoDB for data storage, while the frontend is developed using React.js.

## Backend Microservices

Our backend architecture is divided into three microservices, each with its specific responsibilities:

### 1. Loan Application Service
- This microservice is responsible for handling user application data and various business logics.

### 2. Accounting Provider Service
- A third-party service APIs to obtain balance sheets and a list of accounting providers.

### 3. Decision Engine Service
- A third-party service API to obtain the final decision on loan applications.

## Getting Started

To run the project locally, ensure that you have Docker installed on your machine. 

Follow these steps to get the Loan Application System up and running on your local environment:

1. Clone the project repository to your local machine:

2. Navigate to the project's root directory:

   ```bash
   cd loan-application-system
   ```

3. Start the application using Docker Compose:

   ```bash
   docker-compose up
   ```

4. Once the containers are up and running, you can access the application in your web browser at [http://localhost:3003](http://localhost:3003).


Thank you for using the Loan Application System! If you have any questions or need further assistance, please don't hesitate to reach out to us.