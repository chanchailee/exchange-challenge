import { Application, Request, Response } from 'express';
import * as express from 'express';

const app: Application = express();

app.get('/', (req: Request, res: Response) => {
	res.send({ message: 'ok' });
});

app.listen(3000);
