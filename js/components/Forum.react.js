class Forum extends React.Component {
  state = {
    allAnswers: {
      1: { body: "option 1", correct: false },
      2: { body: "option 2", correct: false },
      3: { body: "option 3", correct: false },
    },
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
        <br/>
        <div className="container">
          <ForumQuestion />
          <ForumAnswers allAnswers={this.state.allAnswers} />
          <AddAnswer onAddAnswer={this.onAddAnswer} />
        </div>
      </div>
    );
  }
}
