module.exports = [
"[project]/src/lib/content.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "blogPosts",
    ()=>blogPosts,
    "businessProducts",
    ()=>businessProducts,
    "carrierLogoNames",
    ()=>carrierLogoNames,
    "carriers",
    ()=>carriers,
    "companyEntries",
    ()=>companyEntries,
    "companyNames",
    ()=>companyNames,
    "homeActions",
    ()=>homeActions,
    "navigation",
    ()=>navigation,
    "personalProducts",
    ()=>personalProducts,
    "referralProgram",
    ()=>referralProgram,
    "serviceRequests",
    ()=>serviceRequests,
    "siteSettings",
    ()=>siteSettings,
    "staffMembers",
    ()=>staffMembers,
    "testimonials",
    ()=>testimonials,
    "trustStats",
    ()=>trustStats
]);
const siteSettings = {
    name: "Advanced American Financial",
    phoneDisplay: "(203) 949-1712",
    phoneHref: "tel:2039491712",
    email: "service@advancedamerican.com",
    address: [
        "208 S Colony St",
        "Wallingford, CT 06492"
    ],
    hours: "Mon - Fri, 8:30 AM - 4:30 PM",
    serviceArea: "Wallingford and communities across Connecticut",
    mapEmbedLabel: "Map placeholder for 208 S Colony St, Wallingford, CT 06492"
};
const navigation = [
    {
        label: "Personal Insurance",
        href: "/personal-insurance",
        children: [
            {
                label: "Auto",
                href: "/personal-insurance/auto",
                description: "Car, truck, SUV, and everyday driving coverage."
            },
            {
                label: "Home",
                href: "/personal-insurance/home",
                description: "Homeowners, condo, and renters protection."
            },
            {
                label: "Life",
                href: "/personal-insurance/life",
                description: "Plan ahead for family and legacy needs."
            },
            {
                label: "Umbrella",
                href: "/personal-insurance/umbrella",
                description: "Additional liability protection for bigger risks."
            },
            {
                label: "Boat",
                href: "/personal-insurance/boat",
                description: "Coverage for weekends on the water."
            },
            {
                label: "Motorcycle",
                href: "/personal-insurance/motorcycle",
                description: "Road-ready protection for two wheels."
            }
        ]
    },
    {
        label: "Business Insurance",
        href: "/business-insurance",
        children: [
            {
                label: "General Business",
                href: "/business-insurance/general-business",
                description: "Foundational protection for growing companies."
            },
            {
                label: "Business Operations",
                href: "/business-insurance/business-operations",
                description: "Industry-specific operational risk support."
            },
            {
                label: "Workers' Comp + Benefits",
                href: "/business-insurance/workers-comp-benefits-health",
                description: "Protect your team and support retention."
            }
        ]
    },
    {
        label: "Service Center",
        href: "/service-center"
    },
    {
        label: "Claims",
        href: "/claims"
    },
    {
        label: "Payments",
        href: "/payments"
    },
    {
        label: "About",
        href: "/about",
        children: [
            {
                label: "About Us",
                href: "/about"
            },
            {
                label: "Why Independent Agent",
                href: "/about/independent-agent"
            },
            {
                label: "Companies",
                href: "/about/companies"
            },
            {
                label: "Staff Directory",
                href: "/about/staff"
            }
        ]
    },
    {
        label: "Blog",
        href: "/blog"
    },
    {
        label: "Contact",
        href: "/contact"
    }
];
const personalProducts = [
    {
        slug: "auto",
        name: "Auto / Car / Truck / SUV Insurance",
        shortName: "Auto Insurance",
        category: "personal",
        href: "/personal-insurance/auto",
        hero: "Coverage that keeps your day moving after an accident, theft, or unexpected roadside disruption.",
        summary: "Personalized auto insurance built around how you drive, what you drive, and how much protection you want when life gets busy.",
        audience: [
            "Daily commuters",
            "Teen-driver households",
            "Drivers with multiple vehicles",
            "Families bundling home and auto"
        ],
        coverage: [
            "Liability",
            "Collision and comprehensive",
            "Uninsured and underinsured motorist",
            "Rental reimbursement",
            "Roadside and glass options"
        ],
        advantages: [
            "We compare multiple carriers for fit and price",
            "We help explain Connecticut requirements in plain English",
            "You still have a real local office when you need help fast"
        ],
        faq: [
            {
                question: "Can you help me compare my current policy?",
                answer: "Yes. We can review your current limits, deductible choices, and discount opportunities before we recommend alternatives."
            },
            {
                question: "Do bundled policies help?",
                answer: "In many cases they do. Bundling auto with home, renters, umbrella, or recreational policies can improve both pricing and coverage alignment."
            }
        ]
    },
    {
        slug: "home",
        name: "Home / Condo / Renters Insurance",
        shortName: "Home Insurance",
        category: "personal",
        href: "/personal-insurance/home",
        hero: "Modern home protection that covers the place you live and the things that make it feel like home.",
        summary: "Whether you own, rent, or insure a condo, we help you secure dependable protection with guidance that is easy to understand.",
        audience: [
            "Homeowners",
            "Condo owners",
            "Renters",
            "Households wanting stronger liability protection"
        ],
        coverage: [
            "Dwelling and other structures",
            "Personal property",
            "Personal liability",
            "Loss of use",
            "Optional water backup and service line endorsements"
        ],
        advantages: [
            "Carrier options for different property profiles",
            "Guidance on rebuilding cost versus market value",
            "Support aligning home, auto, umbrella, and valuable items"
        ],
        faq: [
            {
                question: "Do renters need insurance?",
                answer: "Usually yes. Renters insurance can protect belongings, provide liability coverage, and help with temporary living costs after a covered loss."
            },
            {
                question: "What if I have a condo?",
                answer: "Condo insurance can fill the gap between your association's master policy and your personal property, interior finishes, and liability needs."
            }
        ]
    },
    {
        slug: "life",
        name: "Life Insurance",
        shortName: "Life Insurance",
        category: "personal",
        href: "/personal-insurance/life",
        hero: "Life insurance planning that supports the people who depend on you most.",
        summary: "We help individuals and families explore life insurance options that can fit income protection, estate planning, mortgage security, and long-term goals.",
        audience: [
            "Young families",
            "Homeowners with shared financial commitments",
            "Business owners",
            "People reviewing long-term plans"
        ],
        coverage: [
            "Term life",
            "Permanent life options",
            "Final expense planning",
            "Income replacement considerations",
            "Legacy and beneficiary coordination"
        ],
        advantages: [
            "Clear side-by-side guidance without jargon",
            "Access to multiple carriers and product types",
            "Thoughtful review of budget, timeline, and family goals"
        ],
        faq: [
            {
                question: "How much life insurance should I consider?",
                answer: "It depends on your income, debts, dependents, long-term goals, and existing benefits. We can help you frame the right range."
            },
            {
                question: "Is term life the only option?",
                answer: "No. Term is a common starting point, but permanent solutions may be worth considering based on your goals and planning horizon."
            }
        ]
    },
    {
        slug: "umbrella",
        name: "Umbrella Insurance",
        shortName: "Umbrella Insurance",
        category: "personal",
        href: "/personal-insurance/umbrella",
        hero: "Extra liability protection for the moments when a standard policy may not be enough.",
        summary: "Umbrella insurance adds an additional layer of liability coverage above your home, auto, and other eligible policies.",
        audience: [
            "Households with teen drivers",
            "Property owners",
            "Families with savings to protect",
            "Anyone wanting stronger liability limits"
        ],
        coverage: [
            "Additional liability limits",
            "Broader protection beyond core policy caps",
            "Help for major bodily injury or property damage claims"
        ],
        advantages: [
            "We help determine whether your current liability limits are aligned",
            "We coordinate umbrella coverage with your other policies",
            "We make it easier to understand what umbrella coverage does and does not do"
        ],
        faq: [
            {
                question: "Who should consider umbrella insurance?",
                answer: "Anyone who wants a stronger liability cushion, especially households with assets, young drivers, or elevated personal liability exposures."
            },
            {
                question: "Does umbrella insurance replace my auto or home policy?",
                answer: "No. It layers above eligible underlying policies and works alongside them."
            }
        ]
    },
    {
        slug: "boat",
        name: "Boat Insurance",
        shortName: "Boat Insurance",
        category: "personal",
        href: "/personal-insurance/boat",
        hero: "Protection for your boat, your passengers, and your time on the water.",
        summary: "From weekend cruising to seasonal storage considerations, we help match coverage to the way you actually use your boat.",
        audience: [
            "Boat owners",
            "Seasonal recreation users",
            "Owners storing or transporting watercraft",
            "Families wanting liability protection on the water"
        ],
        coverage: [
            "Physical damage",
            "Liability",
            "Medical payments",
            "Trailer and equipment options",
            "Seasonal and storage considerations"
        ],
        advantages: [
            "Carrier access for a range of watercraft profiles",
            "Guidance on usage, storage, and navigational territory",
            "Bundling help when recreational policies overlap with home or umbrella"
        ],
        faq: [
            {
                question: "Does my home insurance cover my boat?",
                answer: "Sometimes only in a very limited way. Dedicated boat insurance is often a better fit for broader protection."
            },
            {
                question: "Can I cover accessories and trailers?",
                answer: "Often yes. Many carriers offer options for trailers, equipment, and related gear depending on the policy."
            }
        ]
    },
    {
        slug: "motorcycle",
        name: "Motorcycle Insurance",
        shortName: "Motorcycle Insurance",
        category: "personal",
        href: "/personal-insurance/motorcycle",
        hero: "Responsive motorcycle coverage designed for real riders, real roads, and the unexpected.",
        summary: "We help riders protect their bike, liability exposure, and optional gear with solutions that fit how and when they ride.",
        audience: [
            "Daily riders",
            "Seasonal riders",
            "Owners of custom or collector bikes",
            "Households adding recreational coverage"
        ],
        coverage: [
            "Liability",
            "Collision and comprehensive",
            "Accessories and custom parts",
            "Medical payments",
            "Roadside options"
        ],
        advantages: [
            "Carrier options for a wide range of bikes",
            "Coverage review that factors in usage and storage",
            "Local agency support when you need a change or claim contact"
        ],
        faq: [
            {
                question: "Can I insure custom equipment?",
                answer: "Many policies allow accessory or custom parts coverage, depending on the carrier and bike setup."
            },
            {
                question: "Do seasonal riders need year-round protection?",
                answer: "Often yes. Theft, weather, and storage-related risks do not stop when riding season ends."
            }
        ]
    }
];
const businessProducts = [
    {
        slug: "general-business",
        name: "General Business Insurance",
        shortName: "General Business",
        category: "business",
        href: "/business-insurance/general-business",
        hero: "Core business insurance for companies that need dependable protection without the complexity.",
        summary: "A practical starting point for businesses that need to protect property, liability, operations, and reputation.",
        audience: [
            "Retail and office-based businesses",
            "Professional service firms",
            "Main Street operations",
            "Growing small businesses"
        ],
        coverage: [
            "General liability",
            "Business owner's policy",
            "Commercial property",
            "Business interruption",
            "Cyber and professional liability options"
        ],
        advantages: [
            "Coverage guidance matched to your actual operations",
            "Carrier access without one-size-fits-all recommendations",
            "Support when adding locations, employees, or new exposures"
        ],
        faq: [
            {
                question: "What does a business owner's policy include?",
                answer: "It often combines property and liability coverage in one package, with options to expand based on your operations."
            },
            {
                question: "Can you help new businesses?",
                answer: "Yes. We can help frame likely coverage priorities and build a practical starting package."
            }
        ]
    },
    {
        slug: "business-operations",
        name: "Business Operations Insurance",
        shortName: "Business Operations",
        category: "business",
        href: "/business-insurance/business-operations",
        hero: "Operational coverage for the day-to-day risks that can interrupt projects, jobsites, production, and delivery.",
        summary: "For businesses with vehicles, equipment, worksites, specialized processes, or supply-chain complexity.",
        audience: [
            "Contractors",
            "Manufacturing operations",
            "Service fleets",
            "Businesses with equipment or off-site exposures"
        ],
        coverage: [
            "Commercial auto",
            "Inland marine",
            "Equipment and tools",
            "Installation and builders risk options",
            "Industry-specific liability coverage"
        ],
        advantages: [
            "Stronger alignment between coverage and field operations",
            "Help coordinating certificates, vehicles, and drivers",
            "Coverage conversations that reflect how work gets done in real life"
        ],
        faq: [
            {
                question: "Do operations-heavy businesses need specialized coverage?",
                answer: "Usually yes. Equipment, fleet, subcontractor, and jobsite exposures often require more than a basic package."
            },
            {
                question: "Can you help with certificates of insurance?",
                answer: "Yes. Our service center includes a dedicated certificate request path for faster support."
            }
        ]
    },
    {
        slug: "workers-comp-benefits-health",
        name: "Workers' Compensation / Benefits / Health",
        shortName: "Workers' Comp + Benefits",
        category: "business",
        href: "/business-insurance/workers-comp-benefits-health",
        hero: "Support your workforce with coverage that protects employees and helps your business stay resilient.",
        summary: "From workers' compensation to employee benefits conversations, we help employers plan responsibly and communicate clearly.",
        audience: [
            "Employers with growing teams",
            "Businesses reviewing employee retention strategy",
            "Companies with workplace injury exposure",
            "Owners balancing compliance and culture"
        ],
        coverage: [
            "Workers' compensation",
            "Employer liability",
            "Employee benefits consultation",
            "Group health planning support",
            "Supplemental protection options"
        ],
        advantages: [
            "Coverage built around the realities of your workforce",
            "Plain-language support for business owners and administrators",
            "Local help when changes, audits, or questions arise"
        ],
        faq: [
            {
                question: "Can one agency help with both property/casualty and benefits conversations?",
                answer: "Yes. We can help coordinate the broader risk and employee coverage picture so it feels more connected."
            },
            {
                question: "What if my business is changing quickly?",
                answer: "We can help review payroll, staffing, classifications, and operational changes to keep your protection aligned."
            }
        ]
    }
];
const serviceRequests = [
    {
        slug: "vehicle-changes",
        name: "Add / Change Vehicles",
        description: "Tell us about a newly purchased vehicle, a replacement vehicle, or changes to existing auto information.",
        guidance: "Share as much vehicle detail as you have, including VIN if available. We will review options and confirm next steps before anything is finalized.",
        fields: [
            "policyNumber",
            "effectiveDate",
            "vehicleInfo",
            "contactMethod",
            "notes"
        ]
    },
    {
        slug: "driver-changes",
        name: "Add / Change Drivers",
        description: "Let us know about a new driver, status change, or driver removal so your policy stays current.",
        guidance: "Include driver names, date of birth if you are comfortable, and any licensing updates that may affect rating or eligibility.",
        fields: [
            "policyNumber",
            "effectiveDate",
            "driverInfo",
            "contactMethod",
            "notes"
        ]
    },
    {
        slug: "id-cards",
        name: "Order Auto ID Cards",
        description: "Request updated ID cards, replacement cards, or digital access help.",
        guidance: "If you need cards urgently, call the office and we will help direct you to the fastest option with your carrier.",
        fields: [
            "policyNumber",
            "contactMethod",
            "notes"
        ]
    },
    {
        slug: "contact-updates",
        name: "Update Contact Info",
        description: "Update mailing address, email, phone number, or your preferred way to hear from us.",
        guidance: "We will verify the requested change with the policyholder before submitting updates to the carrier when needed.",
        fields: [
            "policyNumber",
            "contactMethod",
            "notes"
        ]
    },
    {
        slug: "policy-changes",
        name: "Request Other Policy Changes",
        description: "Use this option for broader policy updates, adding coverage, reviewing limits, or making a general request.",
        guidance: "Describe the change you are considering and we will follow up with any questions, recommendations, or documents needed.",
        fields: [
            "policyNumber",
            "effectiveDate",
            "contactMethod",
            "notes"
        ]
    },
    {
        slug: "certificates",
        name: "Get a Certificate of Insurance",
        description: "Request a certificate for a vendor, landlord, client, or project requirement.",
        guidance: "Please include the certificate holder name, any special wording requirements, and where the certificate should be sent.",
        fields: [
            "policyNumber",
            "businessName",
            "effectiveDate",
            "contactMethod",
            "notes"
        ]
    },
    {
        slug: "general-service",
        name: "Update Policy / General Service Request",
        description: "Need help and not sure which service path fits? Start here and we will route your request.",
        guidance: "This is the best option for broader support questions, billing concerns, document requests, or mixed policy changes.",
        fields: [
            "policyNumber",
            "contactMethod",
            "notes"
        ]
    }
];
const carriers = [
    {
        slug: "progressive",
        name: "Progressive",
        phoneClaims: "800-274-4499",
        phonePayments: "800-888-7764",
        claimsUrl: "https://www.progressive.com/claims/",
        paymentUrl: "https://www.progressive.com/pay-bill/",
        website: "https://www.progressiveagent.com",
        notes: "Online claim and billing tools are available directly through the carrier.",
        category: "Auto and personal lines"
    },
    {
        slug: "mapfre",
        name: "MAPFRE",
        phoneClaims: "203-949-1712",
        phonePayments: "203-949-1712",
        website: "https://www.mapfreinsurance.com",
        notes: "Please contact the office for guided claims and payment support.",
        category: "Personal lines"
    },
    {
        slug: "american-bankers",
        name: "American Bankers",
        phoneClaims: "800-245-1505",
        phonePayments: "800-423-4404",
        website: "https://www.assurant.com",
        notes: "Claims and payment support vary by policy type. We can help direct you if you are unsure.",
        category: "Specialty coverage"
    },
    {
        slug: "safeco",
        name: "Safeco",
        phoneClaims: "800-332-3226",
        phonePayments: "888-723-3260",
        claimsUrl: "https://www.safeco.com/claims",
        paymentUrl: "https://customer.safeco.com/accountmanager/payments",
        website: "https://www.safeco.com",
        notes: "Use the carrier portal for the fastest self-service experience, then call us if you need advocacy or follow-up help.",
        category: "Personal and business lines"
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
        category: "Specialty personal lines"
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
        category: "Collector auto"
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
        category: "Commercial insurance"
    },
    {
        slug: "main-street-america",
        name: "Main Street America Group",
        phoneClaims: "877-425-2467",
        phonePayments: "800-258-5310",
        website: "https://www.msagroup.com",
        notes: "Carrier support details can vary by account. Contact the office if you need help routing your request.",
        category: "Commercial and personal lines"
    }
];
const carrierLogoNames = [
    "Progressive",
    "MAPFRE",
    "Safeco",
    "Foremost",
    "Hagerty",
    "Philadelphia Insurance",
    "American Bankers",
    "Main Street America"
];
const staffMembers = [
    {
        name: "Dino DiGirolamo",
        role: "President",
        specialty: "Agency leadership and client advocacy",
        phone: "203-949-1712 ext 307",
        email: "dino@advancedamerican.com",
        bio: "Dino leads the agency with a hands-on approach centered on responsiveness, long-term relationships, and practical insurance guidance."
    },
    {
        name: "Maria Hogan",
        role: "Account Manager",
        specialty: "Personal insurance",
        phone: "203-303-7615",
        email: "maria@advancedamerican.com",
        bio: "Maria helps clients navigate everyday coverage decisions, policy updates, and personal insurance questions with clarity and care."
    },
    {
        name: "Tim Hogan",
        role: "Account Manager",
        specialty: "Commercial insurance",
        phone: "203-303-7610",
        email: "timothy@advancedamerican.com",
        bio: "Tim works with business clients on coverage strategy, service requests, and the operational details that keep commercial protection aligned."
    },
    {
        name: "Christine Casey",
        role: "Licensing Coordinator",
        specialty: "Agent licensing",
        phone: "203-303-7623",
        email: "christine@advancedamerican.com",
        bio: "Christine supports agency operations and makes complex administrative work feel easier for clients and carrier partners alike."
    },
    {
        name: "Gabrielle DiGirolamo",
        role: "Account Manager",
        specialty: "Personal insurance",
        phone: "203-303-7655",
        email: "gabby@advancedamerican.com",
        bio: "Gabrielle focuses on fast follow-up, helpful policy support, and making everyday service requests feel simple and human."
    }
];
const blogPosts = [
    {
        slug: "coverage-review-for-growing-households",
        title: "How a Simple Coverage Review Helps Growing Households Stay Protected",
        excerpt: "Life changes fast. A quick annual review can uncover small gaps before they become big problems.",
        category: "Personal Insurance",
        date: "April 2, 2026",
        readTime: "4 min read",
        content: [
            "Insurance works best when it evolves with your life. A new vehicle, recent home updates, a teen driver, or a growing family can all change the level of protection that makes sense.",
            "A coverage review does not need to feel complicated. It is usually a straightforward conversation about what has changed, how your current policies are structured, and whether there are opportunities to tighten protection or improve value.",
            "Independent agencies are especially helpful here because they can compare options across carriers and explain tradeoffs without forcing everything into one box. The goal is not more insurance for the sake of it. The goal is alignment."
        ]
    },
    {
        slug: "what-to-do-right-after-an-auto-accident",
        title: "What to Do Right After an Auto Accident",
        excerpt: "A calm, simple checklist can make a stressful moment easier to manage from the roadside.",
        category: "Claims Help",
        date: "March 18, 2026",
        readTime: "5 min read",
        content: [
            "Immediately after an accident, your first priority is safety. Move to a safe location if possible, check for injuries, and call emergency services when needed.",
            "Documenting the scene can help later. Gather driver details, carrier information, vehicle photos, and the location of the incident if it is safe to do so.",
            "Then notify your carrier and your agency. Your carrier starts the claim process, and your agency can help you understand the next steps, what information matters, and when to escalate questions."
        ]
    },
    {
        slug: "business-insurance-signals-its-time-to-update",
        title: "5 Signs It Is Time to Update Your Business Insurance",
        excerpt: "Growth is exciting, but growth also changes risk. Here are the signals business owners should not ignore.",
        category: "Business Insurance",
        date: "February 20, 2026",
        readTime: "6 min read",
        content: [
            "Hiring, moving, buying equipment, taking on larger contracts, or adding vehicles are all common moments when a policy review is worth scheduling.",
            "Many businesses start with a solid package and then outgrow it gradually. That is why regular check-ins matter. Risk changes in layers, and the biggest exposures are often the ones that develop quietly over time.",
            "A good agency partner helps you stay ahead of those changes so your insurance program keeps pace with your business operations instead of lagging behind them."
        ]
    }
];
const testimonials = [
    {
        quote: "They make insurance feel organized and manageable. We always know where to start for service, payments, and policy questions.",
        name: "Personal insurance client"
    },
    {
        quote: "The team is responsive, practical, and easy to work with. Certificates and service requests move faster than they used to.",
        name: "Commercial insurance client"
    },
    {
        quote: "You still get real local support, but the experience feels modern and polished from the first click.",
        name: "Referral partner"
    }
];
const referralProgram = {
    title: "Refer someone you care about",
    body: "When clients send friends, family, and business contacts our way, it means they trust us to be helpful, responsive, and easy to work with. This referral experience is built to make that simple.",
    points: [
        "Quick form that takes less than a minute",
        "Warm handoff messaging that feels personal, not salesy",
        "Optional note to help us understand what type of insurance support is needed"
    ]
};
const companyEntries = [
    {
        name: "American Bankers",
        domain: "assurant.com"
    },
    {
        name: "American National",
        domain: "anico.com"
    },
    {
        name: "American Strategic Insurance",
        domain: "americanstrategic.com"
    },
    {
        name: "Anthem",
        domain: "anthem.com"
    },
    {
        name: "Arrowhead",
        domain: "arrowheadgrp.com"
    },
    {
        name: "Assurity Life Insurance",
        domain: "assurity.com"
    },
    {
        name: "ConnectiCare",
        domain: "connecticare.com"
    },
    {
        name: "Dairyland Auto",
        domain: "dairylandinsurance.com"
    },
    {
        name: "Foremost Insurance",
        domain: "foremost.com"
    },
    {
        name: "Genworth Life & Annuity",
        domain: "genworth.com"
    },
    {
        name: "Hagerty",
        domain: "hagerty.com"
    },
    {
        name: "Main Street America Group",
        domain: "msagroup.com"
    },
    {
        name: "MAPFRE",
        domain: "mapfreinsurance.com"
    },
    {
        name: "Mutual of Omaha",
        domain: "mutualofomaha.com"
    },
    {
        name: "Ohio National",
        domain: "ohionational.com"
    },
    {
        name: "Philadelphia Insurance",
        domain: "phly.com"
    },
    {
        name: "Progressive",
        domain: "progressive.com"
    },
    {
        name: "Providence Mutual",
        domain: "provmutual.com"
    },
    {
        name: "Safeco",
        domain: "safeco.com"
    }
];
const companyNames = companyEntries.map((company)=>company.name);
const homeActions = [
    {
        title: "Start a quote",
        description: "Tell us what you need and we will guide the next step.",
        href: "/quotes"
    },
    {
        title: "Request service",
        description: "Policy changes, ID cards, certificates, and more.",
        href: "/service-center"
    },
    {
        title: "Get claim help",
        description: "Fast access to carrier contacts and what-to-do guidance.",
        href: "/claims"
    },
    {
        title: "Make a payment",
        description: "Search carriers and find the right billing path quickly.",
        href: "/payments"
    }
];
const trustStats = [
    {
        label: "Independent guidance",
        value: "Multi-carrier"
    },
    {
        label: "Office support",
        value: "Local + responsive"
    },
    {
        label: "Major workflows",
        value: "Quote, service, claim, pay"
    },
    {
        label: "Access style",
        value: "Desktop + mobile ready"
    }
];
}),
"[project]/src/components/site-shell-footer.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Footer",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-rsc] (ecmascript)");
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "border-t border-slate-200 bg-[var(--navy-deep)] text-white",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-shell grid gap-12 py-14 lg:grid-cols-[1.2fr_0.8fr_1fr]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "font-display text-3xl font-semibold",
                            children: "Insurance guidance that feels modern, human, and dependable."
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-shell-footer.tsx",
                            lineNumber: 9,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-4 max-w-xl text-sm leading-7 text-white/70",
                            children: "Built around the real workflows clients need most: quotes, service requests, claims help, payments, coverage education, and a direct path to a responsive local team."
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-shell-footer.tsx",
                            lineNumber: 12,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex flex-wrap gap-2",
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["companyNames"].slice(0, 8).map((company)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/75",
                                    children: company
                                }, company, false, {
                                    fileName: "[project]/src/components/site-shell-footer.tsx",
                                    lineNumber: 19,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-shell-footer.tsx",
                            lineNumber: 17,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-shell-footer.tsx",
                    lineNumber: 8,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold uppercase tracking-[0.24em] text-white/60",
                            children: "Navigation"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-shell-footer.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid gap-3 text-sm",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["navigation"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: "text-white/80 transition hover:text-white",
                                        children: item.label
                                    }, item.href, false, {
                                        fileName: "[project]/src/components/site-shell-footer.tsx",
                                        lineNumber: 31,
                                        columnNumber: 15
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/referrals",
                                    className: "text-white/80 transition hover:text-white",
                                    children: "Referrals"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-footer.tsx",
                                    lineNumber: 35,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-shell-footer.tsx",
                            lineNumber: 29,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-shell-footer.tsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-sm font-semibold uppercase tracking-[0.24em] text-white/60",
                            children: "Contact"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-shell-footer.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-3 text-sm text-white/80",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].phoneHref,
                                    className: "block transition hover:text-white",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].phoneDisplay
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-footer.tsx",
                                    lineNumber: 45,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].email}`,
                                    className: "block transition hover:text-white",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].email
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-footer.tsx",
                                    lineNumber: 48,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].address[0]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-footer.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].address[1]
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-footer.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].hours
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-footer.tsx",
                                    lineNumber: 53,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-shell-footer.tsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-shell-footer.tsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/site-shell-footer.tsx",
            lineNumber: 7,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site-shell-footer.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/site-shell-header.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/site-shell-header.tsx <module evaluation>", "Header");
}),
"[project]/src/components/site-shell-header.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const Header = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Header() from the server but Header is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/site-shell-header.tsx", "Header");
}),
"[project]/src/components/site-shell-header.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/site-shell-header.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/site-shell-header.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/site-shell-mobile-dock.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MobileDock",
    ()=>MobileDock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-rsc] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-rsc] (ecmascript) <export default as ShieldAlert>");
;
;
;
const actions = [
    {
        href: "/quotes",
        label: "Quote",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"]
    },
    {
        href: "/claims",
        label: "Claim",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ShieldAlert$3e$__["ShieldAlert"]
    },
    {
        href: "/payments",
        label: "Pay",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"]
    },
    {
        href: "tel:2039491712",
        label: "Call",
        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"]
    }
];
function MobileDock() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/92 px-4 py-3 backdrop-blur md:hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto grid max-w-md grid-cols-4 gap-2",
            children: actions.map((action)=>{
                const Icon = action.icon;
                const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                            className: "h-4 w-4"
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-shell-mobile-dock.tsx",
                            lineNumber: 19,
                            columnNumber: 15
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-[11px] font-medium",
                            children: action.label
                        }, void 0, false, {
                            fileName: "[project]/src/components/site-shell-mobile-dock.tsx",
                            lineNumber: 20,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true);
                return action.href.startsWith("tel:") ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: action.href,
                    className: "flex flex-col items-center gap-1 rounded-2xl bg-slate-50 px-3 py-2 text-[var(--navy)]",
                    children: content
                }, action.label, false, {
                    fileName: "[project]/src/components/site-shell-mobile-dock.tsx",
                    lineNumber: 25,
                    columnNumber: 13
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    href: action.href,
                    className: "flex flex-col items-center gap-1 rounded-2xl bg-slate-50 px-3 py-2 text-[var(--navy)]",
                    children: content
                }, action.label, false, {
                    fileName: "[project]/src/components/site-shell-mobile-dock.tsx",
                    lineNumber: 33,
                    columnNumber: 13
                }, this);
            })
        }, void 0, false, {
            fileName: "[project]/src/components/site-shell-mobile-dock.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/site-shell-mobile-dock.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/site-shell.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SiteShell",
    ()=>SiteShell
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-shell-footer.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-shell-header.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$mobile$2d$dock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-shell-mobile-dock.tsx [app-rsc] (ecmascript)");
;
;
;
;
function SiteShell({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$header$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Header"], {}, void 0, false, {
                fileName: "[project]/src/components/site-shell.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 pb-24 md:pb-0",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/components/site-shell.tsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$footer$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Footer"], {}, void 0, false, {
                fileName: "[project]/src/components/site-shell.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2d$mobile$2d$dock$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["MobileDock"], {}, void 0, false, {
                fileName: "[project]/src/components/site-shell.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-shell.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/site-shell.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-rsc] (ecmascript)");
;
;
;
;
const metadata = {
    title: {
        default: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].name} | Modern Independent Insurance Support`,
        template: `%s | ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["siteSettings"].name}`
    },
    description: "Premium independent insurance agency website for quotes, service requests, claims help, payments, coverage education, and local support."
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: "min-h-screen bg-[var(--background)] font-sans text-slate-900 antialiased",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$site$2d$shell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["SiteShell"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 23,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime;
}),
"[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js <module evaluation>"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)", ((__turbopack_context__, module, exports) => {

// This file is generated by next-core EcmascriptClientReferenceModule.
const { createClientModuleProxy } = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
__turbopack_context__.n(createClientModuleProxy("[project]/node_modules/next/dist/client/app-dir/link.js"));
}),
"[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return _link.useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r("[project]/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-rsc] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-runtime.js [app-rsc] (ecmascript)");
const _link = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)"));
function LinkComponent(props) {
    const isLegacyBehavior = props.legacyBehavior;
    const childIsHostComponent = typeof props.children === 'string' || typeof props.children === 'number' || typeof props.children?.type === 'string';
    const childIsClientComponent = props.children?.type?.$$typeof === Symbol.for('react.client.reference');
    if (isLegacyBehavior && !childIsHostComponent && !childIsClientComponent) {
        if (props.children?.type?.$$typeof === Symbol.for('react.lazy')) {
            console.error(`Using a Lazy Component as a direct child of \`<Link legacyBehavior>\` from a Server Component is not supported. If you need legacyBehavior, wrap your Lazy Component in a Client Component that renders the Link's \`<a>\` tag.`);
        } else {
            console.error(`Using a Server Component as a direct child of \`<Link legacyBehavior>\` is not supported. If you need legacyBehavior, wrap your Server Component in a Client Component that renders the Link's \`<a>\` tag.`);
        }
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_link.default, {
        ...props
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mergeClasses",
    ()=>mergeClasses
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toKebabCase",
    ()=>toKebabCase
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toCamelCase",
    ()=>toCamelCase
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toPascalCase",
    ()=>toPascalCase
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.js [app-rsc] (ecmascript)");
;
const toPascalCase = (string)=>{
    const camelCase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toCamelCase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toCamelCase"])(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/node_modules/lucide-react/dist/esm/Icon.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/lucide-react/dist/esm/Icon.js <module evaluation>", "default");
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/node_modules/lucide-react/dist/esm/Icon.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/node_modules/lucide-react/dist/esm/Icon.js", "default");
}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>createLucideIcon
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)");
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$mergeClasses$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toKebabCase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2f$toPascalCase$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CreditCard
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "20",
            height: "14",
            x: "2",
            y: "5",
            rx: "2",
            key: "ynyp8z"
        }
    ],
    [
        "line",
        {
            x1: "2",
            x2: "22",
            y1: "10",
            y2: "10",
            key: "1b3vmo"
        }
    ]
];
const CreditCard = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("credit-card", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-rsc] (ecmascript) <export default as CreditCard>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CreditCard",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>FileText
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",
            key: "1oefj6"
        }
    ],
    [
        "path",
        {
            d: "M14 2v5a1 1 0 0 0 1 1h5",
            key: "wfsgrz"
        }
    ],
    [
        "path",
        {
            d: "M10 9H8",
            key: "b1mrlr"
        }
    ],
    [
        "path",
        {
            d: "M16 13H8",
            key: "t4e002"
        }
    ],
    [
        "path",
        {
            d: "M16 17H8",
            key: "z1uh3a"
        }
    ]
];
const FileText = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("file-text", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript) <export default as FileText>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Phone
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",
            key: "9njp5v"
        }
    ]
];
const Phone = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("phone", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript) <export default as Phone>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Phone",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-rsc] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ShieldAlert
]);
/**
 * @license lucide-react v1.7.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
            key: "oel41y"
        }
    ],
    [
        "path",
        {
            d: "M12 8v4",
            key: "1got3b"
        }
    ],
    [
        "path",
        {
            d: "M12 16h.01",
            key: "1drbdi"
        }
    ]
];
const ShieldAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("shield-alert", __iconNode);
;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-rsc] (ecmascript) <export default as ShieldAlert>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShieldAlert",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2d$alert$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield-alert.js [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=_0yusd9p._.js.map