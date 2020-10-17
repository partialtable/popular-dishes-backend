-- postgreSQL database schema

DROP DATABASE IF EXISTS dishes_service;

CREATE DATABASE dishes_service;

CREATE TABLE IF NOT EXISTS restaurants (
  restaurant_id SERIAL PRIMARY KEY NOT NULL,
  restaurant_name TEXT,
  city text,
  state text,
  zip_code text,
  phone text,
  email text
);

CREATE TABLE IF NOT EXISTS dishes (
  dish_id SERIAL PRIMARY KEY NOT NULL,
  restaurant_id INT NOT NULL REFERENCES restaurants(restaurant_id),
  dish_name TEXT,
  ingredients TEXT,
  picture_url TEXT
);

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL PRIMARY KEY NOT NULL,
  name TEXT,
  avatar_url TEXT,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  email TEXT
);

CREATE TABLE IF NOT EXISTS reviews (
  review_id SERIAL PRIMARY KEY NOT NULL,
  dish_id INT NOT NULL REFERENCES dishes(dish_id),
  user_id INT NOT NULL REFERENCES users(user_id),
  review TEXT,
  dined_on DATE,
  stars FLOAT,
  user_status BOOLEAN
);


-- load schema
-- pg_dump -U root dishes_service > postgres.sql

-- Import a CSV file into a table using COPY statement
COPY restaurants(restaurant_id, restaurant_name, city, state, zip_code, phone, email) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-service/db/postgres/seed/data/restaurants.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-service/db/postgres/seed/data/dishes.csv' DELIMITER ',' CSV HEADER;

COPY users(user_id, name, avatar_url, first_name, last_name, phone, email) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-service/db/postgres/seed/data/users.csv' DELIMITER ',' CSV HEADER;

COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-service/db/postgres/seed/data/reviews.csv' DELIMITER ',' CSV HEADER;
