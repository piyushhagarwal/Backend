const jwt = require("jsonwebtoken");

const fetchUser = async (req, res, next) => {
  try {
    const token = req.header("auth-token");
    if (!token) {
      res
        .status(401)
        .send({ error: "Please authenticate using a valid token" });
    }
    const data = await jwt.verify(token, "jwtSecret");
    req.user = { userId: data.userId, name: data.name };
    next();
  } catch (error) {
    res.status(401).send({ error: "Internal server error" });
  }
};

module.exports = fetchUser;
