require('dotenv').config();
import * as express from 'express';
import * as bodyParser from 'body-parser';
import { router } from './routes';
import  {authRouter} from './authRoutes';
import { checkToken } from './utils/tokens';
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/auth', authRouter);
app.use('/aak',checkToken, router);


const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`server is running on port ${port}`));
