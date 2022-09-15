import Head from "next/head";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import favicon from "../public/favicon.ico";

export default function Home() {
  const hidden = "hidden";
  const no_hidden =
    "bg-green-600 h-60 w-80 fixed top-[50%] mt-[-5rem] left-[50%] ml-[-10rem] sm:w-9/12 sm:h-4/6 sm:ml-[-37.5%] sm:mt-[-19.5%]";
  const router = useRouter();
  const [session, setSession] = useState({});
  const [loading, setLoading] = useState(hidden);
  const [credencials, setCredencials] = useState({
    UserName: "",
    password: "",
  });

  const setd = () => {
    router.push("/Question");
  };
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get("/api/auth/revition");
      setSession(response.data);
    }
    fetchData();
  }, []);

  if (!session.status) {
    const handleChange = (e) => {
      setCredencials({
        ...credencials,
        [e.target.name]: e.target.value,
      });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(no_hidden);
      const response = await axios.post("/api/auth/login", credencials);
      const responsed = await axios.get("/api/auth/revition");
      setSession(responsed.data);
    };

    return (
      <>
        <div className="font-sans">
          <Head>
            <title>THE GAME</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
          </Head>
          <div>
            <div className="bg-[url('/img/tropical.jpg')] w-full h-screen bg-cover flex justify-center items-center flex-col">
              <h1 className="font-black text-4xl mb-8 text-red-400 sm:text-8xl">
                THE GAME: Login
              </h1>
              <div className="bg-[url('/img/fish.jpg')] w-9/12 h-80 bg-cover items-center justify-center sm:h-4/6">
                <form
                  className="flex flex-col sm:my-40"
                  onSubmit={handleSubmit}
                >
                  <label
                    htmlFor="UserName"
                    className="mx-auto text-teal-200 my-3 font-extrabold sm:text-4xl"
                  >
                    User Name
                  </label>
                  <input
                    type="text"
                    name="UserName"
                    className="w-10/12 h-8 mx-auto bg-sky-300 my-3 text-red-400 font-bold sm:w-2/6 rounded-full px-5 py-3"
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="password"
                    className="mx-auto text-teal-200 my-3 font-extrabold sm:text-4xl"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-10/12 h-8 mx-auto bg-sky-300 my-3 text-red-400 font-bold sm:w-2/6 rounded-full px-5 py-3"
                    onChange={handleChange}
                  />
                  <button
                    type="submit"
                    className="text-teal-200 bg-sky-900 w-24 h-8 mx-auto my-3 sm:text-xl sm:w-48 sm:h-14"
                  >
                    Start
                  </button>
                  <Link href="/Register">
                    <a className="text-red-400 mx-auto my-5 text-sm sm:text-base">
                      Do you not have account?, click here
                    </a>
                  </Link>
                </form>
              </div>
            </div>
          </div>
          <div className={loading}>
            <p className="text-white text-center mt-[6rem] text-3xl sm:text-8xl sm:mt-[25%]">
              Loading...{" "}
            </p>
          </div>
        </div>
      </>
    );
  } else {
    router.push("/Question");
  }
}
