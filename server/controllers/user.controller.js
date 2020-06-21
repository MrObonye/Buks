import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
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

  async createUser(req, res, next) {
    const { username } = req.body;
    const { email } = req.body;
    const { password } = req.body;
    let data;

    if (email.length > 0 && password.length > 0) {
      data = {
        email,
        password
      };
    } else if (username.length > 0 && password.length > 0) {
      data = {
        username,
        password
      };
    } else {
      res.json({
        status: 400,
        message: 'Invalid Input'
      });
    }
    this.user = User.findOne({ data });
    if (this.user) {
      throw new Error('Email already exists!');
    }
    this.user = new User(req.body);
    this.user.password = await bcrypt.hash(this.user.password, 10);
    return this.user.save();
  }
}
