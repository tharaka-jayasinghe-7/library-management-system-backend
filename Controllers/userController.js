const User = require("../Models/userModel");

const getUsers = (req, res, next) => {
  User.find()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const addUser = (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    mobile: req.body.mobile,
    address: req.body.address,
  });
  user
    .save()
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const updateUser = (req, res, next) => {
  const { _id, name, email, mobile, address } = req.body;

  User.updateOne(
    { _id: _id },
    {
      $set: {
        name: name,
        email: email,
        mobile: mobile,
        address: address,
      },
    }
  )
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

const deleteUser = (req, res, next) => {
  const _id = req.body._id;
  User.deleteOne({ _id: _id })
    .then((response) => {
      res.json({ response });
    })
    .catch((error) => {
      res.json({ error });
    });
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
