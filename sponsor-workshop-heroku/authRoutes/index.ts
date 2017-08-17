import * as express from 'express-promise-router';

import users from './users';
const authRouter = express();
authRouter.use('/users', users);
export { authRouter };