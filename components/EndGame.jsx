import Image from "next/image";
import { useState } from "react";
import axios from "axios";

const EndGame = (props) => {
  const [open, setOpen] = useState(false);
  const [top, setTop] = useState([]);
  const [user, setUser] = useState([]);

  const getTop = async () => {
    const response = await axios.get("/api/top");
    setTop(response.data.top);
    setUser(response.data.userTop);
  };

  const changeOpen = () => {
    if (open) {
      return (
        <div
          className="w-28 h-10 bg-amber-800 rounded-lg flex justify-center items-center mb-5 font-sans"
          onClick={() => {
            setOpen(!open);
            getTop();
          }}
        >
          <div className="w-10 h-8">
            <Image
              alt="icon arrow"
              src="/arrow_down.png"
              width="64px"
              height="44px"
            />
          </div>
        </div>
      );
    } else {
      return (
        <div
          className="w-28 h-10 bg-amber-800 rounded-lg flex justify-center items-center mb-5 font-sans"
          onClick={() => {
            setOpen(!open);
            getTop();
          }}
        >
          <div className="w-10 h-8">
            <Image
              alt="icon arrow"
              src="/arrow.png"
              width="64px"
              height="44px"
            />
          </div>
        </div>
      );
    }
  };

  return (
    <div className="bg-[url('/img/fish.jpg')] w-11/12 h-5/6 flex flex-col items-center text-center">
      <div className="flex flex-col w-96 mt-10 mb-5 h-40 justify-center items-center">
        <h2 className="text-yellow-400 font-black text-6xl mb-5">End Game</h2>
        <p className="mb-4 bg-amber-800 text-yellow-100 py-2 px-5 rounded-lg">
          Tus resultados son: {props.score}/16
        </p>
        <p
          onClick={() => {
            props.setFunction(0);
            props.reStartFunction(0);
            props.setDataBase();
          }}
          className="px-2 py-2 bg-yellow-300 w-40 rounded-lg text-amber-800 hover:bg-yellow-500 pointer transition duration-300 font-bold cursor-pointer"
        >
          Re Start
        </p>
      </div>

      <div>
        <p
          onClick={() => props.functions()}
          className="px-2 py-2 mb-5 bg-yellow-300 w-40 rounded-lg text-amber-800 hover:bg-yellow-500 pointer transition duration-300 font-bold cursor-pointer"
        >
          Save Score
        </p>
      </div>

      {changeOpen()}
      <div className="flex w-5/6 justify-center">
        <div className="w-3/6 h-7">
          <p className="w-12/12 h-7 bg-amber-800 border-2 border-black text-yellow-400">
            User Name
          </p>
          {user.map((e, i) => (
            <p
              className="w-12/12 h-7 bg-amber-800 border-2 border-black text-yellow-400"
              key={i}
            >
              {e}
            </p>
          ))}
        </div>
        <div className="w-2/6 h-7">
          <p className="w-11/12 h-7 bg-amber-800 border-2 border-black text-yellow-400">
            Score
          </p>
          {top.map((e, i) => (
            <p
              className="w-11/12 h-7 bg-amber-800 border-2 border-black text-yellow-400"
              key={i}
            >
              {e.score}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EndGame;
