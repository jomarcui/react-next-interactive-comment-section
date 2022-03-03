import styled from "styled-components";

import { Colors } from "../../enums/colors";

export const Score = styled.div`
  background-color: ${Colors.LIGHT_GRAY};
  border-radius: 0.25rem;
  display: flex;
  flex-direction: column;

  > div {
    align-items: center;
    display: flex;
    justify-content: center;
    padding: 0.75rem;
  }

  .button {
    color: hsl(239, 57%, 85%);
    cursor: pointer;
    font: 500 1rem "Rubik";
    transition: color 0.15s, font-size 0.15s;

    &:hover {
      color: hsl(238, 40%, 52%);
      font: 500 1.25rem "Rubik";
    }
  }

  .value {
    color: hsl(238, 40%, 52%);
    font: 500 1rem "Rubik";
  }
`;
