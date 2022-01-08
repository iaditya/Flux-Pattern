class ForumAnswers extends React.Component {
  _onMarkCorrect = (id) => {
    ForumDispatcher.dispatch({
      type: "ANSWER_MARKED_CORRECT",
      data: id,
    });
  };

  render() {
    var allAnswers = this.props.allAnswers;

    var answers = [];
    for (var key in allAnswers) {
      answers.push(
        <ForumAnswer
          onMarkCorrect={this._onMarkCorrect}
          key={key}
          id={key}
          answer={allAnswers[key]}
        />
      );
    }
    return <div>{answers}</div>;
  }
}
