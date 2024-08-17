import React from "react";
import {ForumAnswer} from "./ForumAnswer";


export const ForumAnswers = (props) => {
    const { allAnswers } = props;

    const _onMarkCorrect = (id) => {
        console.log("_onMarkCorrect ", id);
    }

    const answers = [];
    for (let key in allAnswers) {
        answers.push(
            <ForumAnswer
                key={key}
                id={key}
                onMarkCorrect={_onMarkCorrect}
                answer={allAnswers[key]}
            />
        );
    }
    return <div>{answers}</div>;
}
