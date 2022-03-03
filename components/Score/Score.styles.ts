import styled from "styled-components";

import { Colors } from "../../enums/colors";
import { Media } from "../../enums/media";

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

  @media (max-width: ${Media.X_SMALL}) {
    flex-direction: row;
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
