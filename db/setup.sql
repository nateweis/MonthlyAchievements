DROP DATABASE IF EXISTS ma_app;
CREATE DATABASE ma_app;
\c ma_app;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    pg INT,
    priority INT,
    count INT,
    current_progress INT,
    max_progress INT,
    measurement VARCHAR(36),
    type VARCHAR(36),
    status VARCHAR(36),
    date_created DATE,
    date_updated DATE,
    user_id INT
);

CREATE TABLE totals(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    total_type VARCHAR(36),
    user_id INT,
    total INT,
    due_date DATE,
    date_created DATE DEFAULT now(),
    date_updated DATE DEFAULT now()
);

INSERT INTO totals(title, total_type, user_id, total, due_date) VALUES ('Naftali Weiss Task Total', 'All', 1, 0, now());
