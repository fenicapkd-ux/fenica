// types/wordpress.ts
export interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: {
    rendered: string;
  };
  excerpt: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      id: number;
      name: string;
      taxonomy: string;
    }>>;
    // Bổ sung thêm type cho author tại đây
    author?: Array<{
      id: number;
      name: string;
      description?: string;
      link?: string;
      avatar_urls?: {
        [key: string]: string; // URL của avatar theo các kích thước khác nhau (24, 48, 96...)
      };
    }>;
  };
}
