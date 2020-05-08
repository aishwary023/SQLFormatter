import React, { Component } from "react";
import "./App.css";
import Input from "./components/input";
import Output from "./components/output";
import Navbar from "./components/navbar";
import Button from "./components/button";

class App extends Component {
  state = {
    inpValue: "",
  };
  render() {
    return (
      <div>
        <Navbar />
        <div className="container-fluid" id="container">
          <Input onChange={this.handleChange} />
          <Button onClick={this.handleSubmit} />
          <Output />
        </div>
      </div>
    );
  }

  handleChange = () => {
    const inp = document.getElementById("inputSQL").value;
    console.log(inp);
    this.setState({ inpValue: inp });
  };

  handleSubmit = () => {
    const text = this.state.inpValue;
    console.log(text.length);

    const formattedText = this.formatText(text);
    console.log(formattedText);
    document.getElementById("outputSQL").value = formattedText;
  };
  tokenize = (s, parsers, deftok) => {
    var m,
      r,
      t,
      tokens = [];
    while (s) {
      t = null;
      m = s.length;
      for (var key in parsers) {
        r = parsers[key].exec(s);
        // try to choose the best match if there are several
        // where "best" is the closest to the current starting point
        if (r && r.index < m) {
          t = {
            token: r[0],
            type: key,
            matches: r.slice(1),
          };
          m = r.index;
        }
      }
      if (m) {
        // there is text between last token and currently
        // matched token - push that out as default or "unknown"
        tokens.push({
          token: s.substr(0, m),
          type: deftok || "unknown",
        });
      }
      if (t) {
        // push current token onto sequence
        tokens.push(t);
      }
      s = s.substr(m + (t ? t.token.length : 0));
    }
    return tokens;
  };

  formatText = (text) => {
    const tokienList1 = this.tokenize(text, { word: /\w+/ }, "invalid");
    const tokienList = [...tokienList1.filter((t) => t.type === "word")];

    console.log(tokienList);

    var sql = "";

    for (var i = 0; i < tokienList.length; i++) {
      sql = sql.concat(tokienList[i].token).concat("\n");
    }

    return sql;
  };
}
export default App;
