DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id          SERIAL PRIMARY KEY,
    username    VARCHAR(15) UNIQUE NOT NULL,
    email       VARCHAR(55) UNIQUE NOT NULL,
    password    VARCHAR(100) NOT NULL,
    cart        INT[],
    prev_viewed INT[],
    wishlist    INT[]
);

CREATE TABLE games(
    id          SERIAL PRIMARY KEY,
    users_id    VARCHAR(15) REFERENCES users(username),
    title       VARCHAR(50) NOT NULL,
    on_sale     BOOLEAN DEFAULT FALSE,
    category    VARCHAR(25) NOT NULL,
    game_image  TEXT NOT NULL,
    price       MONEY NOT NULL,
    sale_deal   INT ,
    deal_ends   DATE ,
    description TEXT NOT NULL,
    developer   VARCHAR(50) NOT NULL,
    publisher   VARCHAR(50) NOT NULL,
    reviews     TEXT[] NOT NULL,
    images      TEXT[] NOT NULL,
    videos      TEXT[] 
);


