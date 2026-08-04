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
    github: 'https://github.com/AvsarSuvagiyaCelvion',
    linkedin: 'https://www.linkedin.com/in/avsar-suvagiya-859755343/',
    instagram: 'https://www.instagram.com/avsar_.07',
  },
  resume: '/resume.pdf',
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
  // {
  //   id: 1,
  //   title: 'Restaurant Website',
  //   description:
  //     'A fully responsive restaurant website featuring an interactive menu, online reservation system, and gallery. Built with React and Node.js backend with real-time table availability.',
  //   tags: ['React', 'Node.js', 'MongoDB', 'Bootstrap'],
  //   icon: 'bi-cup-hot-fill',
  //   gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  //   github: 'https://github.com',
  //   live: '#',
  //   features: ['Online Reservations', 'Dynamic Menu', 'Image Gallery', 'Admin Dashboard'],
  // },
  {
    id: 2,
    title: 'Taste Junction',
    description:
      'A premium and fully responsive restaurant website featuring an interactive food menu, online table reservation, and dynamic user experience. Built with React, Node.js, and MongoDB.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    category: 'Full Stack',
    icon: 'bi-cup-hot-fill',
    gradient: 'linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)',
    live: 'https://taste-junction-iota.vercel.app/',
    features: ['Online Reservations', 'Interactive Menu', 'Beautiful Gallery', 'Responsive Design'],
  },
  {
    id: 3,
    title: 'Rudra Gold',
    description:
      'A premium Shopify-based e-commerce jewelry store showcasing exquisite jewelry designs with collections, detailed descriptions, custom product pages, and a secure shopping experience.',
    tags: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
    category: 'Shopify',
    icon: 'bi-gem',
    gradient: 'linear-gradient(135deg, #bf953f 0%, #aa771c 100%)',
    live: 'https://rudra-gold-3kqg5mzn.myshopify.com/',
    features: ['Custom Jewelry Showcase', 'Responsive Design', 'Product Collections', 'Secure Checkout', 'Search & Filter'],
  },
  {
    id: 4,
    title: 'Financial Tracker App',
    description:
      'A personal finance management application with income/expense tracking, budget goals, visual charts, export to CSV, and multi-currency support.',
    tags: ['React', 'Bootstrap'],
    category: 'React',
    icon: 'bi-graph-up-arrow',
    // gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    live: 'https://expense-tracker-khaki-psi-42.vercel.app/',
    features: ['Budget Goals', 'Visual Charts', 'CSV Export', 'Multi-currency'],
  },
  {
    id: 5,
    title: 'Luxury Perfume Store',
    description:
      'A modern Shopify-based eCommerce website for selling premium perfumes with a responsive design, secure checkout, product collections, customer reviews, and an optimized shopping experience.',
    tags: ['Shopify', 'Liquid', 'HTML', 'CSS', 'JavaScript'],
    category: 'Shopify',
    icon: 'bi-shop',
    // gradient: 'linear-gradient(135deg, #8E2DE2 0%, #4A00E0 100%)',
    live: 'https://therimzimperfume.com',
    features: [
      'Responsive Design',
      'Product Collections',
      'Secure Checkout',
      'Customer Reviews',
      'Search & Filter',
      'Mobile Friendly',
    ],
  }
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

export const features = [
  {
    id: 1,
    title: 'High Performance',
    description: 'Blazing fast load times, optimized assets, and clean code scoring 90+ on Lighthouse.',
    icon: 'bi-lightning-charge-fill',
    color: '#00d4ff'
  },
  {
    id: 2,
    title: 'Scalable Architecture',
    description: 'Modular, well-structured components built to grow alongside your application requirements.',
    icon: 'bi-server',
    color: '#6c63ff'
  },
  {
    id: 3,
    title: 'Creative UI/UX',
    description: 'Bespoke layouts, engaging micro-animations, and fluid transitions that captivate users.',
    icon: 'bi-palette-fill',
    color: '#ff6b9d'
  },
  {
    id: 4,
    title: 'SEO & Analytics',
    description: 'Structured semantic markup and optimized meta-tags for excellent search engine visibility.',
    icon: 'bi-search',
    color: '#ffd166'
  }
];

export const pricingPlans = [
  {
    id: 1,
    name: 'Starter Package',
    price: '$999',
    description: 'Perfect for small businesses looking to establish a premium online presence.',
    features: [
      '1 Custom Landing Page',
      'Fully Responsive Layout',
      'SEO Friendly Setup',
      'Contact Form Integration',
      '1 Month Support'
    ],
    popular: false,
    color: '#00d4ff'
  },
  {
    id: 2,
    name: 'Growth Pack',
    price: '$2,499',
    description: 'A comprehensive, dynamic solution designed to scale and drive conversions.',
    features: [
      'Up to 5 Pages Website',
      'Custom Motion Animations',
      'CMS / Dynamic Admin Panel',
      'API & Payment Integration',
      '3 Months Premium Support'
    ],
    popular: true,
    color: '#6c63ff'
  },
  {
    id: 3,
    name: 'Enterprise Custom',
    price: 'Custom',
    description: 'Tailored architecture and complex functionality built for demanding workloads.',
    features: [
      'Unlimited Pages & Routes',
      'Dedicated Backend & DB',
      'Advanced User Authentication',
      'Custom Shopify/E-commerce',
      'Lifetime Security Updates'
    ],
    popular: false,
    color: '#ff6b9d'
  }
];

export const testimonials = [
  {
    id: 1,
    name: 'Johnathan Doe',
    role: 'CEO, FinSight Technologies',
    rating: 5,
    text: 'Working with Avsar was an absolute game changer. He redesigned our dashboard into a sleek, premium product that our clients love. Spacing, performance, and attention to detail are top-tier.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'Founder, Rimzi Perfumes',
    rating: 5,
    text: 'An exceptional developer who understands both frontend aesthetics and backend functionality. Our Shopify templates were coded flawlessly, resulting in a 25% increase in conversion rate.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120&h=120'
  },
  {
    id: 3,
    name: 'Rajesh Sharma',
    role: 'Product Director, Taste Junction',
    rating: 5,
    text: 'Delivered our restaurant application ahead of schedule. The dynamic ordering experience is incredibly smooth and responsive. Looking forward to our next collaboration!',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120&h=120'
  }
];

export const faqs = [
  {
    id: 1,
    question: 'What is your typical project timeline?',
    answer: 'Typical timelines range from 2 to 4 weeks for landing pages and marketing websites, and 6 to 10 weeks for full-stack custom web applications. The exact scope determines the duration.'
  },
  {
    id: 2,
    question: 'Do you offer post-launch support and maintenance?',
    answer: 'Yes! All packages include complimentary support (ranging from 1 to 3 months) to handle any minor updates, bug fixes, or performance tuning. Extended SLA contracts are also available.'
  },
  {
    id: 3,
    question: 'Which technology stack do you specialize in?',
    answer: 'I specialize in the MERN stack (React, Node.js, Express, MongoDB) for complex web applications, and PHP/MySQL/Shopify Liquid templates for e-commerce and CMS platforms.'
  },
  {
    id: 4,
    question: 'Can you customize a plan for my specific business budget?',
    answer: 'Absolutely. Every business has unique needs. We can schedule a brief call, discuss your requirements, and tailor a custom package that fits your goals and budget.'
  }
];

