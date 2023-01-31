const router = require("express").Router();
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require("../helpers/fsUtils");
const uuid = require("../helpers/uuid");

// router.get - read all notes from dB.json
router.get("/notes", (req, res) => {
  readFromFile("./db/db.json").then((data) => res.json(JSON.parse(data)));
});
// router.post - takes title/text from Request.body , makes a new note object with ID. (uuid)

router.post("/notes", (req, res) => {
  let newNote = {
    title: req.body.title,
    text: req.body.text,
    id: uuid(),
  };
  readAndAppend(newNote, "./db/db.json");
  res.json("Success!");
});

module.exports = router;
