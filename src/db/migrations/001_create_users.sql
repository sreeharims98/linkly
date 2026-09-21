CREATE TABLE users (
    id              SERIAL PRIMARY KEY,
    username        VARCHAR(30) NOT NULL UNIQUE,
    email           VARCHAR(255) NOT NULL UNIQUE,
    password_hash   TEXT,
    created_at      TIMESTAMPTZ NOT NULL DEFAULT now()
)