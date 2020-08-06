function ForumAnswers(props) {
  var allAnswers = props.allAnswers;

  var answers = [];
  for (var key in allAnswers) {
    answers.push(<ForumAnswer key={key} id={key} answer={allAnswers[key]} />);
  }
  return <div>{answers}</div>;
}
