import React from "react"
import styled from "styled-components"
import Image from "gatsby-image"
import { Link } from "gatsby"

const PreviewWrapper = styled(Link)`
  position: relative;
  width: 100%;
  height: 340px;
  background-color: hsl(0, 0%, 95%);
  /* background-image: url(${props => props.image}); */
  background-size: cover;
  overflow: hidden;
`

const PreviewInfoLabel = styled.div`
  position: absolute;
  left: 0;
  bottom: 35px;
  width: 80%;
  background-color: black;
  color: white;
  padding: 5px 15px;
  z-index: 5;

  h2,
  p {
    margin: 5px;
  }
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export default function ArticlePreview({ title, author, image, slug }) {
  return (
    <PreviewWrapper to={`/articles/${slug}`}>
      <PreviewInfoLabel>
        <h2>{title}</h2>
        <p>{author}</p>
      </PreviewInfoLabel>
      <StyledImage fluid={image} />
    </PreviewWrapper>
  )
}
