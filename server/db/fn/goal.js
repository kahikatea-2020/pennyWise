const connection = require('../connection')
const snakeCaseKeys = require('snakecase-keys')

function getAllGoals (db = connection) {
  return db('goals')
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function getUserGoals (userId, db = connection) {
  return db('goals')
    .where('user_id', userId)
    .select()
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function addGoal (data, db = connection) {
  return db('goals')
    .insert(snakeCaseKeys(data))
    .then(([id]) => db('goals')
      .where('id', id)
      .select()
      .first())
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function updateGoal (goalId, data, db = connection) {
  return db('goals')
    .where('id', goalId)
    .update(snakeCaseKeys(data))
    .then(() => db('goals')
      .where('id', goalId)
      .select()
      .first())
    .catch(err => {
      // eslint-disable-next-line no-console
      console.error(err)
    })
}

function deleteGoal (goalId, db = connection) {
  return db('goals')
    .where('id', goalId)
    .del()
    .catch(err => {
    // eslint-disable-next-line no-console
      console.error(err)
    })
}

module.exports = {
  getAllGoals,
  getUserGoals,
  addGoal,
  updateGoal,
  deleteGoal
}
