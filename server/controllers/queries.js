/**
 * QUERIES FOR GAMES
 */

// query to fetch all games
export const allGames = `SELECT * FROM games`;

// query to fetch featured games
export const featuredGames = `SELECT * FROM games WHERE on_sale = TRUE`;

// query to fetch recommended games
export const recommendedGames = `SELECT * FROM games WHERE on_sale = FALSE`;

// query to fetch games by category
export const gameCategory = `SELECT * FROM games WHERE $1 = ANY(category)`;

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

// query to get username from database
export const usernameCheck = `SELECT username FROM users WHERE username = $1`;

// query to get email from database
export const emailCheck = `SELECT email FROM users WHERE email = $1`;

// query to sign user in
export const logIn = `SELECT id, password, username, profile_pic FROM users WHERE username = $1`;

/**
 * QUERIES FOR CART
 */

// query to view cart
export const cart = `
SELECT games.id, games.title, games.pub_date, games.on_sale, games.category, games.tags, games.game_image, games.special_img, games.price, games.sale_deal, games.deal_ends, games.description, games.developer, games.publisher, games.reviews, games.images, games.videos
FROM users 
JOIN games 
ON games.id = ANY(users.cart) 
WHERE users.id = $1`;
// query to add a game to users cart
export const toCart = `UPDATE users SET cart = ARRAY_APPEND(cart, $1 ::int) 
WHERE id = $2 RETURNING username, cart`;

// query to check if game is already in the users cart
export const cartGameCheck = `SELECT username, cart FROM users WHERE id = $1`; // use includes method on the array

// query to remove game from users cart
export const outCart = `UPDATE users SET cart = array_remove(cart, $1 ::int) WHERE id = $2 RETURNING username, cart`;
/**
 * QUERIES FOR WISHLIST
 */

// query to view wishlist items
export const wishlist = `
SELECT games.id, games.title, games.pub_date, games.on_sale, games.category, games.tags, games.game_image, games.special_img, games.price, games.sale_deal, games.deal_ends, games.description, games.developer, games.publisher, games.reviews, games.images, games.videos
FROM users 
JOIN games 
ON games.id = ANY(users.wishlist) 
WHERE users.id = $1`;

// query to add a game to the users wishlist
export const toWishlist = `UPDATE users SET wishlist = ARRAY_APPEND(wishlist, $1 ::int) 
WHERE id = $2 RETURNING username, wishlist`;

// query to check if game is already in the users wishlist
export const wishGameCheck = `SELECT username, wishlist FROM users WHERE id = $1`; // use includes method on the array

// query to remove game from wishlist
export const outWishlist = `UPDATE users SET wishlist = array_remove(wishlist, $1) WHERE id = $2 RETURNING username, wishlist`;
