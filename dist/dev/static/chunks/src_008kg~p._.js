(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/content.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ButtonLink",
    ()=>ButtonLink,
    "PageHero",
    ()=>PageHero,
    "SectionHeading",
    ()=>SectionHeading
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
;
function ButtonLink({ href, children, variant = "primary", className }) {
    const styles = {
        primary: "bg-[var(--navy)] !text-white visited:!text-white shadow-lg shadow-blue-950/20 hover:-translate-y-0.5 hover:bg-[var(--navy-deep)]",
        secondary: "border border-slate-300 bg-white text-[var(--navy-deep)] shadow-sm shadow-slate-900/5 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-[var(--surface-accent)]",
        ghost: "text-[var(--navy-deep)] hover:bg-blue-50"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: href,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-300 focus-visible:ring-offset-2 [&_svg]:text-current", styles[variant], className),
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_c = ButtonLink;
function SectionHeading({ eyebrow, title, description, align = "left" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("max-w-3xl", align === "center" && "mx-auto text-center"),
        children: [
            eyebrow ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "eyebrow",
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 52,
                columnNumber: 18
            }, this) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "mt-4 text-balance font-display text-3xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-4xl",
                children: title
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg",
                children: description
            }, void 0, false, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 57,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 51,
        columnNumber: 5
    }, this);
}
_c1 = SectionHeading;
function PageHero({ eyebrow, title, description, actions }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative overflow-hidden pt-12 sm:pt-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container-shell",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "card-surface relative overflow-hidden rounded-[2rem] px-6 py-12 sm:px-10 sm:py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-y-0 right-0 hidden w-1/3 bg-[radial-gradient(circle_at_top,rgba(217,71,76,0.12),transparent_56%),radial-gradient(circle_at_bottom,rgba(43,103,209,0.18),transparent_52%)] lg:block"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative max-w-3xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "eyebrow",
                                children: eyebrow
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-5 text-balance font-display text-4xl font-semibold tracking-tight text-[var(--navy-deep)] sm:text-5xl",
                                children: title
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 83,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-5 max-w-2xl text-lg leading-8 text-[var(--muted)]",
                                children: description
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 86,
                                columnNumber: 13
                            }, this),
                            actions ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-8 flex flex-wrap gap-3",
                                children: actions.map((action)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ButtonLink, {
                                        href: action.href,
                                        variant: action.variant ?? "primary",
                                        children: action.label
                                    }, action.href, false, {
                                        fileName: "[project]/src/components/ui.tsx",
                                        lineNumber: 92,
                                        columnNumber: 19
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this) : null
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui.tsx",
                        lineNumber: 81,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/ui.tsx",
            lineNumber: 78,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/ui.tsx",
        lineNumber: 77,
        columnNumber: 5
    }, this);
}
_c2 = PageHero;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "ButtonLink");
__turbopack_context__.k.register(_c1, "SectionHeading");
__turbopack_context__.k.register(_c2, "PageHero");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/site-shell-header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Header",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/content.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function Header() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "sticky top-0 z-50",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-white/70 bg-[rgba(9,26,53,0.95)] text-white backdrop-blur",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container-shell flex min-h-11 items-center justify-between gap-4 text-xs sm:text-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-4 py-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].phoneHref,
                                    className: "inline-flex items-center gap-2 font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            className: "h-3.5 w-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/site-shell-header.tsx",
                                            lineNumber: 21,
                                            columnNumber: 15
                                        }, this),
                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].phoneDisplay
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                    lineNumber: 20,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "hidden text-white/70 sm:inline",
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["siteSettings"].hours
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                    lineNumber: 24,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-shell-header.tsx",
                            lineNumber: 19,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hidden items-center gap-3 md:flex",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/claims",
                                    className: "text-white/80 transition hover:text-white",
                                    children: "Urgent claim help"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                    lineNumber: 27,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/payments",
                                    className: "text-white/80 transition hover:text-white",
                                    children: "Payment options"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-shell-header.tsx",
                            lineNumber: 26,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/site-shell-header.tsx",
                    lineNumber: 18,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/site-shell-header.tsx",
                lineNumber: 17,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "border-b border-slate-200/70 bg-white/80 backdrop-blur-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "container-shell flex min-h-20 items-center justify-between gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                "aria-label": "Go to the Advanced American homepage",
                                title: "Go to homepage",
                                className: "group -mx-2 inline-flex items-center gap-3 rounded-2xl px-2 py-2 transition hover:bg-slate-50",
                                onClick: ()=>setOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--navy),#1d4fa6)] text-sm font-bold text-white",
                                        children: "AA"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-shell-header.tsx",
                                        lineNumber: 45,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm font-semibold tracking-[0.18em] text-blue-600 transition group-hover:text-[var(--navy)]",
                                                children: "ADVANCED AMERICAN"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-shell-header.tsx",
                                                lineNumber: 49,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-[var(--muted)]",
                                                children: "Independent insurance guidance"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-shell-header.tsx",
                                                lineNumber: 52,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/site-shell-header.tsx",
                                        lineNumber: 48,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-shell-header.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden items-center gap-1 lg:flex",
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "group relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("inline-flex rounded-full px-4 py-2 text-sm font-medium text-[var(--navy)] transition hover:bg-blue-50", pathname === item.href && "bg-blue-50 text-blue-700"),
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-shell-header.tsx",
                                                lineNumber: 58,
                                                columnNumber: 17
                                            }, this),
                                            item.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 top-full z-30 w-80 pt-2",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "pointer-events-none rounded-[1.5rem] border border-slate-200 bg-white p-3 opacity-0 shadow-2xl shadow-slate-900/8 transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100",
                                                    children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                            href: child.href,
                                                            className: "block rounded-2xl px-4 py-3 transition hover:bg-[var(--surface-accent)] focus:bg-[var(--surface-accent)]",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "font-medium text-[var(--navy-deep)]",
                                                                    children: child.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 27
                                                                }, this),
                                                                child.description ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "mt-1 text-sm leading-6 text-[var(--muted)]",
                                                                    children: child.description
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                                                    lineNumber: 78,
                                                                    columnNumber: 29
                                                                }, this) : null
                                                            ]
                                                        }, child.href, true, {
                                                            fileName: "[project]/src/components/site-shell-header.tsx",
                                                            lineNumber: 71,
                                                            columnNumber: 25
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                                    lineNumber: 69,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-shell-header.tsx",
                                                lineNumber: 68,
                                                columnNumber: 19
                                            }, this) : null
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/src/components/site-shell-header.tsx",
                                        lineNumber: 57,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-shell-header.tsx",
                                lineNumber: 55,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "hidden items-center gap-3 md:flex",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                        href: "/service-center",
                                        variant: "secondary",
                                        children: "Service Center"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-shell-header.tsx",
                                        lineNumber: 91,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                        href: "/quotes",
                                        children: "Get a Quote"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/site-shell-header.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/site-shell-header.tsx",
                                lineNumber: 90,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: ()=>setOpen((value)=>!value),
                                className: "inline-flex rounded-2xl border border-slate-200 p-3 text-[var(--navy)] lg:hidden",
                                "aria-label": "Toggle menu",
                                children: open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                    lineNumber: 102,
                                    columnNumber: 21
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    className: "h-5 w-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                    lineNumber: 102,
                                    columnNumber: 49
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/site-shell-header.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/site-shell-header.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this),
                    open ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-slate-200 bg-white lg:hidden",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "container-shell grid gap-3 py-5",
                            children: [
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$content$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["navigation"].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-[1.5rem] border border-slate-200 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: item.href,
                                                className: "text-base font-semibold text-[var(--navy-deep)]",
                                                onClick: ()=>setOpen(false),
                                                children: item.label
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-shell-header.tsx",
                                                lineNumber: 110,
                                                columnNumber: 19
                                            }, this),
                                            item.children ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 grid gap-2",
                                                children: item.children.map((child)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: child.href,
                                                        onClick: ()=>setOpen(false),
                                                        className: "rounded-2xl bg-slate-50 px-3 py-3 text-sm text-[var(--muted)]",
                                                        children: child.label
                                                    }, child.href, false, {
                                                        fileName: "[project]/src/components/site-shell-header.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/site-shell-header.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this) : null
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/src/components/site-shell-header.tsx",
                                        lineNumber: 109,
                                        columnNumber: 17
                                    }, this)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ButtonLink"], {
                                    href: "/quotes",
                                    children: "Get a Quote"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/site-shell-header.tsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/site-shell-header.tsx",
                            lineNumber: 107,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/site-shell-header.tsx",
                        lineNumber: 106,
                        columnNumber: 11
                    }, this) : null
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/site-shell-header.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/site-shell-header.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(Header, "v3TFSdztexVkGEr5cLhcJl2cWfw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_008kg~p._.js.map