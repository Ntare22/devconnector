import express from 'express';
import UserController from '../controllers/users';

const usersRouter = express.Router();


//@route  GET api/users/test
//@desc   Test users route
//@access Public
usersRouter.get('/test', (req, res) => {
  res.json({
    msg: "Users Works"
  })
})

//@route  GET api/users/register
//@desc   Register user
//@access Public
usersRouter.post('/register', UserController.registerUser);

//@route  GET api/users/login
//@desc   Login User / Return JWT Token
//@access Public
usersRouter.post('/login', UserController.loginUser);

export default usersRouter;
