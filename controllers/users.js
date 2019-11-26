import gravatar from 'gravatar';
import bcrypt from 'bcryptjs';

import User from '../model/User';


class UserController {
  static registerUser = (req, res) => {
    try {
      User.findOne({ email: req.body.email })
        .then(user => {
          if (user) {
            return res.status(400).json({ email: 'Email already exists' })
          } else {
            const avatar = gravatar.url(req.body.email, {
              s: '200', //size
              r: 'pg', // Rating
              d: 'mm' // Default
            });

            const newUser = new User({
              name: req.body.name,
              email: req.body.email,
              avatar,
              password: req.body.password
            });

            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                  .then(user => res.json(user))
                  .catch(err => console.log(err));
              })
            })
          }
        })
    } catch (error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }

  static loginUser = (req, res) => {
    try {
      const email = req.body.email;
      const password = req.body.password;

      // Find user by emial
      User.findOne({ email })
        .then(user => {
          // Check for user
          if (user) {
            return res.status(404).json({ email: 'User not found' })
          }

          // Check Password
          bcrypt.compare(password, user.password)
            .then(isMatch => {
              if (isMatch) {
                res.status(200).json({ msg: 'Success' })
              } else {
                return res.status(400).json({ password: 'Password Incorrect' })
              }
            })
        })
    } catch(error) {
      return res.status(500).json({
        status: 500,
        error: error.message
      });
    }
  }
}

export default UserController;
