/**
 * QUERIES FOR GAMES
 */

// query to fetch all games
export const allGames = `SELECT * FROM games`;

// query to fetch a sigle game by id
export const gameId = `SELECT * FROM games WHERE id = $1`;

// query to fetch a single game by title
export const gameTitle = `SELECT * FROM games WHERE title = $1`;

/**
 * QUERIES FOR USERS
 */

// query to fetch all users
export const allUsers = `SELECT username, email, cart, prev_viewed, wishlist FROM users`; // password is excluded

// query to fetch a user my username
export const user = `SELECT username, email, cart, prev_viewed, wishlist FROM users WHERE username = $1`; // password excluded

//query to add user to database
export const postUser = `
INSERT INTO users(username, email, password)
VALUES($1, $2, $3) RETURNING *`;

// query to sign user in
export const logIn = `SELECT password FROM users WHERE username = $1`;

// query to add a game to users cart
export const toCart = `UPDATE users SET cart = ARRAY_APPEND(cart, $1) 
WHERE username = $2 RETURNING username, cart`;

// query to check if game is already in the users cart
export const cartGameCheck = `SELECT username, cart FROM users WHERE username = $1`; // use includes method on the array

// query to remove game from users cart
export const outCart = `UPDATE users SET cart = array_remove(cart, $1) WHERE username = $2 RETURNING username, cart`;

// query to add a game to the users wishlist
export const toWishlist = `UPDATE users SET wishlist = ARRAY_APPEND(wishlist, $1) 
WHERE username = $2 RETURNING username, wishlist`;

// query to check if game is already in the users wishlist
export const wishGameCheck = `SELECT username, cart FROM users WHERE username = $1`; // use includes method on the array

// query to remove game from wishlist
export const outWishlist = `UPDATE users SET wishlist = array_remove(wishlist, $1) WHERE username = $2 RETURNING username, wishlist`;
