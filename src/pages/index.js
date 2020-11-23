import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import SEO from "../components/SEO"

export default data => {
  const {
    data: {
      allStrapiProjects: { nodes: projects },
      allStrapiBlogs: { nodes: blogs },
    },
  } = data

  return (
    <Layout>
      <SEO title="home" description="this is our home page" />
      <Hero />
      <Services />
      <Jobs />
      <Projects projects={projects} title="featured projects" showLink />
      <Blogs blogs={blogs} title="Latest articles" showLink />
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: { featured: { eq: true } }) {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
    allStrapiBlogs(sort: { order: DESC, fields: date }, limit: 3) {
      nodes {
        date(formatString: "MMM, Do, YYYY")
        title
        slug
        desc
        content
        id
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
