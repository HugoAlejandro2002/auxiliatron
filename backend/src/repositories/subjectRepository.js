const knex = require('knex')(require('../config/knex-pg').development);

class SubjectRepository {
  async getAllSubjects() {
    return await knex('subjects').select('*');
  }

  async getSubjectById(id) {
    return await knex('subjects').where({ id }).first();
  }

  async createSubject(subject) {
    return await knex('subjects').insert(subject);
  }

  async updateSubject(id, subject) {
    return await knex('subjects').where({ id }).update(subject);
  }

  async deleteSubject(id) {
    return await knex('subjects').where({ id }).del();
  }
}

module.exports = new SubjectRepository();
