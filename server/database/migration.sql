DROP TABLE IF EXISTS games;
DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id          SERIAL PRIMARY KEY,
    username    VARCHAR(15) UNIQUE NOT NULL,
    email       VARCHAR(55) UNIQUE NOT NULL,
    password    VARCHAR(100) NOT NULL,
    profile_pic TEXT DEFAULT 'https://avatars.akamai.steamstatic.com/edaa20340d62693f770abe27f02efffd58013d6a.jpg',
    cart        INT[],
    purchased   INT[],
    prev_viewed INT[],
    wishlist    INT[]
);

CREATE TABLE games(
    id          SERIAL PRIMARY KEY,
    users_id    VARCHAR(15) REFERENCES users(username),
    title       VARCHAR(50) NOT NULL,
    pub_date    TEXT NOT NULL,
    on_sale     BOOLEAN DEFAULT FALSE,
    category    TEXT[] NOT NULL,
    tags        TEXT[] NOT NULL,
    game_image  TEXT NOT NULL,
    special_img TEXT,
    price       FLOAT(2) NOT NULL,
    sale_deal   INT ,
    deal_ends   DATE ,
    description TEXT NOT NULL,
    developer   VARCHAR(50) NOT NULL,
    publisher   VARCHAR(50) NOT NULL,
    reviews     TEXT[] NOT NULL,
    images      TEXT[] NOT NULL,
    videos      TEXT[] 
);


