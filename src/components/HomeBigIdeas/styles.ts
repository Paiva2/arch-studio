import { styled } from "styled-components"

export const BigIdeasContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
`

export const BigIdeasWrapper = styled.div`
  width: 65%;
  max-width: 75rem;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  position: relative;
  height: 37.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
  }

  .motionDiv {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    word-break: break-word;
    max-width: 43.75rem;
    height: 100%;
    padding: 10.75rem 1.25rem 0px 10.75rem;

    h1 {
      font-size: 4.375rem;
      color: #fefffd;
    }

    p {
      font-size: 1rem;
      color: #fefffd;
      font-weight: 500;
    }

    a {
      all: unset;
      background-color: #1c1d22;
      color: #fefffd;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-weight: 700;
      width: 30%;
      padding: 1.5625rem 1.25rem;
      cursor: pointer;
      gap: 1.25rem;
      transition: all 0.3s;

      &:hover {
        background-color: #535456;
      }
    }

    @media (max-width: 58.75rem) {
      justify-content: center;
      width: 85%;
      max-width: none;
      padding: 0;

      h1 {
        font-size: 3.125rem;
      }
    }
  }

  @media (max-width: 940px) {
    width: 80%;
  }
`

export const BigIdeasTextWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  height: 100%;
  z-index: 100;

  @media (max-width: 940px) {
    justify-content: center;
    height: auto;
    padding-left: 0.625rem;
  }
`
