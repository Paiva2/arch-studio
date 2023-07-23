import PageContainer from "../../components/PageContainer"
import LinkedinIcon from "../../icons/LinkedinIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { Link } from "react-router-dom"
import {
  AboutBigText,
  AboutContainer,
  AboutUsTexts,
  HeritageContainer,
  HeritageImage,
  HeritageImageOpacity,
  HeritageTexts,
  ImageOpacity,
  LeaderCard,
  LeaderCardWrapper,
  LeaderCardsWrapper,
  LeaderSocialMediaContainer,
  LeaderTexts,
  Leaders,
  LeadersTitle,
  TextsWrapper,
} from "./styles"
import { leadersInformations } from "./utils/leaderInformations"
import FadeComponent from "../../components/FadeComponent"

const AboutUs = () => {
  return (
    <FadeComponent>
      <PageContainer>
        <AboutContainer>
          <ImageOpacity />
          <img src="https://i.postimg.cc/VvxQ1CGj/image-hero-about-us.jpg" />
          <AboutUsTexts>
            <TextsWrapper>
              <AboutBigText>About</AboutBigText>
              <h3>Your team of professionals</h3>
              <p>
                Our small team of world-class professionals will work with you every
                step of the way. Strong relationships are at the core of everything
                we do. This extends to the relationship our projects have with their
                surroundings.
              </p>
            </TextsWrapper>
          </AboutUsTexts>
        </AboutContainer>

        <HeritageContainer>
          <HeritageTexts>
            <h1>Our Heritage</h1>
            <p>
              Founded in 2007, we started as a trio of architects. Our complimentary
              skills and relentless attention to detail turned Arch into one of the
              most sought after boutique firms in the country.
            </p>
            <p>
              Speciliazing in Urban Design allowed us to focus on creating
              exceptional structures that live in harmony with their surroundings. We
              consider every detail from every surrounding element to inform our
              designs.
            </p>
            <p>
              Our small team of world-class professionals provides input on every
              project.
            </p>
          </HeritageTexts>

          <HeritageImage>
            <HeritageImageOpacity />
            <img src="https://i.postimg.cc/3RPn0N0h/image-heritage.jpg" />
          </HeritageImage>
        </HeritageContainer>

        <Leaders>
          <LeadersTitle>
            <h1>The Leaders</h1>
          </LeadersTitle>

          <LeaderCardsWrapper>
            {leadersInformations.map((leader) => {
              return (
                <LeaderCard key={leader.id}>
                  <LeaderCardWrapper>
                    <img src={leader.image} />
                    <LeaderSocialMediaContainer>
                      <span>
                        <Link to="https://linkedin.com">
                          <LinkedinIcon />
                        </Link>
                      </span>
                      <span>
                        <Link to="https://twitter.com">
                          <TwitterIcon />
                        </Link>
                      </span>
                    </LeaderSocialMediaContainer>
                  </LeaderCardWrapper>
                  <LeaderTexts>
                    <h3>{leader.name}</h3>
                    <p>{leader.role}</p>
                  </LeaderTexts>
                </LeaderCard>
              )
            })}
          </LeaderCardsWrapper>
        </Leaders>
      </PageContainer>
    </FadeComponent>
  )
}

export default AboutUs
