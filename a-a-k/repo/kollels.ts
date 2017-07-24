import knex from './config';

async function getKollelsAvail() {
    return knex('kollels').where('taken', false).select();
}
async function addPartnership(obj: any, id: any) {
    await knex('kollels').update('taken', true).where('id', obj.kollel_id);
    return knex('kollel_shul').insert({ kollel_id: obj.kollel_id, users_id: id });
}
export {
    getKollelsAvail,
    addPartnership
}  