const express = require('express');
const formidable = require('formidable');

const redact = require('./redact');

const router = express.Router();

router.use((request, response, next) => {
  setTimeout(next, 1000);
});

router.get('/', (_, response) => {
  response.json({ statusText: 'success' });
});

router.post('/', (request, response) => {
  const { file, body } = request;

  if (!file) {
    return response.status(400).json({
      statusText: 'failure',
      message: 'You must enter a list of words or phrases to redact.',
    });
  }
  if (!body.banText) {
    return response.status(400).json({
      statusText: 'failure',
      message: 'You must enter a list of words or phrases to redact.',
    });
  }

  const censoredDocument = redact(body.banText, file.path);

  response.json({ statusText: 'success', document: censoredDocument });
});

module.exports = router;
