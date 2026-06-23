export const personalInfo = {
  name: 'Avsar Suvagiya',
  title: 'Full Stack Developer',
  subtitle: 'Building modern web experiences with clean code & creative design',
  email: 'avsarsuvagiya968@gmail.com',
  phone: '+91 8320653782',
  location: 'Surat , Gujrat , India',
  bio: `I'm a passionate Full Stack Developer with 5+ years of experience crafting scalable,
  user-centric web applications. I specialize in React, Node.js, PHP, and modern e-commerce
  platforms including Shopify. I love turning complex problems into elegant, performant solutions
  that drive real business value.`,
  bioExtra: `When I'm not coding, you'll find me exploring new frameworks, contributing to
  open-source projects, or mentoring junior developers. I believe great software is built at
  the intersection of technical excellence and thoughtful design.`,
  avatar: null,
  socials: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    instagram: 'https://instagram.com',
  },
  resume: '',
};

export const skills = [
  {
    category: 'Frontend',
    icon: 'bi-laptop',
    color: '#6c63ff',
    items: ['React', 'JavaScript (ES6+)', 'TypeScript', 'HTML5 & CSS3', 'Bootstrap 5', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    category: 'Backend',
    icon: 'bi-server',
    color: '#00d4ff',
    items: ['Node.js', 'Express.js', 'PHP', 'REST APIs', 'MySQL', 'MongoDB'],
  },
  {
    category: 'E-commerce',
    icon: 'bi-cart4',
    color: '#ff6b9d',
    items: ['Shopify', 'WooCommerce', 'Liquid Templates', 'Payment Gateways', 'Inventory Systems'],
  },
  {
    category: 'DevOps & Tools',
    icon: 'bi-gear-wide-connected',
    color: '#ffd166',
    items: ['Git & GitHub', 'Vercel', 'VS Code'],
  },
];

export const projects = [
  {
    id: 1,
    title: 'Restaurant Website',
    description:
      'A fully responsive restaurant website featuring an interactive menu, online reservation system, and gallery. Built with React and Node.js backend with real-time table availability.',
    tags: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
    icon: 'bi-cup-hot-fill',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    github: 'https://github.com',
    live: '#',
    features: ['Online Reservations', 'Dynamic Menu', 'Image Gallery', 'Admin Dashboard'],
  },
  {
    id: 2,
    title: 'Electronics E-commerce',
    description:
      'A feature-rich electronics store with product filtering, cart management, Stripe payments, user authentication, and an admin panel for inventory management.',
    tags: ['React', 'PHP', 'MySQL', 'Stripe API'],
    icon: 'bi-phone-fill',
    gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    github: 'https://github.com',
    live: '#',
    features: ['Stripe Payments', 'Product Filtering', 'User Auth', 'Admin Panel'],
  },
  {
    id: 3,
    title: 'PHP Social Media App',
    description:
      'A full-featured social platform with real-time messaging, post feeds, friend connections, photo sharing, and notifications — built entirely in PHP with MySQL.',
    tags: ['PHP', 'MySQL', 'JavaScript', 'CSS3'],
    icon: 'bi-people-fill',
    gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    github: 'https://github.com',
    live: '#',
    features: ['Real-time Chat', 'Post Feed', 'Friend System', 'Notifications'],
  },
  {
    id: 4,
    title: 'Financial Tracker App',
    description:
      'A personal finance management application with income/expense tracking, budget goals, visual charts, export to CSV, and multi-currency support.',
    tags: ['React', 'Bootstrap'],
    icon: 'bi-graph-up-arrow',
    gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    github: 'https://github.com',
    live: '#',
    features: ['Budget Goals', 'Visual Charts', 'CSV Export', 'Multi-currency'],
  },
];

export const services = [
  {
    id: 1,
    title: 'Business Websites',
    icon: 'bi-globe2',
    color: '#6c63ff',
    description:
      'Professional, fast, and SEO-optimized websites that establish your brand online. From landing pages to full multi-page corporate sites tailored to your goals.',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Integration', 'Performance Tuned'],
  },
  {
    id: 2,
    title: 'E-commerce Development',
    icon: 'bi-bag-check-fill',
    color: '#00d4ff',
    description:
      'End-to-end online stores with secure checkout, inventory management, payment gateways, and intuitive shopping experiences that convert visitors into customers.',
    features: ['Secure Payments', 'Inventory System', 'Order Management', 'Analytics'],
  },
  {
    id: 3,
    title: 'Shopify Customization',
    icon: 'bi-shop',
    color: '#ff6b9d',
    description:
      'Custom Shopify themes, app integrations, Liquid template development, and store optimization. I make your Shopify store stand out from the crowd.',
    features: ['Custom Themes', 'Liquid Templates', 'App Integration', 'Store Migration'],
  },
  {
    id: 4,
    title: 'Web Applications',
    icon: 'bi-code-slash',
    color: '#ffd166',
    description:
      'Scalable, full-stack web applications with modern UI/UX, real-time features, REST APIs, and cloud deployment — built to grow with your business.',
    features: ['REST APIs', 'Real-time Features', 'Cloud Deployment', 'Scalable Architecture'],
  },
];
