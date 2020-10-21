const Album = require("../models/album.model");

/** GET */
const getAll = async (request, response, next) => {
  try {
    const albums = await Album.find({}).populate("artists", {
      name: 1,
      createdDate: 1,
      country: 1,
      createdAt: 1,
      modifiedAt: 1,
    });
    response.status(200).json(albums);
  } catch (error) {
    next(error)
  }
};

/** POST */
const addAlbum = async (request, response, next) => {
  const body = request.body;
  try {

    const albums = new Album({
      name: body.name,
      createdDate: body.createdDate,
      country: body.country,
    });

    const savedAlbum = await albums.save();

    response.json(savedAlbum);
  } catch (error) {
    next(error);
  }
};

/** GET:ID */
const getAlbum = async (request, response, next) => {
  const album = await Album.findById(request.params.id);
  try{
  if (album) {
    response.json(album);
  } else {
    response.status(404).end();
  }}catch(error){
    next(error)
  }
};

/** PUT */
const updateAlbum = async (request, response, next) => {
  const body = request.body;
  try {
    const album = {
      name: body.name,
      createdDate: body.createdDate,
      country: body.country,
      modifiedAt: new Date(),
    };
    const updateAlbum = await Album.findByIdAndUpdate(request.params.id, album, {
      new: true,
    });
    response.json(updateAlbum);
  } catch (error) {
    next(error)
  }
};

/** DELETE */
const deleteAlbum = async (request, response, next) => {
  const album = await Album.findById(request.params.id);
  try {
    await album.deleteOne();
    return response.status(204).end();
  } catch (error) {
    next(error)
  }
};

module.exports = { getAll, getAlbum, addAlbum, updateAlbum, deleteAlbum };
