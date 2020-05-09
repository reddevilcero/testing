const authMiddlewares = {};

const jwt = require("jsonwebtoken");

authMiddlewares.IsAuthenticated = (req, res, next) => {
<<<<<<< HEAD
  const authHeader = req.headers["authorization"];
=======
  /*const authHeader = req.headers["authorization"];
>>>>>>> 1d8b6c7add4c1e2ac991fe971bc73828dc34be71
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
<<<<<<< HEAD
  });
=======
  });*/
>>>>>>> 1d8b6c7add4c1e2ac991fe971bc73828dc34be71
  next();
};

module.exports = authMiddlewares;
