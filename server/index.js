const express = require('express');
const router = require('./router');
const multer = require('multer');

const PORT = process.env.PORT || 8080;

const app = express();
const upload = multer({ dest: 'documents/' });

// init plugin
app.use(upload.single('data'));

// init route
app.use('/censor', router);

app.listen(PORT, () => {
  console.log(`Server is now listening on port: ${PORT}`);
});

module.exports = app;
