import styled from "styled-components";

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  background-color: hsl(0, 0%, 100%);
  border-radius: 0.5rem;
  display: flex;
  padding: 1.5rem;

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

      &:hover {
        color: hsl(238, 40%, 52%);
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

        .button {
          align-items: center;
          cursor: pointer;
          display: flex;
          transition: opacity 0.15s;

          .text {
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
