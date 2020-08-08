class Forum extends React.Component {
  state = {
    allAnswers: ForumStore.getAnswers(),
  };

  onAddAnswer = (answer) => {
    var that = this;
    //dispatch now, because an event has occured.
    ForumDispatcher.dispatch({
      actionType: "ANSWER_ADDED",
      answer: answer,
    });
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
