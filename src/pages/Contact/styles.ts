import { styled } from "styled-components"

export const ContactDetails = styled.div`
  width: 100%;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
  margin-top: 5rem;
`

export const DetailsTitle = styled.h1`
  font-size: 3.125rem;
  color: #1c1d22;
`

export const LocationWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  gap: 1.25rem;
`

export const Location = styled.div`
  display: flex;
  gap: 1.875rem;
  justify-content: center;
  flex-direction: column;

  h3 {
    color: #1c1d22;
    font-size: 1rem;
  }

  button {
    all: unset;
    color: #1c1d22;
    display: flex;
    align-items: center;
    gap: 1.25rem;
    font-weight: bold;
  }

  p {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 0.875rem;
    gap: 1.875rem;

    span {
      min-width: 12.5rem;
    }
  }
`

export const LocationInformations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`

export const MapWrapper = styled.div`
  width: 100%;
  height: 35rem;

  .map-container {
    height: 100%;
    width: 100%;

    .leaflet-control-zoom-in,
    .leaflet-control-zoom-out {
      margin: 0;
      cursor: pointer;
    }
  }
`
