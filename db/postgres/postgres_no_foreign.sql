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

COPY restaurants FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/restaurants1.csv' CSV HEADER;

COPY restaurants FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/restaurants2.csv' CSV HEADER;

COPY restaurants FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/restaurants3.csv' CSV HEADER;

COPY restaurants FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/restaurants4.csv' CSV HEADER;



COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes1.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes2.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes3.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes4.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes5.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes6.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes7.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes8.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes9.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes10.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes11.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes12.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes13.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes14.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes15.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes16.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes17.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes18.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes19.csv' CSV HEADER;

COPY dishes FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/dishes20.csv' CSV HEADER;




COPY users FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/users1.csv' CSV HEADER;


COPY reviews FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/postgres/seed/data/reviews1.csv' CSV HEADER;

