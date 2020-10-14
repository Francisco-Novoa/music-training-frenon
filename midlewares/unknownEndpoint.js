const unknownEndpoint = (request, response) => {
    console.log("-----");
    console.log("unknown endpoint");
    response.status(404).send({ error: "unknown endpoint" });
  };

  module.exports=unknownEndpoint