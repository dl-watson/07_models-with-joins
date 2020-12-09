const app = require("./lib/app");

const PORT = process.env.PORT || 7890;

app.listen(7890, () => {
  console.log(`Started on ${PORT}`);
});
