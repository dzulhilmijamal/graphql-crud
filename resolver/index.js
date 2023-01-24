const db = require('../db/db');

const resolvers = {
    Query: {
        getAllMerchant: async () => await db('merchant'),
        getIdMerchant: async(_, { id}) => await (await db('merchant').where({ id }).returning('*'))[0],
        sortPaginationMerchant: async (_, { limit, offset, sort, order}) => await db('merchant').limit( limit ).offset( offset ).orderBy(sort, order),
    },
    Mutation: {
        createNewMerchant: async(_, { data }) => await (await db('merchant').insert(data).returning('*'))[0],
        updateMerchant: async(_, { id, data }) => await (await db('merchant').where({ id }).update(data).returning('*'))[0],
        bulkToggleMerchantIsActive: async(_, { ids, status }) => await db('merchant').whereIn('id', ids).update('isActive', status)
    }
};

module.exports = resolvers;