export interface Opportunity {
  id: string;
  sector: string;
  emoji: string;
  noWebsiteRate: string;
  tier: "Gold" | "Silver" | "Bronze";
  intent: "High" | "Medium" | "Low" | "Low-Med";
  avgBudget: string;
  whyNeed: string;
  painPoint: string;
  websiteValue: string;
  idealOffer: string;
  productPrice: string;
}

export interface SiteProblem {
  title: string;
  severity: "Critical" | "High" | "Medium" | "Low";
  detect: string;
  pitch: string;
  vibeFix: string;
}

export interface SalesTactic {
  title: string;
  detail: string;
}

export const taka = "৳";

export const marketStats = [
  { value: "36%", label: "of Bangladeshi SMEs have a professional website", note: "DataReportal 2025 — meaning ~64% don't" },
  { value: "42%", label: "more revenue growth for businesses with a website", note: "On average, vs. businesses without" },
  { value: "87%", label: "of SME owners are unhappy with their current website", note: "Zyro research — layout, content & SEO concerns" },
  { value: "98%", label: "of internet users in Bangladesh are on mobile", note: "Most bad sites are not mobile-friendly" },
  { value: "89%", label: "of customers research online before buying", note: "Your clients' customers already search first" },
  { value: "40%", label: "of small businesses have no interest in a website at all", note: "This is the mindset barrier you must overcome" },
];

export const tiers = {
  Gold: "border-amber-400 bg-amber-50 text-amber-900",
  Silver: "border-slate-300 bg-slate-100 text-slate-800",
  Bronze: "border-orange-300 bg-orange-50 text-orange-900",
};

export const opportunities: Opportunity[] = [
  {
    id: "restaurants",
    sector: "Restaurants, Cafés & Cloud Kitchens",
    emoji: "🍽️",
    noWebsiteRate: "35–42%",
    tier: "Gold",
    intent: "High",
    avgBudget: "৳35,000–80,000",
    whyNeed:
      "Dig city for international workers and an audience that researches food online. 12-second mobile load times and no menus kill orders.",
    painPoint:
      "They rely only on Facebook and Foodpanda/Pathao. No menu, no reservation, no brand trust. Orders get lost in Messenger DMs.",
    websiteValue:
      "A single-page menu + gallery + bookings page converts searches into phone calls and orders. A bakery in Dhaka can earn ৳2.5 lakh/month from online orders alone.",
    idealOffer: "Digital menu + Google Maps + WhatsApp order button + photo gallery.",
    productPrice: "৳25,000–45,000 (landing) / ৳60,000+ (with ordering)",
  },
  {
    id: "clinics",
    sector: "Clinics, Dental & Diagnostic Centers",
    emoji: "🩺",
    noWebsiteRate: "20–30%",
    tier: "Gold",
    intent: "High",
    avgBudget: "৳50,000–150,000",
    whyNeed:
      "High-intent searches like 'dentist near me' or 'best cardiologist in Uttara'. Patients compare online before booking. 400–800 calls/month achievable.",
    painPoint:
      "No online presence means patients can't find doctors, timings, or prices. Doubt over contact info and hours drives patients to competitors.",
    websiteValue:
      "Doctor profiles, services, timings, appointment booking + SSL for trust are table stakes. Clinics that adopt this get 20–40 new patients/month.",
    idealOffer: "Doctor team pages + appointment form + Google reviews integration.",
    productPrice: "৳40,000–90,000",
  },
  {
    id: "contractors",
    sector: "Contractors, Builders & Interior/Renovation",
    emoji: "🏗️",
    noWebsiteRate: "45–56%",
    tier: "Gold",
    intent: "Medium",
    avgBudget: "৳30,000–70,000",
    whyNeed:
      "Highest no-website rates in any industry (50%+). Builders, plumbers, electricians win or lose projects based on trust and portfolio.",
    painPoint:
      "No portfolio means every sales call starts from zero. Clients can't verify past work, so they pick whoever looks most credible.",
    websiteValue:
      "A project portfolio with before/after photos is the #1 trust builder for construction. Turns cold chats into signed contracts.",
    idealOffer: "Portfolio gallery + services + free quote form.",
    productPrice: "৳25,000–55,000",
  },
  {
    id: "retail",
    sector: "Retail Boutiques, Fashion & Beauty",
    emoji: "👗",
    noWebsiteRate: "40–48%",
    tier: "Gold",
    intent: "Medium",
    avgBudget: "৳20,000–60,000",
    whyNeed:
      "F-commerce (Facebook boutique) owners build on rented land. No owned asset, no SEO, no structured catalog. 74% of purchases influenced by social.",
    painPoint:
      "Everything depends on Facebook algorithms and Messenger. Account bans or algorithm changes wipe out the business overnight.",
    websiteValue:
      "An owned catalog with bKash/Nagad checkout gives them independence and captures search traffic their Facebook page misses.",
    idealOffer: "Product catalog + mobile-friendly store + bKash/Nagad/Cash-on-Delivery.",
    productPrice: "৳50,000–120,000 (e-commerce)",
  },
  {
    id: "autorepair",
    sector: "Auto Repair & Services",
    emoji: "🔧",
    noWebsiteRate: "38–51%",
    tier: "Silver",
    intent: "Medium",
    avgBudget: "৳20,000–50,000",
    whyNeed: "People search 'car service near me' at the moment of need. 50-120 jobs/month achievable with a basic local presence.",
    painPoint: "No online presence means no trust for a high-consideration service. Nobody gives their car to a shop they can't verify.",
    websiteValue: "Services list, pricing transparency, testimonials, and call-to-action builds the trust needed to book.", 
    idealOffer: "Services + price guide + appointment booking + reviews.",
    productPrice: "৳20,000–40,000",
  },
  {
    id: "homeservices",
    sector: "Home Services (AC, Plumbing, Cleaning)",
    emoji: "🛠️",
    noWebsiteRate: "50–60%",
    tier: "Silver",
    intent: "Medium",
    avgBudget: "৳15,000–40,000",
    whyNeed: "The single highest no-website category. Emergency searches happen on mobile, and whoever replies fastest wins.",
    painPoint: "They wait for the phone to ring. No channel to capture emergency demand or build repeat customers.",
    websiteValue: "Click-to-call button, service area page, and 24/7 availability capture emergency jobs others lose.",
    idealOffer: "Landing page + click-to-call + WhatsApp + service-area SEO.",
    productPrice: "৳15,000–35,000",
  },
  {
    id: "salons",
    sector: "Salons, Barbershops & Beauty Parlors",
    emoji: "💇",
    noWebsiteRate: "38–44%",
    tier: "Silver",
    intent: "Medium",
    avgBudget: "৳15,000–40,000",
    whyNeed: "High-photo-content business perfect for a visual site. Customers increasingly check work before booking an appointment.",
    painPoint: "Before/after work and price lists are scattered across Instagram. Chaotic booking and no-shows.",
    websiteValue: "Service menu, price list, before/after gallery, and online booking reduces no-shows and fills calendars.",
    idealOffer: "Gallery + service menu + booking system.",
    productPrice: "৳15,000–35,000",
  },
  {
    id: "realestate",
    sector: "Real Estate Agencies",
    emoji: "🏠",
    noWebsiteRate: "15–22%",
    tier: "Silver",
    intent: "Low-Med",
    avgBudget: "৳40,000–150,000",
    whyNeed: "Lower percentage without sites, but most existing ones are dated. High ticket deals justify serious investment.",
    painPoint: "Outdated sites, no listing search, no filters. Buyers browse property portals instead.",
    websiteValue: "Filterable listings, virtual tours, and lead capture generate qualified buyer inquiries for high-commission deals.",
    idealOffer: "Listing platform + search/filter + lead forms.",
    productPrice: "৳60,000–150,000",
  },
  {
    id: "coaching",
    sector: "Tuition Centers & Coaching",
    emoji: "🎓",
    noWebsiteRate: "30-40%",
    tier: "Silver",
    intent: "Medium",
    avgBudget: "৳20,000–50,000",
    whyNeed: "Parents research coaching centers online before enrolling children. Results tables and faculty matter.",
    painPoint: "No place to showcase results, faculty, facilities, or admission forms. Word-of-mouth only.",
    websiteValue: "Results showcase, faculty, admission inquiry + enrollment form builds credibility parents trust.",
    idealOffer: "Admission form + results gallery + course list.",
    productPrice: "৳20,000–45,000",
  },
  {
    id: "lawfirms",
    sector: "Law Firms & Professional Services",
    emoji: "⚖️",
    noWebsiteRate: "15–25%",
    tier: "Bronze",
    intent: "Medium",
    avgBudget: "৳50,000–120,000",
    whyNeed: "Most have websites but weak Google Business Profile and poor localization. 25–50 leads/month upside.",
    painPoint: "English-only, weak local SEO. Reaches foreign clients but misses the local market.",
    websiteValue: "Trust-building bio pages, case results, and local-lead generation capture domestic clients.",
    idealOffer: "Attorney profiles + practice areas + case results + bilingual.",
    productPrice: "৳50,000–100,000",
  },
  {
    id: "healthfitness",
    sector: "Gyms & Fitness Studios",
    emoji: "💪",
    noWebsiteRate: "30–40%",
    tier: "Bronze",
    intent: "Low-Med",
    avgBudget: "৳20,000–50,000",
    whyNeed: "High visual appeal, competitive local market. Membership packages are the product.",
    painPoint: "Trainer bios, class schedules, and membership prices hidden behind Facebook links.",
    websiteValue: "Class schedules, trainer profiles, membership pricing, and booking builds a funnel.",
    idealOffer: "Schedule + membership pricing + trainer bios + trial booking.",
    productPrice: "৳20,000–45,000",
  },
  {
    id: "companies",
    sector: "SME Manufacturers & Local Brands",
    emoji: "🏭",
    noWebsiteRate: "~50%",
    tier: "Bronze",
    intent: "Low-Med",
    avgBudget: "৳40,000–100,000",
    whyNeed: "Suppliers and buyers vet vendors online. A credible company site wins B2B contracts and export inquiries.",
    painPoint: "Buyers can't verify product range, certifications, or capacity. Lose B2B tenders to competitors with sites.",
    websiteValue: "Company profile, products, certifications, and contact form attract serious B2B and export leads.",
    idealOffer: "Corporate profile + product showcase + certification pages + English/Bangla.",
    productPrice: "৳45,000–100,000",
  },
];

export const siteProblems: SiteProblem[] = [
  {
    title: "Horribly slow on mobile (12+ second load)",
    severity: "Critical",
    detect: "Too many unoptimized images, no caching, cheap shared hosting from another country.",
    pitch: "\"Your customers are on mobile (98%). If your site takes 12 seconds, they're gone. Google also ranks slow sites lower.\"",
    vibeFix: "Rebuild lightweight, set up caching, compress images, fast local hosting.",
  },
  {
    title: "Not mobile-responsive at all",
    severity: "Critical",
    detect: "Open it on your phone — text tiny, images overflow, buttons unclickable.",
    pitch: "\"Let's see what customers see on their phone... this is what 98% of your visitors experience.\"",
    vibeFix: "Mobile-first redesign — the single biggest win you can deliver.",
  },
  {
    title: "No SSL certificate ('Not Secure' warning)",
    severity: "Critical",
    detect: "Address bar shows 'Not Secure'. Check for no padlock before a form.",
    pitch: "\"When customers see 'Not Secure', they think you're a scam. You're losing sales on trust alone.\"",
    vibeFix: "Install free SSL (Let's Encrypt) — this alone builds trust and helps SEO.",
  },
  {
    title: "Broken contact form / no result on submit",
    severity: "High",
    detect: "Submit the form — does it actually send? Or just flash a success message?",
    pitch: "\"Your contact form is your cash register. Right now it's broken — customers write and you never get it.\"",
    vibeFix: "Wire the form to email/WhatsApp, add fallback, test it live in front of them.",
  },
  {
    title: "Repurposed free template (2008 look)",
    severity: "High",
    detect: "Outdated layout, table-based structure, generic stock photos, broken links.",
    pitch: "\"Your competition has a modern look. First impressions decide whether customers trust you.\"",
    vibeFix: "Clean modern redesign with their real photos on a familiar platform they can edit.",
  },
  {
    title: "Copied/duplicate product descriptions",
    severity: "High",
    detect: "Copy a paragraph and search it — matches other sites word for word.",
    pitch: "\"Google penalizes copied content. That's why you never rank. Let's write content Google rewards.\"",
    vibeFix: "Rewrite unique, local, Bangla+English content; add schema markup.",
  },
  {
    title: "Zero on-page SEO (not found on Google)",
    severity: "High",
    detect: "Search 'business type + area' — they never appear. Check missing meta titles/descriptions.",
    pitch: "\"When someone searches [service + your area], they can't find you. That's free customers you're missing.\"",
    vibeFix: "Meta titles, local keywords, Google Business Profile, schema markup.",
  },
  {
    title: "Sites built on rented platforms (Facebook only)",
    severity: "Medium",
    detect: "No domain at all — everything happens on a Facebook page.",
    pitch: "\"Facebook owns your reach. If they restrict your page, your business disappears. You need your own address on the internet.\"",
    vibeFix: "Deliver a simple owned website with their domain — independence + credibility.",
  },
  {
    title: "Broken links / 404 pages & mixed Bangla-English",
    severity: "Medium",
    detect: "Click through — find dead links, missing pages, gibberish or Google-translated text.",
    pitch: "\"Broken links look unprofessional and hurt your Google ranking. Customers notice.\"",
    vibeFix: "Audit & fix all links; provide clean, correct bilingual content.",
  },
  {
    title: "Unsecured/outdated admin (JS-based 'website' hidden behind a login)",
    severity: "Medium",
    detect: "The '/admin' or dashboard is basically the whole site — a version of the app the owner locks clients out of.",
    pitch: "\"Let's build a public site for your customers, not a locked dashboard. That's what converts.\"",
    vibeFix: "Build a public-facing single-page business site they fully own.",
  },
  {
    title: "Outdated hosting → security holes & malware",
    severity: "High",
    detect: "WordPress/old script with no updates. Search site on scanners to see warnings.",
    pitch: "\"Old, unpatched sites get hacked. A hacked site destroys customer trust and your Google ranking.\"",
    vibeFix: "Migrate to secure, updated, monitored hosting.",
  },
  {
    title: "Gig-scam 'cheap' sites that were never finished",
    severity: "High",
    detect: "They paid a freelancer ৳5,000 on a gig platform, got a half-finished template, and lost contact.",
    pitch: "\"Whoever 'built' this left you holding the bag. I'll own it end-to-end with support — not a disappearing gig seller.\"",
    vibeFix: "Complete, polish, and take over with a support commitment.",
  },
];

export const commonObjections: SalesTactic[] = [
  {
    title: "\"I'm too small to need a website.\"",
    detail: "Counter with numbers, not opinions: \"Your customers are on phones (98%). A bakery in Dhaka makes ৳2.5 lakh/month just from online orders. Even 10 extra orders/month covers this.\" Then show one competitor page.",
  },
  {
    title: "\"My Facebook page is enough.\"",
    detail: "Don't attack it — agree it's a great start, then reframe: \"Facebook is amazing, but you're renting your page. If they restrict it (happens a lot), your whole business disappears. A website is your own land on the internet.\"",
  },
  {
    title: "\"How much? 'Too expensive.'\"",
    detail: "Never quote first without anchoring value. Anchor: \"How much is one customer or one contract worth to you? One signed client usually pays for this.\" Offer a modest landing page tier (৳15–25k) as a low-friction entry, then upsell.",
  },
  {
    title: "\"I already have a website.\"",
    detail: "\"Great — may I show you what customers see on their phones?\" Walk through the 12-second load, Not Secure, broken form. \"It's honest feedback, no strings attached.\" Then offer a free audit.",
  },
  {
    title: "\"I can get it for ৳5,000 on Fiverr.\"",
    detail: "Acknowledge: \"Yes, you can. But you'll get a template, no ownership guidance, no support, and no one to pick up the phone. You'll likely pay twice to fix it — like most of the sites I've seen. My price includes support, hosting, and it actually works on mobile.\"",
  },
  {
    title: "\"I'll think about it / call me later.\"",
    detail: "Don't pressure. Leave a one-page printed/PDF proposal and a follow-up date. Bangladeshi decisions are slow and relationship-based — build trust over 2–4 touch points, never burn the bridge.",
  },
];

export const outreachChannel = [
  {
    step: 1,
    channel: "Google Maps + Business Profiles (cold inbound)",
    action:
      "Filter your target sector in a specific area. Identify businesses with NO website link, a broken link, or a bare profile. These are your hottest leads (they're already online but weak).",
  },
  {
    step: 2,
    channel: "Facebook Business Pages",
    action:
      "Businesses with active FB pages but no website are prime. Look at their posting activity — active owners respond to offers. Check for 'no website' in their About or only linking to Messenger.",
  },
  {
    step: 3,
    channel: "Bikroy.com & local classifieds",
    action:
      "SME sellers on Bikroy who advertise services/businesses but have no owned site. A listing exists → demand exists → offer them an owned asset.",
  },
  {
    step: 4,
    channel: "Business directories (GoLocalBD, bdtradeinfo)",
    action:
      "These aggregate businesses. Cross-reference to find which top-tier-looking businesses still have no real site. Gold sector combo: only FB/booking platforms.",
  },
  {
    step: 5,
    channel: "Walk-in/phone (highest close rate)",
    action:
      "In Bangladesh nothing beats face-to-face. Visit shops, clinics, restaurants: 'I help businesses get found on Google with a website. May I do a free check of your current online presence?' Leave a card with your portfolio.",
  },
];

export const pricingInfo = {
  intro:
    "Position yourself ABOVE the ৳5,000 Fiverr gig and BELOW the ৳50,000–150,000 agency sticker, but sell on reliability, ownership, and support — not just price.",
  tiers: [
    {
      name: "Lead Magnet",
      priceBdt: "৳15,000–25,000",
      workDays: "3–5 days",
      includes: "Single-page site · sections (services, about, contact) · mobile-first · SSL · WhatsApp/call button · Google Business Profile setup · basic SEO",
      best: "Entry point for cost-sensitive owners & Facebook-only businesses",
    },
    {
      name: "Business Standard",
      priceBdt: "৳30,000–60,000",
      workDays: "1–2 weeks",
      includes: "5–10 pages · CMS they can edit · gallery · enquiry/booking form · multilingual (Bangla+English) · local SEO · schema markup · hosting setup",
      best: "Sweet spot for restaurants, clinics, salons, contractors, coaching",
      highlight: true,
    },
    {
      name: "eCommerce / Custom",
      priceBdt: "৳70,000–150,000",
      workDays: "2–4 weeks",
      includes: "Product catalog · cart/checkout · bKash/Nagad/Cash-on-Delivery · inventory · admin panel · advanced SEO",
      best: "Boutiques, retailers, SMEs scaling online sales",
    },
  ],
  ongoing: {
    title: "Monthly care plans (your real revenue)",
    items: [
      "Hosting + domains fees (their cost, you can mark up)",
      "Security updates & backups",
      "Content/photo updates (they never do it themselves)",
      "Monthly SEO tweaks + a report they can read",
    ],
    price: "৳1,500–5,000/month per client",
  },
};

export const mindset = [
  {
    trait: "Relationship-first, trust-driven",
    meaning: "Deals happen AFTER trust is built — often over tea (cha/daru), in person. They buy from people, not companies.",
    salesAction: "Meet in person, ask about their business genuinely, follow up over time. Get a referral or introduction from a mutual contact — it opens the biggest doors.",
  },
  {
    trait: "Risk-averse, slow decisions",
    meaning: "They fear wasting money on something that 'won't work.' Decision-making is cautious and often needs family/partner approval and 2–4 meetings.",
    salesAction: "LOWER the risk: offer a small pilot tier, a money-back 'make it work' guarantee on a specific deliverable, and a clear fixed price. Give them something low-cost to say yes to first.",
  },
  {
    trait: "Power distance & hierarchy",
    meaning: "The owner/MD/CEO decides. Middle managers often can't say yes. Titles and seniority matter.",
    salesAction: "Always get to the decision-maker. Present to the owner directly. Be polite and deferential to senior people — challenge softly, never embarrass them in front of staff.",
  },
  {
    trait: "Direct but polite communication",
    meaning: "They prefer direct, specific communication, but avoid blunt 'no.' 'We'll try' often means a soft refusal. They can be competitive and negotiate hard.",
    salesAction: "Be concrete and specific (saved in written documentation), but keep tone respectful. Don't push too hard when they go quiet — back off, stay warm. Price the deal fully to leave room to give 'discounts' that feel like winning.",
  },
  {
    trait: "Short-term gain focus",
    meaning: "Despite valuing long-term relationships, they want quick, visible results and metrics now. They're skeptical of slow SEO timelines.",
    salesAction: "Lead with immediate wins: 'You'll look credible today,' 'customers can call directly today,' 'Google sees you today.' Sell the fast phone-call ROI, not long SEO promises.",
  },
  {
    trait: "Value & 'face' over price-shopping alone",
    meaning: "Even cost-conscious owners want status, credibility, and to be seen as legitimate and 'growing.' A website is a respect/status symbol.",
    salesAction: "Framing matters: 'No website' = falling behind competitors. 'Let's build your brand so you look established.' Show them neighbor competitors with sites winning customers.",
  },
  {
    trait: "Bargaining culture & gift-giving hospitality",
    meaning: "Negotiation and 'a little discount' (kom) are expected — it's part of the relationship. Hospitality and small gestures build goodwill.",
    salesAction: "Anchor price HIGH, leave negotiation room, and make any discount feel like a personal favor, not a routine drop. Never be aggressive; a small concession now wins a long-term client.",
  },
  {
    trait: "Mobile-first digital reality",
    meaning: "They live on phones (98% mobile internet), through Facebook, Messenger, WhatsApp, bKash/Nagad.",
    salesAction: "Communicate via WhatsApp/Messenger and voice calls. Accept deposits via bKash/Nagad. Show them the site on their own phone during the pitch — it's how they and their customers will experience it.",
  },
];

export const salesScript = [
  {
    scene: "Cold message / first call opener",
    text: "\"Assalamu Alaikum, [Name]. I'm [You]. I help businesses like [their type] in [area] get found on Google with their own website. I noticed your [shop/clinic/brand] has a great [Facebook page/reputation] — may I do a free 60-second check of how you appear online? No charge, just honest feedback.\"",
    why: "Lead with a compliment, not a pitch. 'Free check' is low-risk and starts the conversation — never ask to sell immediately.",
  },
  {
    scene: "The 60-second audit (in person, on their phone)",
    text: "\"Let's search [business type + area] on Google... see how your competitors appear? Now open your [current site/Facebook]. Here's what your customers experience on mobile: it's slow (wait), it says 'Not Secure' here, and [form/contact] doesn't work. That money in [specific loss] goes to competitors. I can fix this for you.\"",
    why: "Show, don't tell. Concrete proof beats claims. Tie every flaw to money lost — their language.",
  },
  {
    scene: "Closing the deal",
    text: "\"Here's what I'll deliver: [what + price + timeline]. I'll handle everything — hosting, domain, content in Bangla & English, and I'll be here to update it monthly. This is a fixed price, no surprises. Actually, since [small reason — e.g. you referred me / it's your first site], I'll add [one bonus] free. 50% to start via bKash, 50% when you're happy with it.\"",
    why: "Concrete deliverables, fixed price reduces risk, a personal concession builds goodwill, and bKash-upfront split is familiar and comfortable. Get them to say a small 'yes' before the big one.",
  },
  {
    scene: "Overcoming 'too expensive'",
    text: "\"I understand. Let me ask: what's one good customer worth to you? One new contract usually pays for this several times over. And I can start with a simple one-page site for [low tier] so you lose nothing. If it doesn't bring you value, tell me — I'll make it right. That's the kind of support Fiverr won't give.\"",
    why: "Anchors on value (one customer), offers a loss-free small step, and contrasts with gig-scam fear.",
  },
  {
    scene: "Follow-up after they go quiet",
    text: "\"Assalamu Alaikum, [Name]. Just following up on the website proposal I left with you. No rush at all — I've seen your business doing well and thought of you. I'm doing one more site in [area] this month, so if you'd like to grab a slot I can give you that small discount we discussed. Let me know — I'll wait for you.\"",
    why: "Calm, respectful, no pressure (they hate being pushed). The 'slot + discount' gives a soft deadline. Silence ≠ no — keep the relationship warm.",
  },
];
