const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require("graphql");

const NhanvienType = require("./Nhanvien");
const NhanvienModel = require("../../model/Nhanvien");

module.exports = new GraphQLObjectType({
  name: "Phong",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    maphong: { type:  new GraphQLNonNull(GraphQLString) },
    sogiuong: { type: GraphQLInt },
    dsnhanvien: {
      type: new GraphQLList(NhanvienType),
      resolve(parent, args) {
        return NhanvienModel.find({ phong: parent.id });
      }
    }
  })
});
