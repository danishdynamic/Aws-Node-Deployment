-- database/schema.sql

-- Run this in your local Postgres terminal (psql) or create a databse first in PGadmin and then run this schema.sql file to set up the database and table for your expense tracker application.
CREATE DATABASE expense_tracker;

-- Table for your expenses
CREATE TABLE expenses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    amount DECIMAL(10, 2) NOT NULL,
    category VARCHAR(50),
    date_added TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- We can add JsonB later as we wanna add details column in text as it turns into binary file which is faster than Json in postgres.

-- Initial "Seed" data for testing
INSERT INTO expenses (title, amount, category) VALUES ('Initial Test', 0.00, 'Test');