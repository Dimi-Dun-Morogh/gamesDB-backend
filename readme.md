
- [x] create routes and services for current existing front(rawg-api) get requests
- [x]  install firebase auth lib,  create mongodb collection for users, create user services and routes/user Schema
- [x] create services/Schema/routes for favorite games
- [ ] create services/Schema/routes for comments
*****
|      |                       | scheme -  https://whimsical.com/AHz2PETw7WLLPdQBHTTkWF                                              |
|------|-----------------------|-----------------------------------------------------------------------------------------------------|
| GET  | /api/favorites        | will return  array of favorite games if user is authenticated                                       |
| POST | /api/favorites        | update array of favs for current user                                                               |
| GET  | /api/users            | returns current user's email adress                                                                 |
| POST | /api/users            | will create new user in mongoDB, also will create favs object for that user;                        |
| GET  | /api/users/userbymail | will return object of user data, email is passed through auth middleware                            |
| POST | /api/users/updateuser | update user data, you have to pass valid object                                                     |
| GET  | /api/users/id         | will return user by id                                                                              |
|      |                       | note! data below is provided by rawg api (all games/genres/platforms/etc)  /https://rawg.io/apidocs |
| GET  | /platforms            | return object of game platforms (pc, xbox, ps, etc)                                                 |
|      | another example       | /games?page_size=8&ordering=-rating&page=1                                                          |