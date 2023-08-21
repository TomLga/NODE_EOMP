// backend w
const express = require('express');
const userRoute = require('./controller/userRoute'); // Update the import

const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = +process.env.PORT || 3000;

const app = express();

app.use(
  express.static('./static'),
  express.urlencoded({
    extended: false,
  }),
  cookieParser(),
  cors(),
  userRoute.setRoute 
);

app.get('/', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, './static/HTML/index.html')
  );
});

app.listen(port, () => {
  console.log(`SERVER IS PORT ${port}`);
});
