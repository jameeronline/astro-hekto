// src/utils/search.js
export async function getSearchIndex(posts) {
  return posts.map((post) => ({
    id: post.id,
    title: post.data.title,
    description: post.data.description || "",
    tags: post.data.tags || [],
  }));
}
