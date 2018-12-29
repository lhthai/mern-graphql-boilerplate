const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLID,
  GraphQLString,
  GraphQLBoolean
} = require("graphql");

const BophanModel = require("../../model/Bophan");
const PhongModel = require("../../model/Phong");

module.exports = new GraphQLObjectType({
  name: "Nhanvien",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    msnv: { type: GraphQLString },
    hoten: { type: GraphQLString },
    ngaysinh: { type: GraphQLString },
    gioitinh: { type: GraphQLBoolean },
    cmnd: { type: GraphQLString },
    quoctich: { type: GraphQLString },
    chucvu: { type: GraphQLString },
    sohochieu: { type: GraphQLString },
    phong: {
      type: PhongType,
      resolve(parent, args) {
        return PhongModel.findById(parent.phong);
      }
    },
    bophan: {
      type: BophanType,
      resolve(parent, args) {
        return BophanModel.findById(parent.bophan);
      }
    },
    sovisa: { type: GraphQLString },
    ngaycapvisa: { type: GraphQLString },
    ngayhethanvisa: { type: GraphQLString }
  })
});

const PhongType = require("./Phong");
const BophanType = require("./Bophan");
