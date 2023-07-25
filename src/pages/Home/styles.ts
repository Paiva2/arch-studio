import { styled } from "styled-components"

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 1.875rem;
  width: 100%;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding-top: 1.25rem;
  }
`

export const HomeMiddleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  gap: 5rem;
`
