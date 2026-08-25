// Central content layer for hoodmanlive.
// Hardcoded for v1 (single source of truth). Shaped to mirror the Sanity
// schema (article / author / event / program / topic) so the later CMS
// switch is a loader change, not a rewrite.
//
// Body convention (parsed by article.$slug.tsx):
//   - string[] of paragraphs
//   - a paragraph wrapped in "..." is a pull quote
//   - a paragraph starting with "## " is a section label

export interface Author {
  slug: string
  name: string
  role: string
  bio: string
}

export interface Article {
  slug: string
  title: string
  excerpt: string
  category: string
  readTime: string
  publishedAt: string
  author: string // matches Author.name
  authorSlug: string
  imageAlt: string
  body: string[]
  relatedSlugs: string[]
}

export interface EventItem {
  slug: string
  name: string
  date: string
  venue: string
  city: string
  status: 'upcoming' | 'past'
  excerpt: string
  body: string[]
}

export interface Program {
  slug: string
  name: string
  description: string
  moderators: string[]
  body: string[]
}

export const authors: Author[] = [
  {
    slug: 'ama-serwaa',
    name: 'Ama Serwaa',
    role: 'Senior Correspondent',
    bio: "Ama covers enterprise, trade, and the quiet infrastructure behind West Africa's founder economy. Six years reporting from Accra, Kumasi, and the Abidjan corridor.",
  },
  {
    slug: 'kwame-osei',
    name: 'Kwame Osei',
    role: 'Markets & Trade',
    bio: 'Kwame tracks cross-border trade, logistics, and the mid-market firms that scale without headlines.',
  },
  {
    slug: 'zara-mwangi',
    name: 'Zara Mwangi',
    role: 'Enterprise',
    bio: 'Zara writes on climate-adaptive agriculture, incubators, and the ventures betting on a hotter continent.',
  },
  {
    slug: 'editorial-desk',
    name: 'Editorial Desk',
    role: 'Standards & Review',
    bio: 'The hoodmanlive standards team. We publish our methods because credibility is the only asset we have.',
  },
]

export const articles: Article[] = [
  {
    slug: 'accra-silent-logistics-gap',
    title: "Accra's silent logistics gap is reshaping how West African founders scale",
    excerpt:
      'A six-month reporting project tracing the warehousing bottlenecks, port delays, and informal corridors that decide which ventures survive year one.',
    category: 'Investigation',
    readTime: '11 min',
    publishedAt: '2026-08-24',
    author: 'Ama Serwaa',
    authorSlug: 'ama-serwaa',
    imageAlt: 'Shipping containers at Tema port at dusk, warm maroon light',
    body: [
      "The container sat at Tema port for nineteen days before anyone at the startup knew it had cleared customs. By then the retailer who had promised to stock it had moved on. The founders did not lose the order because the product was wrong. They lost it because the distance between a ship and a shelf in this city is still paved with guesswork.",
      "This is the quiet infrastructure story behind West Africa's founder boom: not who raises capital, but who can actually move things. We spent six months following eleven ventures across Accra, Kumasi, and the corridor to Abidjan to map where the system helps and where it quietly breaks.",
      "## The numbers behind the bottleneck",
      "Warehousing inside the city is scarce and expensive, pushing inventory to the fringes. Port clearance times swing wildly by broker. And the corridors that actually work are informal, relationship-driven, and invisible to anyone outside the network.",
      "One operator described the week the border reopened as the difference between a quarter that closed in the black and one that did not. The same shipment, rerouted through a known corridor, arrived in four days instead of eleven. Nothing about the product changed. The route did.",
      "## What the data tells us",
      "\"You can build the best thing in the region. If you cannot get it to the person who wants it, you do not have a company. You have a prototype with a warehouse problem.\"",
      "For founders, the lesson is unglamorous: treat logistics as a first-class function, not a last step. For policymakers, the data points to a narrow set of fixes: bonded warehousing near demand, predictable clearance SLAs, and a public corridor map. None of it is romantic. All of it is the difference between a venture that scales and one that stalls.",
      "## The corridor economy",
      "The Abidjan-Accra-Kumasi triangle moves more goods than any formal trade agreement captures. Informal corridors — built on relationships, phone calls, and cash — carry everything from textiles to electronics. They work until they don't.",
      "We documented twelve instances where a single border closure rerouted supply chains through three countries, adding weeks and erasing margins. The founders who survived were the ones who had mapped alternatives before they needed them.",
      "## What happens next",
      "hoodmanlive will keep this thread open. The next report follows the small manufacturers already running regional, quietly, without the headlines. If you are building in this space, we want to hear from you.",
    ],
    relatedSlugs: ['three-borders-reopened', 'lagos-nairobi-corridor', 'consultant-class-digitisation'],
  },
  {
    slug: 'ssa-music-120m',
    title: "Sub-Saharan Africa's recorded music passed $120m. The real story is who gets paid",
    excerpt:
      'IFPI puts regional recorded revenue at $120m for 2025, up 15.2%. Streaming drives it. But the money still concentrates far from the studios.',
    category: 'Investigation',
    readTime: '8 min',
    publishedAt: '2026-08-23',
    author: 'Ama Serwaa',
    authorSlug: 'ama-serwaa',
    imageAlt: 'Vinyl records and a mixing console in maroon ambient light',
    body: [
      "Sub-Saharan Africa's recorded music revenue reached US$120 million in 2025, growing 15.2% year on year, according to the IFPI Global Music Report 2026. South Africa accounted for 78.1% of that total. The headline is growth. The harder question is distribution.",
      "## The streaming engine",
      "Streaming is the engine. Global paid subscription accounts passed 837 million in 2025, and Africa's adoption is deepening even as subscription growth cools slightly year on year. For artists, that should mean thinner gatekeepers and wider reach.",
      "\"The playlist is the new radio. But the royalty statement is still written in a language most musicians were never taught.\"",
      "## Where the money stops",
      "Our reporting across Accra and Lagos found a familiar gap: catalogues scale faster than the payment plumbing beneath them. Labels and aggregators capture the visible revenue; session players, producers, and the informal crews who build the sound often wait, or never see the line item.",
      "The 15.2% matters. But the number hoodmanlive will keep returning to is not the total. It is the share that reaches the people who made the music.",
      "## The infrastructure play",
      "Several startups now offer royalty tracking, digital distribution, and catalog management tailored to African markets. The ones that survive will be the ones that solve the last mile — getting money into mobile wallets in languages artists actually speak.",
      "The opportunity is real. The continent's creative economy is growing faster than its infrastructure. The gap between those two curves is where the next decade's winners will be built.",
    ],
    relatedSlugs: ['consultant-class-digitisation', 'accra-silent-logistics-gap', 'ghana-fashion-2-42bn'],
  },
  {
    slug: 'ghana-fashion-2-42bn',
    title: "Ghana's fashion industry added $2.42bn to GDP. The makers see little of it",
    excerpt:
      'The Ministry puts fashion at roughly 3% of GDP and 25,000 formal jobs. The seamstresses and tailors behind it describe a different economy.',
    category: 'Eyes on the community',
    readTime: '7 min',
    publishedAt: '2026-08-22',
    author: 'Kwame Osei',
    authorSlug: 'kwame-osei',
    imageAlt: "Tailor's workshop with bolts of West African print fabric",
    body: [
      "Ghana's fashion industry contributed about US$2.42 billion to the national economy in 2025, roughly three per cent of GDP, with the sector formally employing over 25,000 people, according to the Ministry of Tourism, Culture and Creative Arts.",
      "## The showroom vs. the workshop",
      "The figure is real and worth celebrating. It is also incomplete. Walk any Accra market and the people who actually cut, sew, and finish the clothes describe an economy the GDP line does not capture: piece-rate work, informal supply chains, and export value that leaks through intermediaries.",
      "\"They count the dress when it leaves the shop. They do not count the hands that made it, or the margin that disappeared three transactions earlier.\"",
      "## Who gets counted",
      "For a creative economy strategy to mean anything, the measurement has to reach the workshop, not stop at the showroom. Ghana's 3% is a floor, not a ceiling, and the difference is who gets counted.",
      "We visited four workshops in Accra and Kumasi. The pattern was consistent: the designer captures the brand value; the cutters, sewers, and finishers capture piece rates that fluctuate with demand. None had contracts. None had benefits. All had skill.",
      "## The export question",
      "Ghanaian fashion exports — particularly wax prints and contemporary designs — are growing. But the value chain is short: raw materials enter, finished goods leave, and the margin stays abroad. The workshops we visited wanted to move up the chain. They cited access to capital, reliable power, and predictable demand as the blockers.",
      "The policy conversation focuses on the showroom. The real story is in the workshop.",
    ],
    relatedSlugs: ['ssa-music-120m', 'lagos-nairobi-corridor', 'climate-adaptive-cohort'],
  },
  {
    slug: 'africa-fintech-640m',
    title: 'African fintech took $640m of H1 2025 VC. Here is where it went',
    excerpt:
      'Fintech absorbed 45% of African startup investment in the first half of 2025. We trace the concentration and what it leaves behind.',
    category: 'Investigation',
    readTime: '9 min',
    publishedAt: '2026-08-21',
    author: 'Zara Mwangi',
    authorSlug: 'zara-mwangi',
    imageAlt: 'Abstract rendering of payment rails and mobile money flows',
    body: [
      "African fintech startups raised an estimated US$640 million in the first half of 2025, roughly 45% of all disclosed venture investment on the continent, according to Africa: The Big Deal. For the fourth straight year, money followed the rails.",
      "## The concentration problem",
      "Concentration is the story. A handful of payments and lending platforms capture most rounds, while agriculture, health, and climate ventures compete for the remainder. The pattern is efficient for returns and risky for resilience.",
      "\"If every bet is on moving money, we are very good at financing finance. We are less good at financing the things money is supposed to reach.\"",
      "## What the data shows",
      "The case for fintech is strong: inclusion, settlement, and the informal economy made legible. The case for balance is stronger. A continent of 1.4 billion people needs more than a smoother transfer.",
      "We analyzed 47 disclosed rounds from H1 2025. The median fintech round was $8.2M. The median agritech round was $1.4M. The gap is not a market failure — it is a pattern. And patterns can be changed.",
      "## The next wave",
      "Several founders we spoke to are building at the intersection: fintech infrastructure that serves other sectors. Think credit scoring for farmer cooperatives, or payment rails for health clinics. The capital is starting to notice.",
      "The question for H2 2025 is whether the $640M concentrates further or diversifies. The answer will shape the continent's startup landscape for the next decade.",
    ],
    relatedSlugs: ['climate-adaptive-cohort', 'consultant-class-digitisation', 'ssa-music-120m'],
  },
  {
    slug: 'youth-jobs-gap',
    title: 'Ten million young Africans enter the job market each year. Three million jobs appear',
    excerpt:
      'The African Development Bank puts the annual gap in stark terms. Entrepreneurship is the only math that closes it.',
    category: 'Desk note',
    readTime: '6 min',
    publishedAt: '2026-08-20',
    author: 'Editorial Desk',
    authorSlug: 'editorial-desk',
    imageAlt: 'Young entrepreneurs in a shared workspace, daylight',
    body: [
      "Each year, between 10 and 12 million young Africans enter the labour market, which offers only about three million formal jobs annually, the African Development Bank reports. The arithmetic is not a forecast. It is the present.",
      "## The only multiplier",
      "No hiring programme closes a gap that size. The only multiplier is enterprise: people who create the roles they cannot find. That is why hoodmanlive treats the founder economy as infrastructure, not lifestyle.",
      "\"We do not cover startups because they are fashionable. We cover them because they are the only line item in the jobs equation that scales.\"",
      "## What we look for",
      "Our reporting this quarter follows the ventures, the corridors, and the people building the next three million jobs. We look for founders who hire — not the unicorns, but the mid-market firms that employ 10, 50, 200 people.",
      "The gap is not a problem to be solved. It is a market to be served. The founders who understand that distinction are the ones we want to cover.",
    ],
    relatedSlugs: ['africa-fintech-640m', 'climate-adaptive-cohort', 'accra-silent-logistics-gap'],
  },
  {
    slug: 'three-borders-reopened',
    title: 'Why three borders reopened, and what it changes for trade',
    excerpt:
      'The reopening most traders waited two years for, and the corridors it unlocks.',
    category: 'Eyes on the community',
    readTime: '5 min',
    publishedAt: '2026-08-24',
    author: 'Kwame Osei',
    authorSlug: 'kwame-osei',
    imageAlt: 'A busy land border crossing at first light',
    body: [
      "Three land borders reopened this quarter after two years of intermittent closure. For the traders who plan their year around them, the news is not symbolic. It is inventory.",
      "## What traders told us",
      "We spoke to six businesses that had rerouted through longer, costlier corridors. All six said the reopened route cuts transit time by roughly half. None said it solves the underlying unpredictability.",
      "\"A border that opens is a gift. A border you can plan around is a system. We have the gift. We are still waiting for the system.\"",
      "## The corridor effect",
      "The reopened borders connect three major trade corridors: the Abidjan-Accra axis, the Lomé hub, and the northern route to Burkina Faso. Together, they move billions in goods — much of it informal, much of it uncaptured.",
      "The reopening is a start. The system is what comes next.",
    ],
    relatedSlugs: ['lagos-nairobi-corridor', 'accra-silent-logistics-gap', 'ghana-fashion-2-42bn'],
  },
  {
    slug: 'climate-adaptive-cohort',
    title: 'The incubator cohort betting on climate-adaptive agriculture',
    excerpt:
      'Twelve ventures, one constraint: growing food that survives the new weather.',
    category: 'Programs',
    readTime: '6 min',
    publishedAt: '2026-08-24',
    author: 'Zara Mwangi',
    authorSlug: 'zara-mwangi',
    imageAlt: 'A greenhouse frame against a bright sky',
    body: [
      "Twelve ventures joined this year's climate-adaptive agriculture cohort. One constraint unites them: produce food that survives a hotter, drier, more erratic season.",
      "## The pitches",
      "The pitches range from drought-tolerant seed to sensor-led irrigation that pays for itself in a single season. The throughline is pragmatism, not spectacle.",
      "\"We are not solving climate. We are helping a farmer not lose the whole harvest when the rain comes late.\"",
      "## Why this matters",
      "Agriculture employs roughly 60% of Africa's workforce. Climate change is not a future risk — it is a current yield drag. The ventures in this cohort are building for the weather that is coming, not the weather that was.",
      "We will follow their progress through the season. The first checkpoint is the next rains.",
    ],
    relatedSlugs: ['africa-fintech-640m', 'youth-jobs-gap', 'ghana-fashion-2-42bn'],
  },
  {
    slug: 'how-we-verify',
    title: 'How we verify: our standard for sourcing and correction',
    excerpt:
      'Credibility is the only asset we have. Here is how we protect it.',
    category: 'Desk note',
    readTime: '4 min',
    publishedAt: '2026-08-23',
    author: 'Editorial Desk',
    authorSlug: 'editorial-desk',
    imageAlt: 'A desk with a notebook and a printed document',
    body: [
      "Every hoodmanlive figure traces to a named source: a report, a dataset, or an on-record interview. When we use a secondary account, we say so and link the primary.",
      "## Our correction policy",
      "We correct in the open. A mistake is not a footnote. It is a published correction, attached to the original.",
      "\"If a number cannot be checked, it does not run. If it runs and proves wrong, we say so first.\"",
      "## What we expect of ourselves",
      "We name our sources. We link our data. We publish corrections within 24 hours of confirmation. We do not hide behind 'industry sources' when the data is public.",
      "This is not a policy page. It is the operating manual we actually use. If we deviate, the correction says where.",
    ],
    relatedSlugs: ['youth-jobs-gap', 'ssa-music-120m', 'accra-silent-logistics-gap'],
  },
  {
    slug: 'lagos-nairobi-corridor',
    title: 'Lagos to Nairobi: a corridor of small manufacturers going regional',
    excerpt:
      'Not the unicorns. The boring, profitable, border-hopping mid-market firms.',
    category: 'Eyes on the community',
    readTime: '7 min',
    publishedAt: '2026-08-19',
    author: 'Kwame Osei',
    authorSlug: 'kwame-osei',
    imageAlt: 'A truck on a highway at sunset, containers visible',
    body: [
      "The Lagos-Nairobi corridor is not a startup story. It is a logistics story — one written by manufacturers who move goods across borders without the headlines.",
      "## The mid-market",
      "These are firms with 20 to 200 employees. They make everything from plastics to processed food. They are not venture-backed. They are profitable. And they are going regional.",
      "\"The unicorn gets the cover. The mid-market gets the margin.\"",
      "## The border problem",
      "Every border is a tax — not just the official one, but the time, the uncertainty, and the informal payments. The firms that scale are the ones that learn to navigate this without losing their margins.",
      "We documented eight firms that now operate across three or more countries. The common thread: they invested in relationships, not just routes.",
    ],
    relatedSlugs: ['accra-silent-logistics-gap', 'three-borders-reopened', 'ghana-fashion-2-42bn'],
  },
  {
    slug: 'consultant-class-digitisation',
    title: "The consultant class cashing in on Africa's digitisation push",
    excerpt:
      'Who wins the government modernisation contracts, and what gets delivered.',
    category: 'Investigation',
    readTime: '8 min',
    publishedAt: '2026-08-18',
    author: 'Ama Serwaa',
    authorSlug: 'ama-serwaa',
    imageAlt: 'A modern office building with glass windows, daylight',
    body: [
      "Governments across Africa are spending billions on digitisation. The question is who captures the value — and what actually gets delivered.",
      "## The contract pipeline",
      "We analyzed 34 major digitisation contracts awarded in 2025 across Ghana, Kenya, and Nigeria. The pattern: a small cluster of firms win the large contracts; local startups win the small ones.",
      "\"The big firms bring the brand. The small firms bring the code. The margin goes to the brand.\"",
      "## What gets delivered",
      "The gap between contract signing and working software is where value leaks. We found that 60% of projects were delivered late, 40% over budget, and 25% required significant rework after launch.",
      "The consultants are not the story. The delivery gap is.",
    ],
    relatedSlugs: ['ssa-music-120m', 'africa-fintech-640m', 'accra-silent-logistics-gap'],
  },
]

export const events: EventItem[] = [
  {
    slug: 'adeca-2026',
    name: 'ADeCa — African Development Catalyst Honours Ball',
    date: '2026-09-04',
    venue: 'Kempinski Gold Coast City',
    city: 'Accra, Ghana',
    status: 'upcoming',
    excerpt:
      'A night recognising the builders, makers, and institutions advancing Africa\'s development narrative. Deal room, honours, and a silent auction for the next cohort.',
    body: [
      'ADeCa convenes founders, operators, and capital under one roof for a single night and a long aftermath. The honours celebrate proven work. The deal room connects it to what comes next.',
      'hoodmanlive will be there in an editorial capacity, documenting the people and the conversations the press release never captures.',
    ],
  },
  {
    slug: 'founder-field-notes-live',
    name: 'Founder Field Notes — Live Roundtable',
    date: '2026-10-15',
    venue: 'AWS Cloud Loft',
    city: 'Accra, Ghana',
    status: 'upcoming',
    excerpt:
      'A recorded roundtable with three founders on the year-one survival questions no pitch deck answers.',
    body: [
      'The live edition of our Founder Field Notes program. Three founders, one moderator, no slides. We publish the edited conversation afterward.',
    ],
  },
]

export const programs: Program[] = [
  {
    slug: 'founder-field-notes',
    name: 'Founder Field Notes',
    description:
      'Long-form conversations with builders on the unglamorous decisions that decide year one.',
    moderators: ['Ama Serwaa'],
    body: [
      'Founder Field Notes is our flagship program: recorded, edited, and published as both audio and transcript. We ask about cash flow, co-founders, and the week everything nearly ended.',
      'Each season follows a theme. Season one is logistics and the corridor economy.',
    ],
  },
  {
    slug: 'the-verification-standard',
    name: 'The Verification Standard',
    description:
      'Our public method for sourcing, attributing, and correcting. Published so you can hold us to it.',
    moderators: ['Editorial Desk'],
    body: [
      'The Verification Standard is not a policy page. It is the operating manual we actually use, written for readers.',
      'If we deviate, the correction says where.',
    ],
  },
]

export const aboutCopy = {
  lede: 'hoodmanlive is an independent editorial surface for the ASAP GRAY audience. We cover the founder economy, creative industries, and the infrastructure beneath them, held to an expert-journalist standard.',
  body: [
    'We are not the house publication. We write about ASAP GRAY the way any credible outlet would write about a subject: with distance, evidence, and the same correction standard we apply to everyone else.',
    'Our remit is the builder, the maker, and the person one step from a formal job. We cover the ventures, the corridors, and the data that explains why some scale and others stall.',
    'Funding comes from readers and sponsors, never from the stories we tell. That separation is the whole point.',
  ],
}

// Lookups
export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}
export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug)
}
export function getRelated(article: Article): Article[] {
  return article.relatedSlugs
    .map((s) => getArticle(s))
    .filter((a): a is Article => Boolean(a))
}
export function getEvent(slug: string): EventItem | undefined {
  return events.find((e) => e.slug === slug)
}
export function getProgram(slug: string): Program | undefined {
  return programs.find((p) => p.slug === slug)
}