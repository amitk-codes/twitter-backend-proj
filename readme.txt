Twitter Backend
This is the backend code for a simple Twitter-like application. It is built using Node.js and Express, with MongoDB as the database. The application provides various routes for user registration, login, posting messages, following users, and fetching a user's feed.

------- Prerequisites ------
Before running the code, ensure that you have the following dependencies installed:
1. Node.js
2. MongoDB

------ Installation --------
1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install the required dependencies by running the following command:
  npm install

------- Configuration ---------
For convenience, I have provided the .env file

----- Usage -----
1. To start the server, run the following command:
  npm start

------------------ API Endpoints ---------------------
The following API endpoints are available:

1. Welcome Route
  Path: '/'
  Method: GET
  Description: Welcome route to check if the server is running.
  Authentication: Not required
  Request Body: Not required

  
2. User Routes
  2.1 Signup route: 
    Path: '/user/signup'
    Method: POST
    Description: used for registering new user
    Authentication: Not required
    Request Body: 
      {
        "name": "Your Name",
        "email": "your.email@example.com",
        "password": "your_password"
      }

  2.2 Login route: 
    Path: '/user/login'
    Method: POST
    Description: used to login users
    Authentication: Not required
    Request Body: 
      {
        "email": "your.email@example.com",
        "password": "your_password"
      }


3. Follow User
  Path: /follow-user
  Method: POST,
  Description: Route for a user to follow another user.
  Authentication: Required
  Request Body: 
    {
      "followedTo": "user_id_to_follow"
    }

4. Post Message
  Path: /post-message
  Method: POST
  Description: Route for a user to post a message.
  Authentication: Required
  Request Body:
    {
      "content": "Your message content"
    }

5. Get My Feed
  Path: /get-my-feed
  Method: GET
  Description: Route to fetch a user's feed.
  Authentication: Required
  Request Body: Not required


------------ Dependencies --------------

1. bcrypt: Password hashing library.
2. dotenv: Loads environment variables from a .env file.
3. express: Web framework for Node.js.
4. express-async-errors: Express error handling for async functions.
5. joi: Schema validation library.
6. jsonwebtoken: JSON Web Token (JWT) creation and verification.
7. lodash: Utility library.
8. mongoose: MongoDB object modeling for Node.js.

