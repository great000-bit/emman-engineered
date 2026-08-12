import ServiceWebsiteImage from "@/assets/ServiceWebsite.jpg"
import ServiceGraphicsImage from "@/assets/ServiceGraphics.jpg"
import ServiceGraphicsFaq from "@/assets/ServiceGraphicsFaq.jpg"
import ServiceMotionGraphicsImage from "@/assets/ServiceMotionGraphics.mp4"
import ServiceVideoGraphy from "@/assets/ServiceVideoGraphy.jpg"
import ServiceVideoGraphyFaq from "@/assets/ServiceVideoFaq.jpg"
import ServiceSocialImage from "@/assets/ServiceSocials.jpg"
import ServiceSocialFaq from "@/assets/ServiceSocialFaq.jpg"
export interface SubService {
  title: string;
  description: string;
  features: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface PricingPlan {
  name: string;
  timeframe: string;
  idealFor: string;
  price: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  slug: string;
  title: string;
  label: string;
  heroTitle: string;
  heroDescription: string;
  problemTitle: string;
  problemDescription: string;
  problemImage: string;
  servicesTitle: string;
  subServices: SubService[];
  processTitle: string;
  processSteps: ProcessStep[];
  toolsTitle: string;
  tools: string[];
  pricingTitle: string;
  pricingTable: PricingPlan[];
  faqTitle: string;
  faqImage: string;
  faqs: FAQItem[];
  ctaTitle: string;
  ctaSubtitle: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  "website-development": {
    slug: "website-development",
    title: "Website Development",
    label: "Web Engineering",
    heroTitle: "Web development company in Nigeria that builds websites that *actually work*",
    heroDescription: "High-performance, secure, and SEO-optimized web systems engineered to turn search traffic into loyal customers and drive business growth.",
    problemTitle: "Why most Nigerian business websites fail to generate leads",
    problemDescription: "Many websites are slow, outdated, and fail to engage visitors. They function as static online brochures rather than active sales engines. At Creative Emman, we engineer custom web applications that load in under 2 seconds, are fully mobile-optimized, and leverage smart user journeys to guide visitors towards conversion.",
    problemImage: ServiceWebsiteImage,
    servicesTitle: "Web engineering services tailored for your business",
    subServices: [
      {
        title: "Custom Web Applications",
        description: "Bespoke SaaS platforms, internal tools, and client portals built to match your unique operations.",
        features: ["React & Next.js frameworks", "Scalable backend architecture", "Secure database integration"]
      },
      {
        title: "E-commerce Solutions",
        description: "Full-scale online stores integrated with local and international payment gateways like Paystack and Stripe.",
        features: ["Seamless shopping carts", "Inventory management systems", "Automated invoice generation"]
      },
      {
        title: "API Development & Integration",
        description: "Connecting your digital platform with external APIs, CRM platforms, and payment processors.",
        features: ["RESTful API design", "Third-party synchronisation", "Data security protocols"]
      },
      {
        title: "Performance & SEO Audits",
        description: "Optimising load speeds, fixing code structure, and updating technical SEO parameters.",
        features: ["Core Web Vitals compliance", "Image compressions & lazy-loading", "Schema markup implementation"]
      }
    ],
    processTitle: "How we build your website: step by step",
    processSteps: [
      {
        number: "01",
        title: "Discovery & Architecture",
        description: "We map your user flow, site architecture, and integrations to align with your business goals."
      },
      {
        number: "02",
        title: "Wireframing & Interface Design",
        description: "Our designers draft visual layouts to guarantee an intuitive mobile and desktop experience."
      },
      {
        number: "03",
        title: "Clean Frontend & Backend Coding",
        description: "Our engineers write semantic, clean code focused on speed, security, and scalability."
      },
      {
        number: "04",
        title: "Rigorous Quality Assurance",
        description: "We test code across multiple browsers, screen sizes, and operating systems to prevent bugs."
      },
      {
        number: "05",
        title: "Deployment & Optimization",
        description: "We set up fast cloud hosting, link domain servers, and verify initial Google indexing parameters."
      }
    ],
    toolsTitle: "Platforms and technologies we build with",
    tools: ["React", "Next.js", "WordPress", "WooCommerce", "Tailwind CSS", "Node.js", "Payload CMS"],
    pricingTitle: "Web development pricing in Nigeria — what to expect",
    pricingTable: [
      { name: "Starter Landing Page", timeframe: "1-2 Weeks", idealFor: "Small Businesses & Startups", price: "₦150,000" },
      { name: "Business Pro Suite", timeframe: "3-4 Weeks", idealFor: "Growing SMEs & Corporates", price: "₦350,000" },
      { name: "Full E-commerce Store", timeframe: "5-6 Weeks", idealFor: "Brands selling products online", price: "₦550,000" },
      { name: "Custom Web Application", timeframe: "8+ Weeks", idealFor: "SaaS startups & Complex systems", price: "Custom Quote" }
    ],
    faqTitle: "Web development in Nigeria: common questions",
    faqImage: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
    faqs: [
      {
        question: "Will my website look good on mobile phones?",
        answer: "Absolutely. All our websites are built using a mobile-first approach, ensuring seamless rendering on smartphones, tablets, and desktops."
      },
      {
        question: "Can I update the content on the website myself?",
        answer: "Yes, we integrate user-friendly Content Management Systems (CMS) like WordPress or Payload CMS, enabling you to add text, images, and posts without writing any code."
      },
      {
        question: "Do you offer web maintenance and support?",
        answer: "Yes, we offer monthly website care plans covering hosting administration, regular security backups, plugin updates, and feature additions."
      }
    ],
    ctaTitle: "Let's build your next website",
    ctaSubtitle: "Pick a lane or share your project brief — we will build a modern, high-converting digital home for your brand."
  },

  "ui-ux-design": {
    slug: "ui-ux-design",
    title: "UI/UX Design",
    label: "Product Interface Design",
    heroTitle: "UI/UX design studio in Nigeria that crafts *intuitive* digital interfaces",
    heroDescription: "Research-driven product design that bridges the gap between client expectations and flawless customer interaction to boost software adoption.",
    problemTitle: "Why good-looking designs still lose paying customers",
    problemDescription: "A pretty interface means nothing if customers get confused trying to navigate it. Poor visual hierarchy, complicated navigation paths, and confusing checkout options frustrate users. We research user behavior to craft seamless wireframes and interactive prototypes that make using your product effortless.",
    problemImage: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=800&q=80",
    servicesTitle: "UX design capabilities built for conversions",
    subServices: [
      {
        title: "User Research & Analysis",
        description: "Conducting user interviews, mapping user personas, and executing competitor benchmarking audits.",
        features: ["User persona mapping", "Competitor matrix auditing", "Information architecture drafting"]
      },
      {
        title: "Wireframing & Prototyping",
        description: "Creating low-fidelity blueprints followed by interactive, high-fidelity clickable mockups in Figma.",
        features: ["Interactive user flows", "Rapid layout prototyping", "Figma design source files"]
      },
      {
        title: "Design Systems",
        description: "Building consistent, reusable component libraries including typography scale, color tokens, and inputs.",
        features: ["Component-based style guides", "Developer handoff documentation", "Tokenised styling assets"]
      },
      {
        title: "Usability Audits & Testing",
        description: "Evaluating your existing product, identifying navigation friction points, and proposing UX fixes.",
        features: ["Friction-point analysis", "A/B UI pattern testing", "Accessibility compliance verification"]
      }
    ],
    processTitle: "How we design your product: step by step",
    processSteps: [
      {
        number: "01",
        title: "Research & UX Strategy",
        description: "We analyze target user habits, project goals, and competitor layouts to align parameters."
      },
      {
        number: "02",
        title: "Information Architecture",
        description: "We map out navigation hierarchies and site structures to ensure paths make logical sense."
      },
      {
        number: "03",
        title: "Wireframing",
        description: "We create skeletal page layouts to decide where key information and CTA buttons will sit."
      },
      {
        number: "04",
        title: "High-Fidelity UI Design",
        description: "We add colors, custom imagery, typography, and styling elements to bring layouts to life."
      },
      {
        number: "05",
        title: "Interactive Prototyping & Handoff",
        description: "We connect layouts in Figma to simulate a live application, then export assets for developers."
      }
    ],
    toolsTitle: "Design software and platforms we use",
    tools: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator", "Miro"],
    pricingTitle: "UI/UX design pricing in Nigeria — what to expect",
    pricingTable: [
      { name: "Landing Page UI Kit", timeframe: "1-2 Weeks", idealFor: "Single-page visual products", price: "₦120,000" },
      { name: "MVP Mobile / Web App", timeframe: "3-4 Weeks", idealFor: "Startups validating new products", price: "₦280,000" },
      { name: "Full Scale Web Platform", timeframe: "5-6 Weeks", idealFor: "Enterprise portals & SaaS tools", price: "₦480,000" },
      { name: "Design System Retainer", timeframe: "Ongoing", idealFor: "Teams requiring scaling component libraries", price: "Custom Quote" }
    ],
    faqTitle: "Product design in Nigeria: common questions",
    faqImage: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80",
    faqs: [
      {
        question: "Do you write code for the designs?",
        answer: "Our primary output for UI/UX is design source files in Figma. However, we coordinate closely with developers during handoff, and can provide full frontend development if contracted."
      },
      {
        question: "What is a Design System and do I need one?",
        answer: "A design system is a library of reusable UI components and styles. If you plan to scale your digital product over time, a design system ensures visual consistency and saves developers weeks of coding time."
      },
      {
        question: "How many revisions are included in design iterations?",
        answer: "We include 3 rounds of comprehensive reviews on design phases to refine details based on your feedback."
      }
    ],
    ctaTitle: "Let's design your product next",
    ctaSubtitle: "Align user needs with your business targets. Let us build a clean, conversion-focused design for your software."
  },

  "graphic-design": {
    slug: "graphic-design",
    title: "Graphic Design",
    label: "Brand Visual Design",
    heroTitle: "Graphic design agency in Nigeria that builds *distinguished* visual brands",
    heroDescription: "High-impact brand systems, marketing collateral, and digital assets designed to command attention and communicate authority.",
    problemTitle: "Why generic visual branding hurts your business value",
    problemDescription: "A generic logo and random social media templates make your brand look unprofessional. Customers associate visual inconsistency with lack of trust. Our team designs unified brand visual guidelines that elevate your brand reputation, communicate your core values, and look stunning.",
    problemImage: ServiceGraphicsImage,
    servicesTitle: "Graphic design services crafted for brand growth",
    subServices: [
      {
        title: "Brand Identity Design",
        description: "Bespoke logos, colour palettes, typography suites, and complete brand style guidelines.",
        features: ["Vector logo variations", "Colour palette systems", "Typography guidelines manual"]
      },
      {
        title: "Marketing Collateral",
        description: "Designing corporate profiles, product brochures, business cards, and marketing banners.",
        features: ["Print-ready PDFs", "Layout grid customisations", "Premium digital versions"]
      },
      {
        title: "Social Media Assets",
        description: "Custom social media post grids, header covers, and story templates to keep profiles on-brand.",
        features: ["Editable Canva/Figma templates", "Optimised dimensions", "Branded visual structures"]
      },
      {
        title: "Presentation Design",
        description: "Designing pitch decks, client reports, and corporate slide decks that command attention.",
        features: ["Pitch-ready PDF presentations", "Interactive element options", "Slide master template files"]
      }
    ],
    processTitle: "Our graphic design process: step by step",
    processSteps: [
      {
        number: "01",
        title: "Briefing & Concept Analysis",
        description: "We discuss your brand values, target audience, and style preferences."
      },
      {
        number: "02",
        title: "Moodboarding",
        description: "We compile visual references to align on style direction before creating assets."
      },
      {
        number: "03",
        title: "Sketching & Design Drafting",
        description: "Our designers draft multiple design options for your logo or collateral."
      },
      {
        number: "04",
        title: "Feedback & Iteration",
        description: "We refine the chosen direction based on your input to polish graphic details."
      },
      {
        number: "05",
        title: "Final Handoff",
        description: "We deliver final vector sources, web-friendly PNGs/JPEGs, and print-ready PDFs."
      }
    ],
    toolsTitle: "Graphic design tools we create with",
    tools: ["Illustrator", "Photoshop", "InDesign", "Figma", "Canva", "CorelDraw"],
    pricingTitle: "Graphic design pricing in Nigeria — what to expect",
    pricingTable: [
      { name: "Starter Logo Kit", timeframe: "3-5 Days", idealFor: "Solopreneurs and small startups", price: "₦50,000" },
      { name: "Full Branding Package", timeframe: "2 Weeks", idealFor: "Businesses requiring comprehensive systems", price: "₦150,000" },
      { name: "Marketing Collateral Suite", timeframe: "1 Week", idealFor: "Businesses launching campaigns", price: "₦80,000" },
      { name: "Monthly Social Media Assets", timeframe: "Monthly", idealFor: "Brands needing constant posts", price: "₦100,000/mo" }
    ],
    faqTitle: "Graphic design in Nigeria: common questions",
    faqImage: ServiceGraphicsFaq,
    faqs: [
      {
        question: "Do I get editable source files?",
        answer: "Yes, all design packages include the original vector source files (AI, PSD, or Figma) along with standard web and print exports."
      },
      {
        question: "Can you design matching business stationery?",
        answer: "Yes, our branding packages can cover stationery elements like business cards, letterheads, envelopes, and email signatures."
      },
      {
        question: "What is your standard turnaround time?",
        answer: "Standard design drafts are delivered within 3-5 business days. Revisions are usually updated in 24-48 hours."
      }
    ],
    ctaTitle: "Let's define your brand's visual identity",
    ctaSubtitle: "Transform your visual communication. Bring us your brief and let's craft graphics that command respect."
  },

  "videography": {
    slug: "videography",
    title: "Videography",
    label: "Video Production",
    heroTitle: "Premium videography and video production *services* in Nigeria",
    heroDescription: "Cinematic filming, corporate documentaries, event coverage, and high-impact commercial advertisements produced to tell your brand story.",
    problemTitle: "Why amateur video fails to hook modern audiences",
    problemDescription: "Modern consumers notice shaky camera work, poor lighting, and bad sound immediately. High-quality video builds trust instantly, but bad production drives users away. At Creative Emman, we deploy professional production crews, 4K camera gear, and premium lighting systems to make your videos stand out.",
    problemImage: ServiceVideoGraphy,
    servicesTitle: "High-grade videography services built for impact",
    subServices: [
      {
        title: "Corporate Videos & Profiles",
        description: "Filming corporate histories, team introductions, and office tour reels.",
        features: ["Professional interview setups", "Cinematic drone footage", "B-roll filming modules"]
      },
      {
        title: "Product Commercials",
        description: "Creating engaging visual showcases showing your products in use to boost sales.",
        features: ["Macro product closeups", "Dynamic lighting changes", "Model presentation clips"]
      },
      {
        title: "Event Video Coverage",
        description: "Capturing corporate conferences, product launches, festivals, and milestones.",
        features: ["Multi-camera configurations", "Live event highlights", "Clean audio capture"]
      },
      {
        title: "Drone & Aerial Footage",
        description: "Adding dynamic landscape and building aerial footage to elevate video values.",
        features: ["4K aerial captures", "Licensed drone pilots", "Dynamic tracking shots"]
      }
    ],
    processTitle: "Our videography workflow: step by step",
    processSteps: [
      {
        number: "01",
        title: "Concept & Scriptwriting",
        description: "We brainstorm concepts, write scripts, and draft scene-by-scene storyboards."
      },
      {
        number: "02",
        title: "Pre-Production Planning",
        description: "We select shoot locations, build schedules, and organize actors or hosts."
      },
      {
        number: "03",
        title: "Production & Filming",
        description: "Our professional camera crew handles the lighting, sound, and filming on location."
      },
      {
        number: "04",
        title: "Post-Production Editing",
        description: "We assemble the clips, color-grade, apply motion graphics, and mix background audio."
      },
      {
        number: "05",
        title: "Review & Delivery",
        description: "We share draft reviews for updates and deliver finalized high-quality 4K videos."
      }
    ],
    toolsTitle: "Camera equipment and platforms we use",
    tools: ["Sony FX3 / A7SIII", "DJI Drones", "Aputure Lights", "Rode Audio", "Gimbals & Rigs", "Premiere Pro"],
    pricingTitle: "Video production pricing in Nigeria — what to expect",
    pricingTable: [
      { name: "Social Media Promo", timeframe: "1 Day Shoot", idealFor: "Brands needing quick, polished social reels", price: "₦150,000" },
      { name: "Corporate Profile / Doc", timeframe: "2 Days Shoot", idealFor: "Organizations launching official profiles", price: "₦350,000" },
      { name: "Product Commercial Suite", timeframe: "2 Days Shoot", idealFor: "E-commerce brands showing off inventory", price: "₦400,000" },
      { name: "Large Scale Event Video", timeframe: "Custom Days", idealFor: "Conferences, festivals, and major highlights", price: "Custom Quote" }
    ],
    faqTitle: "Video production in Nigeria: common questions",
    faqImage: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
    faqs: [
      {
        question: "Do you write script copy for videos?",
        answer: "Yes, we have copywriters who can script your voiceovers, build interview prompts, and outline structural scenes."
      },
      {
        question: "Can you film on-location anywhere in Nigeria?",
        answer: "We are based in Rivers State, but we can deploy our production crew to travel for shoots across Nigeria."
      },
      {
        question: "Does the pricing include editing?",
        answer: "Yes, all our standard video production packages cover both raw filming on-location and full post-production editing."
      }
    ],
    ctaTitle: "Let's capture your next brand story",
    ctaSubtitle: "Take your visual content to the next level. Let our camera crews film your next premium corporate showcase."
  },

  "video-editing": {
    slug: "video-editing",
    title: "Video Editing",
    label: "Post-Production",
    heroTitle: "Expert video editing and *post-production* services",
    heroDescription: "Transforming raw footage into engaging stories with precise cuts, premium color grading, seamless audio, and dynamic motion elements.",
    problemTitle: "Why great footage goes to waste without good editing",
    problemDescription: "A long, boring video loses viewer attention in seconds. Without the right transitions, clear sound design, color balance, and pacing, even 4K footage looks boring. Our editors select the best frames, sync clear audio, apply premium color grades, and adjust the pacing to keep your audience hooked.",
    problemImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80",
    servicesTitle: "Professional post-production capabilities",
    subServices: [
      {
        title: "Color Grading & Correction",
        description: "Balancing color temperatures, exposure levels, and applying custom look-up tables (LUTs).",
        features: ["Rec.709 color balancing", "Cinematic look-up palettes", "Skin tone correction protocols"]
      },
      {
        title: "Sound Design & Mixing",
        description: "Enhancing voiceovers, sound effects (SFX), and syncing licensed background tracks.",
        features: ["Noise reduction filters", "Ambient sound mixing", "Licensed music catalog"]
      },
      {
        title: "Transitions & Visual Effects",
        description: "Applying seamless page-turn transitions, overlays, and basic visual effect composting.",
        features: ["Seamless frame cuts", "Kinetic zoom highlights", "Logo intros integration"]
      },
      {
        title: "Format Optimization",
        description: "Exporting videos for Instagram Reels, YouTube widescreen, TikTok, and corporate presentations.",
        features: ["9:16 vertical edits", "16:9 widescreen exports", "Social media caption overlays"]
      }
    ],
    processTitle: "Our post-production process: step by step",
    processSteps: [
      {
        number: "01",
        title: "Footage Transfer & Sorting",
        description: "You upload your raw video clips, scripts, and audio to our secure cloud storage."
      },
      {
        number: "02",
        title: "Assembly & Rough Cut",
        description: "We sequence the main timeline, match audio syncs, and structure the narrative flow."
      },
      {
        number: "03",
        title: "Pacing & Fine Cuts",
        description: "We apply quick cuts, adjust timing, and overlay b-roll elements to maintain viewer interest."
      },
      {
        number: "04",
        title: "Color, Sound, & VFX",
        description: "We color-grade, clean background noise, apply sound effects, and add motion titles."
      },
      {
        number: "05",
        title: "Final Review & Export",
        description: "We upload draft revisions for feedback, make edits, and render finalized high-bitrate files."
      }
    ],
    toolsTitle: "Professional software we edit with",
    tools: ["Adobe Premiere Pro", "DaVinci Resolve", "After Effects", "Audition", "Photoshop", "Media Encoder"],
    pricingTitle: "Video editing pricing in Nigeria — what to expect",
    pricingTable: [
      { name: "Short Social Media Edit", timeframe: "2 Days", idealFor: "TikToks, Reels, and YouTube Shorts", price: "₦30,000" },
      { name: "YouTube Video Edit (10m)", timeframe: "3-4 Days", idealFor: "Vloggers, podcasters, and educators", price: "₦65,000" },
      { name: "Corporate Promo Edit", timeframe: "4-5 Days", idealFor: "Businesses with pre-shot event clips", price: "₦120,000" },
      { name: "Monthly Editing Retainer", timeframe: "Monthly", idealFor: "Creators requiring continuous output", price: "₦200,000/mo" }
    ],
    faqTitle: "Video editing: common questions",
    faqImage: ServiceVideoGraphyFaq,
    faqs: [
      {
        question: "How do I send my raw footage to you?",
        answer: "You can upload files directly to Google Drive, Dropbox, or WeTransfer and share the link with our team."
      },
      {
        question: "Can you source stock footage if I don't have enough clips?",
        answer: "Yes, we have access to premium stock libraries and can source high-quality b-roll clips to support your narrative."
      },
      {
        question: "What audio assets can you use?",
        answer: "We use licensed, royalty-free audio tracks and sound effects so your videos won't trigger copyright claims on YouTube or socials."
      }
    ],
    ctaTitle: "Let's edit your footage next",
    ctaSubtitle: "Send us your raw clips. Let our professional editors assemble them into high-performing, scroll-stopping videos."
  },

  "motion-graphics-design": {
    slug: "motion-graphics-design",
    title: "Motion Graphics Design",
    label: "2D & 3D Animation",
    heroTitle: "Motion graphics design and *animation* services in Nigeria",
    heroDescription: "Animate your brand with dynamic explainer videos, logo animations, animated interface guides, and digital promo assets.",
    problemTitle: "Why static designs struggle to explain complex products",
    problemDescription: "It is hard for users to read long text explaining how complex software, apps, or business steps work. Motion graphics capture interest instantly. An animated explainer video can simplify complicated workflows and boost your conversion rates.",
    problemImage: ServiceMotionGraphicsImage,
    servicesTitle: "Custom animation capabilities tailored for impact",
    subServices: [
      {
        title: "2D Explainer Videos",
        description: "Creating engaging animated character or shape explainer videos to simplify complex products.",
        features: ["Scriptwriting support", "Professional voiceover sync", "Vector style illustrations"]
      },
      {
        title: "Animated Logo Intros",
        description: "Transforming static logo vector files into smooth, premium video intro and outro elements.",
        features: ["Unique movement tracks", "Custom logo sound effects", "Transparent background exports"]
      },
      {
        title: "UI Masterclass Animations",
        description: "Simulating mobile applications or web dashboard flows through animated vector outlines.",
        features: ["App walkthrough captures", "Custom cursor movement paths", "Dynamic interface zooms"]
      },
      {
        title: "Social Media Motion Assets",
        description: "Designing animated banners, typographic promos, and kinetic titles to boost engagement.",
        features: ["Custom text transitions", "Loopable animation formats", "Vibrant brand matching"]
      }
    ],
    processTitle: "Our animation process: step by step",
    processSteps: [
      {
        number: "01",
        title: "Scripting & Storyboarding",
        description: "We write the narrative script and sketch scenes to show where movements will happen."
      },
      {
        number: "02",
        title: "Vector Illustration",
        description: "Our designers illustrate all the custom characters, shapes, layouts, and assets."
      },
      {
        number: "03",
        title: "Voiceover Recording",
        description: "We record professional voiceovers using local or international voice actors."
      },
      {
        number: "04",
        title: "Animation & Keyframing",
        description: "Our animators bring the shapes to life, timing keyframes to match the voiceover pace."
      },
      {
        number: "05",
        title: "Sound FX & Rendering",
        description: "We mix background audio, add custom swoosh/pop sound effects, and export the video."
      }
    ],
    toolsTitle: "Animation software we work with",
    tools: ["After Effects", "Premiere Pro", "Illustrator", "Photoshop", "Audition", "Cinema 4D"],
    pricingTitle: "Motion graphics pricing in Nigeria — what to expect",
    pricingTable: [
      { name: "Logo Animation Intro", timeframe: "3 Days", idealFor: "Creators and corporate video intros", price: "₦40,000" },
      { name: "Kinetic Typo Promo (30s)", timeframe: "5 Days", idealFor: "Brands pushing promotional sales", price: "₦90,000" },
      { name: "Full 2D Explainer Video (60s)", timeframe: "2 Weeks", idealFor: "Software startups and complex apps", price: "₦180,000" },
      { name: "Custom 3D Motion Project", timeframe: "3+ Weeks", idealFor: "Brands launching premium product reels", price: "Custom Quote" }
    ],
    faqTitle: "Animation & Motion: common questions",
    faqImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80",
    faqs: [
      {
        question: "Do I need to write the script myself?",
        answer: "We can write it for you. We just need a simple brief explaining the product features or goal."
      },
      {
        question: "Can I choose the voiceover accent?",
        answer: "Yes, we offer multiple voice actor samples including Nigerian, British, and American accents to suit your target market."
      },
      {
        question: "Can you animate my existing logo?",
        answer: "Yes, we just need your original logo in vector format (.AI, .EPS, or .SVG) to start animating."
      }
    ],
    ctaTitle: "Let's animate your brand next",
    ctaSubtitle: "Simplify your marketing. Let us build a dynamic, high-converting animated explainer for your service."
  },

  "photography": {
    slug: "photography",
    title: "Photography",
    label: "Professional Imagery",
    heroTitle: "Professional photography and *imaging* services in Nigeria",
    heroDescription: "High-end product photography, corporate headshots, event imaging, and lifestyle photos captured with precision lighting.",
    problemTitle: "Why stock photos make your business look generic",
    problemDescription: "Using random stock photography on your website and corporate profiles feels fake. Customers connect with real faces, real products, and real offices. Real, custom photography elevates your authority and shows your business is real.",
    problemImage: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    servicesTitle: "Photography capabilities built for corporate brands",
    subServices: [
      {
        title: "Product Photography",
        description: "Studio and lifestyle product captures showing details clearly for catalog use.",
        features: ["Clean white backgrounds", "Detailed macro closeups", "Lifestyle product settings"]
      },
      {
        title: "Corporate Portraits",
        description: "Professional executive headshots and team group photos to build team pages.",
        features: ["On-location studio lighting", "Professional skin editing", "Uniform background setups"]
      },
      {
        title: "Event Photography",
        description: "Documenting conferences, product launches, corporate meetings, and ceremonies.",
        features: ["Candid captures", "High-speed lens framing", "Quick highlight previews"]
      },
      {
        title: "Architectural & Interior Shots",
        description: "Capturing offices, real estate spaces, and construction projects clearly.",
        features: ["Wide-angle lens shots", "HDR lighting balance", "Perspective correction edits"]
      }
    ],
    processTitle: "Our photography workflow: step by step",
    processSteps: [
      {
        number: "01",
        title: "Creative Consultation",
        description: "We discuss shot lists, location preferences, lighting styles, and visual moods."
      },
      {
        number: "02",
        title: "Setup & Staging",
        description: "We assemble lights, lenses, cameras, backdrops, and prepare models or products."
      },
      {
        number: "03",
        title: "The Photo Session",
        description: "Our professional photographer captures the scheduled shots on-location or in-studio."
      },
      {
        number: "04",
        title: "Editing & Retouching",
        description: "We select the best frames, correct color tones, remove blemishes, and adjust contrast."
      },
      {
        number: "05",
        title: "Digital Delivery",
        description: "We upload high-resolution print files and optimized web files to your secure digital folder."
      }
    ],
    toolsTitle: "Camera systems and gear we shoot with",
    tools: ["Sony Alpha Cameras", "G-Master Lenses", "Godox Studio Flashes", "Reflectors & Diffusers", "Lightroom", "Photoshop"],
    pricingTitle: "Photography pricing in Nigeria — what to expect",
    pricingTable: [
      { name: "Executive Headshot Shoot", timeframe: "Half Day", idealFor: "Entrepreneurs needing professional profiles", price: "₦60,000" },
      { name: "Product Studio Session", timeframe: "1 Day Shoot", idealFor: "E-commerce brands listing items online", price: "₦120,000" },
      { name: "Corporate Event Coverage", timeframe: "1 Day Shoot", idealFor: "Organizations launching annual highlights", price: "₦150,000" },
      { name: "Architectural Real Estate", timeframe: "Half Day", idealFor: "Real estate agencies and hotels", price: "₦100,000" }
    ],
    faqTitle: "Photography: common questions",
    faqImage: "https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?auto=format&fit=crop&w=800&q=80",
    faqs: [
      {
        question: "How long does it take to get edited photos?",
        answer: "Initial proof selects are shared within 48 hours. Final fully-edited photos are delivered within 5-7 business days."
      },
      {
        question: "Do you have your own studio?",
        answer: "We have portable studio equipment (flashes, backdrops) and can set up a professional photo studio in your office, or rent a studio space."
      },
      {
        question: "How many edited photos are included?",
        answer: "Our standard packages range from 15 fully-edited headshots to 100+ edited event photos depending on the package."
      }
    ],
    ctaTitle: "Let's capture your brand imagery",
    ctaSubtitle: "Elevate your visual assets. Schedule a custom photography session with our production crew."
  },

  "social-media-management": {
    slug: "social-media-management",
    title: "Social Media Management",
    label: "Digital Brand Growth",
    heroTitle: "Strategic social media management that builds *authentic* engagement",
    heroDescription: "Consistent brand profiles, high-quality content design, copywriting, daily community moderation, and paid growth campaigns.",
    problemTitle: "Why posting random images fails to grow page traffic",
    problemDescription: "Posting random images without a content strategy or active community moderation fails to get customer sales. Modern algorithms favor profiles that post valuable, consistent content and reply to user comments. We research your market to write custom copy, design assets, and moderate comments daily.",
    problemImage: ServiceSocialImage,
    servicesTitle: "Social growth packages built for local brands",
    subServices: [
      {
        title: "Content Calendar & Strategy",
        description: "Researching industry trends, writing custom post scripts, and scheduling content lists.",
        features: ["Monthly strategy grids", "Post scheduling matrices", "Platform-specific copy scripts"]
      },
      {
        title: "Graphic & Motion Design",
        description: "Designing branded image carousels, video shorts, Reels, and engaging graphic layouts.",
        features: ["Branded post designs", "Short-form video assets", "Animated typographic promos"]
      },
      {
        title: "Community Management",
        description: "Replying to customer comments, answering product DMs, and managing user reviews daily.",
        features: ["Daily comment checkups", "FAQ responses manual", "Active user interactions"]
      },
      {
        title: "Analytics & Growth Ads",
        description: "Tracking weekly post metrics, tracking reach values, and managing paid promotion campaigns.",
        features: ["Weekly analytics reports", "Paid post setups", "Competitor tracking matrices"]
      }
    ],
    processTitle: "Our management process: step by step",
    processSteps: [
      {
        number: "01",
        title: "Market Audit & Strategy",
        description: "We analyze your audience, competitor profiles, and map out post styles."
      },
      {
        number: "02",
        title: "Content Writing & Scripting",
        description: "Our copywriters write caption drafts and script details for upcoming posts."
      },
      {
        number: "03",
        title: "Graphic & Asset Design",
        description: "Our visual designers construct custom brand images, icons, and video shorts."
      },
      {
        number: "04",
        title: "Scheduling & Moderation",
        description: "We schedule the approved posts, monitor user comments, and moderate customer DMs daily."
      },
      {
        number: "05",
        title: "Analytics Review",
        description: "We track monthly reach data, comment growth rates, and update next month's strategy."
      }
    ],
    toolsTitle: "Management systems and platforms we use",
    tools: ["Meta Business Suite", "Buffer", "Figma", "Canva", "Trello", "CapCut"],
    pricingTitle: "Social media management pricing — what to expect",
    pricingTable: [
      { name: "Starter Brand Builder", timeframe: "Monthly", idealFor: "Startups establishing initial profiles", price: "₦100,000/mo" },
      { name: "Business Growth Package", timeframe: "Monthly", idealFor: "Growing SMEs requiring active growth", price: "₦180,000/mo" },
      { name: "Enterprise Pro Suite", timeframe: "Monthly", idealFor: "Brands requiring daily posts & video reels", price: "₦300,000/mo" },
      { name: "Custom Campaigns", timeframe: "Per Campaign", idealFor: "Brands executing launch events", price: "Custom Quote" }
    ],
    faqTitle: "Social Media: common questions",
    faqImage: ServiceSocialFaq,
    faqs: [
      {
        question: "Do you reply to customer messages for us?",
        answer: "Yes, we draft an FAQ response guide with you to ensure our team answers product inquiries, locations, and prices correctly."
      },
      {
        question: "Do we need to supply photos and videos?",
        answer: "We can use assets you provide, or schedule photography and videography sessions with our production crew."
      },
      {
        question: "Which social media platforms do you support?",
        answer: "We support Instagram, Facebook, LinkedIn, TikTok, and X (formerly Twitter) based on where your customers interact most."
      }
    ],
    ctaTitle: "Let's grow your digital presence",
    ctaSubtitle: "Connect with your audience. Bring us your brand goals and let's craft a strategic content campaign."
  }
};
