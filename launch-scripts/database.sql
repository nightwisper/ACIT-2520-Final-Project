-- database.sql
--
-- This file sets up development database on your PostgreSQL server.
--
-- @Author: Lucas Silva

CREATE DATABASE auctionsim;

\c auctionsim

CREATE TABLE users (
  user_id  SERIAL PRIMARY KEY,
  email    VARCHAR(50),
  password VARCHAR(60),
  profile  VARCHAR(500)
);

CREATE TABLE listings (
  listing_id   SERIAL PRIMARY KEY,
  user_id      INTEGER NOT NULL,
  listed_price MONEY,
  min_increase MONEY,
  description  VARCHAR(500)
);

ALTER TABLE listings ADD CONSTRAINT fk_users FOREIGN KEY (user_id) REFERENCES users(user_id);
