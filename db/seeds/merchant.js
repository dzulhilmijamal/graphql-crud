
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('merchant').del()
  await knex('merchant').insert([
    {merchant_name: 'IOI City Mall', phone_number: '6061234567', latitude: 58.12345, longitude: 101.12345},
    {merchant_name: 'IOI Puchong', phone_number: '6061234568', latitude: 58.12343, longitude: 101.12348},    
  ]);
};
