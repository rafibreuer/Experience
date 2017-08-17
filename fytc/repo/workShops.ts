import knex from './config';


async function workShopList() {
    return knex('work_shops').where('taken', false).select();
}
async function deleteWorkshop(id:number) {
    return knex('work_shops').delete().where('id', id);
}
async function addWorkShop(body: any,userId:number) {
    const id = await knex('work_shops').insert(body).returning('id');
    return knex('work_shop_user').insert({ work_shop_id: id, user_id: userId });
}
async function workShopTable(id: number) {
    return knex('work_shop_user as wsu').join('work_shops as ws', 'ws.id', 'wsu.work_shop_id')
        .join('users as u', 'u.id', 'wsu.user_id')
        .select('ws.name as work_shop_name', 'ws.description', 'ws.url','ws.id', 'ws.author','ws.backup_url', 'u.name as sponsor_name').where('wsu.user_id', id);

}


export {
    workShopList,
    workShopTable,
    addWorkShop,
    deleteWorkshop
}  