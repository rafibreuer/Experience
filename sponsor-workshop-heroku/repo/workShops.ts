import knex from './config';


async function workShopList() {
    return knex('work_shops').where('taken', false).select();
}
async function addWorkShop(body:any) {
    return knex('work_shops').insert(body);
}
async function workShopTable() {
    return knex('work_shop_user as wsu').join('work_shops as ws', 'ws.id', 'wsu.work_shop_id')
        .join('users as u', 'u.id', 'wsu.user_id')
        .select('ws.name as work_shop_name', 'ws.description', 'ws.url', 'ws.author', 'u.name as sponsor_name');

}

async function workShopSponsor(obj: any, id: any) {
    await knex('work_shops').update('taken', true).where('id', obj.work_shop_id);
    return knex('work_shop_user').insert({ work_shop_id: obj.work_shop_id, user_id: id });
}

export {
    workShopList,
    workShopTable,
    workShopSponsor,
    addWorkShop
}  