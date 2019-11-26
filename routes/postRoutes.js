import express from 'express';
const postRouter = express.Router();

//@route  GET api/posts/test
//@desc   Test post route
//@access Public

postRouter.get('/test', (req, res) => {
  res.json({
    msg: "Posts Works"
  })
})

export default postRouter;
