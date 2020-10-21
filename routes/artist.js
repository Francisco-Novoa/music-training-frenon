const { artistsController } = require("../controllers");

const artist = require("express").Router();

artist.get("/", artistsController.getAll);

artist.get("/:id", artistsController.getArtist);

artist.post("/", artistsController.addArtist);

artist.put("/:id", artistsController.updateArtist);

artist.delete("/:id", artistsController.deleteArtist);

module.exports = artist;
