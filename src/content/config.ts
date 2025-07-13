import { defineCollection, z } from 'astro:content';

const productReviews = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    author: z.string().default('Salt Life Detail Team'),
    category: z.enum(['cleaners', 'waxes-sealants', 'tools-equipment', 'interior-care', 'specialty']),
    tags: z.array(z.string()).default([]),
    productName: z.string(),
    brand: z.string(),
    price: z.string(),
    rating: z.number().min(1).max(5),
    affiliateLink: z.string().url(),
    inStock: z.boolean().default(true),
    featured: z.boolean().default(false),
    pros: z.array(z.string()),
    cons: z.array(z.string()),
    specifications: z.object({
      size: z.string().optional(),
      weight: z.string().optional(),
      coverage: z.string().optional(),
      application: z.string().optional(),
    }).optional(),
    testingDetails: z.object({
      testDuration: z.string(),
      testConditions: z.string(),
      boatType: z.string(),
    }).optional(),
    seoKeywords: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    heroImage: z.string(),
    gallery: z.array(z.string()).default([]),
  })
});

const guides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    author: z.string().default('Salt Life Detail Team'),
    category: z.enum(['basic-maintenance', 'deep-cleaning', 'seasonal-care', 'problem-solving', 'product-application']),
    difficulty: z.enum(['beginner', 'intermediate', 'advanced']),
    timeRequired: z.string(),
    tags: z.array(z.string()).default([]),
    tools: z.array(z.string()),
    materials: z.array(z.string()),
    steps: z.array(z.object({
      title: z.string(),
      description: z.string(),
      image: z.string().optional(),
      tips: z.array(z.string()).default([]),
    })),
    featured: z.boolean().default(false),
    seasonal: z.boolean().default(false),
    relatedGuides: z.array(z.string()).default([]),
    relatedProducts: z.array(z.string()).default([]),
    seoKeywords: z.array(z.string()).default([]),
    heroImage: z.string(),
    beforeAfter: z.object({
      before: z.string(),
      after: z.string(),
    }).optional(),
  })
});

const localServices = defineCollection({
  type: 'content',
  schema: z.object({
    businessName: z.string(),
    description: z.string(),
    category: z.enum(['detailing-service', 'supply-store', 'marina', 'repair-service']),
    address: z.string(),
    city: z.string(),
    state: z.string().default('FL'),
    zipCode: z.string(),
    phone: z.string(),
    website: z.string().url().optional(),
    email: z.string().email().optional(),
    hours: z.array(z.object({
      day: z.string(),
      open: z.string(),
      close: z.string(),
    })),
    services: z.array(z.string()),
    priceRange: z.enum(['$', '$$', '$$$', '$$$$']),
    rating: z.number().min(1).max(5),
    reviewCount: z.number(),
    featured: z.boolean().default(false),
    verified: z.boolean().default(false),
    images: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  })
});

const buyingGuides = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updateDate: z.date().optional(),
    author: z.string().default('Salt Life Detail Team'),
    category: z.enum(['best-of', 'comparison', 'budget-guide', 'seasonal-guide']),
    priceRange: z.string().optional(),
    season: z.enum(['spring', 'summer', 'fall', 'winter', 'year-round']).optional(),
    products: z.array(z.object({
      name: z.string(),
      brand: z.string(),
      price: z.string(),
      rating: z.number(),
      affiliateLink: z.string().url(),
      pros: z.array(z.string()),
      cons: z.array(z.string()),
      bestFor: z.string(),
    })),
    featured: z.boolean().default(false),
    seoKeywords: z.array(z.string()).default([]),
    heroImage: z.string(),
    tags: z.array(z.string()).default([]),
  })
});

export const collections = {
  'product-reviews': productReviews,
  'guides': guides,
  'local-services': localServices,
  'buying-guides': buyingGuides,
};