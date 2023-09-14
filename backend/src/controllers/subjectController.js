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
  const subject = await subjectService.getSubjectById(id);
  if (subject) {
    const updatedSubject = req.body;
    await subjectService.updateSubject(id, updatedSubject);
    res.json({ message: 'Subject updated' });
  } else {
    res.status(404).json({ message: 'Subject not found' });
  }
};

exports.deleteSubject = async (req, res) => {
  const id = req.params.id;
  const subject = await subjectService.getSubjectById(id);
  if (subject) {
    await subjectService.deleteSubject(id);
    res.json({ message: 'Subject deleted' });
  } else {
    res.status(404).json({ message: 'Subject not found' });
  }
};
