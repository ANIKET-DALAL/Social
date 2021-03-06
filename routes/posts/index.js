const { Router } = require("express");
const multer = require("multer");
const fs = require("fs").promises;
const {
  findAllPosts,
  createNewPost,
  findUserPosts,
  updateLikes,
  deleteUserPost,
} = require("../../controllers/posts");

const route = Router();
const upload = multer({ dest: "uploads/" });

route.get("/:id", async (req, res) => {
  const posts = await findUserPosts(req.params.id);
  res.status(200).send(posts);
});

route.get("/", async (req, res) => {
  const posts = await findAllPosts();
  res.status(200).send(posts);
});

route.get("/delete/:id", async (req, res) => {
  const posts = await deleteUserPost(req.params.id);
  res.status(204).send(posts);
});

route.post("/", upload.single("file"), async (req, res) => {
  const { user, title, body } = req.body;
  let image = null;
  if (req.file != undefined) {
    const oldPath = __dirname + "/../../uploads/" + req.file.filename;
    const newPath =
      __dirname +
      "/../../images/" +
      "avatar_" +
      req.body.user +
      "." +
      req.file.mimetype.split("/").pop();

    await fs.rename(oldPath, newPath);

    image =
      "/images/" +
      "avatar_" +
      req.body.user +
      "." +
      req.file.mimetype.split("/").pop();
  }

  if (!user || !title || !body) {
    return res.status(400).send({
      error: "Need userid, title and body to create post",
    });
  }

  const post = await createNewPost(user, title, body, image);
  res.status(201).send(post);
});

route.post("/:id", async (req, res) => {
  const { userId } = req.body;
  let x = await updateLikes(req.params.id, userId);
  if (x) {
    res.sendStatus(204);
  } else {
    res.status(404).send({
      error: "No such users id or username",
    });
  }
});
module.exports = {
  postsRoute: route,
};
