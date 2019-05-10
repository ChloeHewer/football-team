import * as React from "react";

export interface IProps {}

export interface IState {
  numb1: number;
  numb2: number;
  guessedCorrect: string;
}

class Question extends React.Component<IProps, IState> {
  public state = { numb1: 0, numb2: 0, guessedCorrect: "" };
  public render() {
    return (
      <section>
        <button onClick={this.randomNumb}>generate random numbers</button>
        <div>
          What is {this.state.numb1} + {this.state.numb2}
        </div>
        <input type="number" placeholder="0" onChange={this.onChange} />
        <p>{this.state.guessedCorrect} </p>
      </section>
    );
  }

  private randomNumb = () => {
    this.setState({
      numb1: Math.floor(Math.random() * 100),
      numb2: Math.floor(Math.random() * 100)
    });
  };

  private onChange = (event: any) => {
    if (event.currentTarget.value == this.state.numb1 + this.state.numb2) {
      this.setState({ guessedCorrect: "YOU GUESSED CORRECTLY" });
    } else if (
      event.currentTarget.value !==
      this.state.numb1 + this.state.numb2
    ) {
      this.setState({ guessedCorrect: "YOUR GUESS IS WRONG" });
    }
  };
}

export default Question;
