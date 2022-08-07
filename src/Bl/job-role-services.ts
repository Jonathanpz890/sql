import { Request, Response } from "express";
import jobRoleDBServices from "../Dal/jobRoles";

const jobRoleServices = {
    getJobRoles: async (req: Request, res: Response) => {
        const results = await jobRoleDBServices.getJobRoles();
        res.status(200).send(results);
    }
}

export default jobRoleServices;