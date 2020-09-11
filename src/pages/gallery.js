import React from "react"
import { graphql } from "gatsby"
// import Image from "gatsby-image"
import styled from "styled-components"

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;
  row-gap: 20px;
`

// const Wrapper = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   background-color: gray;
//   margin: 0 -10px;

//   &::after {
//     content: "";
//     flex: auto;
//   }
// `

const Image = styled.img`
  /* width: calc(33.333% - 20px); */
  /* margin: 10px; */
`

const GalleryPage = ({ data }) => (
  <>
    <h1>Gallery</h1>
    <p>
      While artists work from real to the abstract, architects must work from
      the abstract to the real.
    </p>
    <Wrapper>
      {data.allImageSharp.edges.map(node => {
        return <Image src={node.node.fluid.src} />
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
          fluid(maxWidth: 900, maxHeight: 600, quality: 80) {
            src
          }
        }
      }
    }
  }
`
