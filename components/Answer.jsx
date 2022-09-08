function Answer(props) {
  const condition = props.condition;
  const title = props.card[props.index].title;
  const answer_firts = props.card[props.index].answer_firts;
  const answer_second = props.card[props.index].answer_second;
  const answer_third = props.card[props.index].answer_third;
  const answer_fourth = props.card[props.index].answer_fourth;

  if (condition === "firts") {
    return (
      <div className="bg-[url('/img/fish.jpg')] w-5/6 h-5/6 flex flex-col items-center">
        <div className="text-center mt-14 w-60 text-white bg-lime-500 px-2 py-3 rounded-lg sm:w-5/6 sm:py-14 sm:mb-20">
          <p className="text-[99%*10] sm:text-4xl">{title}</p>
        </div>
        <div className="mt-10 sm:flex sm:flex-wrap justify-center">
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
              props.setScore(props.score + 1);
            }}
            className="py-5 bg-red-400 px-8 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_firts}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-8 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_second}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-8 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_third}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-8 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_fourth}</p>
          </div>
        </div>
      </div>
    );
  } else if (condition === "second") {
    return (
      <div className="bg-[url('/img/fish.jpg')] w-5/6 h-5/6 flex flex-col items-center">
        <div className="text-center mt-14 w-60 text-white bg-lime-500 px-2 py-3 rounded-lg sm:w-5/6 sm:py-14 sm:mb-20">
          <p className="text-[99%*10] sm:text-4xl">{title}</p>
        </div>
        <div className="mt-10 sm:flex sm:flex-wrap justify-center">
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_firts}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
              props.setScore(props.score + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_second}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_third}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_fourth}</p>
          </div>
        </div>
      </div>
    );
  } else if (condition === "third") {
    return (
      <div className="bg-[url('/img/fish.jpg')] w-5/6 h-5/6 flex flex-col items-center">
        <div className="text-center mt-14 w-60 text-white bg-lime-500 px-2 py-3 rounded-lg sm:w-5/6 sm:py-14 sm:mb-20">
          <p className="text-[99%*10] sm:text-4xl">{title}</p>
        </div>
        <div className="mt-10 sm:flex sm:flex-wrap justify-center">
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_firts}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_second}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
              props.setScore(props.score + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_third}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_fourth}</p>
          </div>
        </div>
      </div>
    );
  } else if (condition === "fourth") {
    return (
      <div className="bg-[url('/img/fish.jpg')] w-5/6 h-5/6 flex flex-col items-center">
        <div className="text-center mt-14 w-60 text-white bg-lime-500 px-2 py-3 rounded-lg sm:w-5/6 sm:py-14 sm:mb-20">
          <p className="text-[99%*10] sm:text-4xl">{title}</p>
        </div>
        <div className="mt-10 sm:flex sm:flex-wrap justify-center">
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_firts}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_second}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_third}</p>
          </div>
          <div
            onClick={() => {
              props.setFunction(props.index + 1);
              props.setScore(props.score + 1);
            }}
            className="py-5 bg-red-400 px-20 rounded-lg text-white mb-8 text-center hover:bg-red-500 cursor-pointer transition duration-300 sm:px-0 sm:mx-10 sm:py-0 sm:h-40 sm:w-80 flex justify-center items-center"
          >
            <p className="text-[90%] sm:text-[120%]">{answer_fourth}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;
