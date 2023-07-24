import PageContainer from "../../components/PageContainer"
import FadeComponent from "../../components/FadeComponent"
import { Helmet } from "react-helmet"
import { FormEvent, Fragment, useState } from "react"
import SubPagesBanner from "../../components/SubPagesBanner"
import ArrowRight from "../../icons/ArrowRight"
import {
  ContactDetails,
  ContactFields,
  ContactUs,
  DetailsTitle,
  FormFooter,
  Location,
  LocationInformations,
  LocationWrapper,
  MapWrapper,
} from "./styles"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import { Zoom } from "leaflet"
import marker from "../../../public/custom-marker.png"
import L from "leaflet"
import Swal from "sweetalert2"

const Contact = () => {
  const formDefault = {
    name: {
      value: "",
      error: true,
    },
    email: {
      value: "",
      error: true,
    },
    message: {
      value: "",
      error: true,
    },
  }

  const [contactFields, setContactFields] = useState(formDefault)

  const pageData = {
    imageUrl: "https://i.postimg.cc/bwTXSZck/image-hero.jpg",
    bigText: "Contact",
    title: "Tell us about your project",
    description:
      "We'd love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!",
  }

  const customMarker = L.icon({
    iconUrl: marker,
    iconSize: [30, 35],
  })

  const checkFieldErrors = () => {
    Object.keys(contactFields).map((field) => {
      setContactFields((oldValue) => ({
        ...oldValue,
        [field]: {
          value: oldValue[field as keyof typeof oldValue].value,
          error:
            oldValue[field as keyof typeof oldValue].value === "" ? true : false,
        },
      }))
    })
  }

  const handleChangeInputValue = (value: string, field: string) => {
    setContactFields((oldValue) => ({
      ...oldValue,
      [field]: {
        value,
        error: oldValue[field as keyof typeof oldValue].error,
      },
    }))

    checkFieldErrors()
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const { email, name, message } = contactFields

    checkFieldErrors()

    if (email.error || name.error || message.error) {
      return Swal.fire({
        position: "center",
        icon: "error",
        title: "Fill all the fields!",
        showConfirmButton: false,
        timer: 1500,
      })
    }

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Thanks for the contact!",
      showConfirmButton: false,
      timer: 1500,
    })

    setContactFields(formDefault)
  }

  return (
    <Fragment>
      <Helmet>
        <title>Arch Studio | Contact</title>
      </Helmet>
      <FadeComponent>
        <PageContainer>
          <SubPagesBanner
            imageUrl={pageData.imageUrl}
            bigText={pageData.bigText}
            title={pageData.title}
            description={pageData.description}
          />

          <ContactDetails>
            <DetailsTitle>Contact Details</DetailsTitle>
            <LocationWrapper>
              <Location>
                <h3>Main Office</h3>
                <LocationInformations>
                  <p>
                    Mail: <span>archone@gmail.com</span>
                  </p>
                  <p>
                    Address: <span>1892 Chenoweth Drive TN</span>
                  </p>
                  <p>
                    Phone: <span>123-456-3451</span>
                  </p>
                </LocationInformations>
                <button>
                  View on map <ArrowRight color="#1c1d22" />
                </button>
              </Location>

              <Location>
                <h3>Office II</h3>
                <LocationInformations>
                  <p>
                    Mail: <span>archtwo@gmail.com</span>
                  </p>
                  <p>
                    Address: <span>399 Wines Lane TX</span>
                  </p>
                  <p>
                    Phone: <span>832-123-4321</span>
                  </p>
                </LocationInformations>
                <button>
                  View on map <ArrowRight color="#1c1d22" />
                </button>
              </Location>
            </LocationWrapper>
          </ContactDetails>

          <MapWrapper>
            <MapContainer
              className="map-container"
              center={[30.46585, -95.9103]}
              zoom={5}
              scrollWheelZoom={true as Zoom}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker icon={customMarker} position={[30.46585, -95.9103]}>
                <Popup>399 Wines Lane TX</Popup>
              </Marker>
              <Marker icon={customMarker} position={[35.99175, -86.74972]}>
                <Popup>1892 Chenoweth Drive TN</Popup>
              </Marker>
            </MapContainer>
          </MapWrapper>

          <ContactUs onSubmit={handleSubmit}>
            <h3>Connect with us</h3>
            <ContactFields>
              <input
                value={contactFields.name.value}
                onChange={(e) => handleChangeInputValue(e.target.value, "name")}
                placeholder="Name"
                type="text"
              />
              <input
                value={contactFields.email.value}
                onChange={(e) => handleChangeInputValue(e.target.value, "email")}
                placeholder="Email"
                type="email"
              />
              <FormFooter>
                <textarea
                  value={contactFields.message.value}
                  onChange={(e) => handleChangeInputValue(e.target.value, "message")}
                  placeholder="Message"
                />
                <div>
                  <button type="submit">
                    <ArrowRight />
                  </button>
                </div>
              </FormFooter>
            </ContactFields>
          </ContactUs>
        </PageContainer>
      </FadeComponent>
    </Fragment>
  )
}

export default Contact
