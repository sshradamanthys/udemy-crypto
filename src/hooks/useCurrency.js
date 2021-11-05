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
  const [currency, setCurrency] = useState(initialState);

  const SelectCurrency = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => setCurrency(e.target.value)} value={currency}>
        <option value="">--select--</option>
        {currencies.map(({ code, name }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </Select>
    </>
  );

  return [currency, SelectCurrency];
};

export default useCurrency;
