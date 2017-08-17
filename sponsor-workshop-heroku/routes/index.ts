import * as express from 'express-promise-router';
const router = express();
import users from './users';
import workShops from './workShops';

router.use('/users', users);
router.use('/workShops', workShops);


export { router };