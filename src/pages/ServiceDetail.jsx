import { useLocation, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
// Icons (react-icons)
import { FaCheckCircle, FaCogs, FaMobileAlt, FaPaintBrush, FaServer, FaBrain, FaCloud, FaCubes, FaVrCardboard, FaRobot, FaTv, FaBolt, FaJava } from 'react-icons/fa'
import { SiKotlin, SiSwift, SiFlutter, SiReact, SiGradle, SiFirebase, SiPython, SiDjango, SiGooglecloud } from 'react-icons/si'
import AOS from 'aos'
import 'aos/dist/aos.css'

// Simple icon map so content can reference icons by key
const ICONS = {
  check: FaCheckCircle,
  consulting: FaCogs,
  app: FaMobileAlt,
  design: FaPaintBrush,
  backend: FaServer,
  ai: FaBrain,
  cloud: FaCloud,
  blockchain: FaCubes,
  vr: FaVrCardboard,
  ml: FaRobot,
  tv: FaTv,
  iot: FaBolt,
  swift: SiSwift,
  kotlin: SiKotlin,
  flutter: SiFlutter,
  react: SiReact,
  gradle: SiGradle,
  firebase: SiFirebase,
  python: SiPython,
  django: SiDjango,
  java: FaJava,
  // AWS icon is not exported as SiAmazonaws in react-icons v5 Si set.
  // Use a generic cloud icon for AWS to avoid missing export error.
  aws: FaCloud,
  gcp: SiGooglecloud,
  // azure: SiMicrosoft,
}

function Icon({ name, size = 28, color }){
  const Cmp = ICONS[name] || FaCogs
  return <Cmp size={size} color={color} />
}

// Base minimal titles so routes work; extended content below will override
const BASE_TITLES = {
  'mobile/app-development': {
    title: 'Mobile App Development',
    desc: 'End-to-end iOS and Android app development including discovery, UX/UI, native and cross-platform builds, QA, CI/CD, and store launch. We guide you from ideation and strategy through design, development, rigorous testing, and successful deployment, ensuring your app stands out in the marketplace and delivers exceptional user experiences.'
  },
  'mobile/ios': {
    title: 'iOS Development',
    desc: 'Native iOS apps using Swift/SwiftUI with performance, accessibility, and App Store compliance in mind. Our team crafts elegant, high-performance iPhone and iPad applications, focusing on seamless integration with Apple’s ecosystem, robust security, and delightful user interfaces that drive engagement and retention.'
  },
  'mobile/android': {
    title: 'Android Development',
    desc: 'Native Android apps using Kotlin with modern architecture (Jetpack, MVVM) and Play Store best practices. We deliver scalable, feature-rich Android solutions for phones, tablets, TVs, and wearables, leveraging the latest Google technologies and ensuring smooth releases and ongoing support.'
  },
  'mobile/flutter': {
    title: 'Flutter Development',
    desc: 'High-quality cross-platform apps from a single codebase using Flutter and Dart. We build beautiful, performant mobile applications for iOS, Android, and beyond, utilizing Flutter’s expressive UI and rapid development cycles to accelerate your product’s time-to-market.'
  },
  'mobile/cross-platform': {
    title: 'Cross Platform App Development',
    desc: 'React Native, Flutter, and Ionic for faster multi-platform delivery while maintaining native-like UX. Our cross-platform expertise enables you to reach users on multiple devices efficiently, with consistent branding, robust features, and cost-effective development.'
  },
  'mobile/react-native': {
    title: 'React Native Development',
    desc: 'React Native apps with shared code, native modules, OTA updates, and robust testing. We help you launch and scale mobile products quickly, combining the flexibility of JavaScript with native performance and seamless updates.'
  },
  'mobile/ionic': {
    title: 'Ionic Development',
    desc: 'Hybrid apps using Ionic with Capacitor/Native plugins and enterprise-grade integrations. We create versatile mobile solutions that leverage web technologies, enabling rapid prototyping, easy maintenance, and integration with enterprise systems.'
  },

  'startup-it-solutions': {
    title: 'Startup IT Solutions',
    desc: 'Product discovery, MVPs, rapid iterations, and growth-stage engineering with pragmatic tooling. We empower startups to validate ideas, build scalable MVPs, and iterate quickly, providing technical leadership and flexible engagement models to support your journey from concept to market.'
  },
  'market-research-software-development': {
    title: 'Market Research Software Development',
    desc: 'Data collection, survey platforms, dashboards, and analytics for research-driven organizations. Our solutions enable efficient data gathering, insightful analysis, and secure reporting, helping you make informed decisions and drive business growth.'
  },
  'enterprise-it-solutions': {
    title: 'Enterprise IT Solutions',
    desc: 'Secure, scalable platforms, modernization, integrations, and governance for enterprises. We deliver robust IT infrastructure, legacy modernization, seamless integrations, and compliance-focused solutions tailored to complex enterprise needs.'
  },

  'web/web-app-development': {
    title: 'Web App Development',
    desc: 'Modern web apps using React/Vue/Angular with Node/Java/Python backends and cloud-native infrastructure. We build responsive, high-performance web applications with intuitive interfaces, scalable architectures, and seamless integrations, ensuring reliability and future-proofing.'
  },
  'web/php': {
    title: 'PHP Development',
    desc: 'Robust PHP applications and APIs with modern frameworks and performance tuning. Our team specializes in building secure, maintainable PHP solutions, optimizing for speed, scalability, and seamless third-party integrations.'
  },
  'web/ror': {
    title: 'Ruby on Rails Development',
    desc: 'Rapid web application delivery with Rails, conventions, and clean architecture. We leverage Rails’ productivity and best practices to deliver maintainable, scalable web platforms with fast iteration cycles and strong security.'
  },
  'web/vuejs': {
    title: 'Vue.js Development',
    desc: 'Vue.js SPAs and SSR apps with modular components and solid state management. We create dynamic, interactive web experiences using Vue.js, focusing on performance, maintainability, and smooth user interactions.'
  },
  'web/react': {
    title: 'React Development',
    desc: 'React SPA/SSR development, hooks, performance, testing, and accessibility best practices. Our React experts deliver cutting-edge web applications with reusable components, optimized rendering, and robust testing strategies.'
  },
  'web/java': {
    title: 'Java Development',
    desc: 'Enterprise Java services, Spring Boot microservices, and resilient distributed systems. We architect and implement scalable, secure Java solutions for mission-critical business applications, leveraging modern frameworks and cloud-native patterns.'
  },
  'web/python': {
    title: 'Python Development',
    desc: 'APIs, data apps, and services with FastAPI/Django/Flask, with solid testing and observability. We build reliable Python applications for web, data, and automation, emphasizing maintainability, scalability, and comprehensive monitoring.'
  },
  'web/angular': {
    title: 'Angular Development',
    desc: 'Angular apps with RxJS, strong typing, modular architecture and CI/CD. Our Angular team delivers robust, scalable web platforms with advanced state management, modular codebases, and automated deployment pipelines.'
  },
  'web/nodejs': {
    title: 'Node.js Development',
    desc: 'Node.js services, GraphQL/REST APIs, event-driven systems and cloud-native deployment. We create high-performance backend solutions using Node.js, enabling real-time features, scalable APIs, and seamless cloud integration.'
  },

  'ecommerce-cms': {
    title: 'Ecommerce & CMS',
    desc: 'Magento, WordPress, Shopify, and marketplace builds with custom themes, plugins, and integrations. We deliver end-to-end ecommerce and content management solutions, focusing on user experience, conversion optimization, and seamless integrations with payment, shipping, and analytics platforms.'
  },
  'ecommerce-cms/magento': {
    title: 'Magento Development',
    desc: 'Magento storefronts, custom modules, performance, and multi-tenant setups. Our Magento experts build scalable, secure ecommerce platforms with advanced features, customizations, and integrations to support complex business needs.'
  },
  'ecommerce-cms/wordpress': {
    title: 'WordPress Development',
    desc: 'Headless and classic WordPress with custom themes/plugins and enterprise scaling. We create flexible WordPress solutions, from simple blogs to enterprise-grade platforms, focusing on speed, security, and extensibility.'
  },
  'ecommerce-cms/marketplace': {
    title: 'Marketplace Solutions',
    desc: 'Marketplace architecture, seller onboarding, catalog, payments, and logistics flows. We design and implement multi-vendor marketplaces with robust workflows, secure transactions, and scalable infrastructure.'
  },
  'ecommerce-cms/shopify': {
    title: 'Shopify Development',
    desc: 'Shopify storefronts, apps, checkout customization, and headless Commerce. Our Shopify team delivers tailored ecommerce experiences, custom apps, and seamless integrations to maximize your online sales.'
  },

  'ai': {
    title: 'Artificial Intelligence',
    desc: 'LLM apps, embeddings, RAG, fine-tuning, ML pipelines, and MLOps for production AI. We help you harness AI for automation, personalization, and advanced analytics, building scalable solutions with state-of-the-art machine learning and natural language technologies.'
  },
  'chatbot': {
    title: 'Chatbot Development',
    desc: 'Conversational agents for support, sales, and internal tooling with analytics and guardrails. We design and deploy intelligent chatbots that enhance customer engagement, automate workflows, and provide actionable insights.'
  },
  'ai-voice-agents': {
    title: 'AI Voice Agents',
    desc: 'Realtime voice agents with low-latency streaming, telephony, IVR flows, and monitoring. Our voice AI solutions enable natural, efficient interactions for customer support, sales, and automation, integrating with telephony and analytics platforms.'
  },
  'enterprise-product-engineering': {
    title: 'Enterprise Product Engineering',
    desc: 'Product discovery, architecture, modernization, and long-term platform engineering. We partner with enterprises to deliver strategic product engineering, from initial concept and architecture to modernization and ongoing platform evolution.'
  },
}

// Extended per-service content to render a rich layout similar to OnGraph pages
const SERVICE_OVERRIDES = {
  'mobile/app-development': {
    hero: {
      eyebrow: 'Mobile App Development Company',
      title: 'Build high-performing mobile apps that users love',
      subtitle:
        'We specialize in building high-quality mobile applications tailored to your business goals, offering both fully native iOS and Android apps as well as cross-platform solutions with React Native and Flutter. Our expert team delivers pixel-perfect UI/UX, robust and scalable architecture, and end-to-end support—from ideation and strategy to design, development, testing, and deployment. We guide you through every stage of the product lifecycle, handling everything from market-fit strategy, intuitive interface design, and secure high-performance development to rigorous QA, CI/CD pipelines, app store submission, and post-launch maintenance. With us, you get more than just an app; you gain a reliable partner committed to ensuring your product excels in performance, security, scalability, and user engagement.',
      primaryCta: { label: 'Get Free Consultation', to: '/contact' },
      secondaryCta: { label: 'View Case Studies', to: '/case-studies' },
    },
    overview: {
      paragraphs: [
        'We provide cutting-edge and innovative mobile app development services to businesses of all sizes and industries. From strategy and UX to development and release, our full-cycle services cover it all. Our approach includes deep market research, user-centric design, and agile development methodologies to ensure your app meets business goals and exceeds user expectations.',
        'Our team is experienced across iOS, Android, and cross-platform stacks, ensuring performance, scalability, and delightful user experiences. We focus on robust architecture, seamless integrations, and future-proofing your product for ongoing success.',
        'We also offer post-launch support, analytics integration, and continuous improvement cycles to help your app grow and adapt to changing market needs.'
      ],
      bullets: [
        'Native and cross‑platform development',
        'Custom iOS and Android development',
        'Second platform development / porting',
        'UI/UX design and prototyping',
        'App consulting and architecture',
        'QA automation and manual testing',
        'Embedded/Android AOSP customizations',
        'Maintenance and post‑warranty support',
        'App analytics and performance monitoring',
        'App store optimization and launch strategy'
      ]
    },
    ranges: [
      { title: 'Mobile App Development Consulting', desc: 'App ideation, market research, platform selection, technical strategy, and feasibility analysis. We help you define clear goals and a roadmap for success.', icon: 'consulting' },
      { title: 'Mobile UX & UI Design', desc: 'User-centered designs that improve engagement and conversions. Our designers create intuitive interfaces, interactive prototypes, and visually stunning experiences.', icon: 'design' },
      { title: 'Backend Development', desc: 'Scalable APIs, integrations, and secure architectures. We build robust server-side solutions, cloud integrations, and real-time data pipelines to power your app.', icon: 'backend' },
      { title: 'Quality Assurance & Testing', desc: 'Automated and manual testing for reliability, performance, and security. We ensure your app is bug-free and ready for launch.', icon: 'ai' },
      { title: 'App Store Launch & Optimization', desc: 'End-to-end support for app store submissions, compliance, and optimization to maximize visibility and downloads.', icon: 'app' },
      { title: 'Maintenance & Support', desc: 'Ongoing updates, bug fixes, and feature enhancements to keep your app competitive and secure.', icon: 'check' },
      { title: 'Integration with Third-Party Services', desc: 'Connect your app with payment gateways, social media, analytics, and other essential services for a seamless experience.', icon: 'backend' },
      { title: 'Migration & Modernization', desc: 'Upgrade legacy apps to modern platforms and architectures for improved performance and scalability.', icon: 'cloud' }
    ],
    capabilities: [
      { title: 'Big Data', desc: 'Capture, process, and analyze large datasets to drive decisions. Integrate analytics, reporting, and machine learning for actionable insights.', icon: 'ai' },
      { title: 'Blockchain', desc: 'Secure transactions and data transparency with blockchain. Implement smart contracts, decentralized apps, and secure authentication.', icon: 'blockchain' },
      { title: 'Cloud Computing', desc: 'Reliable, scalable, and secure cloud-backed mobile apps. Deploy on AWS, GCP, or Azure with automated scaling and monitoring.', icon: 'cloud' },
      { title: 'Image Recognition', desc: 'AR, object, and facial recognition for rich experiences. Integrate computer vision for innovative features and user engagement.', icon: 'ml' },
      { title: 'Virtual Reality (VR)', desc: 'Immersive apps for gaming, education, and more. Build interactive VR experiences with advanced graphics and real-time interactions.', icon: 'vr' },
      { title: 'Artificial Intelligence', desc: 'Personalization, predictions, and automation. Leverage AI for chatbots, recommendations, and intelligent automation.', icon: 'ai' },
      { title: 'Smart TVs', desc: 'Apps for TV platforms with intuitive UX and streaming. Deliver content-rich experiences for smart TVs and connected devices.', icon: 'tv' },
      { title: 'Internet of Things (IoT)', desc: 'Real-time data and control across devices and sensors. Connect your app to wearables, home automation, and industrial IoT.', icon: 'iot' },
      { title: 'Wearables', desc: 'Companion apps for watches and fitness trackers. Integrate health data, notifications, and seamless device connectivity.', icon: 'app' },
      { title: 'Security & Compliance', desc: 'Implement best practices for data protection, privacy, and regulatory compliance in your mobile solutions.', icon: 'backend' },
      { title: 'Performance Optimization', desc: 'Advanced profiling, monitoring, and tuning to ensure your app runs smoothly and efficiently.', icon: 'check' },
      { title: 'Localization & Accessibility', desc: 'Multi-language support and accessibility features to reach a wider audience and comply with standards.', icon: 'design' }
    ],
    tabs: {
      items: [
        {
          key: 'android', label: 'Android App Development',
          logos: ['kotlin', 'gradle', 'firebase', 'java'],
          title: 'Android Mobile App Development',
          desc: 'We build scalable, feature-rich Android apps tailored to your needs and guide releases to Google Play. Our expertise covers phones, tablets, TVs, and wearables, with a focus on modern architecture, security, and ongoing support.',
          bullets: [
            'Android TV and Tablet apps',
            'Wear OS apps',
            'Custom app development',
            'Jetpack Compose and Material Design',
            'Play Store compliance and optimization',
            'Continuous integration and delivery (CI/CD)'
          ]
        },
        {
          key: 'ios', label: 'iOS App Development',
          logos: ['swift'],
          title: 'iOS App Development',
          desc: 'High-quality iPhone and iPad apps with Swift and SwiftUI following Apple HIG and App Store guidelines. We deliver seamless integration with Apple’s ecosystem, robust security, and delightful user interfaces.',
          bullets: [
            'Swift/SwiftUI native apps',
            'App Store distribution support',
            'WidgetKit, Siri, HealthKit integrations',
            'Accessibility and performance optimization',
            'TestFlight beta releases',
            'Automated testing and CI/CD'
          ]
        },
        {
          key: 'cross', label: 'Cross-Platform App Development',
          logos: ['react', 'flutter'],
          title: 'Cross-Platform Mobile',
          desc: 'Deliver faster with shared code while keeping native-like UX using React Native or Flutter. We ensure consistent branding, robust features, and cost-effective development across platforms.',
          bullets: [
            'React Native with native modules',
            'Flutter multi-platform experiences',
            'OTA updates and CI/CD',
            'Rapid prototyping and MVPs',
            'Performance tuning and analytics',
            'Third-party integrations'
          ]
        },
        {
          key: 'integrated', label: 'Mobile + Integrated Web',
          logos: ['python', 'django', 'aws', 'gcp', 'azure'],
          title: 'Mobile with Integrated Web Services',
          desc: 'Robust backends, dashboards and APIs to power your apps securely and at scale. We build cloud-native solutions, real-time data pipelines, and admin portals for complete product ecosystems.',
          bullets: [
            'REST/GraphQL APIs',
            'Observability and monitoring',
            'Cloud-native deployments',
            'Admin dashboards and reporting',
            'Authentication and user management',
            'Scalable microservices architecture'
          ]
        },
      ]
    },
  },

  // Sub-service pages override content to be specific
'mobile/android': {
  hero: {
    eyebrow: 'Android App Development',
    title: 'Modern Android apps built for scale',
    subtitle:
      'Kotlin-first development with Jetpack architecture, advanced testing, analytics, and Play Store best practices. Our team delivers robust, scalable Android solutions for phones, tablets, TVs, and wearables, focusing on performance, security, and seamless user experiences. We guide you through every step, from ideation and design to development, QA, deployment, and post-launch support.',
    primaryCta: { label: 'Discuss Android Project', to: '/contact' },
  },
  overview: {
    paragraphs: [
      'We specialize in crafting robust Android applications across phones, tablets, TVs, and wearables. Our process starts with deep market research and user analysis to ensure your app meets business goals and exceeds user expectations. We leverage the latest Android technologies, including Kotlin, Jetpack libraries, and modern architecture patterns, to deliver high-performance, maintainable solutions.',
      'Our team focuses on accessibility, security, and compliance, ensuring your app is ready for Play Store submission and ongoing updates. We provide continuous integration and delivery pipelines, automated and manual testing, and analytics integration for data-driven improvements.',
      'Post-launch, we offer monitoring, crash/ANR reduction, feature enhancements, and proactive maintenance to keep your app competitive and reliable.'
    ],
    bullets: [
      'Kotlin + Jetpack (MVVM/Clean)',
      'Material 3 UI & Accessibility',
      'Play Console compliance & releases',
      'Crash/ANR reduction and performance',
      'Custom Android TV and Wear OS apps',
      'Automated and manual QA',
      'Continuous integration and delivery (CI/CD)',
      'App analytics and monitoring',
      'Security and privacy best practices',
      'Ongoing maintenance and feature updates'
    ]
  },
  ranges: [
    { title: 'Architecture & Consulting', desc: 'Clean architecture, modularization, and performance tuning. We help you define scalable app structures, optimize for maintainability, and ensure future-proof solutions.', icon: 'consulting' },
    { title: 'UI/UX Implementation', desc: 'Material You, theming, dark mode, dynamic color. Our designers create intuitive, visually appealing interfaces that drive engagement and retention.', icon: 'design' },
    { title: 'Backend & Integrations', desc: 'Payments, auth, analytics, notifications, and more. We build secure, scalable APIs and integrate essential third-party services for a seamless experience.', icon: 'backend' },
    { title: 'Quality Assurance & Testing', desc: 'Automated and manual testing for reliability, performance, and security. We use industry-standard tools to ensure your app is bug-free and ready for launch.', icon: 'ai' },
    { title: 'App Store Launch & Optimization', desc: 'End-to-end support for Play Store submissions, compliance, and optimization to maximize visibility and downloads.', icon: 'app' },
    { title: 'Maintenance & Support', desc: 'Ongoing updates, bug fixes, and feature enhancements to keep your app competitive and secure.', icon: 'check' },
    { title: 'Performance Monitoring & Crash Analytics', desc: 'Real-time ANR/crash tracking, memory optimization, and performance profiling to deliver a smooth user experience.', icon: 'analytics' },
    { title: 'Security & Compliance Audits', desc: 'Implementing secure coding practices, data encryption, and GDPR/privacy compliance to protect your users and your brand.', icon: 'security' }
  ],

  // 👇 New capabilities array
  capabilities: [
    { title: 'Jetpack Compose & Material 3', desc: 'Modern UI development using Jetpack Compose and Material 3 for fast, responsive, and accessible interfaces.', icon: 'design' },
    { title: 'Wear OS & Android TV', desc: 'Companion apps for smartwatches, TVs, and other form factors, with optimized layouts and experiences.', icon: 'app' },
    { title: 'Custom Integrations', desc: 'Payments, authentication, analytics, notifications, and other third-party services integrated securely.', icon: 'backend' },
    { title: 'Offline-First & Sync', desc: 'Room/SQLite, offline caching, and background sync for reliable experiences even without connectivity.', icon: 'cloud' },
    { title: 'AI & ML on Device', desc: 'TensorFlow Lite / ML Kit integration for image recognition, recommendations, and smart features.', icon: 'ai' },
    { title: 'IoT & Connected Devices', desc: 'Real-time data and control across IoT devices, sensors, and custom hardware using Android Things APIs.', icon: 'iot' },
    { title: 'Security & Privacy', desc: 'Best practices for data protection, secure storage, encryption, and Play Console compliance.', icon: 'security' },
    { title: 'Localization & Accessibility', desc: 'Multi-language support and full accessibility (TalkBack, Dynamic Type) to reach a wider audience.', icon: 'design' },
    { title: 'Performance Optimization', desc: 'Advanced profiling, ANR/crash reduction, battery optimization, and startup speed improvements.', icon: 'check' },
    { title: 'Cloud Backends', desc: 'Firebase, AWS, GCP integrations for push notifications, real-time databases, and analytics.', icon: 'cloud' },
    { title: 'App Store Optimization', desc: 'Optimizing Play Store listings, A/B testing, and analytics to improve discoverability and installs.', icon: 'app' },
    { title: 'Post-launch Monitoring', desc: 'Crash/ANR dashboards, feature usage analytics, and proactive updates to keep your app ahead.', icon: 'analytics' }
  ],

  tabs: {
    items: [
      {
        key: 'android',
        label: 'Android',
        logos: ['kotlin', 'gradle', 'firebase', 'java'],
        title: 'Android Services',
        desc: 'Everything Android from phones to TVs. We deliver custom solutions for smartphones, tablets, Android TV, and Wear OS, leveraging the latest frameworks and best practices. Our expertise includes advanced UI/UX, secure integrations, real-time features, and scalable architectures.',
        bullets: [
          'Wear OS and Android TV apps',
          'Jetpack Compose and Material Design',
          'Custom app development',
          'Play Store compliance and optimization',
          'Continuous integration and delivery (CI/CD)',
          'Crash/ANR monitoring and reduction',
          'Automated and manual QA',
          'Third-party integrations (payments, auth, analytics)',
          'Performance tuning and analytics',
          'Ongoing maintenance and feature updates',
          'Push notifications and real-time features',
          'Secure authentication & in-app purchases'
        ]
      }
    ]
  }
}
,
  

'mobile/ios': {
  hero: {
    eyebrow: 'iOS App Development',
    title: 'Delightful iOS apps that users love',
    subtitle:
      'Swift/SwiftUI native apps with performance, stability, security, and App Store success in mind. We deliver iPhone, iPad, watchOS and tvOS apps with seamless UX, robust architecture, and complete launch support.',
    primaryCta: { label: 'Discuss iOS Project', to: '/contact' },
  },
  overview: {
    paragraphs: [
      'We bring deep iOS expertise across iPhone, iPad, watchOS, and tvOS, using modern SwiftUI-first implementations, Apple Human Interface Guidelines, and performance-focused architectures. From concept to launch, our team delivers secure, high-quality apps that pass App Store review and delight users.',
      'Our process covers user-centric design, native integrations (like WidgetKit, Siri, and HealthKit), automated testing, CI/CD with Fastlane, and ongoing maintenance. We ensure your app excels in performance, accessibility, and security while staying future-proof with the latest Apple technologies.'
    ],
    bullets: [
      'Swift / SwiftUI and Combine',
      'Apple HIG compliance & accessibility',
      'TestFlight & App Store releases',
      'Performance tuning and crash reduction',
      'Continuous integration and delivery (Fastlane)',
      'watchOS & tvOS companion apps',
      'Privacy, security and App Tracking Transparency',
      'Ongoing updates and feature enhancements'
    ]
  },
  ranges: [
    {
      title: 'Product & UX',
      desc: 'HIG-aligned UX for conversion and retention. We design and implement interfaces that feel “at home” on iOS.',
      icon: 'design'
    },
    {
      title: 'Native Capabilities',
      desc: 'WidgetKit, Siri, HealthKit, CoreML, ARKit and more. We unlock Apple’s ecosystem for richer user experiences.',
      icon: 'app'
    },
    {
      title: 'Quality & Release',
      desc: 'Automation, profiling, TestFlight betas, and App Store readiness for smooth launches.',
      icon: 'consulting'
    }
  ],

  // 👇 New capabilities array
  capabilities: [
    { title: 'SwiftUI & Combine', desc: 'Modern declarative UI with SwiftUI and reactive patterns using Combine for scalable, maintainable code.', icon: 'design' },
    { title: 'App Store Submission & Compliance', desc: 'Full guidance through App Store policies, App Tracking Transparency, privacy and security requirements.', icon: 'app' },
    { title: 'watchOS & tvOS Apps', desc: 'Companion apps for Apple Watch and Apple TV with optimized layouts and interactions.', icon: 'app' },
    { title: 'WidgetKit & Siri Shortcuts', desc: 'Home screen widgets, SiriKit, and Shortcuts integration to increase engagement and retention.', icon: 'app' },
    { title: 'HealthKit & CoreMotion', desc: 'Fitness, wellness and medical apps integrated with Apple’s secure health data frameworks.', icon: 'health' },
    { title: 'CoreML & ARKit', desc: 'On-device machine learning and augmented reality experiences for cutting-edge apps.', icon: 'ai' },
    { title: 'Security & Privacy', desc: 'Secure coding practices, Keychain, encryption, biometrics (Face ID / Touch ID), and GDPR/ATT compliance.', icon: 'security' },
    { title: 'Performance Optimization', desc: 'Advanced profiling with Instruments, memory optimization, startup speed improvements, and crash reduction.', icon: 'check' },
    { title: 'Continuous Integration & Delivery', desc: 'Fastlane pipelines, automated builds, and TestFlight distribution for faster iterations.', icon: 'cloud' },
    { title: 'Offline & Sync', desc: 'Reliable offline-first experiences with Core Data, CloudKit, and background sync.', icon: 'cloud' },
    { title: 'Localization & Accessibility', desc: 'Multi-language support and full accessibility (VoiceOver, Dynamic Type) to reach a global audience.', icon: 'design' },
    { title: 'Push Notifications & In-App Purchases', desc: 'Securely implement APNs push, StoreKit, subscriptions, and promotions to drive engagement and revenue.', icon: 'app' }
  ],

  tabs: {
    items: [
      {
        key: 'ios',
        label: 'iOS',
        logos: ['swift', 'swiftui', 'xcode'],
        title: 'iOS Services',
        desc: 'Native iOS development done right. We build secure, high-performance apps for iPhone, iPad, watchOS and tvOS, leveraging the latest Apple frameworks and best practices.',
        bullets: [
          'SwiftUI and UIKit expertise',
          'App Store submission & TestFlight betas',
          'watchOS and tvOS companion apps',
          'WidgetKit, Siri, HealthKit integration',
          'CoreML and ARKit experiences',
          'Fastlane CI/CD pipelines',
          'Performance profiling and crash reduction',
          'App Tracking Transparency & privacy compliance',
          'Push notifications and in-app purchases',
          'Ongoing maintenance and feature updates'
        ]
      }
    ]
  }
}
,
'mobile/react-native': {
  hero: {
    eyebrow: 'React Native Development',
    title: 'Deliver Faster with React Native',
    subtitle:
      'Build high-quality apps for iOS and Android from a single codebase. We combine React Native’s speed with native modules, consistent design systems, and a seamless user experience to accelerate your time to market without sacrificing quality.',
    primaryCta: { label: 'React Native Consultation', to: '/contact' },
  },
  overview: {
    paragraphs: [
      'We help you accelerate delivery with React Native while maintaining a native-like experience. Our team builds greenfield apps or migrates existing native apps to React Native with minimal risk, leveraging a shared codebase across platforms.',
      'Using modern tools like Expo/EAS, TypeScript, Fastlane, and Over-the-Air (OTA) updates, we ensure your app ships faster, integrates with native capabilities, and is easy to maintain. We focus on performance, accessibility, and scalability so your React Native app feels and behaves like a true native app on both iOS and Android.'
    ],
    bullets: [
      'Single shared codebase for iOS & Android',
      'Native modules & integrations',
      'Expo/EAS or bare React Native setup',
      'Performance tuning & memory optimization',
      'Over-the-Air (OTA) updates with CodePush',
      'Detox & Jest automated testing',
      'CI/CD pipelines for faster releases',
      'App Store & Play Store compliance',
      'Accessibility & localization',
      'Ongoing maintenance & feature enhancements'
    ]
  },
  ranges: [
    { title: 'Greenfield & Migration', desc: 'Kickstart new apps or migrate existing native apps to React Native with minimal risk and downtime.', icon: 'consulting' },
    { title: 'Design Systems & Theming', desc: 'Create consistent cross-platform UI with shared components, accessibility, and dark mode support.', icon: 'design' },
    { title: 'Native Integrations', desc: 'Camera, maps, biometrics, push notifications, payments, analytics, and more using custom native modules.', icon: 'backend' },
    { title: 'Performance Optimization', desc: 'Profiling, memory tuning, and startup speed improvements to achieve near-native performance.', icon: 'check' },
    { title: 'CI/CD & OTA Updates', desc: 'Fastlane, GitHub Actions, and CodePush for seamless continuous integration, delivery, and instant updates.', icon: 'cloud' },
    { title: 'Automated Testing', desc: 'End-to-end and unit testing with Detox, Jest, and React Native Testing Library to ensure stability.', icon: 'ai' },
    { title: 'App Store & Play Store Launch', desc: 'End-to-end support for submission, compliance, and optimization for both stores from a single codebase.', icon: 'app' },
    { title: 'Maintenance & Scaling', desc: 'Ongoing updates, feature enhancements, and scaling architecture as your user base grows.', icon: 'consulting' }
  ],
  capabilities: [
    { title: 'Expo/EAS Expertise', desc: 'Streamline builds, OTA updates, and deployments with Expo and EAS for faster release cycles.', icon: 'cloud' },
    { title: 'Native Modules Development', desc: 'Bridge React Native with device capabilities like camera, maps, payments, and biometrics.', icon: 'backend' },
    { title: 'Over-the-Air Updates', desc: 'Push instant updates without app store resubmission using CodePush or EAS Update.', icon: 'check' },
    { title: 'TypeScript & Strong Typing', desc: 'Improve maintainability and reduce bugs with TypeScript for your React Native codebase.', icon: 'ai' },
    { title: 'Design Systems & Theming', desc: 'Implement reusable components, dynamic theming, and dark mode across platforms.', icon: 'design' },
    { title: 'Performance Profiling', desc: 'Optimize memory usage, startup times, and rendering for native-like performance.', icon: 'analytics' },
    { title: 'Automated Testing', desc: 'Use Detox, Jest, and RN Testing Library to automate end-to-end and unit testing.', icon: 'ai' },
    { title: 'Continuous Integration & Delivery', desc: 'Set up Fastlane or GitHub Actions for automated builds, tests, and deployments.', icon: 'cloud' },
    { title: 'App Store & Play Store Compliance', desc: 'Handle guidelines, submission, and optimization for both stores from one codebase.', icon: 'app' },
    { title: 'Third-Party Integrations', desc: 'Connect to analytics, push notifications, payment gateways, and cloud services.', icon: 'backend' },
    { title: 'Accessibility & Localization', desc: 'Build inclusive apps with VoiceOver/TalkBack support and multi-language content.', icon: 'design' },
    { title: 'Migration from Native', desc: 'Transition existing iOS or Android apps to React Native to reduce costs and unify codebases.', icon: 'consulting' }
  ],
  tabs: {
    items: [
      {
        key: 'rn',
        label: 'React Native',
        logos: ['react', 'typescript', 'expo'],
        title: 'React Native Services',
        desc:
          'We build and maintain high-performance cross-platform apps with React Native, combining a single codebase with native capabilities to ship faster and smarter.',
        bullets: [
          'Greenfield or migration to React Native',
          'Expo/EAS or bare React Native projects',
          'Native modules and third-party integrations',
          'CodePush & OTA updates',
          'Detox/Jest automated testing',
          'CI/CD pipelines (Fastlane, GitHub Actions)',
          'Performance profiling & crash reduction',
          'Push notifications, payments, biometrics',
          'Accessibility & internationalization',
          'App Store & Play Store submissions',
          'Scalable architecture & maintenance',
          'Design systems & cross-platform theming'
        ]
      }
    ]
  }
}
,

'mobile/flutter': {
  hero: {
    eyebrow: 'Flutter Development',
    title: 'Deliver High-Performance Apps with Flutter',
    subtitle:
      'Build cross-platform apps for iOS, Android, web, and desktop from a single codebase. We combine Flutter’s expressive UI toolkit, native integrations, and seamless UX to accelerate delivery while ensuring robust architecture and pixel-perfect design.',
    primaryCta: { label: 'Flutter Consultation', to: '/contact' },
  },
  overview: {
    paragraphs: [
      'Flutter allows us to create beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Our team leverages Flutter’s rich widget library and tooling to deliver apps faster without compromising on performance or quality.',
      'We handle greenfield projects, enterprise-grade apps, and migration from existing platforms. Using state management solutions like Bloc, Riverpod, or Provider, we ensure scalable architecture, smooth animations, offline support, API integrations, and full deployment pipelines.'
    ],
    bullets: [
      'Single shared codebase for iOS, Android, Web & Desktop',
      'Material & Cupertino widgets for native-like UI',
      'Bloc / Provider / Riverpod / Cubit state management',
      'Custom animations & motion design',
      'Offline-first capabilities & caching',
      'CI/CD pipelines with automated testing',
      'App Store, Play Store, and web deployment',
      'Performance profiling & optimization',
      'Accessibility & localization support',
      'Ongoing maintenance & feature enhancements'
    ]
  },
  ranges: [
    { title: 'Project Discovery', desc: 'Requirements gathering, architecture planning, roadmap creation, and Flutter-specific project scoping.', icon: 'consulting' },
    { title: 'UI Engineering', desc: 'Custom widgets, themes, responsive layouts, animations, and accessibility compliance.', icon: 'design' },
    { title: 'Native Integrations', desc: 'Secure API integration, platform plugins, Firebase services, push notifications, and performance optimization.', icon: 'backend' },
    { title: 'Testing & Delivery', desc: 'Automated testing, CI/CD pipelines, performance monitoring, analytics, and store submission support.', icon: 'check' },
    { title: 'Maintenance & Scaling', desc: 'Ongoing updates, feature enhancements, scaling architecture, and cloud/backend integration support.', icon: 'cloud' },
    { title: 'State Management', desc: 'Implementing Bloc, Riverpod, Provider, or Cubit for scalable and maintainable applications.', icon: 'ai' },
    { title: 'Performance Optimization', desc: 'Memory, rendering, and startup profiling to ensure smooth and responsive apps.', icon: 'analytics' },
    { title: 'Security & Compliance', desc: 'Data encryption, secure storage, biometrics, and adherence to platform privacy standards.', icon: 'shield' }
  ],
  capabilities: [
    { title: 'Cross-Platform Development', desc: 'iOS, Android, Web, and Desktop apps from a single codebase.', icon: 'flutter' },
    { title: 'Native Performance', desc: 'Custom plugin development and optimized Dart code for high performance.', icon: 'backend' },
    { title: 'State Management', desc: 'Bloc, Riverpod, Provider, or Cubit for scalable and maintainable apps.', icon: 'check' },
    { title: 'Offline-First Architecture', desc: 'Caching, local database support, and background sync for offline use.', icon: 'cloud' },
    { title: 'Animations & Motion Design', desc: 'Custom animations, transitions, and motion effects for engaging UIs.', icon: 'design' },
    { title: 'CI/CD & Automated Testing', desc: 'Integration with GitHub Actions, Fastlane, and automated testing pipelines.', icon: 'qa' },
    { title: 'Push Notifications & Messaging', desc: 'Firebase Cloud Messaging, local notifications, and messaging workflows.', icon: 'backend' },
    { title: 'Security & Privacy', desc: 'Encryption, secure storage, biometrics, and privacy best practices.', icon: 'shield' },
    { title: 'Analytics & Performance Monitoring', desc: 'Crashlytics, Firebase Analytics, A/B testing, and real-time performance tracking.', icon: 'analytics' },
    { title: 'Plugin & API Integrations', desc: 'Integrate with third-party services, Firebase, REST, and GraphQL APIs.', icon: 'backend' },
    { title: 'Accessibility & Localization', desc: 'Support for multiple languages and accessibility features like VoiceOver and TalkBack.', icon: 'design' },
    { title: 'Enterprise-Ready Architecture', desc: 'Scalable, modular, and maintainable architecture suitable for enterprise-grade apps.', icon: 'cloud' }
  ],
  tabs: {
    items: [
      {
        key: 'flutter',
        label: 'Flutter',
        logos: ['flutter', 'dart'],
        title: 'Flutter Services',
        desc: 'We build scalable, high-performance cross-platform apps with Flutter, combining a single codebase with robust architecture and native integrations to deliver fast and beautiful applications.',
        bullets: [
          'Greenfield projects & existing app migration to Flutter',
          'Custom widget and UI development with Material & Cupertino design',
          'State management with Bloc, Riverpod, Provider, or Cubit',
          'Offline-first capabilities & caching',
          'CI/CD pipelines & automated testing',
          'Push notifications & in-app messaging',
          'Performance profiling & optimization',
          'App Store, Play Store, and web deployment support',
          'Accessibility, localization & internationalization',
          'Ongoing maintenance & feature enhancements'
        ]
      }
    ]
  }
},

'mobile/cross-platform': {
  hero: {
    eyebrow: 'Cross-Platform Development',
    title: 'Build One App, Reach Every Platform',
    subtitle:
      'Develop mobile applications for iOS, Android, web, and desktop from a single codebase. We deliver fast, scalable, and maintainable apps using modern cross-platform frameworks while ensuring native-like performance and user experience.',
    primaryCta: { label: 'Cross-Platform Consultation', to: '/contact' },
  },
  overview: {
    paragraphs: [
      'Cross-platform development allows you to target multiple platforms with a single codebase, reducing development time, cost, and complexity. Our team selects the right technology—Flutter, React Native, Xamarin, or others—based on project requirements, timeline, and performance needs.',
      'We handle everything from MVPs to enterprise-grade apps, implementing state management, offline-first capabilities, native integrations, automated testing, CI/CD pipelines, and app store deployment.'
    ],
    bullets: [
      'Single codebase for iOS, Android, Web & Desktop',
      'Native-like performance and UI consistency',
      'Rapid prototyping and MVP delivery',
      'Integration with native device features (camera, GPS, push notifications)',
      'Offline-first support and caching',
      'State management with Bloc, Provider, Redux, or MVVM',
      'CI/CD pipelines and automated testing',
      'App Store & Play Store submission support',
      'Accessibility and localization',
      'Ongoing maintenance and feature enhancements'
    ]
  },
  ranges: [
    { title: 'Project Discovery', desc: 'Requirements analysis, architecture planning, framework selection, and roadmap creation for cross-platform apps.', icon: 'consulting' },
    { title: 'UI & UX Design', desc: 'Design consistent, responsive, and accessible user interfaces across all platforms.', icon: 'design' },
    { title: 'Framework Integrations', desc: 'Choose and integrate the right cross-platform framework (Flutter, React Native, Xamarin) with backend services and APIs.', icon: 'backend' },
    { title: 'State Management', desc: 'Implement scalable and maintainable state management for apps with Bloc, Provider, Redux, or MVVM patterns.', icon: 'ai' },
    { title: 'Native Features & Plugins', desc: 'Access device features like camera, location, push notifications, payments, and analytics.', icon: 'backend' },
    { title: 'Performance Optimization', desc: 'Memory profiling, rendering optimization, and startup time improvement for smooth user experience.', icon: 'analytics' },
    { title: 'Testing & CI/CD', desc: 'Automated testing, continuous integration, and delivery pipelines for reliable and faster releases.', icon: 'qa' },
    { title: 'Maintenance & Scaling', desc: 'Ongoing updates, bug fixes, feature enhancements, and scalable architecture support.', icon: 'cloud' }
  ],
  capabilities: [
    { title: 'Cross-Platform Expertise', desc: 'iOS, Android, web, and desktop apps from a single codebase.', icon: 'flutter' },
    { title: 'Framework Agnostic', desc: 'Experience with Flutter, React Native, Xamarin, and other cross-platform frameworks.', icon: 'check' },
    { title: 'Native-Like Performance', desc: 'Optimized code, custom plugins, and device integrations for smooth performance.', icon: 'backend' },
    { title: 'State Management Solutions', desc: 'Bloc, Redux, Provider, MVVM, and other scalable state management patterns.', icon: 'ai' },
    { title: 'Offline-First Architecture', desc: 'Caching, local storage, and background sync to ensure functionality without internet.', icon: 'cloud' },
    { title: 'Animations & UI Motion', desc: 'Custom animations and transitions for engaging and responsive UI.', icon: 'design' },
    { title: 'CI/CD & Automation', desc: 'Automated testing and deployment pipelines using GitHub Actions, Fastlane, and other tools.', icon: 'qa' },
    { title: 'Push Notifications & Messaging', desc: 'Firebase Cloud Messaging, local notifications, and messaging workflows.', icon: 'backend' },
    { title: 'Security & Privacy', desc: 'Encryption, secure storage, biometric authentication, and privacy compliance.', icon: 'shield' },
    { title: 'Analytics & Monitoring', desc: 'Integration with analytics tools, crash reporting, and performance monitoring.', icon: 'analytics' },
    { title: 'Accessibility & Localization', desc: 'Multi-language support and accessibility features for inclusive apps.', icon: 'design' },
    { title: 'Enterprise-Ready Architecture', desc: 'Scalable, modular, and maintainable apps suitable for enterprise solutions.', icon: 'cloud' }
  ],
  tabs: {
    items: [
      {
        key: 'cross-platform',
        label: 'Cross-Platform',
        logos: ['flutter', 'react', 'xamarin', 'dart', 'typescript'],
        title: 'Cross-Platform Mobile Services',
        desc: "We specialize in delivering high-performance, scalable cross-platform mobile applications that provide a native-like experience across iOS, Android, web, and desktop devices. Leveraging modern frameworks such as Flutter, React Native, and Xamarin, we enable businesses to reach multiple platforms from a single codebase, reducing development time, cost, and complexity while ensuring consistent functionality and design. Our process begins with a thorough understanding of your project requirements, user expectations, and business objectives, allowing us to select the framework or combination of frameworks that best fit your needs, whether for greenfield apps or migration of existing native applications. We prioritize user experience, creating intuitive and responsive interfaces that maintain visual consistency across platforms while adhering to platform-specific guidelines when necessary. Robust state management solutions, including Bloc, Redux, Provider, or MVVM, ensure smooth data flow and responsive app behavior, complemented by offline-first strategies and advanced caching to maintain functionality in low-network conditions. Performance, stability, and scalability are central to our approach; we utilize profiling, memory optimization, automated testing, and CI/CD pipelines for reliable builds, while over-the-air updates enable seamless feature enhancements without app store resubmissions.",
        bullets: [
          'Greenfield projects or migration from native apps',
          'Custom UI and widgets for consistent cross-platform look',
          'State management using Bloc, Redux, Provider, or MVVM',
          'Offline-first architecture and caching',
          'Native device integrations: camera, GPS, push notifications, payments',
          'CI/CD pipelines & automated testing',
          'Performance optimization & crash reduction',
          'App Store & Play Store deployment',
          'Accessibility & localization',
          'Analytics, monitoring & A/B testing',
          'Ongoing maintenance & feature enhancements',
          'Enterprise-grade architecture and scaling support'
        ]
      }
    ]
  }
},
'mobile/ionic': {
  hero: {
    eyebrow: 'Ionic Development',
    title: 'Build Hybrid Apps with Ionic',
    subtitle:
      'Develop hybrid mobile applications that work seamlessly across iOS, Android, and web using a single codebase. We leverage Ionic’s rich component library and Angular/React/Vue integration to deliver fast, responsive, and visually appealing apps.',
    primaryCta: { label: 'Ionic Consultation', to: '/contact' },
  },
  overview: {
    paragraphs: [
      'Ionic allows developers to create hybrid mobile applications that run on multiple platforms using a single codebase. By combining web technologies with native capabilities, Ionic apps provide near-native performance and a consistent user experience across devices. Our team specializes in designing and developing robust Ionic apps tailored to your business needs.',
      'From MVPs to enterprise-level applications, we handle UI/UX design, state management, offline support, native integrations, testing, CI/CD pipelines, and deployment. We focus on performance, scalability, accessibility, and maintainability to ensure your Ionic app succeeds in the market.'
    ],
    bullets: [
      'Single codebase for iOS, Android, and Web',
      'Integration with Angular, React, or Vue',
      'Rich Ionic UI components for fast development',
      'Native plugin integrations (camera, GPS, notifications, payments)',
      'Offline-first support and caching',
      'State management with Redux, NgRx, or Context API',
      'Automated testing & CI/CD pipelines',
      'App Store & Play Store submission support',
      'Accessibility & localization',
      'Ongoing maintenance & feature enhancements'
    ]
  },
  ranges: [
    { title: 'Project Discovery', desc: 'Requirement gathering, framework selection, architecture planning, and roadmap creation for Ionic apps.', icon: 'consulting' },
    { title: 'UI & UX Design', desc: 'Design responsive, accessible, and visually consistent user interfaces across all platforms.', icon: 'design' },
    { title: 'Ionic Framework Development', desc: 'Custom component development using Ionic’s UI library and Angular/React/Vue integration.', icon: 'backend' },
    { title: 'State Management', desc: 'Implement scalable and maintainable state solutions with Redux, NgRx, or Context API.', icon: 'ai' },
    { title: 'Native Features & Plugins', desc: 'Integrate device capabilities like camera, GPS, push notifications, payments, and analytics.', icon: 'backend' },
    { title: 'Performance Optimization', desc: 'Profiling, memory optimization, and rendering improvements for smooth app experience.', icon: 'analytics' },
    { title: 'Testing & CI/CD', desc: 'Automated testing, continuous integration, and deployment pipelines for faster and reliable releases.', icon: 'qa' },
    { title: 'Maintenance & Scaling', desc: 'Ongoing updates, feature enhancements, and scaling architecture for enterprise-level apps.', icon: 'cloud' }
  ],
  capabilities: [
    { title: 'Hybrid App Expertise', desc: 'Develop apps that run on iOS, Android, and Web from a single codebase.', icon: 'ionic' },
    { title: 'Angular / React / Vue Integration', desc: 'Leverage the power of popular web frameworks within Ionic for scalable development.', icon: 'design' },
    { title: 'Native-Like Performance', desc: 'Custom plugins and optimization for responsive, smooth, and fast applications.', icon: 'backend' },
    { title: 'State Management', desc: 'Redux, NgRx, or Context API for maintainable and scalable app state.', icon: 'ai' },
    { title: 'Offline-First Architecture', desc: 'Local storage, caching, and background sync for uninterrupted user experience.', icon: 'cloud' },
    { title: 'Animations & UI Components', desc: 'Ionic UI components, transitions, and motion design for engaging applications.', icon: 'design' },
    { title: 'CI/CD & Automated Testing', desc: 'Fast, reliable builds with GitHub Actions, Fastlane, and automated test pipelines.', icon: 'qa' },
    { title: 'Push Notifications & Messaging', desc: 'Firebase Cloud Messaging and local notifications for user engagement.', icon: 'backend' },
    { title: 'Security & Privacy', desc: 'Secure storage, encryption, authentication, and platform compliance.', icon: 'shield' },
    { title: 'Analytics & Performance Monitoring', desc: 'Crashlytics, performance tracking, and user analytics for continuous improvement.', icon: 'analytics' },
    { title: 'Accessibility & Localization', desc: 'Inclusive design with multi-language support and accessibility features.', icon: 'design' },
    { title: 'Enterprise-Ready Architecture', desc: 'Scalable, modular, and maintainable Ionic apps for enterprise solutions.', icon: 'cloud' }
  ],
  tabs: {
    items: [
      {
        key: 'ionic',
        label: 'Ionic',
        logos: ['ionic', 'angular', 'react', 'vue'],
        title: 'Ionic Mobile Services',
        desc: 'We create high-quality, hybrid mobile applications using Ionic, delivering a single codebase solution that works seamlessly across multiple platforms while maintaining native-like performance and usability.',
        bullets: [
          'Greenfield Ionic projects or migration from existing apps',
          'Custom UI with Ionic components and framework integration',
          'State management with Redux, NgRx, or Context API',
          'Offline-first architecture and caching',
          'Native plugin integrations for device features',
          'CI/CD pipelines & automated testing',
          'Performance optimization & profiling',
          'App Store & Play Store deployment support',
          'Accessibility & localization',
          'Analytics and monitoring for continuous improvement',
          'Ongoing maintenance & feature enhancements',
          'Enterprise-grade architecture and scalability'
        ]
      }
    ]
  }
}



}


function buildDefaults(base) {
  // Generic defaults so all non-mobile pages still render these sections
  return {
    overview: {
      paragraphs: [
        `We deliver end-to-end ${base.title.toLowerCase()} with a focus on measurable outcomes and user delight.`,
      ],
      bullets: ['Consulting & discovery', 'Design & prototyping', 'Development & integrations', 'Testing & hardening', 'Launch & support']
    },
    ranges: [
      { title: `${base.title} Consulting`, desc: 'Workshops, architecture, and roadmaps.', icon: 'consulting' },
      { title: 'Design & UX', desc: 'User-centered design to drive conversions.', icon: 'design' },
      { title: 'Backend & APIs', desc: 'Secure, scalable services and integrations.', icon: 'backend' },
    ],
    capabilities: [
      { title: 'Cloud', desc: 'AWS, GCP, Azure expertise for scalable systems.', icon: 'cloud' },
      { title: 'AI/ML', desc: 'Personalization, search, and predictions.', icon: 'ai' },
      { title: 'Integrations', desc: 'Payments, analytics, messaging, and more.', icon: 'backend' },
    ],
    tabs: { items: [] },
  }
}

function buildContent(slug) {
  const base = BASE_TITLES[slug] || { title: 'Service', desc: 'Details coming soon.' }
  const override = SERVICE_OVERRIDES[slug] || {}

  // Provide generic defaults for any service so all pages share the layout
  const generic = {
    hero: {
      eyebrow: base.title,
      title: `${base.title} Services`,
      subtitle: base.desc,
      primaryCta: { label: 'Talk to an expert', to: '/contact' },
      secondaryCta: { label: 'View Case Studies', to: '/case-studies' },
      partnerBadges: ['On-time Delivery', 'Agile Teams', 'Security First', 'Transparent Pricing'],
    },
    stats: [
      { value: '50+', label: 'Experts' },
      { value: '100+', label: 'Projects' },
      { value: '24/7', label: 'Support' },
      { value: '99.9%', label: 'Uptime/SLAs' },
    ],
    features: [
      { title: 'Consulting', desc: 'Workshops, architecture, and roadmaps.' },
      { title: 'Design', desc: 'User-centered UX/UI for engagement and conversions.' },
      { title: 'Development', desc: 'Modern stacks, quality code, best practices.' },
      { title: 'Integrations', desc: 'Payments, analytics, third-party and internal APIs.' },
      { title: 'Quality', desc: 'Automated tests, performance and accessibility.' },
      { title: 'DevOps', desc: 'CI/CD, monitoring, and cost optimization.' },
    ],
    process: [
      { step: '01', title: 'Discovery', text: 'Goals, scope, and success metrics.' },
      { step: '02', title: 'Design', text: 'Wireframes to high-fidelity prototypes.' },
      { step: '03', title: 'Build', text: 'Incremental delivery in sprints.' },
      { step: '04', title: 'QA', text: 'Automated and manual testing.' },
      { step: '05', title: 'Launch', text: 'Release, training, and documentation.' },
      { step: '06', title: 'Scale', text: 'Enhancements and ongoing support.' },
    ],
    tech: [
      { group: 'Frontend', items: ['React', 'Vue', 'Angular'] },
      { group: 'Backend', items: ['Node.js', 'Python', 'Java'] },
      { group: 'Databases', items: ['PostgreSQL', 'MySQL', 'MongoDB'] },
      { group: 'Cloud', items: ['AWS', 'GCP', 'Azure'] },
    ],
    faqs: [
      { q: 'What engagement models do you offer?', a: 'Fixed-scope, time & material, or dedicated teams based on your needs.' },
      { q: 'How do you ensure quality?', a: 'Standards, code reviews, automated tests, and CI/CD pipelines.' },
    ],
  }

  const defaults = buildDefaults(base)

  // Merge generic with any overrides
  const merged = {
    ...generic,
    ...defaults,
    ...override,
    hero: { ...generic.hero, ...(override.hero || {}) },
    stats: override.stats || generic.stats,
    features: override.features || generic.features,
    process: override.process || generic.process,
    tech: override.tech || generic.tech,
    faqs: override.faqs || generic.faqs,
    overview: override.overview || defaults.overview,
    ranges: override.ranges || defaults.ranges,
    capabilities: override.capabilities || defaults.capabilities,
    tabs: override.tabs || defaults.tabs,
    base, // keep reference to basic title/desc
  }

  return merged
}

export default function ServiceDetail(){
  const { pathname } = useLocation()
  // expected paths: /services/<slug> or deeper
  const slug = pathname.replace(/^\/?services\/?/, '').replace(/^\/+|\/+$/g, '')
  const c = buildContent(slug)
  const isMobile = true

  // Local tab state for the final section
  const [activeKey, setActiveKey] = useState(c.tabs?.items?.[0]?.key || '')

  // Init AOS animations once
  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 80, easing: 'ease-out-cubic' })
    AOS.refresh()
  }, [])

  return (
    <div>
      {/* Hero */}
      <section className="hero-ongraph" data-aos="fade-up">
        <div className="container">
          {c.hero.eyebrow && (
            <div style={{letterSpacing:'1px', fontWeight:800, opacity:.9}}>{c.hero.eyebrow}</div>
          )}
          <h1 className="title" style={{marginTop:10}}>{c.hero.title}</h1>
          <p className="subtitle">{c.hero.subtitle}</p>
          <div className="cta actions">
            {c.hero.primaryCta && (
              <Link className="button" to={c.hero.primaryCta.to}>{c.hero.primaryCta.label}</Link>
            )}
            {c.hero.secondaryCta && (
              <Link className="button secondary" to={c.hero.secondaryCta.to}>{c.hero.secondaryCta.label}</Link>
            )}
          </div>
          {c.hero.partnerBadges?.length ? (
            <div className="partner-row">
              {/* {c.hero.partnerBadges.map((b, i) => (
                // <div key={i} className="partner-badge">{b}</div>
              ))} */}
            </div>
          ) : null}
        </div>
      </section>

      {/* If mobile pages: render the new OnGraph-like sections to match screenshots */}
      {isMobile ? (
        <>
          {/* Overview: big heading left paragraphs + right checklist */}
          <section className="section" style={{background:'#f4f6f9'}} data-aos="fade-up">
            <div className="container">
              <div style={{fontSize:44, fontWeight:900, color:'#0a3352', marginBottom:22}}>
                Delivering Top-Notch Custom {c.base.title} Services
              </div>
              <div className="two-col" style={{alignItems:'start'}}>
                <div>
                  {c.overview.paragraphs?.map((p, i) => (
                    <p key={i} style={{color:'#475569', fontSize:18, lineHeight:1.6, marginBottom:16}}>{p}</p>
                  ))}
                </div>
                <div>
                  <ul style={{display:'grid', gap:12}}>
                    {c.overview.bullets?.map((b, i) => (
                      <li key={i} style={{display:'flex', alignItems:'center', gap:10, color:'#0a3352', fontWeight:700}}>
                        <Icon name="check" color="#0a6aa0" /> <span style={{color:'#0a3352'}}>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Range of services: blue background with cards */}
          <section className="section" style={{background:'#0a3352'}} data-aos="fade-up">
            <div className="container">
              <div style={{textAlign:'center', color:'#a3d3ff', fontWeight:900, fontSize:24}}>Our Range of</div>
              <h2 className="heading" style={{color:'#e8f2ff', textAlign:'center', marginTop:8}}>{c.base.title} Services</h2>
              <div className="grid mt-12">
                {c.ranges.map((r, i) => (
                  <div key={i} className="hover-lift" data-aos="zoom-in" data-aos-delay={i*80} style={{background:'#fff', border:'1px solid #e6eef6', borderRadius:16, padding:22, boxShadow:'0 10px 28px rgba(2,23,44,.10)'}}>
                    <div style={{display:'flex', alignItems:'center', gap:12}}>
                      <Icon name={r.icon} color="#0a4771" />
                      <div style={{fontWeight:800, color:'#0a3352'}}>{r.title}</div>
                    </div>
                    <div style={{color:'#64748b', marginTop:8}}>{r.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Skilled In: light cards grid */}
          <section className="section" style={{background:'#eef2f7'}} data-aos="fade-up">
            <div className="container">
              <h2 className="heading" style={{textAlign:'center'}}>
                {c.base.title} Technologies <span style={{color:'#0a6aa0'}}>We're Skilled in</span>
              </h2>
              <p className="lead" style={{textAlign:'center', margin:'8px auto 0'}}>To produce innovative mobile apps, our teams research and apply the newest trends and technologies.</p>
              <div className="grid mt-12">
                {c.capabilities.map((cap, i) => (
                  <div key={i} className="hover-lift" data-aos="zoom-in" data-aos-delay={i*80} style={{background:'#fff', border:'1px solid #e6eef6', borderRadius:16, padding:22, boxShadow:'0 10px 28px rgba(2,23,44,.10)'}}>
                    <div style={{display:'flex', alignItems:'center', gap:12}}>
                      <Icon name={cap.icon} color="#0a6aa0" />
                      <div style={{fontWeight:800, color:'#0a3352'}}>{cap.title}</div>
                    </div>
                    <div style={{color:'#64748b', marginTop:8}}>{cap.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Tabbed area with logos and bullet list */}
          {c.tabs?.items?.length ? (
            <section className="section" style={{background:'#f7fafc'}} data-aos="fade-up">
              <div className="container">
                <div style={{textAlign:'center', color:'#0a3352', fontSize:22, fontWeight:700}}>Unlock Your Business Potential with Our Expert</div>
                <h2 className="heading" style={{textAlign:'center'}}> {c.base.title} Services</h2>

                {/* Pills */}
                <div style={{display:'flex', flexWrap:'wrap', gap:12, justifyContent:'center', marginTop:22}}>
                  {c.tabs.items.map((t) => (
                    <button key={t.key} onClick={() => setActiveKey(t.key)}
                      style={{
                        border:'1px solid #cfe0f5', padding:'10px 16px', borderRadius:999,
                        background: activeKey === t.key ? '#e7f2ff' : '#fff',
                        color:'#0a3352', fontWeight:800, cursor:'pointer'
                      }}>
                      {t.label}
                    </button>
                  ))}
                </div>

                {/* Active Tab Content */}
                {c.tabs.items.filter(t => t.key === activeKey).map(t => (
                  <div key={t.key} className="two-col mt-12" style={{alignItems:'start'}}>
                    <div>
                      <div style={{display:'flex', gap:12, flexWrap:'wrap', marginBottom:10}}>
                        {t.logos?.map((name, idx) => (
                          <div key={idx} data-aos="zoom-in" data-aos-delay={idx*60} style={{background:'#fff', border:'1px solid #e6eef6', borderRadius:12, padding:'8px 10px', display:'inline-flex', alignItems:'center', gap:8}}>
                            <Icon name={name} color="#0a4771" />
                            <span style={{fontWeight:700, color:'#0a3352', fontSize:14, textTransform:'capitalize'}}>{name}</span>
                          </div>
                        ))}
                      </div>
                      <h3 style={{fontSize:26, color:'#0a3352', fontWeight:900}}>{t.title}</h3>
                      <p style={{color:'#64748b', marginTop:8}}>{t.desc}</p>
                    </div>
                    <div>
                      <div style={{fontWeight:800, color:'#0a3352', marginBottom:8}}>Services</div>
                      <ul style={{display:'grid', gap:10}}>
                        {t.bullets?.map((b, i) => (
                          <li key={i} style={{display:'flex', alignItems:'center', gap:10}}>
                            <Icon name="check" color="#0a6aa0" /> <span style={{color:'#0a3352', fontWeight:700}}>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {/* FAQs CTA */}
          <section className="section" style={{background:'#f7f9fc'}}>
            <div className="container">
              <div className="two-col">
                <div>
                  <h2 className="heading">Ready to build?</h2>
                  <p className="lead">Let’s discuss your goals and shape a clear, actionable plan.</p>
                  <div className="actions">
                    <Link className="button" to="/contact">Start a project</Link>
                    <Link className="button secondary" to="/case-studies">See case studies</Link>
                  </div>
                </div>
                <div className="faq">
                  {c.faqs.map((f, i) => (
                    <details key={i} className="faq-item">
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        <>
          {/* Stats */}
          <div className="stats-wrap">
            <div className="stats-card">
              <div className="stats">
                {c.stats.map((s, i) => (
                  <div className="stat" key={i}>
                    <h3>{s.value}</h3>
                    <p>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* What we deliver / Features */}
          <section className="section">
            <div className="container">
              <h2 className="heading">What we deliver</h2>
              <p className="lead">Full-cycle delivery from discovery and UX to development, QA automation, and growth.</p>
              <div className="grid mt-12">
                {c.features.map((f, i) => (
                  <div key={i} className="hover-lift" style={{background:'#fff', border:'1px solid #e6eef6', borderRadius:16, padding:18, boxShadow:'0 10px 28px rgba(2,23,44,.10)'}}>
                    <div style={{fontWeight:800, color:'#0a3352'}}>{f.title}</div>
                    <div style={{color:'#64748b', marginTop:8}}>{f.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Process - Path style */}
          <section className="section" style={{background:'#f7f9fc'}}>
            <div className="container">
              <h2 className="heading">Our process</h2>
              <p className="lead">Structured delivery with transparency and predictable outcomes.</p>

              <div className="path-wrap mt-12">
                <div className="path">
                  <div className="path-line" />
                  <div className="path-steps">
                    {c.process.map((p, i) => (
                      <div key={i} className="path-step">
                        <div className="dot">{p.step}</div>
                        <div>
                          <h4>{p.title}</h4>
                          <p>{p.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tech stack */}
          <section className="section">
            <div className="container">
              <h2 className="heading">Tech stack</h2>
              <p className="lead">We pick the right tools for your goals and constraints.</p>
              <div className="grid mt-12">
                {c.tech.map((t, i) => (
                  <div key={i} className="hover-lift" style={{background:'#fff', border:'1px solid #e6eef6', borderRadius:16, padding:18, boxShadow:'0 10px 28px rgba(2,23,44,.10)'}}>
                    <div style={{fontWeight:800, color:'#0a3352'}}>{t.group}</div>
                    <div style={{display:'flex', gap:8, flexWrap:'wrap', marginTop:10}}>
                      {t.items.map((it, idx) => (
                        <span key={idx} style={{background:'#eef4ff', color:'#0a6aa0', padding:'6px 10px', borderRadius:999, fontWeight:700, fontSize:13}}>{it}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA + FAQs */}
          <section className="section" style={{background:'#f7f9fc'}}>
            <div className="container">
              <div className="two-col">
                <div>
                  <h2 className="heading">Ready to build?</h2>
                  <p className="lead">Let’s discuss your goals and shape a clear, actionable plan.</p>
                  <div className="actions">
                    <Link className="button" to="/contact">Start a project</Link>
                    <Link className="button secondary" to="/case-studies">See case studies</Link>
                  </div>
                </div>
                <div className="faq">
                  {c.faqs.map((f, i) => (
                    <details key={i} className="faq-item">
                      <summary>{f.q}</summary>
                      <p>{f.a}</p>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}