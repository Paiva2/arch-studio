import PageContainer from "../../components/PageContainer"
import LinkedinIcon from "../../icons/LinkedinIcon"
import { TwitterIcon } from "../../icons/TwitterIcon"
import { Link } from "react-router-dom"
import {
  HeritageContainer,
  HeritageImage,
  HeritageImageOpacity,
  HeritageTexts,
  LeaderCard,
  LeaderCardWrapper,
  LeaderCardsWrapper,
  LeaderSocialMediaContainer,
  LeaderTexts,
  Leaders,
  LeadersTitle,
  SocialMediasMobile,
} from "./styles"
import { leadersInformations } from "./utils/leaderInformations"
import FadeComponent from "../../components/FadeComponent"
import { Helmet } from "react-helmet"
import { Fragment } from "react"
import SubPagesBanner from "../../components/SubPagesBanner"
import LinkedinBlack from "../../icons/LinkedinBlack"
import TwitterBlack from "../../icons/TwitterBlack"

const AboutUs = () => {
  const pageData = {
    imageUrl: "https://i.postimg.cc/VvxQ1CGj/image-hero-about-us.jpg",
    bigText: "About",
    title: "Your team of professionals",
    description:
      "Our small team of world-class professionals will work with you every step of the way. Strong relationships are at the core of everything we do. This extends to the relationship our projects have with their surroundings.",
  }

  return (
    <Fragment>
      <Helmet>
        <title>Arch Studio | Abous Us</title>
      </Helmet>
      <FadeComponent>
        <PageContainer>
          <SubPagesBanner
            imageUrl={pageData.imageUrl}
            bigText={pageData.bigText}
            title={pageData.title}
            description={pageData.description}
          />

          <HeritageContainer>
            <HeritageTexts>
              <h1>Our Heritage</h1>
              <p>
                Founded in 2007, we started as a trio of architects. Our
                complimentary skills and relentless attention to detail turned Arch
                into one of the most sought after boutique firms in the country.
              </p>
              <p>
                Speciliazing in Urban Design allowed us to focus on creating
                exceptional structures that live in harmony with their surroundings.
                We consider every detail from every surrounding element to inform our
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
                    <SocialMediasMobile>
                      <span>
                        <Link to="https://linkedin.com">
                          <LinkedinBlack />
                        </Link>
                      </span>
                      <span>
                        <Link to="https://twitter.com">
                          <TwitterBlack />
                        </Link>
                      </span>
                    </SocialMediasMobile>
                  </LeaderCard>
                )
              })}
            </LeaderCardsWrapper>
          </Leaders>
        </PageContainer>
      </FadeComponent>
    </Fragment>
  )
}

export default AboutUs
