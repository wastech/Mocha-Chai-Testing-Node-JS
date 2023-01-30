const expect = require("chai").expect;
const { before } = require("mocha");
const axios = require("axios");

let chai = require("chai");
let should = chai.should();

const { API_URL, createUser } = require("./test_utils");

let newuser = undefined;

before(async () => {
  newuser = await createUser();
});

describe("Update User Information", function () {
  it("Update Single User All The Information Together", async () => {
    const payload = {
      name: "Jon Doe to new user Becham",
      email: "doe@gmail.com",
      age: 21,
    };

    const response = await axios.put(
      API_URL + "/updateuser/" + newuser._id,
      payload
    );

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

  it("Update Single User Name", async () => {
    const payload = {
      name: "Jon Doe to new user Michle",
    };

    const response = await axios.put(
      API_URL + "/updateuser/" + newuser._id,
      payload
    );

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

  it("Update Single User E-mail", async () => {
    const payload = {
      email: "jondoe@gmail.com",
    };

    const response = await axios.put(
      API_URL + "/updateuser/" + newuser._id,
      payload
    );

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

  it("Update Single User Age", async () => {
    const payload = {
      age: 29,
    };

    const response = await axios.put(
      API_URL + "/updateuser/" + newuser._id,
      payload
    );

    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
  });

  it("Update Single User With Wrong User ID", async () => {
    try {
      const payload = {
        name: "Jon Doe to new user Jesica",
        email: "doe@gmail.com",
        age: 21,
      };

      const response = await axios.put(
        API_URL + "/updateuser/" + 8989899,
        payload
      );

      expect(response.status).not.to.be.equal(200);
      expect(response.data).to.be.an("object");
    } catch (error) {
      if (error.response) {
        expect(error.response.status).not.to.be.equal(200);
      } else {
        throw error;
      }
    }
  });

  it("Update Single User Information With New E-mail", async () => {
    const payload = {
      email: "d@gmail.com",
    };

    const response = await axios.put(
      API_URL + "/updateuser/" + newuser._id,
      payload
    );

    expect(response.status).to.be.equal(200);

    expect(response.data.email).not.to.be.equal("d@gmail.com");

    expect(response.data).to.be.an("object");
  });

  it("Update Single User Information With New Age", async () => {
    const payload = {
      age: 29,
    };

    const response = await axios.put(
      API_URL + "/updateuser/" + newuser._id,
      payload
    );

    expect(response.status).to.be.equal(200);

    expect(response.data.age).not.to.be.equal(28);

    expect(response.data).to.be.an("object");
  });
});