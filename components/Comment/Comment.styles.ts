import styled, { css } from "styled-components";

import { Colors } from "../../enums/colors";
import { Media } from "../../enums/media";

//#region Mixins

const commentContainer = css`
  background-color: ${Colors.WHITE};
  border-radius: 0.5rem;
  display: flex;
  padding: 0 1rem;
  width: 100%;
`;

const flexBox = css`
  align-items: center;
  display: flex;
`;

const flexBoxCol = css`
  ${flexBox}
  flex-direction: column;
`;

const flexBoxRow = css`
  ${flexBox}
  flex-direction: row;
`;

const marginY = css`
  margin: 1em 0;
`;

//#endregion

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
  font-size: 1rem;
  font-weight: 500;
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
  color: ${Colors.WHITE};
  cursor: pointer;
  font: 500 1rem "Rubik";
  padding: 1rem;
`;

export const Comment = styled.div`
  background-color: ${Colors.WHITE};
  border-radius: 0.5rem;
  display: flex;
  font: 500 1rem "Rubik";
  gap: 1rem;
  padding: 1.375rem;
  position: relative;
  margin-top: 1rem;

  .details {
    .header {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      gap: 1rem;

      .user-info {
        display: flex;
      }
    }
  }

  .controls {
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

    .score-container {
      order: 2;
    }
  }
`;

export const ControlButton = styled.button<IControlButton>`
  align-items: center;
  background: none;
  border: none;
  color: ${({ isDelete }) => isDelete ? Colors.PALE_RED : Colors.MODERATE_BLUE};
  cursor: pointer;
  display: flex;
  font: 500 1rem "Rubik";
  gap: 0.5rem;
  height: 100%;
`;

export const Content = styled.div`
  color: ${Colors.GRAYISH_BLUE};
  font: 400 1rem "Rubik";
`;

export const FlexBoxCol = styled.div`
  ${flexBoxCol}
  width: 100%;
`;

export const FlexBoxRow = styled.div`
  ${flexBoxRow}
  width: 100%;
`;

export const NewComment = styled.div`
  ${commentContainer}
  margin-top: 1rem;

  form {
    display: flex;
    width: 100%;

    > div {
      margin: 1rem 0;
    }

    .user-avatar-container {
    }

    .comment-text-container {
      flex-grow: 1;
    }

    .button-container {
    }
  }
`;

export const ReplyForm = styled.form`
  background-color: ${Colors.WHITE};
  border-radius: 0.5rem;
  display: flex;
  flex-flow: row wrap;
  margin-top: 0.5rem;
  width: 100%;
  padding: 1.375rem;

  .avatar-container,
  .button-container {
    transition: 1s;
  }

  .text-area-container {
    padding: 0 1.375rem;
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

export const ReplyUlContainer = styled.ul`
  border-left: 0.1875rem solid ${Colors.LIGHT_GRAY};
  margin-left: 2rem;
  padding-left: 2rem;
  width: 100%;
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

export const CommentUlContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const CommentUlContainerLi = styled.li`
  /* ${flexBoxCol}

  .details {
    flex-grow: 1;

    .comment-header {
      ${flexBox}
      margin: 1rem;

      .user-info {
        ${flexBox}

        .avatar {
          ${flexBox}
          margin-right: 0.5rem;
        }

        .username {
          color: black;
          font: 500 1rem "Rubik";
          margin: 0 0.5rem;

          .you {
            background-color: ${Colors.MODERATE_BLUE};
            border-radius: 0.25rem;
            color: ${Colors.WHITE};
            font: 400 0.875rem "Rubik";
            margin: 0 1rem;
            padding: 0.25rem 0.5rem;
          }
        }

        .created-at {
          color: ${Colors.GRAYISH_BLUE};
          font: 400 1rem "Rubik";
          margin-left: 0.5rem;
        }
      }

      .controls {
        ${flexBoxRow}
        align-items: center;
        margin-left: auto;

        button {
          ${flexBox}
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          transition: opacity 0.15s;

          .text {
            color: #5457b6;
            font: 500 1rem "Rubik";
            margin-left: 0.5rem;
          }

          &:disabled {
            opacity: 0.5;
          }

          &:hover:enabled {
            opacity: 0.5;
          }

          &.delete {
            margin-right: 1rem;
            .text {
              color: ${Colors.SOFT_RED};
            }
          }
        }
      }
    }
  } */
`;
