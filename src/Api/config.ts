import express from 'express';
import jobRoutes from './jobs';
import roleRoutes from './roles';
import jobRoleRoutes from './jobRoles';
import manningRoutes from './mannings';

const router = express.Router();

router.use('/job', jobRoutes)
router.use('/role', roleRoutes)
router.use('/job-role', jobRoleRoutes)
router.use('/manning', manningRoutes)

export default router;