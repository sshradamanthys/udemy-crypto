import styled from "@emotion/styled";

const Container = styled.div`
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
  font-size: 14px;
  span {
    font-weight: bold;
  }
`;
const Price = styled.p`
  font-size: 20px;
  span {
    font-weight: bold;
  }
`;

const Quotation = ({ result }) => {
  if (Object.keys(result).length === 0) return null;

  return (
    <Container>
      <Price>
        Price: <span>{result.PRICE}</span>
      </Price>
      <Info>
        + High: <span>{result.HIGHDAY}</span>{" "}
      </Info>
      <Info>
        + Low: <span>{result.LOWDAY}</span>{" "}
      </Info>
      <Info>
        % Change - 24 Hours: <span>{result.CHANGEPCT24HOUR}</span>{" "}
      </Info>
      <Info>
        Last Update: <span>{result.LASTUPDATE}</span>{" "}
      </Info>
    </Container>
  );
};

export default Quotation;
