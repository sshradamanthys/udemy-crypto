import { useState, useEffect } from "react";
import axios from "axios";
import Form from "./components/Form";
import Quotation from "./components/Quotation";
import styled from "@emotion/styled";
import image from "./cryptomonedas.png";

const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Image = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: "Bebas Neue", cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;

  &::after {
    content: "";
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`;

function App() {
  const [currency, setCurrency] = useState("");
  const [crypto, setCrypto] = useState("");
  const [result, setResult] = useState({});
  // const [loading, setLoading] = useState(false);

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;

  useEffect(() => {
    const fetchAPI = async () => {
      if (currency === "") return;
      const res = await axios.get(url);
      setResult(res.data.DISPLAY[crypto][currency]);
    };
    fetchAPI();
  }, [currency, crypto, url]);
  return (
    <Container>
      <div>
        <Image src={image} alt="Main Image" />
      </div>
      <div>
        <Heading>Cryptocurrency</Heading>
        <Form setCurrency={setCurrency} setCrypto={setCrypto} />
        <Quotation result={result} />
      </div>
    </Container>
  );
}

export default App;
