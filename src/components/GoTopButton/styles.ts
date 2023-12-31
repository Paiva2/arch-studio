import { styled } from "styled-components"

export const GoTopWrapper = styled.div`
  position: fixed;
  right: 3.125rem;
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
    padding: 0.625rem 0.625rem;
    cursor: pointer;
    transition: 0.2s ease;

    &:hover {
      opacity: 1;
    }
  }

  @media (max-width: 60rem) {
    bottom: 18%;
    right: 1.125rem;
    z-index: 100;
  }

  @media (max-width: 768px) {
    display: none;
  }
`
