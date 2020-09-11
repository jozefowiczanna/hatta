import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import PageInfo from "../components/PageInfo/PageInfo"

const ArticlesWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
`

const pageData = {
  title: "articles",
  paragraph: `While artists work from real to the abstract, architects must work from the abstract to the real.`,
}

const ArticlesPage = ({ data }) => (
  <>
    <PageInfo title={pageData.title} paragraph={pageData.paragraph} />
    <ArticlesWrapper>
      {data.allMdx.nodes.map((item, index) => (
        <ArticlePreview
          key={index}
          title={item.frontmatter.title}
          author={item.frontmatter.author}
          image={item.frontmatter.featuredImage.childImageSharp.fluid}
          slug={item.frontmatter.slug}
        />
      ))}
    </ArticlesWrapper>
  </>
)

export const query = graphql`
  {
    allMdx {
      nodes {
        excerpt
        frontmatter {
          title
          slug
          author
          featuredImage {
            childImageSharp {
              fluid(maxWidth: 700, maxHeight: 500) {
                ...GatsbyImageSharpFluid_tracedSVG
              }
            }
          }
        }
      }
    }
  }
`

export default ArticlesPage
