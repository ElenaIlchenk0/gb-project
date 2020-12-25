const db = './src/db';
const fs = require('fs');

let mod = {
  async loadMsgs(req, res) {
    fs.readFile(`${db}/users/${req.params.user}.json`, 'utf-8', (e, data) => {
      if (!e) {
        let msgs = JSON.parse(data).messages;
        res.json(msgs);
      }
    });
  },
};

module.exports = mod;
