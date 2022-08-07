import { Request, Response } from 'express';
import roleDBServices from '../Dal/roles';

const roleServices = {
    getRoles: async (req: Request, res: Response) => {
        const results = await roleDBServices.getRoles();
        res.status(200).send(results);
    }   
}

export default roleServices;