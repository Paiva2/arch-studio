import { styled } from "styled-components"

export const GoTopWrapper = styled.div`
  position: fixed;
  right: 50px;
  bottom: 5%;
  opacity: 0;
  visibility: hidden;
  transition: 0.2s ease-in-out;

  &.show {
    opacity: 1;
    visibility: visible;
  }

  button {
    all: unset;
    background-color: #1c1d22;
    display: grid;
    place-items: center;
    opacity: 0.8;
    padding: 10px 10px;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }
`
