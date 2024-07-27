import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthProvider";

function About() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <>
      <Navbar />
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-14 pb-60">
        <div className="w-full order-2 md:order-1 md:w-full mt-12 pt-11 md:mt-36">
          <div className="space-y-8">
            <h1 className="text-2xl md:text-4xl font-bold">
              Hello, welcomes here to explore something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="text-sm md:text-xl">
              Aika is the ultimate fan engagement solution that seamlessly
              integrates multimedia content, direct artist-to-fan communication
              channels, exclusive content access, and merchandise purchasing
              capabilities. It significantly influences customer behavior
              towards artists, thereby impacting the industry's ability to
              capitalize on merging market trends and global expansion
              opportunities. Aika is already available on the website and will
              soon be accessible as a versatile, user-friendly app for both
              Android and iOS. It is meticulously designed to empower musicians
              with powerful insights into their fan base while enhancing fan
              experiences through innovative digital interactions. By utilizing
              Aika, fans can conveniently purchase merchandise, watch videos,
              and engage with artists in the Indian Music Industry.
            </p>

            {authUser ? (
              ""
            ) : (
              <Link to="/signup">
                <label className="input input-bordered flex items-center gap-2 mt-5 dark:bg-slate-800 dark:text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 opacity-70"
                  >
                    <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                    <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                  </svg>
                  <input
                    type="email"
                    className="grow dark:bg-slate-800 dark:text-white"
                    placeholder="Email"
                  />
                </label>
              </Link>
            )}
          </div>
          {authUser ? (
            ""
          ) : (
            <Link to="/signup">
              <button className="btn mt-6 btn-secondary">Get Started</button>
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
