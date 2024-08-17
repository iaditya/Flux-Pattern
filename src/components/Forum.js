import React, { useEffect, useState } from "react";
import { ForumHeader } from "./ForumHeader";
import { ForumQuestion } from "./ForumQuestion";
import { AddAnswer } from "./AddAnswer";
import { ForumAnswers } from "./ForumAnswers";

export const Forum = () => {

    const [state, setState] = useState({ allAnswers: [] });

    useEffect(() => {
        //get data from store.
    }, []);

    const onAddAnswer = (answer) => console.log("onAddAnswer clicked ", answer);

    return (<div>
        <ForumHeader />
        <br />
        <div className="container">
            <ForumQuestion />
            <ForumAnswers allAnswers={state.allAnswers} />
            <AddAnswer onAddAnswer={onAddAnswer} />
        </div>
    </div>)
}