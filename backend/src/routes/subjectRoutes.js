const express = require('express');
const router = express.Router();
const subjectController = require('../controllers/subjectController');

router.get('/api/subjects', subjectController.getAllSubjects);
router.get('/api/subjects/:id', subjectController.getSubjectById);
router.post('/api/subjects', subjectController.createSubject);
router.put('/api/subjects/:id', subjectController.updateSubject);
router.delete('/api/subjects/:id', subjectController.deleteSubject);

module.exports = router;
