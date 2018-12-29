const { GraphQLSchema, GraphQLObjectType } = require("graphql");

//Queries
const rootQuery = require("./queries/root");

// Mutations
const { themBophan, suaBophan, xoaBophan } = require("./mutations/Bophan");
const {
  themNhanvien,
  suaNhanvien,
  xoaNhanvien
} = require("./mutations/Nhanvien");
const { themPhong, suaPhong, xoaPhong } = require("./mutations/Phong");

module.exports = new GraphQLSchema({
  query: rootQuery,
  mutation: new GraphQLObjectType({
    name: "mutation",
    fields: () => ({
      themNhanvien,
      suaNhanvien,
      xoaNhanvien,
      themPhong,
      suaPhong,
      xoaPhong,
      themBophan,
      suaBophan,
      xoaBophan
    })
  })
});
