import { Request, Response } from 'express';
import jobDBServices from '../Dal/jobs';

const jobServices = {
    getJobs: async (req: Request, res: Response) => {
        const results = await jobDBServices.getJobs();
        res.status(200).send(results);
    }
}

export default jobServices;
