class AddAnswer extends React.Component {
  state = {
    answer: "",
  };

  onAnswerChange = (text) => this.setState({ answer: text });

  onAddAnswer = () => {
    this.props.onAddAnswer(this.state.answer);
  };

  render() {
    return (
      <React.Fragment>
        <h4>Add an answer</h4>
        <textarea
          onChange={(e) => this.onAnswerChange(e.target.value)}
          value={this.state.answer}
          className="col-md-6 col-xs-8"
        ></textarea>
        <br />
        <br />
        <input
          onClick={this.onAddAnswer}
          type="button"
          className="btn btn-primary"
          value="Add"
        />
        <hr />
      </React.Fragment>
    );
  }
}
