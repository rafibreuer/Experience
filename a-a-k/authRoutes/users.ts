import * as express from 'express-promise-router';
const authRouter = express();
import { Request, Response } from 'express';
import * as db from '../repo';
import { sendTempToken } from '../utils/emailSender';
import { createToken } from '../utils/tokens';

authRouter.post('/addUser', async (req: Request, res: Response) => {
    let search = await db.users.checkUserEmail(req.body.email);
    console.log(search);
    if (search) {
        res.json({ success: false });
        return;
    }
    let user = await db.users.createUser(req.body);
    sendTempToken(req.body.email, 'res.tempToken', 'verify');
    res.json({ success: true, token: createToken(user) });
});
authRouter.post('/login', async (req: Request, res: Response) => {
    let search = await db.users.logIn(req.body);
    console.log(search);
    if (!search) {
        res.json({ success: false });
        return;
    }
    res.json({ success: true, token: createToken(search.id) });
});
authRouter.get('/getAllShuls', async (req: Request, res: Response) => {
    let shuls = await db.shuls.getAllShuls();
    console.log(shuls);
    res.json({ shuls });
});
export default authRouter;

