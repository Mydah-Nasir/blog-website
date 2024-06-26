// lib/contentful/fetchPosts.ts
import client from './client';

interface BlogPost {
  imageSrc: string;
  title: string;
  date: string;
  summary: string;
  slug:string;
}

export const fetchBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await client.getEntries({
    content_type: 'blogPost', // Make sure 'blogPost' matches your Contentful content type ID
  });

  const blogPosts = response.items.map((item: any) => ({
    imageSrc: item.fields.picture.fields.file.url,
    title: item.fields.title,
    date: item.fields.date,
    summary: item.fields.title,
    slug:item.fields.slug
  }));

  return blogPosts;
};



export const fetchPostBySlug = async (slug: string): Promise<any> => {
    const response = await client.getEntries({
      content_type: 'blogPost',
      'fields.slug': slug,
      limit: 1,
    });
  
    if (response.items.length > 0) {
      const item = response.items[0];
        return item;
    } else {
      return null;
    }
  };