import * as express from 'express-promise-router';
const authRouter = express();
import { Request, Response } from 'express';
import * as db from '../repo';
import { sendTempToken } from '../utils/emailSender';
import { createToken } from '../utils/tokens';
import * as jwt from 'jsonwebtoken';


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

authRouter.get('/checkLog', async (req: any, res: Response) => {
    let user = req.headers['x-access-token'];
    jwt.verify(user, process.env.AUTH_SECRET, async (err: any, decoded: any) => {
        if(err){
            res.json({ success: false });
            return;
        }
        let result = await db.users.checkAdminUser(decoded.userId);
        if (result) {
            res.json({ success: true });
            return;
        }
    });
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
authRouter.get('/workShopTable', async (req: Request, res: Response) => {
    let workShopTable = await db.workShops.workShopTable();
    res.json({ workShopTable });
});
export default authRouter;

