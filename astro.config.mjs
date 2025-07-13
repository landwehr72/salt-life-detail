import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  // Update this with your actual domain
  site: "https://saltlifedetail.com/",
  integrations: [
    sitemap({
      // Comprehensive sitemap configuration for SEO
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      
      // Generate separate sitemaps for different content types
      entryLimit: 45000,
      
      // Custom sitemap entries for important pages
      customPages: [
        'https://saltlifedetail.com/',
        'https://saltlifedetail.com/reviews',
        'https://saltlifedetail.com/guides', 
        'https://saltlifedetail.com/buying-guides',
        'https://saltlifedetail.com/local-services',
        'https://saltlifedetail.com/about',
        'https://saltlifedetail.com/contact',
        'https://saltlifedetail.com/affiliate-disclosure',
        'https://saltlifedetail.com/privacy-policy',
        'https://saltlifedetail.com/terms-of-service'
      ],
      
      // Filter out admin pages and unnecessary URLs
      filter: (page) => {
        return !page.includes('/admin/') && 
               !page.includes('/draft/') && 
               !page.includes('/private/') &&
               !page.includes('/api/') &&
               !page.includes('?print=') &&
               !page.includes('?share=') &&
               !page.includes('?utm_');
      },
      
      // Custom serialization for different page types
      serialize(item) {
        // Homepage - highest priority
        if (item.url === 'https://saltlifedetail.com/') {
          item.priority = 1.0;
          item.changefreq = 'daily';
        }
        
        // Main section pages - high priority
        else if (item.url.match(/\/(reviews|guides|local-services)\/?$/)) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        
        // Product reviews - high commercial value
        else if (item.url.includes('/reviews/') && !item.url.endsWith('/reviews/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        
        // How-to guides - high search value
        else if (item.url.includes('/guides/') && !item.url.endsWith('/guides/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        
        // Local services - medium priority, updated quarterly
        else if (item.url.includes('/local-services/')) {
          item.priority = 0.6;
          item.changefreq = 'quarterly';
        }
        
        // About, contact, legal pages - lower priority
        else if (item.url.match(/\/(about|contact|affiliate-disclosure|privacy-policy|terms-of-service)/)) {
          item.priority = 0.4;
          item.changefreq = 'yearly';
        }
        
        // Category pages - medium priority
        else if (item.url.includes('/reviews/') || item.url.includes('/guides/')) {
          item.priority = 0.7;
          item.changefreq = 'weekly';
        }
        
        return item;
      }
    })
  ],
  
  // Markdown configuration for content
  markdown: {
    shikiConfig: {
      theme: 'github-light',
      wrap: true
    },
    // Enable GitHub-flavored markdown
    gfm: true
  },
  
  // Build optimizations for SEO
  build: {
    // Inline stylesheets for better Core Web Vitals
    inlineStylesheets: 'auto'
  },
  
  // Development server configuration
  server: {
    port: 3000,
    host: true
  }
});