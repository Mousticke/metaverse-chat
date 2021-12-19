import { useRef, useEffect } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15;

function Messages() {
  const { user } = useMoralis();
  const endOfMessageRef = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION),
        ),
    [],
    {
      live: true,
    },
  );

  useEffect(() => {
    endOfMessageRef.current.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  return (
    <div className="pb-56">
      <div className="my-5">
        <ByMoralis
          style={{ marginInlineStart: "auto", marginInlineEnd: "auto" }}
          variant="dark"
        />
      </div>
      <div className="space-y-10 p-4">
        {data &&
          data.map((message) => <Message key={message.id} message={message} />)}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessageRef={endOfMessageRef} />
      </div>
      <div ref={endOfMessageRef} className="text-center text-gray-400 mt-5">
        <p>You're up to date {user.getUsername()}! 🎉</p>
      </div>
    </div>
  );
}

export default Messages;
