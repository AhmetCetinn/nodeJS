var express = require("express");
const app = express();
app.set('view engine', 'pug')
app.get("/", (req, res) => {
  //res.send("Merhaba express");
  res.render('./index.pug', {name:'ahmett'})
  //res.render('./subcomponent.pug', {name:'ahmett'})
});
app.listen(3001);
