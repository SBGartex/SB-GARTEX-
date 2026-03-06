export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  imageUrl?: string;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
}

export interface SiteSettings {
  companyName: string;
  slogan: string;
  email: string;
  address: string;
  instagram: string;
  linkedin: string;
  heroImage: string;
  aboutImage: string;
}

const DEFAULT_SETTINGS: SiteSettings = {
  companyName: "SB Gartex",
  slogan: "Premier Clothing OEM/ODM Vendor",
  email: "andy@sbgartex.com",
  address: "3F #A31, The Sun Me Tri-Office, Lô đất HH1, Khu đô thị Mễ Trì Hạ, Nam Từ Liêm, Hà Nội 100000",
  instagram: "https://instagram.com/SB_GARTEX",
  linkedin: "https://www.linkedin.com/in/andy-sung-1a3a2b388",
  heroImage: "https://postfiles.pstatic.net/MjAyNjAzMDVfMjYg/MDAxNzcyNjkyNzM0ODc1.nnNNeXi0RRMF1D5wc0vqbiRPKsGeaw7G0Fs9p7OcmGMg.6li-mFjT3Yh5aaGTSns-WsvWaX5AvomNxTQyfrhWo58g.JPEG/black-white-vintage-portrait-man-doing-housework-household-chores.jpg?type=w773",
  aboutImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop"
};

const DEFAULT_POSTS: BlogPost[] = [
  {
    id: "1",
    title: "Expanding Our Global Reach",
    excerpt: "SB Gartex continues to grow its international footprint with new partnerships in Europe.",
    content: "Full content about expansion...",
    date: "2023-10-15",
    imageUrl: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2684&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "Sustainable Manufacturing Practices",
    excerpt: "We are committed to eco-friendly production methods to reduce our carbon footprint.",
    content: "Full content about sustainability...",
    date: "2023-11-02",
    imageUrl: "https://images.unsplash.com/photo-1532453288672-3a27e9be9efd?q=80&w=2564&auto=format&fit=crop"
  }
];

const DEFAULT_PARTNERS: Partner[] = [
  { id: "1", name: "Fashion Brand A", logoUrl: "https://placehold.co/200x100/001f3f/40E0D0?text=Brand+A" },
  { id: "2", name: "Retail Giant B", logoUrl: "https://placehold.co/200x100/001f3f/40E0D0?text=Brand+B" },
  { id: "3", name: "Boutique C", logoUrl: "https://placehold.co/200x100/001f3f/40E0D0?text=Brand+C" },
  { id: "4", name: "Label D", logoUrl: "https://placehold.co/200x100/001f3f/40E0D0?text=Brand+D" },
];

const DEFAULT_PORTFOLIO: PortfolioItem[] = [
  {
    id: "1",
    title: "Summer Collection 2024",
    category: "Casual Wear",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=2000&auto=format&fit=crop",
    description: "High-quality linen blend shirts and shorts."
  },
  {
    id: "2",
    title: "Winter Jackets",
    category: "Outerwear",
    imageUrl: "https://images.unsplash.com/photo-1551028919-ac6635f0e5c9?q=80&w=2000&auto=format&fit=crop",
    description: "Insulated down jackets for extreme cold."
  },
  {
    id: "3",
    title: "Athleisure Line",
    category: "Sportswear",
    imageUrl: "https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2000&auto=format&fit=crop",
    description: "Performance fabrics for active lifestyles."
  }
];

// Simple LocalStorage Wrapper
export const storage = {
  getSettings: (): SiteSettings => {
    const data = localStorage.getItem('sb_settings');
    return data ? JSON.parse(data) : DEFAULT_SETTINGS;
  },
  saveSettings: (settings: SiteSettings) => {
    localStorage.setItem('sb_settings', JSON.stringify(settings));
  },
  
  getPosts: (): BlogPost[] => {
    const data = localStorage.getItem('sb_posts');
    return data ? JSON.parse(data) : DEFAULT_POSTS;
  },
  savePosts: (posts: BlogPost[]) => {
    localStorage.setItem('sb_posts', JSON.stringify(posts));
  },
  
  getPartners: (): Partner[] => {
    const data = localStorage.getItem('sb_partners');
    return data ? JSON.parse(data) : DEFAULT_PARTNERS;
  },
  savePartners: (partners: Partner[]) => {
    localStorage.setItem('sb_partners', JSON.stringify(partners));
  },
  
  getPortfolio: (): PortfolioItem[] => {
    const data = localStorage.getItem('sb_portfolio');
    return data ? JSON.parse(data) : DEFAULT_PORTFOLIO;
  },
  savePortfolio: (items: PortfolioItem[]) => {
    localStorage.setItem('sb_portfolio', JSON.stringify(items));
  }
};
