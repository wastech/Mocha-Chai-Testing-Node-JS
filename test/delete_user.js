const expect = require("chai").expect;
const { before } = require("mocha");
let chai = require("chai");
let should = chai.should();
const axios = require("axios");

const { API_URL, createUser } = require("./test_utils");

let newuser = undefined;


before(async () => {
  newuser = await createUser();
});


describe("Delete User From Database",function(){


   it("Delete Single User", async()=>{

    const response = await axios.delete(API_URL + "/deleteuser/" + newuser._id);
    expect(response.status).to.be.equal(200);
    expect(response.data).to.be.an("object");
   });


});
