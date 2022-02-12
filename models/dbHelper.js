const knex = require('knex')
const config = require('../knexfile')

const db = knex(config.development)

module.exports = {
create,
fetch,
deleteObj,
update
}

async function create(apliances){
    const [id] = await db('apliances').insert(apliances)
   return id
}

function fetch(){
    return db('*').from('apliances').orderBy('name', 'asc')
}

function deleteObj(id){
    return db('apliances').where({id}).del()
}
function update(id,apliance){
    return db('apliances').where({id}).update(apliance)
}