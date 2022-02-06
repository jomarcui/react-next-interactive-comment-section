import styled, { css } from "styled-components";

//#region Mixins

const commentContainer = css`
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const flexBox = css`
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
`;

export const Content = styled.div`
  ${marginY}
  font-size: 1em;
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
  /* margin: 0.5rem; */

  .score {
    background-color: hsl(223, 19%, 93%);
    border-radius: 0.25rem;
    display: flex;
    flex-direction: column;

    > div {
      align-items: center;
      display: flex;
      font-weight: 700;
      justify-content: center;
      padding: 0.75rem;
    }

    .button {
      color: hsl(239, 57%, 85%);
      cursor: pointer;
      transition: color 0.15s, font-size 0.15s;

      &:hover {
        color: hsl(238, 40%, 52%);
        font-size: 1.25em;
      }
    }

    .value {
      color: hsl(238, 40%, 52%);
    }
  }

  .details {
    flex-grow: 1;
    padding: 0 1rem;

    .comment-header {
      align-items: center;
      display: flex;

      .user-info {
        align-items: center;
        display: flex;

        .avatar {
          align-items: center;
          display: flex;
          margin-right: 1rem;
        }

        .username {
          margin-right: 1rem;
        }
      }

      .controls {
        margin-left: auto;

        button {
          align-items: center;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          transition: opacity 0.15s;

          .text {
            color: #5457b6;
            font-size: 1rem;
            font-weight: 700;
            margin-left: 0.5rem;
          }

          &:hover {
            opacity: 0.5;
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
      color: hsl(0, 0%, 100%);
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
  border-left: 0.1875rem solid hsl(223, 19%, 93%);
  margin-left: 2rem;
  padding-left: 2rem;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;
