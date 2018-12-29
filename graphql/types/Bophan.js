const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLList
} = require("graphql");

const NhanvienType = require("./Nhanvien");
const NhanvienModel = require("../../model/Nhanvien");

module.exports = new GraphQLObjectType({
  name: "Bophan",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    mabophan: { type: new GraphQLNonNull(GraphQLString) },
    tenbophan: { type: GraphQLString },
    dsnhanvien: {
      type: new GraphQLList(NhanvienType),
      resolve(parent, args) {
        return NhanvienModel.find({ bophan: parent.id });
      }
    }
  })
});
