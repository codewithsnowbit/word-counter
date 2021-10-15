import { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";
import TextareaAutosize from "react-textarea-autosize";
import copy from "copy-to-clipboard";
import "../styles/Textarea.css";

class Textarea extends Component {
  constructor() {
    super();
    this.state = {
      wordCount: 0,
      longCount: 0,
      charCount: 0,
      longWord: ""
    };
    this.countWords = this.countWords.bind(this);
  }
  componentDidMount() {
    this.handleLoad();
    this.countWords();
  }

  componentWillUnmount() {
    window.removeEventListener("load", this.handleLoad);
  }
  countWords() {
    
    var text = document.getElementById("data").value;
    if(text && text.length>0 && text!=" " && text!="\n"){
      console.log(text.length);
      var numWords = text.match(/(\w+)/g).length;
    }else{
      var numWords= 0;
    } 

    this.setState((lastCount) => {
      return {
        wordCount: (lastCount.wordCount = numWords)
      };
    });
    this.handleLongWordCount();
    this.longestWord();
    this.charaCount();
    this.handleURL();
  }
  handleLongWordCount() {

    const text = document.getElementById("data");
    const strSplit = text.value.split(/\s+/);

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
    this.typing();

  }
  longestWord() {
    let text = document.getElementById("data").value;
    // Split the string into array
    text = text.split(/\s+/);
    // Return the first sorted item of the Array
    const output = text.sort((a, b) => b.length - a.length)[0];
    this.setState((lastData) => {
      return {
        longWord: (lastData.longWord = output)
      };
    });
  }
  charaCount() {
    const data = document.getElementById("data").value;
    this.setState((lastCount) => {
      charCount: lastCount.charCount = data.length;
    });
  }
  typing() {
    const audio = new Audio("/type3.wav");
    audio.play();
  }
  handleURL() {
    const i = document.getElementById("data");
    i.srcdoc = i.value;
    window.location.hash = btoa(JSON.stringify({ h: i.value }));
  }
  handleLoad() {
    var x = atob(window.location.hash.substr(1));
    if (x) {
      x = JSON.parse(x);
      var vol = x.h;
      this.handleURL();
    }
    let idoc = document.getElementById("data");
    idoc.onerror = function () {
      return console.log("Error");
    };
    idoc.value = vol ? vol : "";
    // eyJoIjoidW5kZWZpbmVkIn0
  }
  handleCopy() {
    copy(window.location);
    const text = document.getElementById("copy");
    text.innerText = "URL Copied 🎉";
    setTimeout(() => {
      const text = document.getElementById("copy");
      text.innerText = "Share page";
    }, 5000);
  }
  handleCopyText() {
    copy(document.getElementById("data").value);
    const text = document.getElementById("copyText");
    text.innerText = "URL Copied 🎉";
    setTimeout(() => {
      const text = document.getElementById("copyText");
      text.innerText = "Copy Text!";
    }, 5000);
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
          crossOrigin="anonymous"
        />
        <h1 className="text-center  title">
          Count words with just a few clicks
        </h1>
        <center style={{ marginTop: 100 }}>
          {/* <textarea cols="30" rows="10" onInput={this.countWords}></textarea> */}

          {/* <textarea id="data" cols="1" onInput={this.countWords}></textarea> */}

          {/* <h2>word: {this.state.wordCount}</h2> */}
          <Card className="cardBg">
            <Card.Body>
              <TextareaAutosize
                id="data"
                onInput={this.countWords}
                className="form-control"
                placeholder="Wooooo!"
                spellCheck="true"
              />{" "}
              <br />
              <ListGroup variant="flush">
                <ListGroup.Item className="stats childBg">
                  Words count: <span>{this.state.wordCount}</span>{" "}
                </ListGroup.Item>
                <ListGroup.Item className="stats childBg">
                  Characters count: <span>{this.state.charCount}</span>{" "}
                </ListGroup.Item>
                <ListGroup.Item className="stats childBg">
                  Longest word: {this.state.longWord}
                </ListGroup.Item>
                <ListGroup.Item className="stats childBg">
                  Longest word count: {this.state.longCount}
                </ListGroup.Item>{" "}
                <hr />
                <ListGroup.Item className="childBg share" align="right">
                  <span
                    id="copyText"
                    onClick={this.handleCopyText}
                    role="img"
                    aria-label="clipboard"
                  >
                    Copy Text &nbsp;
                    <i className="fas fa-copy" />
                  </span>
                </ListGroup.Item>
                <ListGroup.Item className="childBg share" align="right">
                  <span
                    id="copy"
                    onClick={this.handleCopy}
                    role="img"
                    aria-label="clipboard"
                  >
                    Share / Save Page &nbsp;
                    <i className="fas fa-copy" />
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
          {/* <div className="globe"></div> */}
        </center>
      </div>
    );
  }
}

export default Textarea;
