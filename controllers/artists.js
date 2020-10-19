const bcrypt = require("bcrypt");
const Artist = require("../models/artist.model");

/** GET */
const getAll = async (request, response) => {
  const artists = await Artist.find({}).populate("album", {
    name: 1,
    birthDate: 1,
    country: 1,
    createdAt: 1,
    modifiedAt: 1,
  });
  response.status(200).json(artists);
};

/** POST */
const addArtist = async (request, response) => {
  try {
    const body = request.body;
    if (!body.password || body.password.length < 3) {
      return response.status(400).json({
        error: "The password must contain at least 3 characte",
      });
    }
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(body.password, saltRounds);

    const artists = new Artist({
      name: body.name,
      passwordHash,
      birthDate: body.birthDate,
      country: body.country,
      createdAt: body.createdAt,
      modifiedAt: body.modifiedAt,
    });

    const savedArtist = await artists.save();

    response.json(savedArtist);
  } catch (error) {
    next(error);
  }
};

/** GET:ID */
const getArtist = async (request, response) => {
  const artist = await Artist.findById(request.params.id);
  if (artist) {
    response.json(artist);
  } else {
    response.status(404).end();
  }
};

/** PUT */
const updateArtist = async (request, response, next) => {
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

    const artist = {
      name: body.name,
      passwordHash,
      birthDate: body.birthDate,
      members: body.members,
      albums: body.albums,
      modifiedAt: new Date(),
    };
    const updatedArtist = await Artist.findByIdAndUpdate(request.params.id, artist, {
      new: true,
    });

    response.json(updatedArtist);
  } catch (error) {
    next(error);
  }
};

/** DELETE */
const deleteArtist = async (request, response) => {
  const artist = await Artist.findById(request.params.id);
  await artist.deleteOne();
  return response.status(204).end();
};

module.exports = { getAll, getArtist, addArtist, updateArtist, deleteArtist };
