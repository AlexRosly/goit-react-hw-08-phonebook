import styled from "@emotion/styled";
import { FiPlus } from "react-icons/fi";

export const FormSection = styled.div`
  width: 500px;
  border: 2px solid rgba(11, 11, 11, 0.23);
  border-radius: 5px;
  background-color: #f3f6f4;
`;

export const Forms = styled.form`
  padding: 20px 20px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.3);
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: 20px;
  font-weight: 500;
`;

export const Input = styled.input`
  margin: 10px 0px;
  margin-bottom: 30px;
  font-size: 20px;
  font-weight: 700;
  width: 300px;
  border: 2px solid black;

  &:focus {
    outline: 3px solid blue;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  font-weight: 700;
  height: 40px;
  width: 200px;
  border-radius: 5px;
  background-color: #00ff00;
  cursor: pointer;
`;

export const Plus = styled(FiPlus)`
  margin-right: 10px;
`;
