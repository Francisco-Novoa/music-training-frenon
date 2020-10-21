
const Artist = require("../models/artist.model");

/** GET */
const getAll = async (request, response, next) => {
  try {
    const artists = await Artist.find({}).populate("member", {
      name: 1,
      birthDate: 1,
      country: 1,
      createdAt: 1,
      modifiedAt: 1,
    });
    response.status(200).json(artists);
  } catch (error) {
    next(error)
  }

};

/** POST */
const addArtist = async (request, response, next) => {
  const body = request.body;

  try {
    const artists = new Artist({
      name: body.name,
      birthDate: body.birthDate,
      country: body.country,
    });

    const savedArtist = await artists.save();

    response.json(savedArtist);
  } catch (error) {
    next(error);
  }
};

/** GET:ID */
const getArtist = async (request, response, next) => {
  const artist = await Artist.findById(request.params.id);
  try{
  if (artist) {
    response.json(artist);

  }}catch(error){
    next(error)
  }
};

/** PUT */
const updateArtist = async (request, response, next) => {
  const body = request.body;
  try {

    const artist = {
      name: body.name,
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
const deleteArtist = async (request, response,next) => {
  const artist = await Artist.findById(request.params.id);
  try {
    await artist.deleteOne();
    return response.status(204).end();
  } catch (error) {
    next(error)
  }
};

module.exports = { getAll, getArtist, addArtist, updateArtist, deleteArtist };
