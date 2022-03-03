import styled from "styled-components";

import { Colors } from "../../enums/colors";
import { Media } from "../../enums/media";

//#region Types

interface IFormButton {
  align: string;
}

interface IModalButton {
  backgroundColor: string;
}

interface IControlButton {
  isDelete: boolean;
}

//#endregion

export const FormButton = styled.button`
  background-color: ${Colors.MODERATE_BLUE};
  border: none;
  border-radius: 0.5rem;
  color: ${Colors.WHITE};
  cursor: pointer;
  display: flex;
  font: 500 1rem "Rubik";
  padding: 0.75rem 1.5rem;
  transition: opacity 0.15s;

  &:hover {
    opacity: 0.5;
  }
`;

export const ModalButton = styled.button<IModalButton>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  border: none;
  border-radius: 0.5rem;
  display: block;
  color: ${Colors.WHITE};
  cursor: pointer;
  flex-grow: 1;
  font: 500 1rem "Rubik";
  padding: 1rem;
`;

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
    display: flex;
    flex-direction: column;
    gap: 1.375rem;
    width: 100%;

    .header {
      align-items: center;
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

export const ControlButton = styled.button<IControlButton>`
  align-items: center;
  background: none;
  border: none;
  color: ${({ isDelete }) =>
    isDelete ? Colors.SOFT_RED : Colors.MODERATE_BLUE};
  cursor: pointer;
  display: flex;
  font: 500 1rem "Rubik";
  gap: 0.5rem;
  height: 100%;
  padding: 0;
  transition: opacity 0.15s;

  &:disabled {
    opacity: 0.5;
  }

  &:hover:enabled {
    opacity: 0.5;
  }
`;

export const Textarea = styled.textarea`
  border: 0.125rem solid ${Colors.MODERATE_BLUE};
  border-radius: 1rem;
  display: flex;
  color: ${Colors.DARK_BLUE};
  font: 400 1rem "Rubik";
  line-height: 1.5rem;
  height: 9rem;
  padding: 0.75rem 1.625rem;
  resize: none;
  width: 100%;
`;

export const Avatar = styled.div`
  display: flex;
`;

export const Content = styled.div`
  color: ${Colors.GRAYISH_BLUE};

  .button-container {
    margin-top: 1rem;

    button {
      margin-left: auto;
    }
  }

  /* form {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .button-container {
    }

    .text-area-container {
      flex-grow: 1;
    }
  } */
`;

export const CreatedAt = styled.div`
  color: ${Colors.GRAYISH_BLUE};
  font: 400 1rem "Rubik";
  margin-left: 0.5rem;
`;

export const Username = styled.div`
  align-items: center;
  color: ${Colors.DARK_BLUE};
  display: flex;
  font: 500 1rem "Rubik";
  gap: 1rem;
  margin: 0 0.5rem;
`;

export const You = styled.div`
  background-color: ${Colors.MODERATE_BLUE};
  border-radius: 0.15rem;
  color: ${Colors.WHITE};
  font: 400 0.875rem "Rubik";
  padding: 0.25rem 0.5rem;
`;

export const ModalTitle = styled.div`
  color: ${Colors.DARK_BLUE};
  font: 500 1.375rem "Rubik";
`;

export const ModalText = styled.p`
  color: ${Colors.GRAYISH_BLUE};
  font: 400 1rem "Rubik";
  line-height: 1.375rem;
`;

// export const NewComment = styled.div`
//   ${commentContainer}
//   margin-top: 1rem;

//   form {
//     display: flex;
//     width: 100%;

//     > div {
//       margin: 1rem 0;
//     }

//     .user-avatar-container {
//     }

//     .comment-text-container {
//       flex-grow: 1;
//     }

//     .button-container {
//     }
//   }
// `;

export const ReplyForm = styled.form`
  background-color: ${Colors.WHITE};
  border-radius: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  gap: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  padding: 1.375rem;

  .text-area-container {
    flex-grow: 1;
  }

  @media (max-width: ${Media.X_SMALL}) {
    .avatar-container {
      flex-grow: 1;
      margin: 1.375rem 0;
      order: 2;
    }

    .button-container {
      margin: 1.375rem 0;
      order: 2;
    }

    .text-area-container {
      flex: 1 100%;
      order: 1;
      padding: 0;
    }
  }
`;

export const CommentUl = styled.ul`
  list-style: none;
  margin: 1rem;
  padding: 0;
`;

export const ReplyUl = styled.ul`
  border-left: 0.1875rem solid ${Colors.LIGHT_GRAY};
  list-style: none;
  margin-left: 2.375rem;
  padding-left: 2rem;

  @media (max-width: ${Media.X_SMALL}) {
    margin: 0;
    padding-left: 1rem;
  }
`;
