import React from "react"
import Image from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import styled from "styled-components"

const StyledImage = styled(Image)`
  max-width: 700px;
`

// export const query = graphql`
//   query queryArticles($slug: String!) {
//     mdx(frontmatter: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         slug
//         author
//         featuredImage {
//           childImageSharp {
//             fluid(maxWidth: 700, maxHeight: 500) {
//               ...GatsbyImageSharpFluid_tracedSVG
//             }
//           }
//         }
//       }
//       body
//       excerpt(pruneLength: 50)
//     }
//   }
// `

const PostLayout = ({ data }) => {
  return (
    <div>
      {/* <h1>{data.mdx.frontmatter.title}</h1>
      <p>{data.mdx.frontmatter.author}</p>
      <StyledImage
        fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
      />
      <MDXRenderer>{data.mdx.body}</MDXRenderer> */}
    </div>
  )
}

export default PostLayout
