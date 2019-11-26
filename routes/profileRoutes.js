import express from 'express';
const profileRouter = express.Router();

//@route  GET api/profile/test
//@desc   Test profile route
//@access Public

profileRouter.get('/test', (req, res) => {
  res.json({
    msg: "Profile Works"
  })
})

export default profileRouter
