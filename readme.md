
- [x] create routes and services for current existing front(rawg-api) get requests
- [x]  install firebase auth lib,  create mongodb collection for users, create user services and routes/user Schema
- [x] create services/Schema/routes for favorite games
- [ ] create services/Schema/routes for comments
*****
GET   https://games-db-backend.herokuapp.com/api/favorites - will return array of favorite games if user is authenticated
POST  https://games-db-backend.herokuapp.com/api/favorites - update array of favs for current user

GET  https://games-db-backend.herokuapp.com/api/users - will return current user's email adress
POST https://games-db-backend.herokuapp.com/api/users - will create new user in mongoDB, also will create favorites Object for that user;
GET  https://games-db-backend.herokuapp.com/api/users/userbymail - will return object of user data, email is passed through auth middleware.

POST https://games-db-backend.herokuapp.com/api/users/updateuser - update user data, you have to pass valid Object
GET https://games-db-backend.herokuapp.com/api/users/id - will return user by ID

note, data below is provided by RAWG API(all games/platforms/genres/etc)
GET https://games-db-backend.herokuapp.com/platforms - returns object of game platforms (PC,xbox,etc)

GET https://games-db-backend.herokuapp.com/games?page_size=8&ordering=-rating&page=1 - just an example of request