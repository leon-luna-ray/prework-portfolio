import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2023-04-08',
})

export async function getFeaturedProjects() {
  const projects = await client.fetch('*[_type == "project" && featured] | order(_updatedAt desc)')
  return projects
}