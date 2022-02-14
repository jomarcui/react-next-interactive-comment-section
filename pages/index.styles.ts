import styled from "styled-components";
import { Colors } from "../enums/colors";

export const Main = styled.main`
  margin: 0 auto;
  max-width: 768px;
`;

interface IButton {
  backgroundColor: string
}

export const Button = styled.button<IButton>`
  background-color: ${({backgroundColor}) => backgroundColor};
  border: none;
  border-radius: 0.5rem;
  color: ${Colors.WHITE};
  cursor: pointer;
  font: 500 1rem "Rubik";
  padding: 1rem;
`;