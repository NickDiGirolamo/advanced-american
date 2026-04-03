export type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string; description?: string }>;
};

export type Product = {
  slug: string;
  name: string;
  shortName: string;
  category: "personal" | "business";
  href: string;
  hero: string;
  summary: string;
  audience: string[];
  coverage: string[];
  advantages: string[];
  faq: Array<{ question: string; answer: string }>;
};

export type ServiceRequestType = {
  slug: string;
  name: string;
  description: string;
  guidance: string;
  fields: Array<
    | "policyNumber"
    | "effectiveDate"
    | "vehicleInfo"
    | "driverInfo"
    | "businessName"
    | "contactMethod"
    | "notes"
  >;
};

export type CarrierEntry = {
  slug: string;
  name: string;
  phoneClaims?: string;
  phonePayments?: string;
  claimsUrl?: string;
  paymentUrl?: string;
  website?: string;
  notes: string;
  category: string;
};

export type StaffMember = {
  name: string;
  role: string;
  specialty: string;
  phone: string;
  email: string;
  bio: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string[];
};

export type CompanyEntry = {
  name: string;
  domain: string;
  logoUrl?: string;
};

export const siteSettings = {
  name: "Advanced American Financial",
  phoneDisplay: "(203) 949-1712",
  phoneHref: "tel:2039491712",
  email: "service@advancedamerican.com",
  address: ["208 S Colony St", "Wallingford, CT 06492"],
  hours: "Mon - Fri, 8:30 AM - 4:30 PM",
  serviceArea: "Wallingford and communities across Connecticut",
  mapEmbedLabel: "Map placeholder for 208 S Colony St, Wallingford, CT 06492",
};

export const navigation: NavItem[] = [
  {
    label: "Personal Insurance",
    href: "/personal-insurance",
    children: [
      {
        label: "Auto",
        href: "/personal-insurance/auto",
        description: "Car, truck, SUV, and everyday driving coverage.",
      },
      {
        label: "Home",
        href: "/personal-insurance/home",
        description: "Homeowners, condo, and renters protection.",
      },
      {
        label: "Life",
        href: "/personal-insurance/life",
        description: "Plan ahead for family and legacy needs.",
      },
      {
        label: "Umbrella",
        href: "/personal-insurance/umbrella",
        description: "Additional liability protection for bigger risks.",
      },
      {
        label: "Boat",
        href: "/personal-insurance/boat",
        description: "Coverage for weekends on the water.",
      },
      {
        label: "Motorcycle",
        href: "/personal-insurance/motorcycle",
        description: "Road-ready protection for two wheels.",
      },
    ],
  },
  {
    label: "Business Insurance",
    href: "/business-insurance",
    children: [
      {
        label: "General Business",
        href: "/business-insurance/general-business",
        description: "Foundational protection for growing companies.",
      },
      {
        label: "Business Operations",
        href: "/business-insurance/business-operations",
        description: "Industry-specific operational risk support.",
      },
      {
        label: "Workers' Comp + Benefits",
        href: "/business-insurance/workers-comp-benefits-health",
        description: "Protect your team and support retention.",
      },
    ],
  },
  { label: "Service Center", href: "/service-center" },
  { label: "Claims", href: "/claims" },
  { label: "Payments", href: "/payments" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Why Independent Agent", href: "/about/independent-agent" },
      { label: "Companies", href: "/about/companies" },
      { label: "Staff Directory", href: "/about/staff" },
    ],
  },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const personalProducts: Product[] = [
  {
    slug: "auto",
    name: "Auto / Car / Truck / SUV Insurance",
    shortName: "Auto Insurance",
    category: "personal",
    href: "/personal-insurance/auto",
    hero:
      "Coverage that keeps your day moving after an accident, theft, or unexpected roadside disruption.",
    summary:
      "Personalized auto insurance built around how you drive, what you drive, and how much protection you want when life gets busy.",
    audience: [
      "Daily commuters",
      "Teen-driver households",
      "Drivers with multiple vehicles",
      "Families bundling home and auto",
    ],
    coverage: [
      "Liability",
      "Collision and comprehensive",
      "Uninsured and underinsured motorist",
      "Rental reimbursement",
      "Roadside and glass options",
    ],
    advantages: [
      "We compare multiple carriers for fit and price",
      "We help explain Connecticut requirements in plain English",
      "You still have a real local office when you need help fast",
    ],
    faq: [
      {
        question: "Can you help me compare my current policy?",
        answer:
          "Yes. We can review your current limits, deductible choices, and discount opportunities before we recommend alternatives.",
      },
      {
        question: "Do bundled policies help?",
        answer:
          "In many cases they do. Bundling auto with home, renters, umbrella, or recreational policies can improve both pricing and coverage alignment.",
      },
    ],
  },
  {
    slug: "home",
    name: "Home / Condo / Renters Insurance",
    shortName: "Home Insurance",
    category: "personal",
    href: "/personal-insurance/home",
    hero:
      "Modern home protection that covers the place you live and the things that make it feel like home.",
    summary:
      "Whether you own, rent, or insure a condo, we help you secure dependable protection with guidance that is easy to understand.",
    audience: [
      "Homeowners",
      "Condo owners",
      "Renters",
      "Households wanting stronger liability protection",
    ],
    coverage: [
      "Dwelling and other structures",
      "Personal property",
      "Personal liability",
      "Loss of use",
      "Optional water backup and service line endorsements",
    ],
    advantages: [
      "Carrier options for different property profiles",
      "Guidance on rebuilding cost versus market value",
      "Support aligning home, auto, umbrella, and valuable items",
    ],
    faq: [
      {
        question: "Do renters need insurance?",
        answer:
          "Usually yes. Renters insurance can protect belongings, provide liability coverage, and help with temporary living costs after a covered loss.",
      },
      {
        question: "What if I have a condo?",
        answer:
          "Condo insurance can fill the gap between your association's master policy and your personal property, interior finishes, and liability needs.",
      },
    ],
  },
  {
    slug: "life",
    name: "Life Insurance",
    shortName: "Life Insurance",
    category: "personal",
    href: "/personal-insurance/life",
    hero:
      "Life insurance planning that supports the people who depend on you most.",
    summary:
      "We help individuals and families explore life insurance options that can fit income protection, estate planning, mortgage security, and long-term goals.",
    audience: [
      "Young families",
      "Homeowners with shared financial commitments",
      "Business owners",
      "People reviewing long-term plans",
    ],
    coverage: [
      "Term life",
      "Permanent life options",
      "Final expense planning",
      "Income replacement considerations",
      "Legacy and beneficiary coordination",
    ],
    advantages: [
      "Clear side-by-side guidance without jargon",
      "Access to multiple carriers and product types",
      "Thoughtful review of budget, timeline, and family goals",
    ],
    faq: [
      {
        question: "How much life insurance should I consider?",
        answer:
          "It depends on your income, debts, dependents, long-term goals, and existing benefits. We can help you frame the right range.",
      },
      {
        question: "Is term life the only option?",
        answer:
          "No. Term is a common starting point, but permanent solutions may be worth considering based on your goals and planning horizon.",
      },
    ],
  },
  {
    slug: "umbrella",
    name: "Umbrella Insurance",
    shortName: "Umbrella Insurance",
    category: "personal",
    href: "/personal-insurance/umbrella",
    hero:
      "Extra liability protection for the moments when a standard policy may not be enough.",
    summary:
      "Umbrella insurance adds an additional layer of liability coverage above your home, auto, and other eligible policies.",
    audience: [
      "Households with teen drivers",
      "Property owners",
      "Families with savings to protect",
      "Anyone wanting stronger liability limits",
    ],
    coverage: [
      "Additional liability limits",
      "Broader protection beyond core policy caps",
      "Help for major bodily injury or property damage claims",
    ],
    advantages: [
      "We help determine whether your current liability limits are aligned",
      "We coordinate umbrella coverage with your other policies",
      "We make it easier to understand what umbrella coverage does and does not do",
    ],
    faq: [
      {
        question: "Who should consider umbrella insurance?",
        answer:
          "Anyone who wants a stronger liability cushion, especially households with assets, young drivers, or elevated personal liability exposures.",
      },
      {
        question: "Does umbrella insurance replace my auto or home policy?",
        answer:
          "No. It layers above eligible underlying policies and works alongside them.",
      },
    ],
  },
  {
    slug: "boat",
    name: "Boat Insurance",
    shortName: "Boat Insurance",
    category: "personal",
    href: "/personal-insurance/boat",
    hero:
      "Protection for your boat, your passengers, and your time on the water.",
    summary:
      "From weekend cruising to seasonal storage considerations, we help match coverage to the way you actually use your boat.",
    audience: [
      "Boat owners",
      "Seasonal recreation users",
      "Owners storing or transporting watercraft",
      "Families wanting liability protection on the water",
    ],
    coverage: [
      "Physical damage",
      "Liability",
      "Medical payments",
      "Trailer and equipment options",
      "Seasonal and storage considerations",
    ],
    advantages: [
      "Carrier access for a range of watercraft profiles",
      "Guidance on usage, storage, and navigational territory",
      "Bundling help when recreational policies overlap with home or umbrella",
    ],
    faq: [
      {
        question: "Does my home insurance cover my boat?",
        answer:
          "Sometimes only in a very limited way. Dedicated boat insurance is often a better fit for broader protection.",
      },
      {
        question: "Can I cover accessories and trailers?",
        answer:
          "Often yes. Many carriers offer options for trailers, equipment, and related gear depending on the policy.",
      },
    ],
  },
  {
    slug: "motorcycle",
    name: "Motorcycle Insurance",
    shortName: "Motorcycle Insurance",
    category: "personal",
    href: "/personal-insurance/motorcycle",
    hero:
      "Responsive motorcycle coverage designed for real riders, real roads, and the unexpected.",
    summary:
      "We help riders protect their bike, liability exposure, and optional gear with solutions that fit how and when they ride.",
    audience: [
      "Daily riders",
      "Seasonal riders",
      "Owners of custom or collector bikes",
      "Households adding recreational coverage",
    ],
    coverage: [
      "Liability",
      "Collision and comprehensive",
      "Accessories and custom parts",
      "Medical payments",
      "Roadside options",
    ],
    advantages: [
      "Carrier options for a wide range of bikes",
      "Coverage review that factors in usage and storage",
      "Local agency support when you need a change or claim contact",
    ],
    faq: [
      {
        question: "Can I insure custom equipment?",
        answer:
          "Many policies allow accessory or custom parts coverage, depending on the carrier and bike setup.",
      },
      {
        question: "Do seasonal riders need year-round protection?",
        answer:
          "Often yes. Theft, weather, and storage-related risks do not stop when riding season ends.",
      },
    ],
  },
];

export const businessProducts: Product[] = [
  {
    slug: "general-business",
    name: "General Business Insurance",
    shortName: "General Business",
    category: "business",
    href: "/business-insurance/general-business",
    hero:
      "Core business insurance for companies that need dependable protection without the complexity.",
    summary:
      "A practical starting point for businesses that need to protect property, liability, operations, and reputation.",
    audience: [
      "Retail and office-based businesses",
      "Professional service firms",
      "Main Street operations",
      "Growing small businesses",
    ],
    coverage: [
      "General liability",
      "Business owner's policy",
      "Commercial property",
      "Business interruption",
      "Cyber and professional liability options",
    ],
    advantages: [
      "Coverage guidance matched to your actual operations",
      "Carrier access without one-size-fits-all recommendations",
      "Support when adding locations, employees, or new exposures",
    ],
    faq: [
      {
        question: "What does a business owner's policy include?",
        answer:
          "It often combines property and liability coverage in one package, with options to expand based on your operations.",
      },
      {
        question: "Can you help new businesses?",
        answer:
          "Yes. We can help frame likely coverage priorities and build a practical starting package.",
      },
    ],
  },
  {
    slug: "business-operations",
    name: "Business Operations Insurance",
    shortName: "Business Operations",
    category: "business",
    href: "/business-insurance/business-operations",
    hero:
      "Operational coverage for the day-to-day risks that can interrupt projects, jobsites, production, and delivery.",
    summary:
      "For businesses with vehicles, equipment, worksites, specialized processes, or supply-chain complexity.",
    audience: [
      "Contractors",
      "Manufacturing operations",
      "Service fleets",
      "Businesses with equipment or off-site exposures",
    ],
    coverage: [
      "Commercial auto",
      "Inland marine",
      "Equipment and tools",
      "Installation and builders risk options",
      "Industry-specific liability coverage",
    ],
    advantages: [
      "Stronger alignment between coverage and field operations",
      "Help coordinating certificates, vehicles, and drivers",
      "Coverage conversations that reflect how work gets done in real life",
    ],
    faq: [
      {
        question: "Do operations-heavy businesses need specialized coverage?",
        answer:
          "Usually yes. Equipment, fleet, subcontractor, and jobsite exposures often require more than a basic package.",
      },
      {
        question: "Can you help with certificates of insurance?",
        answer:
          "Yes. Our service center includes a dedicated certificate request path for faster support.",
      },
    ],
  },
  {
    slug: "workers-comp-benefits-health",
    name: "Workers' Compensation / Benefits / Health",
    shortName: "Workers' Comp + Benefits",
    category: "business",
    href: "/business-insurance/workers-comp-benefits-health",
    hero:
      "Support your workforce with coverage that protects employees and helps your business stay resilient.",
    summary:
      "From workers' compensation to employee benefits conversations, we help employers plan responsibly and communicate clearly.",
    audience: [
      "Employers with growing teams",
      "Businesses reviewing employee retention strategy",
      "Companies with workplace injury exposure",
      "Owners balancing compliance and culture",
    ],
    coverage: [
      "Workers' compensation",
      "Employer liability",
      "Employee benefits consultation",
      "Group health planning support",
      "Supplemental protection options",
    ],
    advantages: [
      "Coverage built around the realities of your workforce",
      "Plain-language support for business owners and administrators",
      "Local help when changes, audits, or questions arise",
    ],
    faq: [
      {
        question:
          "Can one agency help with both property/casualty and benefits conversations?",
        answer:
          "Yes. We can help coordinate the broader risk and employee coverage picture so it feels more connected.",
      },
      {
        question: "What if my business is changing quickly?",
        answer:
          "We can help review payroll, staffing, classifications, and operational changes to keep your protection aligned.",
      },
    ],
  },
];

export const serviceRequests: ServiceRequestType[] = [
  {
    slug: "vehicle-changes",
    name: "Add / Change Vehicles",
    description:
      "Tell us about a newly purchased vehicle, a replacement vehicle, or changes to existing auto information.",
    guidance:
      "Share as much vehicle detail as you have, including VIN if available. We will review options and confirm next steps before anything is finalized.",
    fields: [
      "policyNumber",
      "effectiveDate",
      "vehicleInfo",
      "contactMethod",
      "notes",
    ],
  },
  {
    slug: "driver-changes",
    name: "Add / Change Drivers",
    description:
      "Let us know about a new driver, status change, or driver removal so your policy stays current.",
    guidance:
      "Include driver names, date of birth if you are comfortable, and any licensing updates that may affect rating or eligibility.",
    fields: [
      "policyNumber",
      "effectiveDate",
      "driverInfo",
      "contactMethod",
      "notes",
    ],
  },
  {
    slug: "id-cards",
    name: "Order Auto ID Cards",
    description:
      "Request updated ID cards, replacement cards, or digital access help.",
    guidance:
      "If you need cards urgently, call the office and we will help direct you to the fastest option with your carrier.",
    fields: ["policyNumber", "contactMethod", "notes"],
  },
  {
    slug: "contact-updates",
    name: "Update Contact Info",
    description:
      "Update mailing address, email, phone number, or your preferred way to hear from us.",
    guidance:
      "We will verify the requested change with the policyholder before submitting updates to the carrier when needed.",
    fields: ["policyNumber", "contactMethod", "notes"],
  },
  {
    slug: "policy-changes",
    name: "Request Other Policy Changes",
    description:
      "Use this option for broader policy updates, adding coverage, reviewing limits, or making a general request.",
    guidance:
      "Describe the change you are considering and we will follow up with any questions, recommendations, or documents needed.",
    fields: ["policyNumber", "effectiveDate", "contactMethod", "notes"],
  },
  {
    slug: "certificates",
    name: "Get a Certificate of Insurance",
    description:
      "Request a certificate for a vendor, landlord, client, or project requirement.",
    guidance:
      "Please include the certificate holder name, any special wording requirements, and where the certificate should be sent.",
    fields: [
      "policyNumber",
      "businessName",
      "effectiveDate",
      "contactMethod",
      "notes",
    ],
  },
  {
    slug: "general-service",
    name: "Update Policy / General Service Request",
    description:
      "Need help and not sure which service path fits? Start here and we will route your request.",
    guidance:
      "This is the best option for broader support questions, billing concerns, document requests, or mixed policy changes.",
    fields: ["policyNumber", "contactMethod", "notes"],
  },
];

export const carriers: CarrierEntry[] = [
  {
    slug: "progressive",
    name: "Progressive",
    phoneClaims: "800-274-4499",
    phonePayments: "800-888-7764",
    claimsUrl: "https://www.progressive.com/claims/",
    paymentUrl: "https://www.progressive.com/pay-bill/",
    website: "https://www.progressiveagent.com",
    notes:
      "Online claim and billing tools are available directly through the carrier.",
    category: "Auto and personal lines",
  },
  {
    slug: "mapfre",
    name: "MAPFRE",
    phoneClaims: "203-949-1712",
    phonePayments: "203-949-1712",
    website: "https://www.mapfreinsurance.com",
    notes: "Please contact the office for guided claims and payment support.",
    category: "Personal lines",
  },
  {
    slug: "american-bankers",
    name: "American Bankers",
    phoneClaims: "800-245-1505",
    phonePayments: "800-423-4404",
    website: "https://www.assurant.com",
    notes:
      "Claims and payment support vary by policy type. We can help direct you if you are unsure.",
    category: "Specialty coverage",
  },
  {
    slug: "safeco",
    name: "Safeco",
    phoneClaims: "800-332-3226",
    phonePayments: "888-723-3260",
    claimsUrl: "https://www.safeco.com/claims",
    paymentUrl: "https://customer.safeco.com/accountmanager/payments",
    website: "https://www.safeco.com",
    notes:
      "Use the carrier portal for the fastest self-service experience, then call us if you need advocacy or follow-up help.",
    category: "Personal and business lines",
  },
  {
    slug: "foremost",
    name: "Foremost",
    phoneClaims: "800-527-3907",
    phonePayments: "800-532-4221",
    claimsUrl: "https://www.foremost.com/file-a-claim/",
    paymentUrl: "https://www.foremost.com/payonline/",
    website: "https://www.foremost.com",
    notes: "Helpful for specialty personal lines including recreational risks.",
    category: "Specialty personal lines",
  },
  {
    slug: "hagerty",
    name: "Hagerty",
    phoneClaims: "800-922-4050",
    phonePayments: "888-310-8020",
    claimsUrl: "https://www.hagerty.com/claims",
    paymentUrl: "https://login.hagerty.com",
    website: "https://www.hagerty.com",
    notes: "Classic and collector vehicle support.",
    category: "Collector auto",
  },
  {
    slug: "philadelphia-insurance",
    name: "Philadelphia Insurance",
    phoneClaims: "800-765-9749",
    phonePayments: "877-438-7459",
    claimsUrl: "https://www.phly.com/claims/default.aspx",
    paymentUrl: "https://www.phly.com/account/paymentoptions.aspx",
    website: "https://www.phly.com",
    notes: "Commonly used for commercial and specialty business needs.",
    category: "Commercial insurance",
  },
  {
    slug: "main-street-america",
    name: "Main Street America Group",
    phoneClaims: "877-425-2467",
    phonePayments: "800-258-5310",
    website: "https://www.msagroup.com",
    notes:
      "Carrier support details can vary by account. Contact the office if you need help routing your request.",
    category: "Commercial and personal lines",
  },
];

export const carrierLogoNames = [
  "Progressive",
  "MAPFRE",
  "Safeco",
  "Foremost",
  "Hagerty",
  "Philadelphia Insurance",
  "American Bankers",
  "Main Street America",
];

export const staffMembers: StaffMember[] = [
  {
    name: "Dino DiGirolamo",
    role: "President",
    specialty: "Agency leadership and client advocacy",
    phone: "203-949-1712 ext 307",
    email: "dino@advancedamerican.com",
    bio:
      "Dino leads the agency with a hands-on approach centered on responsiveness, long-term relationships, and practical insurance guidance.",
  },
  {
    name: "Maria Hogan",
    role: "Account Manager",
    specialty: "Personal insurance",
    phone: "203-303-7615",
    email: "maria@advancedamerican.com",
    bio:
      "Maria helps clients navigate everyday coverage decisions, policy updates, and personal insurance questions with clarity and care.",
  },
  {
    name: "Tim Hogan",
    role: "Account Manager",
    specialty: "Commercial insurance",
    phone: "203-303-7610",
    email: "timothy@advancedamerican.com",
    bio:
      "Tim works with business clients on coverage strategy, service requests, and the operational details that keep commercial protection aligned.",
  },
  {
    name: "Christine Casey",
    role: "Licensing Coordinator",
    specialty: "Agent licensing",
    phone: "203-303-7623",
    email: "christine@advancedamerican.com",
    bio:
      "Christine supports agency operations and makes complex administrative work feel easier for clients and carrier partners alike.",
  },
  {
    name: "Gabrielle DiGirolamo",
    role: "Account Manager",
    specialty: "Personal insurance",
    phone: "203-303-7655",
    email: "gabby@advancedamerican.com",
    bio:
      "Gabrielle focuses on fast follow-up, helpful policy support, and making everyday service requests feel simple and human.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "coverage-review-for-growing-households",
    title:
      "How a Simple Coverage Review Helps Growing Households Stay Protected",
    excerpt:
      "Life changes fast. A quick annual review can uncover small gaps before they become big problems.",
    category: "Personal Insurance",
    date: "April 2, 2026",
    readTime: "4 min read",
    content: [
      "Insurance works best when it evolves with your life. A new vehicle, recent home updates, a teen driver, or a growing family can all change the level of protection that makes sense.",
      "A coverage review does not need to feel complicated. It is usually a straightforward conversation about what has changed, how your current policies are structured, and whether there are opportunities to tighten protection or improve value.",
      "Independent agencies are especially helpful here because they can compare options across carriers and explain tradeoffs without forcing everything into one box. The goal is not more insurance for the sake of it. The goal is alignment.",
    ],
  },
  {
    slug: "what-to-do-right-after-an-auto-accident",
    title: "What to Do Right After an Auto Accident",
    excerpt:
      "A calm, simple checklist can make a stressful moment easier to manage from the roadside.",
    category: "Claims Help",
    date: "March 18, 2026",
    readTime: "5 min read",
    content: [
      "Immediately after an accident, your first priority is safety. Move to a safe location if possible, check for injuries, and call emergency services when needed.",
      "Documenting the scene can help later. Gather driver details, carrier information, vehicle photos, and the location of the incident if it is safe to do so.",
      "Then notify your carrier and your agency. Your carrier starts the claim process, and your agency can help you understand the next steps, what information matters, and when to escalate questions.",
    ],
  },
  {
    slug: "business-insurance-signals-its-time-to-update",
    title: "5 Signs It Is Time to Update Your Business Insurance",
    excerpt:
      "Growth is exciting, but growth also changes risk. Here are the signals business owners should not ignore.",
    category: "Business Insurance",
    date: "February 20, 2026",
    readTime: "6 min read",
    content: [
      "Hiring, moving, buying equipment, taking on larger contracts, or adding vehicles are all common moments when a policy review is worth scheduling.",
      "Many businesses start with a solid package and then outgrow it gradually. That is why regular check-ins matter. Risk changes in layers, and the biggest exposures are often the ones that develop quietly over time.",
      "A good agency partner helps you stay ahead of those changes so your insurance program keeps pace with your business operations instead of lagging behind them.",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "They make insurance feel organized and manageable. We always know where to start for service, payments, and policy questions.",
    name: "Personal insurance client",
  },
  {
    quote:
      "The team is responsive, practical, and easy to work with. Certificates and service requests move faster than they used to.",
    name: "Commercial insurance client",
  },
  {
    quote:
      "You still get real local support, but the experience feels modern and polished from the first click.",
    name: "Referral partner",
  },
];

export const referralProgram = {
  title: "Refer someone you care about",
  body:
    "When clients send friends, family, and business contacts our way, it means they trust us to be helpful, responsive, and easy to work with. This referral experience is built to make that simple.",
  points: [
    "Quick form that takes less than a minute",
    "Warm handoff messaging that feels personal, not salesy",
    "Optional note to help us understand what type of insurance support is needed",
  ],
};

export const companyEntries: CompanyEntry[] = [
  {
    name: "American Bankers",
    domain: "assurant.com",
    logoUrl:
      "https://www.weaverinsurance.com/wp-content/uploads/2019/12/american-bank-logo-homepage.png",
  },
  {
    name: "American National",
    domain: "anico.com",
    logoUrl:
      "https://res.cloudinary.com/micronetonline/image/upload/c_crop,h_812,w_3000,x_0,y_0/f_auto/q_auto/v1725384445/tenants/5d79b121-15d2-4144-814c-739ffcbbaa86/94c8fcfec6cd458484ef4789b42f25c4/AN-Awareness-Logo-Stacked-2-Color-CMYK-01.png",
  },
  {
    name: "Allstate",
    domain: "allstate.com",
    logoUrl: "https://1000logos.net/wp-content/uploads/2017/08/Allstate-Logo-2017.png",
  },
  { name: "American Strategic Insurance", domain: "americanstrategic.com" },
  {
    name: "Anthem",
    domain: "anthem.com",
    logoUrl: "https://www.anthem.com/assets/images/brands/top-logo-abcbs.svg",
  },
  { name: "Arrowhead", domain: "arrowheadgrp.com" },
  { name: "Assurity Life Insurance", domain: "assurity.com" },
  { name: "ConnectiCare", domain: "connecticare.com" },
  { name: "Dairyland Auto", domain: "dairylandinsurance.com" },
  { name: "Foremost Insurance", domain: "foremost.com" },
  {
    name: "GEICO",
    domain: "geico.com",
    logoUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Geico_logo.svg/1280px-Geico_logo.svg.png",
  },
  { name: "Genworth Life & Annuity", domain: "genworth.com" },
  { name: "Hagerty", domain: "hagerty.com" },
  { name: "Main Street America Group", domain: "msagroup.com" },
  {
    name: "MAPFRE",
    domain: "mapfreinsurance.com",
    logoUrl: "https://1000logos.net/wp-content/uploads/2021/04/Mapfre-logo.png",
  },
  { name: "Mutual of Omaha", domain: "mutualofomaha.com" },
  { name: "Ohio National", domain: "ohionational.com" },
  { name: "Philadelphia Insurance", domain: "phly.com" },
  {
    name: "Progressive",
    domain: "progressive.com",
    logoUrl: "https://1000logos.net/wp-content/uploads/2023/01/Progressive-logo.png",
  },
  { name: "Providence Mutual", domain: "provmutual.com" },
  {
    name: "Safeco",
    domain: "safeco.com",
    logoUrl:
      "https://www.northtowninsurance.com/wp-content/uploads/sites/110/2022/05/Safeco-Insurance-Logo.png",
  },
];

export const companyNames = companyEntries.map((company) => company.name);

export const featuredCompanyNames = [
  "GEICO",
  "Allstate",
  "Progressive",
  "MAPFRE",
  "Safeco",
  "American National",
  "Anthem",
  "American Bankers",
];

export const homeActions = [
  {
    title: "Start a quote",
    description: "Tell us what you need and we will guide the next step.",
    href: "/quotes",
  },
  {
    title: "Request service",
    description: "Policy changes, ID cards, certificates, and more.",
    href: "/service-center",
  },
  {
    title: "Get claim help",
    description: "Fast access to carrier contacts and what-to-do guidance.",
    href: "/claims",
  },
  {
    title: "Make a payment",
    description: "Search carriers and find the right billing path quickly.",
    href: "/payments",
  },
];

export const trustStats = [
  { label: "Independent guidance", value: "Multi-carrier" },
  { label: "Office support", value: "Local + responsive" },
  { label: "Major workflows", value: "Quote, service, claim, pay" },
  { label: "Access style", value: "Desktop + mobile ready" },
];
