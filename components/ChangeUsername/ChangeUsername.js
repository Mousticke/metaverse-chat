import { useMoralis } from "react-moralis";

function ChangeUsername() {
  const { user, setUserData, isUserUpdating, useError } = useMoralis();

  const setUserName = () => {
    const username = prompt(
      `Enter you new Username (current: ${user.getUsername()})`,
    );
    if (!username) return;
    setUserData({
      username,
    });
  };

  return (
    <div className="text-sm absolute top-5 right-5">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className="hover:text-pink-700"
      >
        Change you Username
      </button>
    </div>
  );
}

export default ChangeUsername;
