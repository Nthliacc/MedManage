CREATE DATABASE medication_database;
-- Conecta ao banco de dados
\c medication_database;

CREATE TABLE Account (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    is_admin BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    last_login TIMESTAMP
);

CREATE TABLE Medication (
    id SERIAL PRIMARY KEY,
    price DECIMAL(10,2),
    name VARCHAR(255) NOT NULL,
    expiration_date DATE NOT NULL,
    image BYTEA,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by VARCHAR(255) NOT NULL,
    updated_at TIMESTAMP,
    updated_by VARCHAR(255)
);

GRANT ALL PRIVILEGES ON TABLE Medication TO postgres;
GRANT ALL PRIVILEGES ON TABLE Account TO postgres;

-- Conecta novamente ao banco de dados
\c medication_database;

-- Create the admin user
INSERT INTO Account (username, password, email, created_at, is_admin) 
VALUES ('admin', 'password123', 'admin@example.com', NOW(), TRUE);

-- Create the collaborator user
INSERT INTO Account (username, password, email, created_at, is_admin) 
VALUES ('collaborator', 'password456', 'collaborator@example.com', NOW(), FALSE);

-- Insert medication data
INSERT INTO Medication (name, expiration_date, image, created_by, created_at, updated_by, updated_at) 
VALUES ('Aspirina', '2023-06-30', NULL, 'user1', '2022-05-05', 'user2', '2022-05-05'),
       ('Tylenol', '2024-01-31', NULL, 'user2', '2022-05-05', 'user3', '2022-05-05'),
       ('Nimesulida', '2023-08-15', NULL, 'user3', NOW(), 'user4', NOW()),
       ('Dipirona', '2024-03-01', NULL, 'user1', NOW(), 'user2', NOW()),
       ('Omeprazol', '2023-10-31', NULL, 'user4', NOW(), 'user3', NOW()),
       ('Rivotril', '2024-05-31', NULL, 'user1', NOW(), 'user2', NOW()),
       ('Metformina', '2023-12-31', NULL, 'user3', NOW(), 'user4', NOW()),
       ('Losartana', '2024-02-29', NULL, 'user2', NOW(), 'user3', NOW()),
       ('Fluoxetina', '2023-09-30', NULL, 'user4', NOW(), 'user1', NOW()),
       ('Clonazepam', '2024-04-30', NULL, 'user2', NOW(), 'user1', NOW());