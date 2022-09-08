import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Config from "../components/Config";
import EndGame from "../components/EndGame";
import styles from "../styles/Home.module.css";

const Question = () => {
  const router = useRouter()
  const [indexState, setIndexState] = useState(0);
  const [record, setRecord] = useState(0);
  const [cardDataBase, setCardDataBase] = useState([]);
  const [session, setSession] = useState({});

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/auth/revition");
      setSession(response.data);
    }
    fetchData();
  }, []);

  const reStartScore = async () => {
    const response = await axios.delete("/api/delete");
  };
  const getCards = async () => {
    const response = await axios.get("/api/card");
    console.log(response.data);
    setCardDataBase(response.data);
  };
  useEffect(() => {
    getCards();
  }, []);

  const getScores = async () => {
    const response = await axios.post("/api/score", {
      value: record,
    });
  };

  const getOut = () => {
    if (cardDataBase[5] !== undefined) {
      if (indexState < 16) {
        return (
          <Card
            indexState={indexState}
            setIndexState={setIndexState}
            card={cardDataBase}
            score={record}
            setScore={setRecord}
          />
        );
      } else {
        return (
          <>
            <EndGame
              score={record}
              setFunction={setIndexState}
              reStartFunction={setRecord}
              setDataBase={reStartScore}
              functions={getScores}
            />
          </>
        );
      }
    } else {
      return <h1>espere</h1>;
    }
  };
  if (session.status === true) {
    return (
      <>
        <div className="bg-[url('/img/tropical.jpg')] w-full h-screen bg-cover flex justify-center items-center font-sans">
          <div className={"fixed mr-5 mt-5 " + styles.fix}>
            <Config />
          </div>
          {getOut()}
        </div>
      </>
    );
  } else if(session.status === false) {
    router.push('/')
  } else {
    return(
      <div></div>
    )
  }
};

export default Question;
