const bcrypt = require("bcrypt");
const User = require("../models/user.model");

/** GET */
const getAll = async (request, response) => {
  const users = await User.find({}).populate("tasks", {
    name: 1,
    state: 1,
    author: 1,
    createdAt: 1,
    modifiedAt: 1,
  });
  response.status(200).json(users);
};

/** POST */
const addUser = async (request, response) => {
  try {
    const body = request.body;
    if (!body.password || body.password.length < 3) {
      return response.status(400).json({
        error: "The password must contain at least 3 characte",
      });
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const users = new User({
      username: body.username,
      passwordHash,
      email: body.email,
      createdAt: body.createdAt,
      modifiedAt: body.modifiedAt,
    });

    const savedUser = await users.save();

    response.json(savedUser);
  } catch (error) {
    next(error);
  }
};

/** GET:ID */
const getUser = async (request, response) => {
  const user = await User.findById(request.params.id);
  if (user) {
    response.json(user);
  } else {
    response.status(404).end();
  }
};

/** PUT */
const updateUser = async (request, response, next) => {
  try {
    const body = request.body;
    if (!body.password || body.password.length < 3) {
      return response.status(400).json({
        error: "The password must contain at least 3 characte",
      });
    }
    console.log("asd");
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const user = {
      username: body.username,
      passwordHash,
      email: body.email,
      tasks: body.tasks,
      modifiedAt: new Date(),
    };
    const updatedUser = await User.findByIdAndUpdate(request.params.id, user, {
      new: true,
    });

    response.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

/** DELETE */
const deleteUser = async (request, response) => {
  const user = await User.findById(request.params.id);
  await user.deleteOne();
  return response.status(204).end();
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser };
