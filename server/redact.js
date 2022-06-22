const fs = require('fs');

// splits string on commas and spaces but retains ' and " quoted phrases
const regex = /(?:[^\s,"']+|['"][^,'"]*[\s"'])+/g;

const buildBlacklist = (banString) => {
  // find words/phrases then strip quotation marks
  const blackList = banString.match(regex);

  if (blackList.length > 0) {
    blackList.forEach((item, index) => {
      blackList[index] = item.replace(/['"]+/g, '').toLowerCase();
    });
  }

  console.log('blacklist:', blackList);
  return blackList;
};

const parseDocument = (document) => {
  try {
    const data = fs.readFileSync(document, 'utf-8');
    console.log('doc text:', data);
    fs.unlinkSync(document);
    return data;
  } catch (error) {
    console.error(error);
  }
};

const redact = (blacklist, documentPath) => {
  const blackListArray = buildBlacklist(blacklist);
  const parsedFile = parseDocument(documentPath);

  // build regex from blacklist to apply to document
  const blackListRegex = new RegExp(
    blackListArray
      // Escape special characters
      .map((s) => s.replace(/[()[\]{}*+?^$|#.,\/\\\s-]/g, '\\$&'))
      .sort((a, b) => b.length - a.length)
      .join('|'),
    'gi'
  );
  const censoredDocument = parsedFile.replace(blackListRegex, 'XXXX');

  return censoredDocument;
};

module.exports = redact;
