import FadeComponent from "../FadeComponent"
import {
  WelcomeContainer,
  WelcomeText,
  WelcomeTexts,
  WelcomeTextsWrapper,
  WelcomeWrapper,
} from "./styles"

const HomeWelcome = () => {
  return (
    <FadeComponent>
      <WelcomeContainer>
        <WelcomeWrapper>
          <WelcomeTexts>
            <WelcomeTextsWrapper>
              <h1>Welcome to Arch Studio</h1>

              <p>
                We have a unique network and skillset to help bring your projects to
                life. Our small team of highly skilled individuals combined with our
                large network put us in a strong position to deliver exceptional
                results.
              </p>

              <p>
                Over the past 10 years, we have worked on all kinds of projects. From
                stations to high-rise buildings, we create spaces that inspire and
                delight.
              </p>

              <p>
                We work closely with our clients so that we understand the
                intricacies of each project. This allows us to work in harmony the
                surrounding area to create truly stunning projects that will stand
                the test of time.
              </p>
            </WelcomeTextsWrapper>
          </WelcomeTexts>

          <img src="https://i.postimg.cc/MTxHry5f/image-welcome.jpg" />

          <WelcomeText>Welcome</WelcomeText>
        </WelcomeWrapper>
      </WelcomeContainer>
    </FadeComponent>
  )
}

export default HomeWelcome
