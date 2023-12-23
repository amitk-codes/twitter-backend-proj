const { followUserRoute } = require("./connection");
const { feedRoutes } = require("./feed");
const { postMessageRoute } = require("./message");
const { userRoutes } = require("./user");

module.exports.IndexRoutes = [
  {path: "/user", router: userRoutes},
  {path: "/follow-user", router: followUserRoute},
  {path: "/post-message", router: postMessageRoute},
  {path: "/get-my-feed", router: feedRoutes},
]
