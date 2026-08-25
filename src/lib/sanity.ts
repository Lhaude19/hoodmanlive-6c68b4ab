import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanityClient = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2025-06-01',
  useCdn: true,
  token: import.meta.env.SANITY_API_TOKEN,
})

const builder = imageUrlBuilder(sanityClient)

export function urlFor(source: any) {
  return builder.image(source)
}

// GROQ queries
export const QUERIES = {
  homePage: `*[_type == "homePage"][0]{
    leadArticle -> { ..., author -> },
    latestSection { title, count },
    programsEventsBand { title, items[] -> { ..., _type } },
    newsletterSection { title, description }
  }`,

  articleBySlug: `*[_type == "article" && slug.current == $slug][0]{
    ...,
    byline { author -> { name, slug, role, photo, bio }, role },
    body,
    relatedArticles[] -> { title, slug, heroImage, publishedAt, categories[] -> title },
    categories[] -> title
  }`,

  articleIndex: `*[_type == "article"] | order(publishedAt desc) [0...20] {
    _id, title, slug, deck, heroImage, publishedAt,
    byline { author -> { name, slug, role } },
    categories[] -> title
  }`,

  articleIndexByCategory: `*[_type == "article" && $category in categories[]->title] | order(publishedAt desc) [0...20] {
    _id, title, slug, deck, heroImage, publishedAt,
    byline { author -> { name, slug, role } },
    categories[] -> title
  }`,

  programsIndex: `*[_type == "program"] | order(startDate desc) {
    _id, title, slug, tagline, heroImage, description, startDate, endDate, status, featured
  }`,

  programBySlug: `*[_type == "program" && slug.current == $slug][0]{
    ...,
    heroImage
  }`,

  eventsIndex: `*[_type == "event"] | order(date desc) {
    _id, title, slug, tagline, heroImage, description, date, venue, status, featured
  }`,

  eventBySlug: `*[_type == "event" && slug.current == $slug][0]{
    ...,
    heroImage,
    postEventReport -> { title, slug, heroImage, publishedAt }
  }`,

  authorsIndex: `*[_type == "author"] | order(name asc) {
    _id, name, slug, bio, photo, role, social
  }`,

  authorBySlug: `*[_type == "author" && slug.current == $slug][0]{
    ...,
    photo,
    "recentWork": *[_type == "article" && references(^._id)] | order(publishedAt desc) [0...5] {
      title, slug, publishedAt, categories[] -> title
    }
  }`,

  aboutPage: `*[_type == "page" && slug.current == "about"][0]{
    title, body, independenceStatement, tenets[], masthead[]
  }`,

  categories: `*[_type == "category"] | order(title asc) {
    title, slug, description, color
  }`,
}