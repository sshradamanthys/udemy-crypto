import { useState, useEffect } from "react";
import axios from "axios";
import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";
import useCrypto from "../hooks/useCrypto";
import Error from "./Error";

const Button = styled.input`
  margin-top: 20px;
  font-weight: bold;
  font-size: 20px;
  padding: 10px;
  background-color: #66a2fe;
  border: none;
  width: 100%;
  border-radius: 10px;
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #326ac0;
    cursor: pointer;
  }
`;

const CURRENCIES = [
  { code: "USD", name: "United States dollar" },
  { code: "EUR", name: "Euro" },
  { code: "GBP", name: "Pound sterling" },
];

const API_KEY =
  "fc2d8e6a12f458e1f44683e78d6cca1c8211eac061439f216a4b5da750d35a17";
const URL = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${API_KEY}`;

const Form = () => {
  // States
  const [cryptos, setCryptos] = useState([]);
  const [error, setError] = useState(false);

  // Custom Hooks
  const [currency, SelectCurrency] = useCurrency(
    "Select a currency",
    "",
    CURRENCIES
  );

  console.log(currency);

  const [crypto, SelectCrypto] = useCrypto("Select a crypto", "", cryptos);

  // Effects
  useEffect(() => {
    const fetchAPI = async () => {
      const res = await axios.get(URL);
      const result = res.data.Data;
      setCryptos(result);
    };
    fetchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (currency === "" || crypto === "") {
      setError(true);
      return;
    }

    setError(false);
  };

  console.log(crypto);
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error msg="All fields are required" /> : null}
      <SelectCurrency />
      <SelectCrypto />
      <Button type="submit" value="send" />
    </form>
  );
};

export default Form;
