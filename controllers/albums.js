const Album = require("../models/album.model");

/** GET */
const getAll = async (request, response) => {
  const albums = await Album.find({}).populate("artists", {
    name: 1,
    createdDate: 1,
    country: 1,
    createdAt: 1,
    modifiedAt: 1,
  });
  response.status(200).json(albums);
};

/** POST */
const addAlbum = async (request, response) => {
    try {
        const body = request.body;

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
const getAlbum = async (request, response) => {
  const album = await Album.findById(request.params.id);
  if (album) {
    response.json(album);
  } else {
    response.status(404).end();
  }
};

/** PUT */
const updateAlbum = async (request, response, next) => {
    const body = request.body;
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
};

/** DELETE */
const deleteAlbum = async (request, response) => {
  const album = await Album.findById(request.params.id);
  await album.deleteOne();
  return response.status(204).end();
};

module.exports = { getAll, getAlbum, addAlbum, updateAlbum, deleteAlbum };
