import mongoose from 'mongoose';
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
})

const User = mongoose.model('users', UserSchema);

export default User;

// class User {
//   constructor(name, email, password, avatar, date) {
//     this.name = name
//     this.email = email;
//     this.password = password;
//     this.avatar = avatar;
//     this.date = date;
//   }
// }

// export default User;