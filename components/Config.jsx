import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";

const Config = () => {
  const router = useRouter();
  const close = "hidden";
  const open =
    "bg-white h-10 w-20 flex justify-center items-center mt-2 cursor-pointer";
  const [config, setConfig] = useState(close);
  const [session, setSession] = useState(undefined);

  const Revition = async () => {
    const response = await axios.get("/api/auth/revition");
    setSession(response.data.status);
  };

  useEffect(() => {
    Revition()
  }, [])

  const LogOut = async () => {
    const response = await axios.get("/api/auth/logout");
    router.push('/')
  };

  if (session === true) {
    return (
      <div className="flex flex-col justify-center items-center cursor-pointer">
        <div
          className="flex w-12 sm:w-16"
          onClick={() => {
            if (config === close) {
              setConfig(open);
            } else {
              setConfig(close);
            }
          }}
        >
          <Image
            alt="icon config"
            width={"64px"}
            height="64px"
            src={"/img/config.png"}
          />
        </div>
        <div className={config}>
          <p
            className="text-red-600 font-semibold text-lg"
            onClick={() => {
              LogOut();
            }}
          >
            Logout
          </p>
        </div>
      </div>
    );
  } else {
    return <div className="hidden"></div>;
  }
};

export default Config;
