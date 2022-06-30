const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const findOrCreate = require("mongoose-findorcreate");
const moment = require("moment-timezone");
const dateIndia = moment.tz(Date.now(), "Asia/Kolkata");

mongoose.connect(process.env.DATABASE_LINK, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.set("useCreateIndex", true);
mongoose.set("useFindAndModify", false);

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  profilePic: String,
  password: String,
  googleId: String,
  facebookId: String,
});

userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);

const postSchema = new mongoose.Schema(
  {
    title: String,
    body: {
      type: String,
      required: true,
    },
    image: String,
    likes: {
      type: Number,
      default: 0,
    },
    liked_by: [{ type: mongoose.Schema.Types.ObjectId }],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const commentSchema = new mongoose.Schema({
  body: {
    type: String,
    required: true,
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
});

const User = new mongoose.model("User", userSchema);
const Post = new mongoose.model("Post", postSchema);
const Comment = new mongoose.model("Comment", commentSchema);

module.exports = { User, Post, Comment };
