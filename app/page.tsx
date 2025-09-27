import Link from "next/link";
import ProfilePic from "./components/ProfilePic";

export default function Home() {
  return (
    <div className=" group dark: text-white p-3 m-3 flex justify-center items-center gap-5 md:flex-col">
      <ProfilePic />
      <p className="text-3xl mt-10 mb-10 text-center">
        Hello and Welecome, 👋 &nbsp;
        <span className="whitespace-nowrap">I am Zaza</span>
      </p>
      <div
        className="absolute
           text-2xl font-bold group-hover:opacity-100 group-hover:visible group-hover:text-white/100
           bg-transparent text-gold/50 rounded-md py-1 px-2 top-12 right-12
           opacity-0 transition-all duration-3000 z-50 group-hover:mx-auto"
      >
        <ul>
          <li className="brightness-70 hover:brightness-150">
            <Link href={"http://project01-gold.vercel.app"} target="_blank">
              JsonPlaceholder
            </Link>
          </li>
          <li className="brightness-70 hover:brightness-150">
            <Link href={"http://project02-gold.vercel.app"} target="_blank">
              WikiRocket
            </Link>
          </li>
          <li className="brightness-70 hover:brightness-150">
            <Link
              href={"http://project03-gold-mocha.vercel.app"}
              target="_blank"
            >
              Weather Api
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

/* 
 <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Hover me
          </button> */
