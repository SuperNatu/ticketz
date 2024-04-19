import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Please proivde a valid email.'),
    body('password').trim()
        .isLength({ min: 6, max: 10 })
        .withMessage('Password must be between 6 to 10 characters long.')
], (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(400).send(errors.array());
    }

    const { email, password } = req.body;

    console.log('Creating a user...');

    res.send({});
});

export { router as signupRouter };