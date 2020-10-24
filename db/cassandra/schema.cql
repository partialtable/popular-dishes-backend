-- cassandra schema
-- cassandra doesn't have join/ groupby etc
-- cassandra - Primary key(partition key, clustering key-orderby)

DROP KEYSPACE IF EXISTS dishes_service;
CREATE KEYSPACE dishes_service WITH REPLICATION = {'class': 'SimpleStrategy', 'replication_factor' : 1 };

USE dishes_service;

-- Query1: show all popular dishes of each restaurant (one to many)
CREATE TABLE dishes_by_restaurant (
  restaurant_id int,
  dish_id int,
  restaurant_name text,
  dish_name text,
  ingredients text,
  picture_url text,
  PRIMARY KEY (restaurant_id, dish_id)
);

-- Query2: show all reviwes of each popular dish (one to many)
CREATE TABLE reviews_by_dish (
  dish_id int,
  review_id int,
  user_id int,
  review varchar,
  dined_on date,
  stars decimal,
  user_status boolean,
  PRIMARY KEY (dish_id, review_id)
);
-- WITH CLUSTERING ORDER BY (dined_on DESC);
  -- PRIMARY KEY (dish_id, dined_on)

-- select count(*) from reviews_by_dish where dish_id=1

COPY dishes_by_restaurant (restaurant_id, dish_id, restaurant_name, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/cassandra/seed/data/dishes1.csv' WITH HEADER=true AND DELIMITER=',';

COPY dishes_by_restaurant (restaurant_id, dish_id, restaurant_name, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/cassandra/seed/data/dishes2.csv' WITH HEADER=true AND DELIMITER=',';

COPY dishes_by_restaurant (restaurant_id, dish_id, restaurant_name, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/cassandra/seed/data/dishes3.csv' WITH HEADER=true AND DELIMITER=',';

COPY dishes_by_restaurant (restaurant_id, dish_id, restaurant_name, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/cassandra/seed/data/dishes4.csv' WITH HEADER=true AND DELIMITER=',';

COPY dishes_by_restaurant (restaurant_id, dish_id, restaurant_name, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/cassandra/seed/data/dishes5.csv' WITH HEADER=true AND DELIMITER=',';

COPY dishes_by_restaurant (restaurant_id, dish_id, restaurant_name, dish_name, ingredients, picture_url) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/cassandra/seed/data/dishes6.csv' WITH HEADER=true AND DELIMITER=',';

COPY reviews_by_dish (dish_id, review_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/cassandra/seed/data/reviews1.csv' WITH HEADER=true AND DELIMITER=',';

COPY reviews_by_dish (dish_id, review_id, user_id, review, dined_on, stars, user_status) FROM '/Users/jinyeongpark/Documents/0_HRSF130_Aug/W8-10_SDC/popular-dishes-backend/db/cassandra/seed/data/reviews2.csv' WITH HEADER=true AND DELIMITER=',';


