import { useState } from "react";

export default function App() {
  const [till, setTill] = useState({
    "1p": 0,
    "2p": 0,
    "5p": 0,
    "10p": 0,
    "20p": 0,
    "50p": 0,
    "£1": 0,
    "£2": 0,
    "£5": 0,
    "£10": 0,
    "£20": 0,
    "£50": 0,
  });
  const [total, setTotal] = useState(0);

  function handleChange(e) {
    const id = e.target.id;
    const value = e.target.value;
    const updatedTill = structuredClone(till);
    updatedTill[id] = value;
    setTill(updatedTill);
    setTotal(tillAddition(updatedTill));
  }

  function tillAddition(cash) {
    if (cash) {
      // convert to pounds
      const onePs = cash["1p"] ? cash["1p"] / 100 : 0;
      const twoPs = cash["2p"] ? cash["2p"] / 50 : 0;
      const fivePs = cash["5p"] ? cash["5p"] / 20 : 0;
      const tenPs = cash["10p"] ? cash["10p"] / 10 : 0;
      const twentyPs = cash["20p"] ? cash["20p"] / 5 : 0;
      const fiftyPs = cash["50p"] ? cash["50p"] / 2 : 0;
      const ones = cash["£1"] ? cash["£1"] : 0;
      const twos = cash["£2"] ? cash["£2"] * 2 : 0;
      const fives = cash["£5"] ? cash["£5"] * 5 : 0;
      const tens = cash["£10"] ? cash["£10"] * 10 : 0;
      const twenties = cash["£20"] ? cash["£20"] * 20 : 0;
      const fifties = cash["£50"] ? cash["£50"] * 50 : 0;

      // add together
      const pennies =
        onePs +
        twoPs +
        fivePs +
        tenPs +
        twentyPs +
        fiftyPs +
        ones +
        twos +
        fives +
        tens +
        twenties +
        fifties;

      // return in £x.xx format
      return `£${pennies.toFixed(2)}`;
    }
    // if cash object is empty
    return "£0.00";
  }

  return (
    <main className="flex h-screen w-full flex-col items-center justify-center gap-4 bg-zinc-100">
      <form className="flex w-[360px] flex-row flex-wrap justify-center gap-4 rounded border bg-zinc-200 p-4">
        {Object.keys(till).map((unit) => {
          return (
            <div className="flex flex-col" key={unit}>
              <label
                className="rounded-t bg-zinc-600 px-2 py-1 text-zinc-200"
                htmlFor={unit}
              >
                {unit}
              </label>
              <input
                type="text"
                name={unit}
                id={unit}
                className="w-[150px] border bg-zinc-100 p-2"
                onChange={handleChange}
              />
            </div>
          );
        })}
      </form>
      <div>
        <span>Result: </span>
        <span className="font-bold">{total}</span>
      </div>
    </main>
  );
}
