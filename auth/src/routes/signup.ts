import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { RequestValidationError } from '../errors/requestValidationError';
import { DatabaseConnectionError } from '../errors/databaseConnectionError';

const router = express.Router();

router.post('/api/users/signup', [
    body('email')
        .isEmail()
        .withMessage('Please proivde a valid email.'),
    body('password').trim()
        .isLength({ min: 6, max: 10 })
        .withMessage('Password must be between 6 to 10 characters long.')
], async (req: Request, res: Response) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        throw new RequestValidationError(errors.array());
    }

    console.log('Creating a user...');
    throw new DatabaseConnectionError();

    res.send({});
});

export { router as signupRouter };