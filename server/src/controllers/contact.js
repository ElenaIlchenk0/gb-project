const db = './src/db';
const fs = require('fs');

let mod = {
  async loadContacts(req, res) {
    fs.readFile(`${db}/users/${req.params.user}.json`, 'utf-8', (e, data) => {
      if (!e) {
        let contacts = JSON.parse(data).contacts;
        res.json(contacts);
      }
    });
  },
};

module.exports = mod;
