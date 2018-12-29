const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLID
} = require("graphql");

const BophanType = require("../types/Bophan");
const BophanModel = require("../../model/Bophan");

exports.themBophan = {
  type: BophanType,
  args: {
    mabophan: { type: new GraphQLNonNull(GraphQLString) },
    tenbophan: { type: GraphQLString }
  },
  resolve(parent, args) {
    let newItem = new BophanModel(args);
    newItem.save();
    if (!newItem) {
      throw new Error("Error");
    }
    return newItem;
  }
};

exports.suaBophan = {
  type: BophanType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    mabophan: { type: new GraphQLNonNull(GraphQLString) },
    tenbophan: { type: GraphQLString }
  },
  resolve(parent, args) {
    return BophanModel.findOneAndUpdate({ _id: args.id }, args, {
      new: true
    }).catch(err => console.log(err));
  }
};

exports.xoaBophan = {
  type: BophanType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    let bophan = BophanModel.findOneAndRemove({ _id: args.id }).exec();
    if (!bophan) {
      throw new Error("Error");
    }
    return bophan;
  }
};

//module.exports = { themBophan, suaBophan, xoaBophan };
