const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLID
} = require("graphql");

const NhanvienType = require("../types/Nhanvien");
const NhanvienModel = require("../../model/Nhanvien");

exports.themNhanvien = {
  type: NhanvienType,
  args: {
    msnv: { type: GraphQLString },
    hoten: { type: GraphQLString },
    ngaysinh: { type: GraphQLString },
    gioitinh: { type: GraphQLBoolean },
    cmnd: { type: GraphQLString },
    quoctich: { type: GraphQLString },
    chucvu: { type: GraphQLString },
    sohochieu: { type: GraphQLString },
    bophan: { type: GraphQLID },
    phong: { type: GraphQLID },
    sovisa: { type: GraphQLString },
    ngaycapvisa: { type: GraphQLString },
    ngayhethanvisa: { type: GraphQLString }
  },
  resolve(parent, args) {
    let newItem = new NhanvienModel(args);
    newItem.save();
    if (!newItem) {
      throw new Error("Error");
    }
    return newItem;
  }
};

exports.suaNhanvien = {
  type: NhanvienType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    msnv: { type: GraphQLString },
    hoten: { type: GraphQLString },
    ngaysinh: { type: GraphQLString },
    gioitinh: { type: GraphQLBoolean },
    cmnd: { type: GraphQLString },
    quoctich: { type: GraphQLString },
    chucvu: { type: GraphQLString },
    sohochieu: { type: GraphQLString },
    bophan: { type: GraphQLID },
    phong: { type: GraphQLID },
    sovisa: { type: GraphQLString },
    ngaycapvisa: { type: GraphQLString },
    ngayhethanvisa: { type: GraphQLString }
  },
  resolve(parent, args) {
    return NhanvienModel.findOneAndUpdate({ _id: args.id }, args, {
      new: true
    }).catch(err => console.log(err));
  }
};

exports.xoaNhanvien = {
  type: NhanvienType,
  args: { id: { type: new GraphQLNonNull(GraphQLID) } },
  resolve(parent, args) {
    let nhanvien = NhanvienModel.findOneAndRemove({ _id: args.id }).exec();
    if (!nhanvien) {
      throw new Error("Error");
    }
    return nhanvien;
  }
};

//module.exports = { themNhanvien, suaNhanvien, xoaNhanvien };
