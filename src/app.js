/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "our", "his", "her", "their"];
  let adj = ["great", "awesome", "terrible", "horrifying", "funny"];
  let noun = ["dog", "cat", "mailman", "surfer", "flask"];
  let ext = [".com", ".org,", ".net", ".io", ".us"];

  for (let i = 0; i < pronoun.length; i++) {
    let a = pronoun[i];
    for (let i = 0; i < adj.length; i++) {
      let b = adj[i];
      for (let i = 0; i < noun.length; i++) {
        let c = noun[i];
        for (let i = 0; i < ext.length; i++) {
          let d = ext[i];
          console.log(a + b + c + d);
          document.getElementById("generated-names").innerHTML +=
            a + b + c + d + "\n";
        }
      }
    }
  }
};
