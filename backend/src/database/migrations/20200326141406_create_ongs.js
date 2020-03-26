//O que fazer ao executar a migração
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(table) {
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      // segundo parametro é quantidade de caracteres
      table.string('uf', 2).notNullable();

  })
};

//O que fazer caso ocorra rollback
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
