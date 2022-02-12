
exports.up = function(knex) {
    return knex.schema.createTable('apliances',tbl=>{
        tbl.increments()
        tbl.string('name')
        tbl.bigInteger('wattage')
        .unsigned()
        tbl.bigInteger('quantity')
        .unsigned()
        tbl.timestamps(true,true)
    })
  
};

exports.down = function(knex) {
  
};
