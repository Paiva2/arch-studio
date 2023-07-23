import CarouselLinkArrow from "../../icons/CarouselLinkArrow"
import FadeComponent from "../FadeComponent"
import { BigIdeasContainer, BigIdeasTextWrapper, BigIdeasWrapper } from "./styles"

const HomeBigIdeas = () => {
  return (
    <FadeComponent>
      <BigIdeasContainer>
        <BigIdeasWrapper>
          <img src="https://i.postimg.cc/Qdh5Y4ks/image-small-team.jpg" />
          <BigIdeasTextWrapper>
            <div className="motionDiv">
              <h1>Small team, big ideas</h1>
              <a>
                About Us <CarouselLinkArrow />
              </a>
            </div>
          </BigIdeasTextWrapper>
        </BigIdeasWrapper>
      </BigIdeasContainer>
    </FadeComponent>
  )
}

export default HomeBigIdeas
