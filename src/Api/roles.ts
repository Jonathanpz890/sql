import express from 'express';
import roleServices from '../Bl/role-services';

const router = express.Router();

router.get(
    '/',
    roleServices.getRoles
)

export default router;