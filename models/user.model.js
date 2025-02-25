const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    address: {
      type: String,
      required: true,
    },
    friends: [
      {
        name: {
          type: String,

        },
        address: {
          type: String,
          required: true,
        },
      },
    ],
    notification: [
      {
        title: {
          type: String,

        },
      }
    ],
  },
  {
    timestamps: true,
  }
);


const User = mongoose.model("User", UserSchema);

module.exports = User;