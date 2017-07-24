import knex from './config';
import * as authHelpers from './authHelpers';
import { CreateUser, Login } from '../types/users';
async function createUser(profile: CreateUser) {
    profile.password = await authHelpers.hashPassword(profile.password);
    return knex('users').insert(profile).returning('id');
}
async function checkUserEmail(email: string) {
    return knex('users').select('email').where('email', email).first();
}
async function logIn(obj: Login) {
    let hashed = await knex('users').select('password').where('email', obj.email).first();
    hashed = await authHelpers.comparePassword(hashed.password, obj.password);
    if (hashed) {
        return knex('users').select('id').where('email', obj.email).first();
    }
}
export {
    createUser,
    checkUserEmail,
    logIn
}  