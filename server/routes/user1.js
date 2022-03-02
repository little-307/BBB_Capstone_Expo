import express from 'express';
import { checkDuplicateEmail } from '../middleware/verifySignUp.js';

import { signIn, signUp, } from '../controllers/user1.js';

const router = express.Router();

router.post( '/signin', signIn );
router.post( '/signup', checkDuplicateEmail , signUp );

export default router;