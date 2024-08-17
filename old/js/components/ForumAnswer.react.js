function ForumAnswer(props) {
  var answer = props.answer;

  var classes = !answer.correct ? "card-body" : "card-body bg-success";

  return (
    <React.Fragment>
      <div className="card card-default">
        <div className={classes}>
          {answer.body}
          <div className="float-right">
            <small>
              <a onClick={() => props.onMarkCorrect(props.id)} href="#">
                Mark as correct
              </a>
            </small>
          </div>
        </div>
      </div>
      <br />
    </React.Fragment>
  );
}
