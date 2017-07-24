import * as express from 'express-promise-router';
const router = express();
import { Request, Response } from 'express';
import * as db from '../repo';

router.get('/kollelList', async (req: Request, res: Response) => {
    let kollels = await db.kollels.getKollelsAvail();
    res.json({ kollels });

});
router.post('/kollelShul', async (req: Request, res: Response) => {
    let partnership = await db.kollels.addPartnership(req.body, req.userId);
    res.json({ success: true });
});
export default router;