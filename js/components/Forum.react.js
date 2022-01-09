class Forum extends React.Component {
  state = {
    allAnswers: ForumStore.allAnswers(),
  };

  componentDidMount() {
    ForumStore.onListenChange(this._onChange);
  }

  componentWillUnmount() {
    ForumStore.remove(this._onChange);
  }

  onAddAnswer = (answer) => {
    ForumDispatcher.dispatch({
      type: "NEW_ANSWER_ADDED",
      data: answer,
    });
  };

  _onChange = () => {
    this.setState({ allAnswers: ForumStore.allAnswers() });
  };

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
