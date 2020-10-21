const Member = require("../models/member.model");

/** GET */
const getAll = async (request, response, next) => {
  try {
    const members = await Member.find({})
    response.status(200).json(members);
  } catch (error) {
    next(error)
  }
};

/** POST */
const addMember = async (request, response, next) => {
  const body = request.body;
  try {

    const members = new Member({
      name: body.name,
      birthDate: body.birthDate,
      country: body.country,
    });

    const savedMember = await members.save();

    response.json(savedMember);
  } catch (error) {
    next(error);
  }
};

/** GET:ID */
const getMember = async (request, response, next) => {
  const member = await Member.findById(request.params.id);
  if (member) {
    response.json(member);
  } else {
    response.status(404).end();
  }
};

/** PUT */
const updateMember = async (request, response, next) => {
  const body = request.body;
  try {
    const member = {
      name: body.name,
      birthDate: body.birthDate,
      country: body.country,
      modifiedAt: new Date(),
    };
    const updateMember = await Member.findByIdAndUpdate(request.params.id, member, {
      new: true,
    });
    response.json(updateMember);
  } catch (error) {
    next(error)
  }
};

/** DELETE */
const deleteMember = async (request, response, next) => {
  const member = await Member.findById(request.params.id);
  try {
    await member.deleteOne();
    return response.status(204).end();
  } catch (error) {
    next(error)
  }
};

module.exports = { getAll, getMember, addMember, updateMember, deleteMember };
