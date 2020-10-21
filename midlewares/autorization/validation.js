const { SECRET } = require("../../utils/config");

const tokenValidation = async (request, response, next) => {
  //function to validate a jwt token
  //if there is no token, end
  const header = request.get("authorization");
  if (!/bearer\s[\w.]+/gi.test(header)) return response.sendStatus(401);
  //separate token from bearer
  const token = header.split(" ")[1];
  //validate token
  const validation = jwt.verify(token, process.env.SECRET);
  //save the username, id and role in request.body
  request.body = { ...request.body, validation };
  //send it down the pipeline
  next();
};

const onlyAdmin = async (request, response, next) => {
  //function to validate a role
  const validation = request.body;
  if (validation.role !== "admin") {
    return response.sendStatus(401);
  }
  next();
};
