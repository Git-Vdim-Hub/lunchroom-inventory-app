
const {gql} = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        password: String
    }

    type Barcode {
        _id: ID
        barcode: String!
    }

    type Item {
        _id: ID
        item_id: String!
        item_desc: String!
        location: String
        quantity1_name: String!
        quantity_lvl_1: Int!
        quantity2_name: String!
        quantity_lvl_2: Int!
        quantity3_name: String!
        quantity_lvl_3: Int!
        scans: [Barcode]
    }

    type Query {
       users: [User]
       user(id: ID!): User
       items: [Item]
       item(itemId: ID!): Item
       barcode(barcodeId: ID!): Barcode
    }
    type Mutation {
        addUser(username: String!, email: String!, password: String!): User,
        addItem(item_id: String!, item_desc: String!, location: String!, quantity1_name: String!, quantity_lvl_1: Int!, quantity2_name: String!, quantity_lvl_2: Int!, quantity3_name: String!, quantity_lvl_3: Int!, barcodeId: ID): Item,
        addBarcode(itemId: ID!, barcode: String!): Item,
        removeBarcode(itemId: ID!, barcodeId: ID!): Item
    }
`;

module.exports = typeDefs;