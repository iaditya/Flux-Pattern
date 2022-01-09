class Forum extends React.Component {
  state = {
    allAnswers: ForumStore.allAnswers(),
  };

  onAddAnswer = (answer) => {
    ForumDispatcher.dispatch({
      type: "NEW_ANSWER_ADDED",
      data: answer,
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
