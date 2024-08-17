class AddAnswer extends React.Component {
  state = {
    answer: "",
  };

  onAddHandler = (e) => {
    this.props.onAddAnswer(this.state.answer);
  };

  textChangehandler = (e) => {
    this.setState({ answer: e.target.value });
  };

  render() {
    return (
      <React.Fragment>
        <h4>Add an answer</h4>
        <textarea
          name="answer"
          value={this.state.answer}
          onChange={this.textChangehandler}
          className="col-md-6 col-xs-8"
        ></textarea>
        <br />
        <br />
        <input
          type="button"
          onClick={this.onAddHandler}
          className="btn btn-primary"
          value="Add"
        />
        <hr />
      </React.Fragment>
    );
  }
}
