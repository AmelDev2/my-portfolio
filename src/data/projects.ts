export interface Project {
  id: string;
  title: string;
  descriptionEn: string;
  descriptionAr: string;
  description?: string;
  image: string;
  tags: string[];
  demoUrl: string;
  githubUrl: string;
  featuresEn?: string[];
  featuresAr?: string[];
  noteEn?: string;
  noteAr?: string;
}

export const projectsData: Project[] = [
    {
    id: 'exclusive-store',
    title: 'Exclusive E-Commerce Store',
    descriptionEn: 'A modern e-commerce web application featuring product catalogs, cart management, smooth UI interactions, and responsive design.',
    descriptionAr: 'تطبيق متجر إلكتروني عصري يضم كتالوجات المنتجات، إدارة سلة التسوق، تفاعلات واجهة مستخدم سلسة، وتصميم متجاوب.',
    image: '/public/E-Commerce.png',
    tags: ['React', 'JavaScript', 'Tailwind CSS', 'REST API'],
    demoUrl: 'https://exclusive-store-ruddy.vercel.app/', // <--- تم تحديث الرابط هنا
    githubUrl: 'https://github.com/AmelDev2/exclusive-store',
    featuresEn: [
      'Product Catalog: Browse dynamic product listings with categorized filtering.',
      'Cart & Checkout Flow: Add items, manage quantities, and calculate totals in real-time.',
      'Responsive UI: Styled with Tailwind CSS to ensure a clean layout across devices.'
    ],
    featuresAr: [
      'كتالوج المنتجات: تصفح قوائم المنتجات الديناميكية مع تصفية حسب الفئات.',
      'سلة التسوق وإتمام الطلب: إضافة العناصر، إدارة الكميات، وحساب الإجماليات بشكل فوري.',
      'واجهة متجاوبة: مصممة باستخدام Tailwind CSS لضمان تنسيق نظيف عبر الأجهزة.'
    ]
  },
  {
    id: 'kanban-board',
    title: 'Kanban Task Management',
    descriptionEn: 'A feature-rich Kanban task management web application built with React, allowing users to efficiently organize tasks, manage multiple boards, and seamlessly drag and drop.',
    descriptionAr: 'تطبيق ويب تفاعلي وإثراكي لإدارة المهام بنظام الكانبان مبني بـ React، يتيح تنظيم المهام وإدارة لوحات متعددة مع خاصية السحب والإفلات.',
    image: '/public/kanbanBoard.png',
    tags: ['React', 'TypeScript', 'Tailwind CSS', '@dnd-kit', 'Immer', 'Radix UI'],
    demoUrl: 'https://kanban-board-one-liard.vercel.app/',
    githubUrl: 'https://github.com/AmelDev2/kanban-board',
    featuresEn: [
      'Multi-Board Management: Create, edit, and delete multiple boards dynamically with persistent state using localStorage.',
      'Dynamic Columns & Tasks: Add, customize, and remove workflow columns and individual tasks within each board.',
      'Advanced Drag and Drop: Powered by @dnd-kit with support for sorting items locally and moving tasks across different columns.',
      'State Management & Immutability: Utilizes Immer for clean, predictable state updates paired with React Context API.',
      'Accessible UI Primitives: Built using Radix UI primitives (Dialogs and Dropdowns) for robust components.'
    ],
    featuresAr: [
      'إدارة لوحات متعددة: إنشاء وتعديل وحذف لوحات متعددة ديناميكياً مع حفظ الحالة في localStorage.',
      'أعمدة ومهام ديناميكية: إضافة وتخصيص وحذف أعمدة سير العمل والمهام الفردية داخل كل لوحة.',
      'سحب وإفلات متقدم: مدعوم بـ @dnd-kit لنقل المهام بسلاسة بين الأعمدة وتصنيفها.',
      'إدارة الحالة والغيرية (Immer): استخدام Immer للتحديثات النظيفة للحالة مع React Context API.',
      'مكونات وصولية (Radix UI): مبني باستخدام Radix UI للحوارات (Modals) والقوائم المنسدلة.'
    ],
    noteEn: 'Note on Responsiveness: This application is currently optimized and designed for desktop screens and larger viewports.',
    noteAr: 'ملاحظة حول التجاوب: التطبيق حالياً مخصص ومحسن للعرض على شاشات الأجهزة المكتبية والشاشات الكبيرة.'
  },

  {
    id: 'around-the-world',
    title: 'Around The World Explorer',
    descriptionEn: 'An interactive web app built with Vanilla JavaScript to explore countries, search regions, and fetch real-time global demographic data.',
    descriptionAr: 'تطبيق ويب تفاعلي مبني باستخدام جافاسكريفت لاستكشاف الدول، البحث في الأقاليم، وجلب بيانات ديموغرافية عالمية فورية.',
    image: '/public/aroundTheWorld.png',
    tags: ['JavaScript', 'HTML5/CSS3', 'REST API'],
    demoUrl: '#',
    githubUrl: 'https://github.com/AmelDev2/Around_the_World',
    featuresEn: [
      'Global Search & Filter: Search countries by name or filter seamlessly by world regions.',
      'Detailed Country Views: Inspect deep metrics including population, region, capital, and borders.',
      'API Integration: Consumes REST Countries API to fetch up-to-date geographical information.'
    ],
    featuresAr: [
      'بحث وتصفية عالمية: البحث عن الدول بالاسم أو التصفية بسلاسة حسب أقاليم العالم.',
      'عرض تفصيلي للدول: فحص المقاييس العميقة بما في ذلك عدد السكان، الإقليم، العاصمة، والحدود.',
      'ربط البيانات (API): جلب أحدث المعلومات الجغرافية باستخدام REST Countries API.'
    ]
  },

  {
    id: 'modern-todo',
    title: 'Modern To-Do List',
    descriptionEn: 'A sleek, modern, and minimalist Task Management application built using core web technologies, featuring Glassmorphism UI and persistent storage.',
    descriptionAr: 'تطبيق عصري وأنيق لإدارة المهام يعتمد على تقنيات الويب الأساسية، ويتميز بتصميم Glassmorphism وتخزين البيانات محلياً.',
    image: '/public/todopic.png', // يمكنك استبدالها بصورة أو استخدام رابط معاينة
    tags: ['JavaScript', 'HTML5', 'CSS3', 'LocalStorage'],
    demoUrl: 'https://ameldev2.github.io/modern-todo/', // يمكنك وضعه هنا أو رابط المعاينة إذا تم رفعه
    githubUrl: 'https://github.com/AmelDev2/modern-todo',
    featuresEn: [
      'Modern Glassmorphism UI: Trendy design with smooth visual effects and vibrant gradient background.',
      'Task Management: Seamlessly add, edit, and delete tasks in real time.',
      'Persistent Storage: Uses LocalStorage to save tasks so data persists across browser sessions.',
      'Smart Filtering: Ability to filter tasks and focus only on active or completed items.'
    ],
    featuresAr: [
      'واجهة Glassmorphism عصرية: تصميم رائع مع تأثيرات بصرية جذابة وخلفية متدرجة.',
      'إدارة المهام: إضافة، تعديل، وحذف المهام بسلاسة وبشكل فوري.',
      'التخزين المستمر: استخدام LocalStorage لحفظ المهام لتبقى محفوظة حتى بعد إغلاق المتصفح.',
      'تصفية ذكية: إمكانية فرز المهام والتركيز فقط على المهام النشطة أو المكتملة.'
    ]
  }
];