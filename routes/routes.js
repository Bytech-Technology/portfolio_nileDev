const express = require('express');
const router = express.Router();
const path = require('path'); 
const fs = require('fs');

router.use(express.json());


function loadLocale(lang) {
  try {
    const filepath = path.join(__dirname, `../i18n/${lang}.json`);
    const filecontent = fs.readFileSync(filepath, 'utf-8');
    return JSON.parse(filecontent);
  } catch (error) {
    const filecontent = fs.readFileSync(path.join(__dirname, '../i18n/ES.json'), 'utf-8');
    return JSON.parse(filecontent);
  }
}

router.get(/^\/(en)?$/, (req, res) => {
  const lang = req.params[0]?.toUpperCase() === 'EN' ? 'EN' : 'ES';
  const localeData = loadLocale(lang);
  res.render('index', { t: localeData });
});

module.exports = router;