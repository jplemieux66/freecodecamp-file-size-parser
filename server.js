const express = require('express');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });

const port = process.env.PORT || 3000;
const app = express();

app.use(express.static('public'));

app.post('/', upload.single('file'), (req, res) => {
  var responseObject = {
    size: req.file.size,
    unit: 'bytes'
  };

  res.send(JSON.stringify(responseObject, null, 2));
});

app.listen(port);
console.log(`Server is listening on port ${port}`);