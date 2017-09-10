const superagent = require('superagent');
const fs = require('fs');
const path = require('path');

const generate = () => {
  const pages = [
    '',
    'about',
    'courses',
    'programming',
    'pythoncourse',
    'science',
    'webdevcourse'
  ];
  const newPath = path.join(__dirname + '/generated');

  for (let i = 0; i < pages.length; i++) {
    superagent
      .get(`http://localhost:3000/${pages[i]}`)
      .then(response => {
        var name = pages[i];
        if (name === '') {
          name = 'index';
        }
        const file = `${newPath}/${name}.html`;
        try {
          fs.unlinkSync(file);
        } catch (err) {
          console.log('no file');
        }
        fs.writeFile(file, response.text, function(err) {
          if (err) {
            console.log(err);
            return false;
          }
          return true;
        });
      })
      .catch(err => {
        console.log('err', err);
      });
  }
};

generate();
