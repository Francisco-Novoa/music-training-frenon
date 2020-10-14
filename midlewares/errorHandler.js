const errorHandler = (err, request, response, next) => {
    console.error(err.message);
    return response.status(400).send({error: err.message })
    next();
  };

module.exports=errorHandler