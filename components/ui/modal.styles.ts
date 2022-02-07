import styled from "styled-components";

import { Colors } from "../../enums/colors";

export const Overlay = styled.div`
  align-items: center;
  background: ${Colors.OVERLAY};
  bottom: 0px;
  display: flex;
  justify-content: center;
  left: 0px;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: 10000;
`;

export const Modal = styled.div`
background-color: ${Colors.WHITE};
border-radius: 7px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
padding: 2rem;
width: 400px;
`;