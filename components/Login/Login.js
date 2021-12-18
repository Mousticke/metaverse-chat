import Image from "next/image";
import bgMeta from "../../public/background-meta.jpg";
import avatar from "../../public/avatar.png";
import styles from "./Login.module.css";
import { useMoralis } from "react-moralis";

function Login() {
  const { authenticate } = useMoralis();

  return (
    <div className="bg-black relative text-white">
      <h1>Login screen</h1>
      <div className="flex flex-col absolute z-20 h-4/6 w-full items-center justify-center space-y-4">
        <Image
          className="object-cover rounded-full"
          src={avatar}
          height={200}
          width={200}
        />
        <button
          onClick={authenticate}
          className={`${styles.login_button} rounded-lg p-5 font-bold animate-pulse`}
        >
          Login to Metaverse
        </button>
      </div>
      <div className="w-full h-screen">
        <Image src={bgMeta} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
}

export default Login;
