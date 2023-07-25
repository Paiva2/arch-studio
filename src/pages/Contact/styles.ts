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
      border: 0;
      border-radius: 0;
    }

    .leaflet-control-zoom-in {
      border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    }

    .leaflet-control-zoom-in:hover,
    .leaflet-control-zoom-out:hover {
      background-color: #eeeff4;
    }
  }
`

export const ContactUs = styled.form`
  display: flex;
  justify-content: space-between;
  flex: 1;
  gap: 3.75rem;
  margin-top: 5rem;

  h3 {
    font-size: 3.125rem;
    color: #1c1d22;
  }
`

export const ContactFields = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 1.25rem;

  .errorMsg {
    border-bottom: 1px solid #dc3545;

    &::placeholder {
      font-weight: 700;
      color: #dc3545;
    }
  }

  input,
  textarea {
    all: unset;
    border-bottom: 1px solid #1c1d22;
    padding: 20px;
    font-size: 20px;
    resize: none;

    &::placeholder {
      font-weight: 700;
      color: #eeeff4;
    }
  }
`

export const FormFooter = styled.div`
  display: flex;
  flex-direction: column;

  div:last-child {
    align-self: end;
  }

  button {
    all: unset;
    background-color: #1c1d22;
    display: grid;
    place-items: center;
    color: #fefffd;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 700;
    padding: 1.875rem;
    cursor: pointer;
    gap: 1.25rem;
    transition: all 0.3s;

    &:hover {
      background-color: #535456;
    }
  }
`
