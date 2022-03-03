import styled from "styled-components";
import { Colors } from "../../enums/colors";
import { Media } from "../../enums/media";

export const Comment = styled.div`
  background-color: ${Colors.WHITE};
  border-radius: 0.5rem;
  display: flex;
  font: 500 1rem "Rubik";
  gap: 1.375rem;
  padding: 1.375rem;
  position: relative;
  margin-top: 1rem;

  .details {
    align-items: center;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem;

    .avatar {
      display: flex;
    }
  }

  .controls {
    display: flex;
    gap: 1.375rem;
    height: 32px;
    position: absolute;
    right: 1.375rem;
  }

  @media (max-width: ${Media.X_SMALL}) {
    flex-flow: row wrap;
    justify-content: space-between;

    .controls {
      position: initial;
      order: 2;
    }

    .details {
      flex: 1 100%;
      order: 1;
      padding: 0;
    }

    .score {
      order: 2;
    }
  }
`;
