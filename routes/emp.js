// In routes/emp.js
const express = require('express');
const router = express.Router();
const EmpController = require('../controllers/empController');

router.get('/employees', EmpController.getAllEmployees);
router.post('/employees', EmpController.createEmployee);
router.get('/employees/:eid', EmpController.getEmployeeById);
router.put('/employees/:eid', EmpController.updateEmployee);
router.delete('/employees', EmpController.deleteEmployee);

module.exports = router;
