import * as express from 'express-promise-router';
const router = express();
import { Request, Response } from 'express';
import * as db from '../repo';
import * as email from '../utils/sendRequest';

router.get('/workShopList', async (req: Request, res: Response) => {
    let workShopList = await db.workShops.workShopList();
    res.json({ workShopList });

});
router.post('/deleteWorkshop', async (req: Request, res: Response) => {
    await db.workShops.deleteWorkshop(req.body.id);
    res.json({success:true});
});
router.get('/workShopTable', async (req: Request, res: Response) => {
    let workShopTable = await db.workShops.workShopTable(req.userId);
    console.log(workShopTable);
    res.json({ workShopTable });
});
router.post('/addWorkShop', async (req: Request, res: Response) => {
    req.body.backup_url = req.body.url;
    const embed = req.body.url.split('=')[1];
    if (embed) { req.body.url = embed }
    let workShop = await db.workShops.addWorkShop(req.body, req.userId);
    email.sendRequest(req.body);
    res.json({ success: true });
});
export default router;