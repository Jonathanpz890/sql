import express from 'express';
import jobRoleServices from '../Bl/job-role-services';

const router = express.Router();

router.get(
    '/',
    jobRoleServices.getJobRoles
)

export default router;