import knex from './config';

async function getAllShuls() {
     return knex('kollel_shul as ks').join('kollels as k', 'k.id', 'ks.kollel_id')
        .join('users as s', 's.id', 'ks.users_id')
        .select('k.name as kollel_name', 'k.location as kollel_location', 's.name as shul_name', 's.location as shul_location');
        
}

export {
    getAllShuls
}  