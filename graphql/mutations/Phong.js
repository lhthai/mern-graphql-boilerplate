const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID,
  GraphQLInt
} = require("graphql");

const PhongType = require("../types/Phong");
const PhongModel = require("../../model/Phong");

exports.themPhong = {
  type: PhongType,
  args: {
    maphong: { type: new GraphQLNonNull(GraphQLString) },
    sogiuong: { type: GraphQLInt }
  },
  resolve(parent, args) {
    let newItem = new PhongModel(args);
    newItem.save();
    if (!newItem) {
      throw new Error("Error");
    }
    return newItem;
  }
};

exports.suaPhong = {
  type: PhongType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    maphong: { type: new GraphQLNonNull(GraphQLString) },
    sogiuong: { type: GraphQLInt }
  },
  resolve(parent, args) {
    return PhongModel.findOneAndUpdate({ _id: args.id }, args, {
      new: true
    }).catch(err => console.log(err));
  }
};

exports.xoaPhong = {
  type: PhongType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    let phong = PhongModel.findOneAndRemove({ _id: args.id }).exec();
    if (!phong) {
      throw new Error("Error");
    }
    return phong;
  }
};

//module.exports = { themPhong, suaPhong, xoaPhong };
