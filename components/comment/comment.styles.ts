import styled, { css } from "styled-components";
import { Colors } from "../../enums/colors";

//#region Mixins

const commentContainer = css`
  background-color: ${Colors.WHITE};
  border-radius: 0.5rem;
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
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
  backgroundColor: string
}

//#endregion

export const FormButton = styled.button<IFormButton>`
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
  background-color: ${({backgroundColor}) => backgroundColor};
  border: none;
  border-radius: 0.5rem;
  color: ${Colors.WHITE};
  cursor: pointer;
  font: 500 1rem "Rubik";
  padding: 1rem;
`;

export const Comment = styled.div`
  ${commentContainer}
  font: 500 1rem "Rubik";
`;

export const Content = styled.div`
  ${marginY}
  color: ${Colors.GRAYISH_BLUE};
  font: 400 1rem "Rubik";
  margin: 1rem;

  textarea {
    border: 0.125rem solid ${Colors.MODERATE_BLUE};
    border-radius: 1rem;
    display: block;
    color: ${Colors.DARK_BLUE};
    font: 400 1rem "Rubik";
    line-height: 1.5rem;
    height: 9rem;
    margin: 1rem 0;
    padding: 1rem;
    resize: none;
    width: 100%;
  }
`;

export const FlexBoxCol = styled.div`
  ${flexBoxCol}
  width: 100%;
`;

export const FlexBoxRow = styled.div`
  ${flexBoxRow}
  width: 100%;
`;

export const Li = styled.li`
  ${flexBoxCol}

  .score {
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
  }

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

          &:hover {
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
  }
`;

export const ReplyForm = styled.form`
  ${commentContainer}

  .avatar-container,
  .text-area-container,
  .button-container {
    margin: 1rem;
  }

  .button-container {
    button {
      background-color: #5457b6;
      border: none;
      border-radius: 0.5rem;
      color: ${Colors.WHITE};
      cursor: pointer;
      font-size: 1rem;
      font-weight: 700;
      padding: 0.75rem 1.5rem;
      transition: opacity 0.15s;

      &:hover {
        opacity: 0.5;
      }
    }
  }

  .text-area-container {
    flex-grow: 1;

    textarea {
      width: 100%;
    }
  }
`;

export const ReplyUlContainer = styled.ul`
  border-left: 0.1875rem solid ${Colors.LIGHT_GRAY};
  margin-left: 2rem;
  padding-left: 2rem;
  width: 100%;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
