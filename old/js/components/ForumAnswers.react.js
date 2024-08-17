class ForumAnswers extends React.Component {
  _onMarkCorrect(id) {
    //dispatch now, because an event has occured.
    ForumActions.markAnswercorrect(id);
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
