import { useState } from "react";

const useCurrency = () => {
  const [state, setState] = useState("");

  const SelectCurrency = () => (
    <>
      <label>Currency</label>
      <select>
        <option value="">--select a currency--</option>
        <option value="">USD</option>
        <option value="">Euro</option>
        <option value="">Pound</option>
      </select>
    </>
  );

  return [state, SelectCurrency];
};

export default useCurrency;
