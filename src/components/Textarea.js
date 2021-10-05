import { Component } from "react";
import TextareaAutosize from "react-textarea-autosize";

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
        <center style={{ marginTop: 150 }}>
          {/* <textarea cols="30" rows="10" onInput={this.countWords}></textarea> */}
          <TextareaAutosize id="data" onInput={this.countWords} cols="50" />

          <h2>word: {this.state.wordCount}</h2>
        </center>
      </div>
    );
  }
}

export default Textarea;
