const Message = require("../models/message");
const router = require("express").Router();

// Get list of all messages sorted by posted field in descending order
router.get("/", async function(req, res) { 
   try {
      const messages = await Message.find().sort("-posted");
      res.json(messages);
   } catch (err) {
      res.status(400).send(err);
   }
});

// Get a message with an ID
router.get("/:id", async function(req, res) {
   try {
      const message = await Message.findById(req.params.id);
      if (message === null) {
         res.sendStatus(404);
      } else {
         res.json(message);
      }
   } catch (err) {
      res.status(400).send(err);
   }
});

// Add a new message to the database
router.post("/", async function(req, res) {
   const message = new Message(req.body);
   console.log(message);
   try {
      const savedMessage = await message.save();
      res.status(201).json(savedMessage);
   } catch (err) {
      res.status(400).send(err);
   }
});

// Update an existing message
router.put("/:id", async function(req, res) {
   const messagePart = req.body;
   try {
      const result = await Message.updateOne(
         { _id: req.params.id },
         messagePart,
         { runValidators: true }
      );
      if (result.matchedCount === 0) {
         res.sendStatus(404);
      } else {
         res.sendStatus(204);
      }
   } catch (err) {
      res.status(400).send(err);
   }
});

// Delete a message with an ID
router.delete("/:id", async function(req, res) {
   try {
      const result = await Message.deleteOne({ _id: req.params.id });
      if (result.deletedCount === 0) {
         res.sendStatus(404);
      } else {
         res.sendStatus(204);
      }
   } catch (err) {
      res.status(400).send(err);
   }
});

module.exports = router;
