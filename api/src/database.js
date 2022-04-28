const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/hospital-alerce';
  // 'mongodb+srv://hospital-alerce:aJpHKoevpAhkiNuB@cluster0.6pwpz.mongodb.net/hospital-alerce';

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((db) => console.log('db is connected'))
  .catch((err) => console.error(err));

module.exports = mongoose;
