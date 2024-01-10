import mongoose from "mongoose"
import validator from "validator";

const profileSchema = mongoose.Schema({
    bio: {
      type: String,
    },
    age: Number,
    occupation: {
        type: String,
    },
    paperPublished: Number,
    location: {
      type: String,
    },
    expertise: {
      type: String,
    },
    about: {
      type: String,
    },
    project: {
      type: String,
    },
    gmail:{
    type: String,
    validate: [validator.isEmail, "Please Enter a valid Email"]
    },
    linkedin:{
    type: String,
  },
  });
  

const Profile = mongoose.model("Profile",profileSchema);

export default Profile;