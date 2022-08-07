import express from 'express'
import jobServices from '../Bl/job-services';

const router = express.Router();

router.get(
    '/',
    jobServices.getJobs
)

export default router