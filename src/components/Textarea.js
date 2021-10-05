import { Component } from "react";

class Textarea extends Component {
  constructor() {
    super();
    this.state = {
      wordCount: 0
    };
    this.countWords = this.countWords.bind(this);
  }
  countWords() {
    // Get the input text value
    var text = document.getElementById("data").value;

    // Initialize the word counter
    var numWords = 0;

    // Loop through the text
    // and count spaces in it
    for (var i = 0; i < text.length; i++) {
      var currentCharacter = text[i];

      // Check if the character is a space
      if (currentCharacter === " ") {
        numWords += 1;
      }
    }

    // Add 1 to make the count equal to
    // the number of words
    // (count of words = count of spaces + 1)
    numWords += 1;

    // Display it as output
    this.setState((lastCount) => {
      return {
        wordCount: (lastCount.wordCount = numWords)
      };
    });
  }
  render() {
    return (
      <div>
        <textarea
          id="data"
          cols="30"
          rows="10"
          onInput={this.countWords}
        ></textarea>
        <h2>word: {this.state.wordCount}</h2>
      </div>
    );
  }
}

export default Textarea;
