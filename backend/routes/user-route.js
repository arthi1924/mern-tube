import express from "express";
import { signupController } from "../controllers/user-controller.js";
const router = express.Router();

// router.get('');
router.post('/signup', signupController);
// router.put('');
// router.delete('');

export default router;
