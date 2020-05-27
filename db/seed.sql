create table product (
  product_id serial primary key,
  name varchar(50), 
  description varchar(100),
  price integer,
  image_url text
);