import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import ArticlePreview from "../components/ArticlePreview/ArticlePreview"
import PageInfo from "../components/PageInfo/PageInfo"
import slugify from "slugify"

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
      {data.allDatoCmsArticle.nodes.map((post, index) => {
        const slug = slugify(post.title, { lower: true })
        return (
          <ArticlePreview
            key={post.id}
            title={post.title}
            author={post.author}
            image={post.featuredImage.fluid}
            slug={slug}
          />
        )
      })}
    </ArticlesWrapper>
  </>
)

export const query = graphql`
  {
    allDatoCmsArticle {
      nodes {
        title
        id
        author
        featuredImage {
          fluid(maxWidth: 700, maxHeight: 500) {
            ...GatsbyDatoCmsFluid_tracedSVG
          }
        }
      }
    }
  }
`

export default ArticlesPage
