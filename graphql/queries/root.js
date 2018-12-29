const { GraphQLObjectType, GraphQLID, GraphQLList } = require("graphql");

const NhanvienType = require("../types/Nhanvien");
const NhanvienModel = require("../../model/Nhanvien");
const BophanType = require("../types/Bophan");
const BophanModel = require("../../model/Bophan");
const PhongType = require("../types/Phong");
const PhongModel = require("../../model/Phong");

module.exports = new GraphQLObjectType({
  name: "rootQuery",
  fields: () => ({
    danhsachNhanvien: {
      type: new GraphQLList(NhanvienType),
      resolve() {
        let list = NhanvienModel.find().exec();
        if (!list) {
          throw new Error("Error");
        }
        return list;
      }
    },
    chitietNhanvien: {
      type: NhanvienType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return NhanvienModel.findById(args.id);
      }
    },
    danhsachPhong: {
      type: new GraphQLList(PhongType),
      resolve() {
        let list = PhongModel.find().exec();
        if (!list) {
          throw new Error("Error");
        }
        return list;
      }
    },
    chitietPhong: {
      type: PhongType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return PhongModel.findById(args.id);
      }
    },
    danhsachBophan: {
      type: new GraphQLList(BophanType),
      resolve() {
        let list = BophanModel.find().exec();
        if (!list) {
          throw new Error("Error");
        }
        return list;
      }
    },
    chitietBophan: {
      type: BophanType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return BophanModel.findById(args.id);
      }
    }
  })
});
