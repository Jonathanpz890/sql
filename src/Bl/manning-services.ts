import { Request, Response } from 'express';
import manningDBServices from '../Dal/mannings';

const manningServices = {
    createManning: async (req: Request, res: Response) => {
        const { name, startDate, jobRoleId } = req.body;
        const results = await manningDBServices.createManning(name, startDate, jobRoleId);
        res.status(200).send(results);
    },
    getMannings: async (req: Request, res: Response) => {
        const results = await manningDBServices.getMannings()
        res.status(200).send(results);
    },
    deleteManning: async (req: Request, res: Response) => {
        const { manningId } = req.body;
        const results = await manningDBServices.deleteManning(manningId);
        res.status(200).send(results);
    }
}

export default manningServices;