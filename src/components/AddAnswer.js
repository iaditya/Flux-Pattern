import React, { useState } from "react";

export const AddAnswer = (props) => {

    const [state, setState] = useState({
        answer: "",
    })

    const onAddHandler = () => {
        props.onAddAnswer(state.answer);
    };

    const textChangehandler = (e) => {
        setState({ ...state, answer: e.target.value });
    };

    return (
        <React.Fragment>
            <h4>Add an answer</h4>
            <textarea
                name="answer"
                value={state.answer}
                onChange={textChangehandler}
                className="col-md-6 col-xs-8"
            ></textarea>
            <br />
            <br />
            <input
                type="button"
                onClick={onAddHandler}
                className="btn btn-primary"
                value="Add"
            />
            <hr />
        </React.Fragment>
    );
}
