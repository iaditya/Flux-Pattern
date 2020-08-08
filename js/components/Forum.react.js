class Forum extends React.Component {
  state = {
    allAnswers: {
      1: { body: "option 1", correct: false },
      2: { body: "option 2", correct: false },
      3: { body: "option 3", correct: false },
    },
  };

  onAddAnswer = (answer) => {
    var that = this;
    //dispatch now, because an event has occured.
    ForumDispatcher.dispatch({
      action_type: "ANSWER_ADDED",
      answer: answer,
    });
    var answers = that.state.allAnswers;
    answers[Object.keys(answers).length + 1] = {
      body: answer,
      correct: false,
    };
    that.setState({ allAnswers: answers });
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
