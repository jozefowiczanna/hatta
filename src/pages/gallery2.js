import React from "react"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  display: flex;
`

const GalleryPage = ({ data }) => (
  <>
    <h1>Gallery</h1>
    {console.log(data)}
    <p>
      While artists work from real to the abstract, architects must work from
      the abstract to the real.
    </p>
    <Wrapper>
      {data.allImageSharp.edges.map(node => {
        console.log(node.node.fluid)
        return <Image fluid={node.node.fluid} />
      })}
    </Wrapper>
  </>
)

export default GalleryPage

export const query = graphql`
  {
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 408, maxHeight: 252, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
