function ForumAnswer(props) {
  var answer = props.answer;
  return (
    <React.Fragment>
      <div className="card card-default">
        <div className="card-body">
          {answer.body}
          <div className="float-right">
            <small>
              <a onClick={() => props.onMarkCorrect(answer)} href="#">
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
