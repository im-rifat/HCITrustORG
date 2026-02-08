// src/sanity/schemas/publication.ts
export const publication = {
  name: 'publication',
  title: 'Publication',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'author', title: 'Author/Organization', type: 'string' },
    { name: 'pdfFile', title: 'PDF File', type: 'file' },
    { name: 'coverImage', title: 'Cover Image', type: 'image', options: { hotspot: true } },
    { name: 'summary', title: 'Summary', type: 'text' },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Health', 'Education', 'Skills', 'Policy'] } },
  ],
};

// src/sanity/schemas/team.ts
export const team = {
  name: 'team',
  title: 'Team Member',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'role', title: 'Role', type: 'string' },
    { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
    { name: 'bio', title: 'Bio', type: 'text' },
    { name: 'order', title: 'Display Order', type: 'number' },
  ],
};

// src/sanity/schemas/partner.ts
export const partner = {
  name: 'partner',
  title: 'Partner',
  type: 'document',
  fields: [
    { name: 'name', title: 'Name', type: 'string' },
    { name: 'logo', title: 'Logo', type: 'image' },
    { name: 'url', title: 'Website URL', type: 'url' },
    { name: 'category', title: 'Category', type: 'string', options: { list: ['Research', 'Policy', 'Program', 'Innovative'] } },
  ],
};

// src/sanity/schemas/news.ts
export const news = {
  name: 'news',
  title: 'News & Events',
  type: 'document',
  fields: [
    { name: 'title', title: 'Title', type: 'string' },
    { name: 'slug', title: 'Slug', type: 'slug', options: { source: 'title' } },
    { name: 'publishedAt', title: 'Published At', type: 'datetime' },
    { name: 'mainImage', title: 'Main Image', type: 'image', options: { hotspot: true } },
    { name: 'content', title: 'Content', type: 'array', of: [{ type: 'block' }] },
  ],
};
