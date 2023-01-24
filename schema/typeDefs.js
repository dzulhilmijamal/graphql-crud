const { gql } = require('apollo-server-express');

const typeDefs = gql`
    scalar Date

    type Merchant {
        id: Int
        merchant_name: String!
        phone_number: String!
        latitude: Float! 
        longitude: Float!
        isActive: Boolean
        datetime: Date
    }

    input MerchantInput {
        merchant_name: String!
        phone_number: String!
        latitude: Float!
        longitude: Float!
    }

    input MerchantUpdate {
        merchant_name: String
        phone_number: String
        latitude: Float
        longitude: Float
    }

    # Queries
    type Query {
        getAllMerchant: [Merchant]!
        getIdMerchant(id: Int!): Merchant
        sortPaginationMerchant(limit: Int, offset: Int, sort: String, order: String): [Merchant]
    }
    # Mutation
    type Mutation {
        createNewMerchant(data: MerchantInput): Merchant
        updateMerchant(id: Int!, data: MerchantUpdate): Merchant
        bulkToggleMerchantIsActive(ids: [Int]!, status: Boolean!): Boolean
    }
`;

module.exports = typeDefs;