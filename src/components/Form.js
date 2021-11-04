import styled from "@emotion/styled";
import useCurrency from "../hooks/useCurrency";

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

const Form = () => {
  const [state, SelectCurrency] = useCurrency(
    "Select a currency",
    "",
    CURRENCIES
  );

  console.log(state);

  return (
    <form>
      <SelectCurrency />
      <Button type="submit" value="send" />
    </form>
  );
};

export default Form;
