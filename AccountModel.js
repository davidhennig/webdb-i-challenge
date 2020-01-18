const db = require("./data/dbConfig");

module.exports = {
  get,
  getById,
  insert,
  update,
  remove
};

function get() {
  return db("accounts");
}

function getById(id) {
  return db("accounts")
    .where({ id })
    .first();
}

function insert(user) {
  return db("accounts")
    .insert(user)
    .where(ids => {
      return getById(ids[0]);
    });
}

function update(id, changes) {
  return db("accounts")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("accounts")
    .where("id", id)
    .del();
}
