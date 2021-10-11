import { useEffect } from "react";
import { connectSocket, subscribeToNewMessages } from "../socketApi";
import Options from "./Options";
import Question from "./Question";
import { useVote } from '../context/VoteContext'

function Container() {
const { setOptions } = useVote();
console.log(setOptions);

  useEffect(() => {
    connectSocket();
    subscribeToNewMessages( (data) => {
       setOptions(data);
    });
  }, []);

  return (
    <div>
      <Question />
      <Options />
    </div>
  );
}

export default Container;
