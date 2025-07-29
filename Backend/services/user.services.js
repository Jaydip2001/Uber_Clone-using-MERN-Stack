const userModel = require("../models/user.model");
const User = require("../models/user.model");

module.exports.createUser = async ({

    firstname, lastname, email, password
}) => {

   if(!firstname || !email || !password) {
        throw new Error("All fields are required");
   }

   const user = userModel.create({
    fullname: {
        firstname,
        lastname
      },
      
    email,
    password,   //correct way to hash password
});
return user;
}
