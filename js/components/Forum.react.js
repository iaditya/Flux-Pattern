class Forum extends component {
  state = {
    allAnswers: {
      1: { body: "option 1", correct: false },
      1: { body: "option 2", correct: false },
      1: { body: "option 3", correct: false },
    },
  };

  render() {
    return (
      <div>
        <ForumHeader allAnswers={this.state.allAnswers} />
      </div>
    );
  }
}
