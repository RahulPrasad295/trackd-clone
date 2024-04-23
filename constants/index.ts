import {
  Airplane,
  BlueBag,
  Truck,
  Facebook,
  Twitter,
  WhatsApp,
  Instagram,
} from '@/public/assets/icons/';
import { Delivery, SalesStaff, HeroBanner } from '@/public/assets/images';

// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'company', label: 'Company', 'sub-label': ['a', 'b', 'c'] },
  {
    href: '/',
    key: 'services',
    label: 'Services',
    'sub-label': ['a', 'b', 'c'],
  },
  { href: '/', key: 'solutions', label: 'Solutions', 'sub-label': [] },
  { href: '/', key: 'industries ', label: 'Industries', 'sub-label': [] },
  { href: '/', key: 'insights', label: 'Insights', 'sub-label': [] },
  {
    href: '/',
    key: 'news_and_media',
    label: 'News and Media',
    'sub-label': [],
  },
];

// SERVICES
export const SERVICES = [
  {
    imgURL: Truck,
    label: 'Warehousing Services',
    subtext:
      'A pay as-you-go solution for: pallet storage, inventory management, fulfillment(e.g. pick and pack), in/out-bound solutions, and more.',
  },
  {
    imgURL: Airplane,
    label: 'Global Freight',
    subtext:
      'Search and compare the best shipping rates among dozens of trusted logistic partners for the last mile delivery and freight.',
  },
  {
    imgURL: BlueBag,
    label: 'Packaging Solutions',
    subtext:
      "Our packaging solutions are optimized for each individual customer and are selected based on on the customer's specific needs and requirements.",
  },
];

export const OPERATIONS = [
  {
    step: 1,
    label: 'Connect',
    subtext:
      "You're currently running your store on Shopify, WooCommerce, or any other platform. As a first step, you'll connect your store with our platform.",
    imageUrl: Delivery,
  },
  {
    step: 2,
    label: 'Store',
    subtext:
      "Then, you can send us your inventory and the fun begins. We'll choose a delivery day together so your fulfillment is not interrupted.",
    imageUrl: SalesStaff,
  },
  {
    step: 3,
    label: 'Ship',
    subtext:
      'We pick, pack and ship all incoming orders directly from our own warehouse until 12pm on the same day,',
    imageUrl: HeroBanner,
  },
];

// FOOTER LINKS
export const FOOTER_LINKS = [
  {
    title: 'Explore',
    links: [
      { name: 'About us', link: '/' },
      { name: 'Our Warehouses', link: '/' },
      { name: 'Blog', link: '/' },
      { name: 'News and Media', link: '/' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { name: 'Terms', link: '/' },
      { name: 'Privacy', link: '/' },
    ],
  },
];

// SOCIAL MEDIA
export const SOCIAL_MEDIA = [
  { src: Facebook, alt: 'facebook logo' },
  { src: Twitter, alt: 'twitter logo' },
  { src: WhatsApp, alt: 'whatsapp logo' },
  { src: Instagram, alt: 'instagram logo' },
];
