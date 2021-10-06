import { Component } from "react";
import { Card } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";

import "../styles/Textarea.css";

class Textarea extends Component {
  constructor() {
    super();
    this.state = {
      wordCount: 0
    };
    this.countWords = this.countWords.bind(this);
  }

  countWords() {
    var text = document.getElementById("data").value;
    var numWords = 0;
    for (var i = 0; i < text.length; i++) {
      var currentCharacter = text[i];
      if (currentCharacter === " ") {
        numWords += 1;
      }
    }
    numWords += 1;

    this.setState((lastCount) => {
      return {
        wordCount: (lastCount.wordCount = numWords)
      };
    });
  }
  render() {
    return (
      <div>
        <center style={{ marginTop: 100 }}>
          {/* <textarea cols="30" rows="10" onInput={this.countWords}></textarea> */}

          {/* <textarea id="data" cols="1" onInput={this.countWords}></textarea> */}

          {/* <h2>word: {this.state.wordCount}</h2> */}
          <Card>
            <Card.Body>
              <TextareaAutosize
                id="data"
                onInput={this.countWords}
                className="form-control"
              />{" "}
              <br />
              <hr />
              <Card.Text>
                <h3 className="fw-bolder">{this.state.wordCount} words</h3>
              </Card.Text>
            </Card.Body>
          </Card>
        </center>
      </div>
    );
  }
}

export default Textarea;
