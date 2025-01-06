interface Child {
  _type: string; // Typically 'span'
  _key: string;
  text: string;  // The actual text content
  marks?: string[]; // Text marks like bold, italic
}
interface MarkDef {
  _key: string;
  _type: string; // e.g., 'link'
  href?: string; // Link URL
}

export interface TypeBlogPost {
    title: string;
    slug: string;
    mainImageUrl: string;
    categories: string[];
    publishedAt: string;
    author: string;
    excerpt: string;
  }


 export interface BlockContent {
    _type: string; // Block type (e.g., 'block')
    _key: string;  // Unique identifier for each block
    style?: string; // Text style (e.g., 'normal', 'h1')
    children: Child[];
    markDefs?: MarkDef[]; // Marks (e.g., links)
  }

export type TypePostWithContent = Omit<TypeBlogPost, 'content'> & {
    content: BlockContent[];
  };