-- postgreSQL database schema

DROP DATABASE IF EXISTS dishes_service2;

CREATE DATABASE dishes_service2;

\c dishes_service2;

CREATE TABLE restaurants (
  restaurant_id SERIAL PRIMARY KEY,
  restaurant_name TEXT,
  city text,
  state text,
  zip_code text,
  phone text,
  email text
);

CREATE TABLE dishes (
  dish_id SERIAL PRIMARY KEY,
  restaurant_id INT,
  dish_name TEXT,
  ingredients TEXT,
  picture_url TEXT
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  -- user_id INT PRIMARY KEY,
  name TEXT,
  avatar_url TEXT,
  first_name TEXT,
  last_name TEXT,
  phone TEXT,
  email TEXT
);

CREATE TABLE reviews (
  review_id SERIAL PRIMARY KEY,
  dish_id INT NOT NULL,
  user_id INT NOT NULL,
  review TEXT,
  dined_on DATE,
  stars FLOAT,
  user_status BOOLEAN
);


-- load schema
-- psql postgres -U jinyeongpark < db/postgres/postgres.sql

-- Import a CSV file into a table using COPY statement
COPY restaurants(restaurant_id, restaurant_name, city, state, zip_code, phone, email) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/restaurants1.csv' DELIMITER ',' CSV HEADER;

COPY restaurants(restaurant_id, restaurant_name, city, state, zip_code, phone, email) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/restaurants2.csv' DELIMITER ',' CSV HEADER;

COPY restaurants(restaurant_id, restaurant_name, city, state, zip_code, phone, email) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/restaurants3.csv' DELIMITER ',' CSV HEADER;

COPY restaurants(restaurant_id, restaurant_name, city, state, zip_code, phone, email) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/restaurants4.csv' DELIMITER ',' CSV HEADER;



COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes1.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes2.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes3.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes4.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes5.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes6.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes7.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes8.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes9.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes10.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes11.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes12.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes13.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes14.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes15.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes16.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes17.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes18.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes19.csv' DELIMITER ',' CSV HEADER;

COPY dishes(dish_id, restaurant_id, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes20.csv' DELIMITER ',' CSV HEADER;




COPY users(user_id, name, avatar_url, first_name, last_name, phone, email) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/users1.csv' DELIMITER ',' CSV HEADER;


COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews1.csv' DELIMITER ',' CSV HEADER;

-- COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews2.csv' DELIMITER ',' CSV HEADER;

-- COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews3.csv' DELIMITER ',' CSV HEADER;

-- COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews4.csv' DELIMITER ',' CSV HEADER;

-- COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews5.csv' DELIMITER ',' CSV HEADER;

-- COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews6.csv' DELIMITER ',' CSV HEADER;

-- COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews7.csv' DELIMITER ',' CSV HEADER;

-- COPY reviews(review_id, dish_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews8.csv' DELIMITER ',' CSV HEADER;