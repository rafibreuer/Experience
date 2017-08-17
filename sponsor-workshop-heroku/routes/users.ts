import * as express from 'express-promise-router';
const router = express();
import { Request, Response } from 'express';
import * as db from '../repo';
import { sendTempToken } from '../utils/emailSender';

router.post('/addUser', async (req: Request, res: Response) => {
    let search = await db.users.checkUserEmail(req.body.email);
    console.log(search);
    if (search.length) {
        res.json({ success: false });
        return;
    }
    let user = await db.users.createUser(req.body);
    sendTempToken(req.body.email, 'res.tempToken', 'verify');
    res.json({ success: user });
});

router.get('/getUserProfile', async (req: Request, res: Response) => {
    let profile = await db.users.getUserProfile(req.userId);
    profile ? res.json({ success: profile }) : '';
});
router.get('/getName', async (req: Request, res: Response) => {
    let name = await db.users.getName(req.userId);
    console.log(name);
    name ? res.json(name) : '';
});
router.post('/updateUserProfile', async (req: Request, res: Response) => {
    let profile = await db.users.updateUserProfile({ phone: req.body.phone, name: req.body.name, email: req.body.email }, req.userId);
    profile ? res.json({ success: profile }) : '';
});

router.post('/login', async (req: Request, res: Response) => {
    let search = await db.users.logIn(req.body);
    console.log(search);
    if (!search) {
        res.json({ success: false });
        return;
    }
    res.json({ success: search });
});
export default router;