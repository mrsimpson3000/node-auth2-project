const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/restricted-middleware.js");

router.use(restricted);

// This was for MVP
// router.get("/", (req, res) => {
//   Users.find()
//     .then((users) => {
//       res.status(200).json({ users, jwt: req.jwt });
//     })
//     .catch((err) => res.send(err));
// });

// This is for stretch. Filters by department based on who is logged in.
router.get("/", (req, res) => {
  Users.findBy({ department: req.jwt.department })
    .then((users) => {
      res.status(200).json({ users, jwt: req.jwt });
    })
    .catch((err) => res.send(err));
});

module.exports = router;
