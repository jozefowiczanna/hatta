import React from "react"
import Image from "gatsby-image"
import { graphql } from "gatsby"
import styled from "styled-components"

const StyledImage = styled(Image)`
  max-width: 700px;
`

export const query = graphql`
  query MyQuery($id: String!) {
    datoCmsArticle(id: { eq: $id }) {
      title
      author
      featuredImage {
        fluid(maxWidth: 700, maxHeight: 500) {
          ...GatsbyDatoCmsFluid_tracedSVG
        }
      }
      articleContent {
        __typename
        ... on DatoCmsParagraph {
          paragraphContent
        }
        ... on DatoCmsHeading {
          headingContent
        }
        ... on DatoCmsArticleImage {
          imageData {
            fluid(maxWidth: 700, maxHeight: 500) {
              ...GatsbyDatoCmsFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const PostLayout = ({ data }) => {
  const {
    datoCmsArticle: { articleContent },
  } = data
  const content = articleContent.map((item, index) => {
    console.log(item)
    const contentType = Object.keys(item)[1]

    if (item.hasOwnProperty("imageData")) {
      console.log(item.imageData)
    }

    switch (contentType) {
      case "headingContent":
        return <h2 key={index}>{item[contentType]}</h2>
      case "imageData":
        return <StyledImage key={index} fluid={item[contentType].fluid} />
      case "paragraphContent":
        return <p key={index}>{item[contentType]}</p>
      default:
        return null
    }
  })

  return (
    <div>
      <h1>{data.datoCmsArticle.title}</h1>
      <p>{data.datoCmsArticle.author}</p>
      <StyledImage fluid={data.datoCmsArticle.featuredImage.fluid} />
      {content}
    </div>
  )
}

export default PostLayout
