const bcrypt = require("bcrypt");
const User = require("../models/user.model");
const { SECRET } = require("../utils/config");

/** GET */
const getAll = async (request, response, next) => {
  try {
    const users = await User.find({});
    response.status(200).json(users);
  } catch (error) {
    next(error);
  }
};

/** POST */
const addUser = async (request, response, next) => {
  try {
    const { username, password, email } = request.body;
    if (!password || password.length < 3) {
      return response.status(400).json({
        error: "The password must contain at least 3 characters",
      });
    }
    if (!username || username.length < 6) {
      return response.status(400).json({
        error: "The username must contain at least 6 characters",
      });
    }
    if (!/^(\w_?\.?[^@])+@(\w_?\.?[^@])+\.(\w[^@]{1,4})$/.test(email)) {
      return response.status(400).json({
        error: "email is invalid",
      });
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);
    const users = new User({
      username,
      passwordHash,
      email,
    });
    const savedUser = await users.save();
    response.json(savedUser);
  } catch (error) {
    next(error);
  }
};

/** GET:ID */
const getUser = async (request, response, next) => {
  const { id } = request.params;
  const user = await User.findById(id);
  if (!user) {
    return response.status(404).json({ error: "user not found" });
  }
  response.json(user);
};

/** PUT */
const updateUser = async (request, response, next) => {
  const { id } = request.params;
  const { username, email, password } = request.body;
  try {
    if (!password || password.length < 3) {
      return response.status(400).json({
        error: "The password must contain at least 3 characters",
      });
    }
    if (!username || username.length < 6) {
      return response.status(400).json({
        error: "The username must contain at least 6 characters",
      });
    }
    if (!/^(\w_?\.?[^@])+@(\w_?\.?[^@])+\.(\w[^@]{1,4})$/.test(email)) {
      return response.status(400).json({
        error: "email is invalid",
      });
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const user = {
      username,
      passwordHash,
      email,
      modifiedAt: new Date(),
    };
    const updatedUser = await User.findByIdAndUpdate(id, user, {
      new: true,
    });
    response.json(updatedUser);
  } catch (error) {
    next(error);
  }
};

/** DELETE */
const deleteUser = async (request, response, next) => {
  const { id } = request.params;
  try {
    await User.findByIdAndDelete(id);
    return response.status(204).end();
  } catch (error) {
    next(error);
  }
};

const login = async (request, response, next) => {
  //checking if the password and username arrived
  const { email, password } = request.body;
  try {
    if (!username || !password)
      return response
        .status(400)
        .json({ error: "password or username missing" });
    const user = await User.findOne({ email: email });
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) return response.status(403).json({ error: "password invalid" });

    const token = jwt.sign(
      { username: user.username, id: user.id, role: user.role },
      SECRET,
      { expiresIn: "1h" }
    );

    response.status(200).send({
      token,
      username: username,
      email: user.email,
      id: user.id,
      role: user.role,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { getAll, getUser, addUser, updateUser, deleteUser, login };
