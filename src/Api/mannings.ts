import express from 'express';
import manningServices from '../Bl/manning-services';

const router = express.Router();

router.post(
    '/',
    manningServices.createManning
)
router.get(
    '/',
    manningServices.getMannings
)
router.delete(
    '/',
    manningServices.deleteManning
)

export default router;