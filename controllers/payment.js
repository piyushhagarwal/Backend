var Insta = require("instamojo-nodejs");

const payment = async (req, res) => {
  Insta.setKeys(API_KEY, AUTH_KEY);
};
