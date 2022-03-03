import styled from "styled-components";

import { Colors } from "../../enums/colors";

export const Score = styled.div`
  background-color: ${Colors.LIGHT_GRAY};
  border-radius: 0.75rem;
  display: flex;
  flex-direction: column;

  > div {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0.5rem;
  }
`;

export const Button = styled.button`
  background-color: ${Colors.LIGHT_GRAY};
  border: none;
  color: hsl(239, 57%, 85%);
  cursor: pointer;
  font: 500 1rem "Rubik";
  transition: color 0.15s, font-size 0.15s;

  &:hover {
    color: ${Colors.MODERATE_BLUE};
  }
`;

export const Value = styled.div`
  color: ${Colors.MODERATE_BLUE};
  font: 500 1rem "Rubik";
`;
