import styled, { css } from "styled-components";

//#region Mixins

const Colors = {
  MODERATE_BLUE: "hsl(238, 40%, 52%)",
  SOFT_RED: "hsl(358, 79%, 66%)",
  LIGHT_GRAYISH_BLUE: "hsl(239, 57%, 85%)",
  PALE_RED: "hsl(357, 100%, 86%)",
  DARK_BLUE: "hsl(212, 24%, 26%)",
  GRAYISH_BLUE: "hsl(211, 10%, 45%)",
  LIGHT_GRAY: "hsl(223, 19%, 93%)",
  VERY_LIGHT_GRAY: "hsl(228, 33%, 97%)",
  WHITE: "hsl(0, 0%, 100%)",
};

const commentContainer = css`
  background-color: ${Colors.WHITE};
  border-radius: 0.5rem;
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
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

//#endregion Mixins

export const Comment = styled.div`
  ${commentContainer}
  font: 500 1rem "Rubik";
`;

export const Content = styled.div`
  ${marginY}
  color: ${Colors.GRAYISH_BLUE};
  font: 400 1rem "Rubik";
  margin: 1rem;
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

export const Reply = styled.form`
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
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
