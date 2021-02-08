const { User } = require('../models');
const bcrypt = require('bcrypt');

const register = async (req, res, next) => {
  try {
    const {
      username,
      password,
    } = req.body;
    const user = await User.findOne({
      where: {
        username,
      }
    });

    // reject jika username sudah ada
    if(user) {
      throw new Error('User with this username already exist. Please use other username');
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    // save user to database
    await User.create({
      username,
      password: hashedPassword
    })
    return res.status(201).send({
      status: 'success',
      code: 201,
      message: 'Success register user'
    });
  } catch (err) {
    return next(err);
  }
}

const login = async (req, res, next) => {
  try {
    // handle login
    /**
     * 1. cari user di database
     * 2. jika user tidak ditemukan throw error 'User not found'
     * 3. jika user ditemukan, validate password
     * 4. jika password tidak sama, throw error 'password missmatch'
     * 5. jika password sama, generate jsonwebtoken
     * 6. return data jsonwebtoken
     */
  } catch(err) {
    return next(err)
  }
}

module.exports = {
  register,
  login,
}