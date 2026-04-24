# 💸 Expense Tracker (Full-Stack + AWS)

A modern, full-stack expense management application built to explore the integration of **PERN Stack** (PostgreSQL, Express, React, Node.js) with **AWS Cloud Infrastructure**.

## 🚀 The Mission
The goal of this project was to move beyond `localhost` and learn how to architect, deploy, and secure a web application in a professional cloud environment using **Amazon Web Services**.

## 🛠 Tech Stack
- **Frontend:** React.js (Vite), Tailwind CSS, Axios
- **Backend:** Node.js, Express.js
- **Database:** PostgreSQL (with JSONB support for flexible metadata)
- **Cloud (In Progress):** AWS EC2 (Compute), AWS RDS (Managed Database), VPC, Security Groups

## 📂 Project Structure
```text
expense_tracker_aws/
├── frontend/     # React + Vite UI with Tailwind styling
├── backend/      # Node.js API & PostgreSQL connection logic
└── database/     # SQL schema blueprints and seed data
```
## 🏗 Local Setup

1. **Database:** Create a Postgres database named expense_tracker and run the script in database/schema.sql.

2. **Backend:** 
   - cd backend
   - npm install

   - Create a .env file with your DB credentials.

   - npm run dev

3. **Frontend:**
   - cd frontend
   - npm install

   - npm run dev

## ☁️ AWS Deployment Roadmap

- [x] Configure VPC and Security Groups for secure traffic.

- [x] Launch and configure an EC2 instance for the Node.js server.

- [x] Deploy a managed RDS (PostgreSQL) instance.

- [x] Set up Environment Variables in the cloud.

- [x] (Optional) Host React frontend via S3 & CloudFront.