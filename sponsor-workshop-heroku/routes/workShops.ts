import * as express from 'express-promise-router';
const router = express();
import { Request, Response } from 'express';
import * as db from '../repo';
import * as email from '../utils/sendRequest';

router.get('/workShopList', async (req: Request, res: Response) => {
    let workShopList = await db.workShops.workShopList();
    res.json({ workShopList });

});
router.get('/workShopTable', async (req: Request, res: Response) => {
    let workShopTable = await db.workShops.workShopTable();
    console.log(workShopTable);
    res.json({ workShopTable });
});
router.post('/workShopSponsor', async (req: Request, res: Response) => {
    let workShopSponsor = await db.workShops.workShopSponsor(req.body, req.userId);
    res.json({ success: true });
});
router.post('/addWorkShop', async (req: Request, res: Response) => {
    let admin = await db.users.checkAdminUser(req.userId);
    if (admin.email === process.env.MY_NAME) {   
        req.body.url = req.body.url.split('=')[1];
        let workShop = await db.workShops.addWorkShop(req.body);
    }
    email.sendRequest(req.body);
    res.json({ success: true });
});
export default router;