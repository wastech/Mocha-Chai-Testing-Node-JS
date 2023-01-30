const expect = require("chai").expect;
const { before } = require("mocha");
const axios = require("axios");

let chai = require("chai");
let should = chai.should();

const { API_URL } = require("./test_utils");

describe("Create New User", function () {
  it("User Correctly Created", async () => {
    const payload = {
      name: "admin",
      email: "admin@gmail.com",
      age: 21,
    };

    const response = await axios.post(API_URL + "/postuserinfo", payload);

    expect(response.status).to.be.equal(201);
    expect(response.data).to.be.an("object");
  });

  it("User Correctly Created Without Adding User Name", async () => {
    try {
      const payload = {
        email: "admin@gmail.com",
        age: 21,
      };

      const response = await axios.post(API_URL + "/postuserinfo", payload);

      expect(response.status).not.to.be.equal(201);
      expect(response.data).to.be.an("object");

    } catch (error) {
      if (error.response) {
        expect(error.response.status).not.to.be.equal(201);
      } else {
        throw error;
      }
    }
  });

  it("User Correctly Created Without Adding User E-mail", async () => {
    try {
      const payload = {
        name: "admin",
        age: 21,
      };

      const response = await axios.post(API_URL + "/postuserinfo", payload);

      expect(response.status).not.to.be.equal(201);
      expect(response.data).to.be.an("object");

    } catch (error) {
      if (error.response) {
        expect(error.response.status).not.to.be.equal(201);
      } else {
        throw error;
      }
    }
  });


  it("User Correctly Created Without Adding User Age", async () => {
    try {
      const payload = {
        name: "admin",
        email: "admin@gmail.com",
      };

      const response = await axios.post(API_URL + "/postuserinfo", payload);

      expect(response.status).not.to.be.equal(201);
      expect(response.data).to.be.an("object");

    } catch (error) {
      if (error.response) {
        expect(error.response.status).not.to.be.equal(201);
      } else {
        throw error;
      }
    }
  });



});