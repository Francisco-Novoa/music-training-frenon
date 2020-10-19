const Member = require("../models/member.model");

/** GET */
const getAll = async (request, response) => {
  const members = await Member.find({}).populate("member", {
    name: 1,
    birthDate: 1,
    country: 1,
    createdAt: 1,
    modifiedAt: 1,
  });
  response.status(200).json(members);
};

/** POST */
const addMember = async (request, response) => {
    try {
        const body = request.body;

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
const getMember = async (request, response) => {
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
};

/** DELETE */
const deleteMember = async (request, response) => {
  const member = await Member.findById(request.params.id);
  await member.deleteOne();
  return response.status(204).end();
};

module.exports = { getAll, getMember, addMember, updateMember, deleteMember };
