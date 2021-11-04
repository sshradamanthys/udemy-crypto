import { useState } from "react";
import styled from "@emotion/styled";

const Label = styled.label`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.4rem;
  margin-top: 2rem;
  display: block;
`;

const Select = styled.select`
  width: 100%;
  display: block;
  padding: 1rem;
  -webkit-appearance: none;
  border-radius: 10px;
  border: none;
  font-size: 1.2rem;
`;

const useCurrency = (label, initialState, currencies) => {
  const [state, setState] = useState(initialState);

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => setState(e.target.value)} value={state}>
        <option value="">--select--</option>
        {currencies.map(({ code, name }) => (
          <option key={code} value={name}>
            {name}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectCurrency];
};

export default useCurrency;
