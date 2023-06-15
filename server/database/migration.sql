DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id          SERIAL PRIMARY KEY,
    username    VARCHAR(15) UNIQUE NOT NULL,
    email       VARCHAR(55) UNIQUE NOT NULL,
    password    VARCHAR(25) NOT NULL,
    cart        TEXT[],
    prev_viewed TEXT[],
    wishlist    TEXT[]
);

CREATE TABLE games(
    id          SERIAL PRIMARY KEY,
    users_id    VARCHAR(15) REFERENCES users(username),
    title       VARCHAR(50) NOT NULL,
    game_image  TEXT NOT NULL,
    price       MONEY NOT NULL,
    description TEXT NOT NULL,
    developer   VARCHAR(50) NOT NULL,
    publisher   VARCHAR(50) NOT NULL,
    reviews     TEXT[] NOT NULL,
    images      TEXT[] NOT NULL,
    videos      TEXT[] 
);