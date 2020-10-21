const Role = require("../models/roles.model");

/** GET */
const getAll = async (request, response, next) => {
  try {
    const roles = await Role.find({})
    response.status(200).json(roles);
  } catch (error) {
    next(error)
  }
};

/** POST */
const addRole = async (request, response, next) => {
  const body = request.body;
  try {

    const roles = new Role({
      kind: body.kind,
    });

    const savedRole = await roles.save();

    response.json(savedRole);
  } catch (error) {
    next(error);
  }
};

/** GET:ID */
const getRole = async (request, response, next) => {
  const role = await Role.findById(request.params.id);
  try{
  if (role) {
    response.json(role);
  } else {
    response.status(404).end();
  }}catch(error){
    next(error)
  }
};

/** PUT */
const updateRole = async (request, response, next) => {
  const body = request.body;
  try {
    const role = {
      kind: body.kind,
    };
    const updateRole = await Role.findByIdAndUpdate(request.params.id, role, {
      new: true,
    });
    response.json(updateRole);
  } catch (error) {
    next(error)
  }
};

/** DELETE */
const deleteRole = async (request, response, next) => {
  const role = await Role.findById(request.params.id);
  try {
    await role.deleteOne();
    return response.status(204).end();
  } catch (error) {
    next(error)
  }
};

module.exports = { getAll, getRole, addRole, updateRole, deleteRole };
