function ForumAnswer(props) {
  var answer = props.answer;

  let markAnswer;
  if (!answer.correct) {
    markAnswer = (
      <span
        className="btn btn-sm btn-primary float-right"
        onClick={() => props.onMarkCorrect(props.id)}
      >
        Mark Correct
      </span>
    );
  }

  return (
    <React.Fragment>
      <div className="card card-default">
        <div
          className={
            !!answer.correct ? "card-body bg-success text-white" : "card-body"
          }
        >
          {answer.body}
          {markAnswer}
        </div>
      </div>
      <br />
    </React.Fragment>
  );
}
