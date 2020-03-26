//O que fazer ao executar a migração
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(table) {
        //cria uma chave primaria com incremento
        table.increments();

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();
        
        //relacionamento
        table.string('ong_id').notNullable();
        //Criação de FK
        table.foreign('ong_id').references('id').inTable('ongs');
    })
  };
  
  //O que fazer caso ocorra rollback
  exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
  };
  