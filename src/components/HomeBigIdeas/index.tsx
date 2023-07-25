import ArrowRight from "../../icons/ArrowRight"
import FadeComponent from "../FadeComponent"
import { BigIdeasContainer, BigIdeasTextWrapper, BigIdeasWrapper } from "./styles"
import { Link } from "react-router-dom"

const HomeBigIdeas = () => {
  return (
    <FadeComponent>
      <BigIdeasContainer>
        <BigIdeasWrapper>
          <img src="https://i.postimg.cc/Qdh5Y4ks/image-small-team.jpg" />
          <BigIdeasTextWrapper>
            <div className="motionDiv">
              <h1>Small team, big ideas</h1>
              <Link to="/about">
                About Us <ArrowRight />
              </Link>
            </div>
          </BigIdeasTextWrapper>
        </BigIdeasWrapper>
      </BigIdeasContainer>
    </FadeComponent>
  )
}

export default HomeBigIdeas
