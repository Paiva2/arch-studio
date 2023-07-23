import React from "react"
import { PagesWrapper, Container } from "./styles"

interface Props {
  children: React.ReactNode
}

const PageContainer = ({ children }: Props) => {
  return (
    <Container>
      <PagesWrapper>{children}</PagesWrapper>
    </Container>
  )
}

export default PageContainer
