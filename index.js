const express = require('express');
const app = express();

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello Sefo!' });
});

if (require.main === module) {
  app.listen(3030, () => console.log('Server running on port 3030'));
}

module.exports = app;
