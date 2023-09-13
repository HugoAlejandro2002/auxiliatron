const subjectRepository = require('../repositories/subjectRepository');

class SubjectService {
  async getAllSubjects() {
    return await subjectRepository.getAllSubjects();
  }

  async getSubjectById(id) {
    return await subjectRepository.getSubjectById(id);
  }

  async createSubject(subject) {
    return await subjectRepository.createSubject(subject);
  }

  async updateSubject(id, subject) {
    return await subjectRepository.updateSubject(id, subject);
  }

  async deleteSubject(id) {
    return await subjectRepository.deleteSubject(id);
  }
}

module.exports = new SubjectService();
