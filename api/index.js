// backend w
const express = require('express');
const userRoute = require('./controller/userRoute'); // Update the import
const errorHandling = require('./middleware/ErrorHandle')
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = +process.env.PORT || 3020;

const app = express();
app.use(errorHandling);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Methods", "*");
  res.header("Access-Control-Request-Methods", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Expose-Headers", "Authorization");
  next();
});



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
