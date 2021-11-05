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

const useCrypto = (label, initialState, cryptos) => {
  const [crypto, setCrypto] = useState(initialState);

  const SelectCrypto = () => (
    <>
      <Label>{label}</Label>
      <Select onChange={(e) => setCrypto(e.target.value)} value={crypto}>
        <option value="">--select--</option>
        {cryptos.map(({ CoinInfo }) => (
          <option key={CoinInfo.Id} value={CoinInfo.Name}>
            {CoinInfo.FullName}
          </option>
        ))}
      </Select>
    </>
  );

  return [crypto, SelectCrypto];
};

export default useCrypto;
