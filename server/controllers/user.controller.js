import bcrypt from 'bcrypt';
// import dotenv from 'dotenv';
import User from '../models/user.model';

export default class UserController {
  /**
     * Create new user account.
     * It sends an object containing a success boolean
     * and a json web token or error
     *
     * @public
     *
     * @method
     *
     * @param  {Object}   req  - express http request object
     * @param  {Object}   res  - express http response object
     * @param  {Function} next - calls the next middleware in the stack
     *
     * @return {Object}        - returns an http response object
     */

  async createUser(req) {
    const userModel = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      membershipType: req.body.membershipType
    };

    this.user = await User.findOne({ email: userModel.email });
    if (this.user) {
      throw new Error('Email already exists!');
    }
    this.user = new User(userModel);
    this.user.password = await bcrypt.hash(userModel.password, 10);
    return this.user.save();
  }
}
