import { validationResult, check } from 'express-validator';

// Middleware function to handle validation errors
const handleValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

const validateApplication = [
  check('firstName').notEmpty().withMessage('First name is required'),
  check('lastName').notEmpty().withMessage('Last name is required'),
  check('email')
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Invalid email address'),
  check('businessName').notEmpty().withMessage('Business name is required'),
  check('taxId').notEmpty().isNumeric().withMessage('Tax ID must be a numeric value'),
  check('yearEstablished').notEmpty().isInt({ min: 1900, max: new Date().getFullYear() }).withMessage('Invalid year'),
  check('purpose').optional(),
  check('amountRequested').notEmpty().isNumeric().withMessage('Amount must be a numeric value'),
  check('balanceSheet').isArray().withMessage('Balance sheet must be an array')
    .bail(),
  handleValidationErrors
]

export {
  validateApplication
}