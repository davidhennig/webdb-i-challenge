const express = require("express");

const router = express.Router();

const Account = require("./AccountModel.js");

router.get("/", (req, res) => {
  Account.get()
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error getting Account" });
    });
});

router.get("/:id", (req, res) => {
  Account.getById(req.params.id)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error getting Account" });
    });
});

router.post("/", (req, res) => {
  Account.insert(req.body)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error creating Account" });
    });
});

router.put("/:id", (req, res) => {
  Account.update(req.params.id, req.body)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error updating Account" });
    });
});

router.delete("/:id", (req, res) => {
  Account.remove(req.params.id)
    .then(resp => {
      res.status(200).json(resp);
    })
    .catch(error => {
      console.log(error);
      res.status(500), json({ message: "Error deleting Account" });
    });
});

module.exports = router;
