const { albumsController } = require("../controllers");

const album = require("express").Router();

album.get("/", albumsController.getAll);

album.get("/:id", albumsController.getAlbum);

album.post("/", albumsController.addAlbum);

album.put("/:id", albumsController.updateAlbum);

album.delete("/:id", albumsController.deleteAlbum);

module.exports = album;
