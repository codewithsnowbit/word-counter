import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";

import "../styles/Textarea.css";

class Textarea extends Component {
  constructor() {
    super();
    this.state = {
      wordCount: 0,
      longCount: 0,
      longWord: ""
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
    this.handleLongWordCount();
    this.longestWord();
  }
  handleLongWordCount() {
    const text = document.getElementById("data");
    const strSplit = text.value.split(" ");

    let longestWord = 0;
    for (var i = 0; i < strSplit.length; i++) {
      if (strSplit[i].length > longestWord) {
        longestWord = strSplit[i].length;
      }
    }
    this.setState((lastData) => {
      return {
        longCount: (lastData.longCount = longestWord)
      };
    });
  }
  longestWord() {
    let text = document.getElementById("data").value;
    // Split the string into array
    text = text.split(" ");
    // Return the first sorted item of the Array
    const output = text.sort((a, b) => b.length - a.length)[0];
    this.setState((lastData) => {
      return {
        longWord: (lastData.longWord = output)
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
              <ListGroup variant="flush">
                <ListGroup.Item>
                  Words: <span>{this.state.wordCount}</span>{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  Longest word : {this.state.longWord}
                </ListGroup.Item>
                <ListGroup.Item>
                  Longest word count: {this.state.longCount}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </center>
      </div>
    );
  }
}

export default Textarea;
