class ForumAnswers extends React.Component {
  _onMarkCorrect(answer) {
    let that = this;
    //dispatch now, because an event has occured.
    ForumDispatcher.dispatch({
      actionType: "ANSWER_MARKED_CORRECT",
      answer: answer,
    });
  }

  render() {
    var allAnswers = this.props.allAnswers;

    var answers = [];
    for (var key in allAnswers) {
      answers.push(
        <ForumAnswer
          key={key}
          id={key}
          onMarkCorrect={this._onMarkCorrect}
          answer={allAnswers[key]}
        />
      );
    }
    return <div>{answers}</div>;
  }
}
