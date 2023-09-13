const subjectService = require('../services/subjectService');

exports.getAllSubjects = async (req, res) => {
  const subjects = await subjectService.getAllSubjects();
  res.json(subjects);
};

exports.getSubjectById = async (req, res) => {
  const id = req.params.id;
  const subject = await subjectService.getSubjectById(id);
  if (subject) {
    res.json(subject);
  } else {
    res.status(404).json({ message: 'Subject not found' });
  }
};

exports.createSubject = async (req, res) => {
  const subject = req.body;
  await subjectService.createSubject(subject);
  res.status(201).json({ message: 'Subject created' });
};

exports.updateSubject = async (req, res) => {
  const id = req.params.id;
  const subject = req.body;
  await subjectService.updateSubject(id, subject);
  res.json({ message: 'Subject updated' });
};

exports.deleteSubject = async (req, res) => {
  const id = req.params.id;
  await subjectService.deleteSubject(id);
  res.json({ message: 'Subject deleted' });
};
