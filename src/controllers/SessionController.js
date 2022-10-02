const AppError = require("../utils/AppError");
const { compare } = require("bcryptjs");
const authConfig = require("../configs/auth");
const { sign } = require("jsonwebtoken");
const knex = require("../database/knex");

class SessionController {
  async create(request, response) {
    const { email, password } = request.body;

    const user = await knex("users").where({ email }).first();

    const error = new AppError("e-mail e/ou senha incorreta", 401);

    if (!user) {
      throw error;
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw error;
    }

    const { secret, expiresIn } = authConfig.jwt;
    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return response.json({ user, token });
  }
}

module.exports = SessionController;
