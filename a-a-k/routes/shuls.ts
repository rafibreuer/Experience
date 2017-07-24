import * as express from 'express-promise-router';
const router = express();
import { Request, Response } from 'express';
import * as db from '../repo';

router.get('/getAllShuls', async (req: Request, res: Response) => {
    let shuls = await db.shuls.getAllShuls();
    console.log(shuls);
    res.json({ shuls });
});
export default router;