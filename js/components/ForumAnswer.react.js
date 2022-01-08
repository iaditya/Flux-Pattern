function ForumAnswer(props) {
  var answer = props.answer;
  return (
    <React.Fragment>
      <div className="card card-default">
        <div className="card-body">
          {answer.body}
          <span
            className="btn btn-sm btn-primary float-right"
            onClick={() => props.onMarkCorrect(props.id)}
          >
            Mark Correct
          </span>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
}
