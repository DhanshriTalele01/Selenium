import { users, quotes } from "./fakedb.js";
import { randomBytes } from "crypto";
import User from "./models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_KEY } from "./config.js";
import Quote from "./models/Quotes.js";

export const resolvers = {
  Query: {
    users: async (_, params, { userId }) => {
      if (!userId) {
        throw new Error("Invalid user please login");
      }
      return await User.find({});
    },
    user: async (ifParent, { _id }, { userId }) => {
      if (!userId) {
        throw new Error("Invalid user please login");
      }
      try {
        return await User.findOne({ _id });
      } catch (e) {
        return e;
      }
    },
    quotes: async (_, params, { userId }) => {
      if (!userId) {
        throw new Error("Invalid user please login");
      }
      return await Quote.find({});
    },
    iquote: async (_, { by }, { userId }) => {
      return await Quote.find({ by });
    },
  },
  User: {
    quotes: async (ur) => await Quote.find({ by: ur._id }),
  },

  Mutation: {
    signupUser: async (_, { userNew }) => {
      const user = await User.findOne({ email: userNew.email });
      if (user) {
        throw new Error("user already exists");
      }
      const hashedPassword = await bcrypt.hash(userNew.password, 12);
      const newUSer = await new User({
        ...userNew,
        password: hashedPassword,
      }).save();
      return newUSer;
    },
    signinUser: async (_, { userSignin }) => {
      const user = await User.findOne({ email: userSignin.email });
      if (!user) {
        throw new Error("first signup");
      }
      const doMatch = await bcrypt.compare(userSignin.password, user.password);
      if (!doMatch) {
        throw new Error("email or password invalid");
      }
      const token = jwt.sign({ userId: user._id }, JWT_KEY);
      return { token: token };
    },
    createQuote: async (_, { name }, { userId }) => {
      if (!userId) {
        throw new Error("you must be login");
      }
      const quote = await new Quote({ name, by: userId }).save();
      return "quote created successfully";
    },
  },
};
export default resolvers;
