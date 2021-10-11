import { useState } from "react";
import { sendMessage } from "../socketApi";
import { useVote } from "../context/VoteContext"

function Options() {
    const {options} = useVote();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = ({ target }) => setSelectedOption(target.value);

  const handleSubmit = () => {
    sendMessage("new-vote", selectedOption);
  };

  const total = Object.keys(options).reduce((previous, key) => previous + options[key], 0);

  const getPercent = (key) => {
    return ((options[key] * 100) / (total === 0 ? 1 : total)).toFixed(1);
  };
  return (
    <div id="options">
      <pre>{JSON.stringify(options, null, 2)} </pre>

      <label className="container">
        Java
        <input
        name="option"
          type="radio"
         
          value="java"
          onChange={handleSelect}
        />
        <span className="checkmark"></span>
      </label>
      <progress id="file" value={options['java']} max={total} />
      <label className="container">
        Javascript
        <input
         name="option"
          type="radio"
         
          value="javascript"
          onChange={handleSelect}
        />
        <span className="checkmark"></span>
      </label>
      <progress id="file" value={options['javascript']} max={total} />
      <label className="container">
        Python
        <input
         name="option"
          type="radio"
          
          value="python"
          onChange={handleSelect}
        />
        <span className="checkmark"></span>
      </label>
      <progress id="file" value={options['python']} max={total} />
      <label class="container">
        C
        <input
         name="option"
          type="radio"
          
          value="c"
          onChange={handleSelect}
        />
        <span className="checkmark"></span>
      </label>
      <progress id="file" value={options['c']} max={total} />

      <br />
      <br />
      <button onClick={handleSubmit}>Vote</button>
    </div>
  );
}

export default Options;
