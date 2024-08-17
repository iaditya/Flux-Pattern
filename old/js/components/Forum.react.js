class Forum extends React.Component {
  state = {
    allAnswers: ForumStore.getAnswers(),
  };

  onAddAnswer = (answer) => {
    //dispatch now, because an event has occured.
    ForumActions.addAnswer(answer);
  };

  _onChange = () => {
    this.setState({ allAnswers: ForumStore.getAnswers() });
  };

  componentDidMount() {
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
