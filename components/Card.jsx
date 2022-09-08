import Answer from "./Answer";

const Card = (props) => {
  const i = props.indexState;

  if ([0, 3, 7, 8, 9, 11].includes(i)) {
    return (
      <Answer
        card={props.card}
        index={i}
        setFunction={props.setIndexState}
        setScore={props.setScore}
        score={props.score}
        condition={"firts"}
      />
    );
  } else if ([5, 6, 10].includes(i)) {
    return (
      <Answer
        card={props.card}
        index={i}
        setFunction={props.setIndexState}
        setScore={props.setScore}
        score={props.score}
        condition={"second"}
      />
    );
  } else if ([1, 2, 12, 15].includes(i)) {
    return (
      <Answer
        card={props.card}
        index={i}
        setFunction={props.setIndexState}
        setScore={props.setScore}
        score={props.score}
        condition={"third"}
      />
    );
  } else {
    return (
      <Answer
        card={props.card}
        index={i}
        setFunction={props.setIndexState}
        setScore={props.setScore}
        score={props.score}
        condition={"fourth"}
      />
    );
  }
};

export default Card;
