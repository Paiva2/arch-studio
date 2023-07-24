import {
  SubPagesBigText,
  SubPagesContainer,
  SubPagesTexts,
  ImageOpacity,
  TextsWrapper,
} from "./styles"
import { Fragment } from "react"

interface Props {
  imageUrl: string
  bigText: string
  description: string
  title: string
}

const SubPagesBanner = ({ imageUrl, bigText, title, description }: Props) => {
  return (
    <Fragment>
      <SubPagesContainer>
        <ImageOpacity />
        <img src={imageUrl} />
        <SubPagesTexts>
          <TextsWrapper>
            <SubPagesBigText>{bigText}</SubPagesBigText>
            <h3>{title}</h3>
            <p>{description}</p>
          </TextsWrapper>
        </SubPagesTexts>
      </SubPagesContainer>
    </Fragment>
  )
}

export default SubPagesBanner
