export type ContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; text: string }
  | { type: "list"; items: string[] }
  | { type: "blockquote"; text: string }
  | { type: "checklist"; items: string[] }
  | { type: "roadmap"; title: string; steps: { step: string; title: string; desc: string }[] };

export interface TocItem {
  id: string;
  label: string;
}

export interface BlogArticle {
  id: string;
  author: string;
  tocItems: TocItem[];
  content: ContentBlock[];
}

export const blogArticles: BlogArticle[] = [
  {
    id: "first-100-customers-online-nigeria",
    author: "Creative Emman Limited",
    tocItems: [
      { id: "define-customer", label: "1. Define the customer you want" },
      { id: "build-offer", label: "2. Build an offer people understand" },
      { id: "trust-foundation", label: "3. Create a trustworthy foundation" },
      { id: "choose-channels", label: "4. Choose focused acquisition channels" },
      { id: "customer-system", label: "5. Build your 100-customer system" },
      { id: "sales-process", label: "6. Make buying simple" },
      { id: "measure", label: "7. Measure what creates revenue" },
      { id: "thirty-day-plan", label: "8. Follow a 30-day action plan" },
      { id: "mistakes", label: "9. Avoid common growth mistakes" },
    ],
    content: [
      {
        type: "paragraph",
        text: "Getting your first 100 customers is not mainly a follower-count problem. It is a <strong>clarity, trust and consistency problem</strong>. Nigerian buyers have more options than ever, but they are also more careful with their attention and money. The businesses that win are not always the ones with the largest advertising budgets; they are the ones that make the right offer to a clearly defined audience and follow up professionally.",
      },
      {
        type: "paragraph",
        text: "This guide gives founders, service providers and small business owners a practical system for moving from scattered online activity to a repeatable customer-acquisition process. You do not need every social platform, expensive software or a large team. You need a focused offer, credible proof, dependable follow-up and enough weekly activity to learn what works.",
      },
      {
        type: "blockquote",
        text: "Your first 100 customers usually come from focused conversations and consistent execution—not viral reach.",
      },

      { type: "heading", id: "define-customer", text: "1. Define the customer you actually want" },
      {
        type: "paragraph",
        text: "A business that speaks to everyone rarely feels relevant to anyone. Before creating content or paying for adverts, decide who has the strongest need for what you sell. Describe that person or organisation by the problem they face, the result they want, their ability to pay and where they already spend time online.",
      },
      {
        type: "list",
        items: [
          "<strong>For a fashion brand:</strong> working women in Lagos and Port Harcourt who need polished, ready-to-wear outfits delivered reliably.",
          "<strong>For a web designer:</strong> established service businesses losing enquiries because their current website looks outdated or performs poorly.",
          "<strong>For a training company:</strong> graduates and early-career professionals who need practical digital skills and portfolio evidence.",
          "<strong>For a food business:</strong> offices within a defined delivery radius that need dependable weekday lunch service.",
        ],
      },
      {
        type: "paragraph",
        text: "Start with one primary customer group. You can expand later, but early traction improves when your message is specific enough for the right buyer to immediately think, “This is for me.”",
      },

      { type: "heading", id: "build-offer", text: "2. Build an offer people can understand quickly" },
      {
        type: "paragraph",
        text: "Customers do not buy a list of features; they buy a useful outcome with an acceptable level of risk. Package your service or product so that a prospect can understand the result, price range, delivery time and next step without a long explanation.",
      },
      {
        type: "checklist",
        items: [
          "Name the specific problem your offer solves.",
          "State the result or transformation the customer should expect.",
          "Explain exactly what is included—and what is not.",
          "Use a clear starting price or pricing range where possible.",
          "Add a reasonable guarantee, revision policy or low-risk first step.",
          "Give the buyer one obvious action: order, book, call or request a quote.",
        ],
      },
      {
        type: "paragraph",
        text: "For example, “We create business websites” is broad. “We design and launch a five-page lead-generation website for Nigerian professional firms within three weeks” is easier to understand, compare and buy.",
      },

      { type: "heading", id: "trust-foundation", text: "3. Create a trustworthy digital foundation" },
      {
        type: "paragraph",
        text: "Before someone sends money or books a call, they usually check whether your business appears credible. Your digital presence does not need to be complicated, but it must be consistent. Use the same business name, visual identity, phone number and offer across every customer touchpoint.",
      },
      {
        type: "list",
        items: [
          "<strong>A conversion-focused website or landing page</strong> with your offer, proof, FAQs and a clear contact path.",
          "<strong>A complete Google Business Profile</strong> if you serve a location or local market.",
          "<strong>A professional WhatsApp Business profile</strong> with a catalogue, greeting, quick replies and accurate operating hours.",
          "<strong>One strong social profile</strong> containing useful content, proof of work and visible customer conversations.",
          "<strong>Simple proof</strong> such as real photographs, portfolio samples, testimonials, results, certifications or behind-the-scenes process.",
        ],
      },
      {
        type: "paragraph",
        text: "Trust is built through small signals. Fast replies, correct spelling, transparent terms, secure payment options and keeping promises are often more persuasive than elaborate marketing claims.",
      },

      { type: "heading", id: "choose-channels", text: "4. Choose two focused acquisition channels" },
      {
        type: "paragraph",
        text: "Trying to dominate Instagram, TikTok, Facebook, LinkedIn, X, YouTube and email at the same time usually produces weak execution everywhere. Select two channels based on where your buyers already search, ask questions or make recommendations.",
      },
      {
        type: "list",
        items: [
          "<strong>WhatsApp:</strong> best for warm referrals, follow-up, catalogues and direct conversations. Avoid unsolicited bulk messages; earn permission first.",
          "<strong>Instagram or TikTok:</strong> useful for visual products, transformations, demonstrations and founder-led storytelling.",
          "<strong>LinkedIn:</strong> effective for B2B services, corporate buyers, partnerships and professional authority.",
          "<strong>Google Search:</strong> valuable when customers actively search for your service and location with buying intent.",
          "<strong>Email:</strong> useful for nurturing leads, educating buyers and creating repeat sales without depending entirely on algorithms.",
          "<strong>Communities and partnerships:</strong> industry groups, alumni networks, associations and complementary businesses can accelerate early trust.",
        ],
      },
      {
        type: "paragraph",
        text: "Use one channel to create discovery and another to capture or follow up with interested people. For many Nigerian small businesses, that can mean Instagram for attention and WhatsApp for conversion, or LinkedIn for authority and email for nurturing.",
      },

      { type: "heading", id: "customer-system", text: "5. Build a system for reaching 100 customers" },
      {
        type: "paragraph",
        text: "Break the target into smaller, controllable numbers. One hundred customers can feel intimidating; five qualified conversations each working day feels operational. If 20 percent of qualified conversations become customers, you need roughly 500 meaningful conversations to produce 100 sales. Your actual rate may be higher or lower, but the principle is the same: work backwards from conversion.",
      },
      {
        type: "roadmap",
        title: "The first-100 customer engine",
        steps: [
          { step: "01", title: "Attract", desc: "Publish useful content, partner and ask for referrals" },
          { step: "02", title: "Capture", desc: "Move interest to a form, WhatsApp or booked call" },
          { step: "03", title: "Convert", desc: "Diagnose the need, recommend and follow up" },
          { step: "04", title: "Multiply", desc: "Deliver well, request proof and earn referrals" },
        ],
      },
      {
        type: "paragraph",
        text: "Create a simple weekly rhythm: publish three genuinely useful pieces of content, start 25 relevant conversations, follow up with every open lead, ask satisfied customers for referrals and review your numbers every Friday. Consistency makes the system compound.",
      },

      { type: "heading", id: "sales-process", text: "6. Make the buying process simple" },
      {
        type: "paragraph",
        text: "Many good businesses lose customers between “I am interested” and “How do I pay?” Reduce unnecessary friction. Respond quickly, ask focused questions and recommend the most suitable option instead of sending a confusing catalogue with no guidance.",
      },
      {
        type: "checklist",
        items: [
          "Acknowledge every enquiry and give a realistic response time.",
          "Ask what the customer needs, when they need it and what success looks like.",
          "Send a concise recommendation with scope, price, timeline and payment terms.",
          "Provide trusted payment options and issue a receipt or confirmation.",
          "Follow up professionally after 24–48 hours if the prospect has not decided.",
          "Record the lead and next action in a spreadsheet or simple CRM.",
        ],
      },
      {
        type: "paragraph",
        text: "Following up is not desperation when it is respectful and useful. A prospect may be busy, waiting for approval or comparing options. Good follow-up clarifies the next step and gives them a reason to respond.",
      },

      { type: "heading", id: "measure", text: "7. Measure the numbers that create revenue" },
      {
        type: "paragraph",
        text: "Do not judge marketing only by likes. Track the journey from attention to revenue. A small audience that generates qualified enquiries is more valuable than a large audience that never buys.",
      },
      {
        type: "list",
        items: [
          "<strong>Qualified leads:</strong> people who fit your target customer and have a relevant need.",
          "<strong>Conversion rate:</strong> the percentage of qualified leads who become paying customers.",
          "<strong>Customer acquisition cost:</strong> total marketing and sales spend divided by new customers.",
          "<strong>Average order value:</strong> the average revenue earned from each transaction.",
          "<strong>Repeat purchase rate:</strong> how many customers buy again within a defined period.",
          "<strong>Referral rate:</strong> the percentage of customers who introduce another prospect.",
        ],
      },
      {
        type: "paragraph",
        text: "Review these numbers weekly. Increase activity in channels that generate qualified conversations, improve weak steps in the buying journey and stop spending on activity that cannot be connected to a clear business goal.",
      },

      { type: "heading", id: "thirty-day-plan", text: "8. Follow this 30-day action plan" },
      {
        type: "roadmap",
        title: "Your first 30-day customer sprint",
        steps: [
          { step: "W1", title: "Clarify", desc: "Define customer, offer, message and conversion goal" },
          { step: "W2", title: "Build", desc: "Prepare landing page, proof and follow-up tools" },
          { step: "W3", title: "Launch", desc: "Publish, contact prospects and activate partners" },
          { step: "W4", title: "Improve", desc: "Review data, follow up and double down on traction" },
        ],
      },
      {
        type: "paragraph",
        text: "During the sprint, protect time for customer conversations every day. Content supports sales, but it should not become a comfortable substitute for speaking with real prospects. Listen for repeated objections, questions and desired outcomes; they will tell you how to improve your offer and messaging.",
      },

      { type: "heading", id: "mistakes", text: "9. Avoid the mistakes that slow early growth" },
      {
        type: "list",
        items: [
          "<strong>Buying followers:</strong> inflated numbers do not create trust, insight or predictable sales.",
          "<strong>Running adverts before fixing the offer:</strong> paid traffic amplifies confusion when the message and conversion path are weak.",
          "<strong>Copying competitors:</strong> learn from the market, but build a distinct reason for customers to choose you.",
          "<strong>Inconsistent follow-up:</strong> many leads need more than one interaction before making a decision.",
          "<strong>Discounting too quickly:</strong> strengthen value, proof and packaging before training customers to wait for lower prices.",
          "<strong>Ignoring existing customers:</strong> repeat purchases and referrals are usually more efficient than constantly finding strangers.",
        ],
      },
      {
        type: "blockquote",
        text: "The goal is not simply to reach 100 transactions. It is to build a system that can earn customer 101 without starting from zero.",
      },
      {
        type: "paragraph",
        text: "Your first customers are a source of revenue, but they are also your best source of insight. Serve them well, document what convinced them, study what nearly stopped them from buying and turn those lessons into a stronger offer. That is how early traction becomes sustainable growth.",
      },
    ],
  },
];

export const getArticleById = (id: string): BlogArticle | undefined =>
  blogArticles.find((article) => article.id === id);
