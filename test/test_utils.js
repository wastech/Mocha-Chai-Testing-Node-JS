const axios = require("axios");
const API_URL = "http://localhost:5000/api/";

const createUser = async () => {
  const payload = {
    name: "admin",
    email: "admin@gmail.com",
    age: 25,
  };

  const response = await axios.post(API_URL + "/postuserinfo", payload);

  return response.data;
};



module.exports = {
  API_URL,
  createUser,
};