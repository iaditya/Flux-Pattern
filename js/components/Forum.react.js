class Forum extends React.Component {
  state = {
    allAnswers: ForumStore.getAnswers(),
  };

  onAddAnswer = (answer) => {
    //dispatch now, because an event has occured.
    ForumDispatcher.dispatch({
      actionType: "ANSWER_ADDED",
      answer: answer,
    });
  };

  _onChange = () => {
    this.setState({ allAnswers: ForumStore.getAnswers() });
  };

  componentDidMount() {
    console.log("componentDidMount");
    ForumStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {
    ForumStore.removeListner("Change", this._onChange);
  }

  render() {
    return (
      <div>
        <ForumHeader />
        <br />
        <div className="container">
          <ForumQuestion />
          <ForumAnswers allAnswers={this.state.allAnswers} />
          <AddAnswer onAddAnswer={this.onAddAnswer} />
        </div>
      </div>
    );
  }
}
