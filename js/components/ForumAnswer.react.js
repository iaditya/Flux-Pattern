function ForumAnswer(props) {
  var answer = props.answer;
  return (
    <React.Fragment>
      <div className="card card-default">
        <div className="card-body">{answer.body}</div>
      </div>
      <br />
    </React.Fragment>
  );
}
