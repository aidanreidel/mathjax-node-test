const express = require("express");
const app = express();
const port = 3000;

// a simple TeX-input example
var mjAPI = require("mathjax-node");
mjAPI.config({
  MathJax: {
    // traditional MathJax configuration
  }
});
mjAPI.start();

var yourMath = "E = mc^2";

mjAPI.typeset(
  {
    math: yourMath,
    format: "TeX", // or "inline-TeX", "MathML"
    xmlns: "mml",
    mml: true,
  },
  function(data) {
    if (!data.errors) {
      console.log(data.mml);
      app.use(express.static("./"));

      app.get("/render", (req, res) => res.send(data));

      app.listen(port, () =>
        console.log(`Example app listening on port ${port}!`)
      );
    }
  }
);
