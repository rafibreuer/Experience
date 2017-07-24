import * as express from 'express-promise-router';
const router = express();
import users from './users';
import shuls from './shuls';
import kollels from './kollels';

router.use('/users', users);
router.use('/shuls', shuls);
router.use('/kollels', kollels);


export { router };