// agents.js — WebKrafta AI Agents Data (20 Tiers)
// Step 3 of 8

const AGENTS = [
  { id:1, tier:'Tier 1', name:'AI Chat Agent', color:'#f472b6',
    marketSetup:'₹18,750', marketMonthly:'₹6,249', setup:'₹15,000', monthly:'₹4,999',
    description:'24/7 intelligent customer support agent trained on your business data.',
    tags:['Customer Support','WhatsApp','Live Chat','FAQ Automation'],
    includes:['Custom-trained on your business FAQs & docs','WhatsApp + Website Live Chat deployment','Escalation to human agent','30-day free support post-launch','Monthly performance report'],
    bestFor:['E-commerce','SaaS','Healthcare','Education','Retail'] },

  { id:2, tier:'Tier 2', name:'AI Voice Agent', color:'#67e8f9',
    marketSetup:'₹31,250', marketMonthly:'₹9,999', setup:'₹25,000', monthly:'₹7,999',
    description:'Human-like voice AI that handles calls, books appointments, and qualifies leads.',
    tags:['Voice Calls','IVR Replacement','Appointment Booking','Lead Qualification'],
    includes:['Natural language voice model (Hindi + English)','IVR system replacement','Google Calendar appointment booking','Lead qualification & CRM push','Call recording & transcripts'],
    bestFor:['Clinics','Real Estate','Insurance','Hospitality','Service Businesses'] },

  { id:3, tier:'Tier 3', name:'AI Lead Generation Agent', color:'#fbbf24',
    marketSetup:'₹43,750', marketMonthly:'₹12,499', setup:'₹35,000', monthly:'₹9,999',
    description:'Automated lead capture, scoring, and nurturing across all digital touchpoints.',
    tags:['Lead Capture','CRM Sync','Email Sequences','Lead Scoring'],
    includes:['Multi-channel lead capture (web, WhatsApp, social)','AI lead scoring model','Automated nurture email sequences','CRM sync (HubSpot / Zoho / Sheets)','Weekly lead quality report'],
    bestFor:['B2B Companies','Agencies','Coaches','EdTech','Finance'] },

  { id:4, tier:'Tier 4', name:'AI E-Commerce Agent', color:'#34d399',
    marketSetup:'₹62,500', marketMonthly:'₹16,249', setup:'₹50,000', monthly:'₹12,999',
    description:'End-to-end AI shopping assistant — recommendations, cart recovery, order tracking.',
    tags:['Product Recommendations','Cart Recovery','Order Tracking','Upselling'],
    includes:['AI product recommendation engine','Abandoned cart recovery (WhatsApp + Email)','Order status tracking bot','Upsell & cross-sell automation','Shopify / WooCommerce integration'],
    bestFor:['D2C Brands','Shopify Stores','WooCommerce','Fashion','Electronics'] },

  { id:5, tier:'Tier 5', name:'AI HR Agent', color:'#f9a8d4',
    marketSetup:'₹81,250', marketMonthly:'₹18,749', setup:'₹65,000', monthly:'₹14,999',
    description:'Automates recruitment screening, onboarding, payroll queries, and HR helpdesk.',
    tags:['Resume Screening','Onboarding','Payroll Queries','Policy Bot'],
    includes:['AI resume screening & shortlisting','Automated onboarding flow','Payroll & leave query bot','HR policy knowledge base','ATS / HRMS integration'],
    bestFor:['Enterprises','Staffing Firms','Manufacturing','IT Companies','BPOs'] },

  { id:6, tier:'Tier 6', name:'AI Data Analyst', color:'#c084fc',
    marketSetup:'₹1,00,000', marketMonthly:'₹24,999', setup:'₹80,000', monthly:'₹19,999',
    description:'Connects to your data sources, generates automated reports, answers in plain English.',
    tags:['Business Intelligence','Auto Reports','Anomaly Detection','Plain-English Queries'],
    includes:['Data source connection (Sheets, DB, CRM)','Plain-English query interface','Automated weekly/monthly reports','Anomaly & trend detection alerts','Custom dashboard setup'],
    bestFor:['E-commerce','Retail Chains','Finance Teams','Marketing Agencies','Operations'] },

  { id:7, tier:'Tier 7', name:'AI Code Assistant', color:'#7dd3fc',
    marketSetup:'₹1,87,500', marketMonthly:'₹37,499', setup:'₹1,50,000', monthly:'₹29,999',
    description:'AI development co-pilot that writes code, reviews PRs, and generates documentation.',
    tags:['Code Generation','PR Reviews','Documentation','Testing Automation'],
    includes:['Custom AI trained on your codebase','PR review automation','Auto-documentation generator','Unit test writer','GitHub / GitLab integration'],
    bestFor:['Software Companies','Tech Startups','IT Agencies','Product Teams','Fintech'] },

  { id:8, tier:'Tier 8', name:'AI Sales Agent', color:'#86efac',
    marketSetup:'₹2,18,750', marketMonthly:'₹43,749', setup:'₹1,75,000', monthly:'₹34,999',
    description:'Fully autonomous AI sales rep — prospects leads, sends outreach, books discovery calls.',
    tags:['Lead Generation','Automated Outreach','Follow-Up Sequences','Pipeline Automation'],
    includes:['AI prospect research & targeting','Personalized cold outreach (Email + LinkedIn)','Multi-touch follow-up sequences','Discovery call booking automation','Pipeline reporting dashboard'],
    bestFor:['B2B Companies','SaaS','Agencies','Insurance','Real Estate'] },

  { id:9, tier:'Tier 9', name:'AI Media Generator', color:'#fdba74',
    marketSetup:'₹2,50,000', marketMonthly:'₹49,999', setup:'₹2,00,000', monthly:'₹39,999',
    description:'Generates professional images, short-form videos, audio content, and ad creatives at scale.',
    tags:['Image Generation','Video Creation','Ad Creatives','Brand Content'],
    includes:['Brand-trained image generation model','Short-form video automation (Reels/Shorts)','AI voiceover & audio content','Ad creative batch generation','Content calendar automation'],
    bestFor:['D2C Brands','Performance Marketing','Digital Agencies','Influencers','FMCG'] },

  { id:10, tier:'Tier 10', name:'AI Research Agent', color:'#e879f9',
    marketSetup:'₹3,12,500', marketMonthly:'₹56,249', setup:'₹2,50,000', monthly:'₹44,999',
    description:'Deep intelligence agent — market research, competitive analysis, strategic reports.',
    tags:['Market Research','Competitor Analysis','Strategic Intelligence','Industry Reports'],
    includes:['Live web + database research capability','Competitor tracking & alerts','Industry trend analysis reports','Custom research brief execution','Executive-ready PDF output'],
    bestFor:['Founders & CEOs','Strategy Teams','Venture Investors','Product Managers','Consultants'] },

  { id:11, tier:'Tier 11', name:'Autonomous AI Agent', color:'#6ee7b7',
    marketSetup:'₹4,37,500', marketMonthly:'₹74,999', setup:'₹3,50,000', monthly:'₹59,999',
    description:'Self-directed AI agent — plans, executes, completes complex multi-step tasks independently.',
    tags:['Full Automation','Task Orchestration','Multi-System Integration','Self-Directing AI'],
    includes:['Goal-based autonomous task execution','Multi-system API orchestration','Self-error-correction capability','Human approval checkpoint flows','Full audit log & reporting'],
    bestFor:['Operations-Heavy Businesses','Scaling Startups','Logistics','Financial Firms','Enterprise'] },

  { id:12, tier:'Tier 12', name:'Enterprise AI Platform', color:'#93c5fd',
    marketSetup:'Custom', marketMonthly:'Custom', setup:'Custom', monthly:'Custom',
    description:'Fully bespoke enterprise-grade AI ecosystem with dedicated WebKrafta team embedded.',
    tags:['Enterprise-Grade','Custom Architecture','Dedicated Team','Full Compliance'],
    includes:['Dedicated WebKrafta team (3–5 engineers)','Custom AI model training & fine-tuning','On-premise or private cloud deployment','SOC2 / ISO compliance support','SLA-backed 24/7 support'],
    bestFor:['Large Enterprises','Government','Healthcare Networks','BFSI','Conglomerates'] },

  { id:13, tier:'Tier 13', name:'AI WhatsApp Automation Agent', color:'#4ade80',
    marketSetup:'₹43,750', marketMonthly:'₹9,999', setup:'₹35,000', monthly:'₹7,999',
    description:'Full WhatsApp Business API automation — broadcasts, drip campaigns, auto-replies, catalog sharing.',
    tags:['WhatsApp API','Broadcast Campaigns','Drip Messages','Catalog Bot','Order Tracking'],
    includes:['WhatsApp Business API setup & verification','Broadcast & drip campaign flows','Auto-reply & catalog bot','Order tracking integration','Monthly message analytics report'],
    bestFor:['Retail Shops','Restaurants','Clinics','Coaching Institutes','D2C Brands'] },

  { id:14, tier:'Tier 14', name:'AI Email Automation Agent', color:'#fcd34d',
    marketSetup:'₹37,500', marketMonthly:'₹8,749', setup:'₹30,000', monthly:'₹6,999',
    description:'Intelligent email sequences — onboarding flows, cold outreach, newsletter automation.',
    tags:['Email Sequences','Cold Outreach','Newsletter Automation','Inbox Management','A/B Testing'],
    includes:['Email sequence builder (onboarding + nurture)','Cold outreach automation','Newsletter scheduling & design','A/B subject line testing','Open/click rate analytics'],
    bestFor:['SaaS Companies','Coaches','Consultants','B2B Agencies','EdTech'] },

  { id:15, tier:'Tier 15', name:'AI Social Media Agent', color:'#f472b6',
    marketSetup:'₹56,250', marketMonthly:'₹12,499', setup:'₹45,000', monthly:'₹9,999',
    description:'Automated content creation, scheduling, comment replies, and DM automation.',
    tags:['Content Scheduling','DM Automation','Comment Replies','Hashtag Research','Cross-Platform'],
    includes:['AI content calendar generation','Auto-scheduling (Instagram, LinkedIn, X)','DM automation & lead capture','Comment reply bot','Hashtag & trend research'],
    bestFor:['Influencers','Digital Agencies','Personal Brands','D2C Brands','Corporate Teams'] },

  { id:16, tier:'Tier 16', name:'AI CRM & Workflow Automation', color:'#38bdf8',
    marketSetup:'₹93,750', marketMonthly:'₹18,749', setup:'₹75,000', monthly:'₹14,999',
    description:'End-to-end CRM automation — HubSpot, Zoho, Salesforce with AI-driven pipeline management.',
    tags:['CRM Integration','Pipeline Automation','Deal Scoring','Follow-up Sequences','Zapier/Make'],
    includes:['CRM setup & AI integration (HubSpot / Zoho / Salesforce)','Automated deal scoring & pipeline stages','Follow-up sequence automation','Zapier / Make.com workflow builds','Sales performance dashboard'],
    bestFor:['Sales Teams','Real Estate','Insurance','SaaS','B2B Enterprises'] },

  { id:17, tier:'Tier 17', name:'AI Document & PDF Agent', color:'#a78bfa',
    marketSetup:'₹62,500', marketMonthly:'₹12,499', setup:'₹50,000', monthly:'₹9,999',
    description:'Automates document creation, contract generation, PDF processing, invoice automation.',
    tags:['Contract Generation','Invoice Automation','PDF Processing','E-Signature','Document OCR'],
    includes:['AI contract & proposal generator','Invoice auto-generation & dispatch','PDF OCR & data extraction','E-signature workflow (DocuSign / native)','Document storage & retrieval system'],
    bestFor:['Law Firms','Chartered Accountants','Real Estate','Finance Teams','HR Departments'] },

  { id:18, tier:'Tier 18', name:'AI Booking & Scheduling Agent', color:'#6ee7b7',
    marketSetup:'₹43,750', marketMonthly:'₹9,249', setup:'₹35,000', monthly:'₹7,399',
    description:'Smart appointment booking bot — syncs with Google Calendar, handles rescheduling & reminders.',
    tags:['Appointment Booking','Google Calendar Sync','Auto Reminders','Rescheduling','Multi-Location'],
    includes:['AI booking chatbot (Web + WhatsApp)','Google Calendar / Calendly sync','Automated reminder sequences (SMS + WhatsApp)','Rescheduling & cancellation flows','Multi-location & multi-staff support'],
    bestFor:['Clinics','Salons','Coaching Institutes','Consultants','Fitness Centers'] },

  { id:19, tier:'Tier 19', name:'AI Review & Reputation Agent', color:'#fca5a5',
    marketSetup:'₹37,500', marketMonthly:'₹8,124', setup:'₹30,000', monthly:'₹6,499',
    description:'Automatically collects Google reviews, responds to feedback, monitors brand mentions.',
    tags:['Google Reviews','Reputation Monitoring','Auto-Response','Brand Mentions','Sentiment Analysis'],
    includes:['Automated post-service review request (WhatsApp + Email)','AI-generated review responses','Brand mention monitoring (Google + Social)','Negative review alert & escalation','Monthly reputation score report'],
    bestFor:['Restaurants','Hotels','Clinics','Retail Chains','Local Businesses'] },

  { id:20, tier:'Tier 20', name:'AI Inventory & Operations Agent', color:'#fb923c',
    marketSetup:'₹1,25,000', marketMonthly:'₹24,999', setup:'₹1,00,000', monthly:'₹19,999',
    description:'Monitors stock levels, auto-raises purchase orders, tracks supplier performance.',
    tags:['Inventory Tracking','Auto Purchase Orders','Supplier Management','Stock Alerts','ERP Integration'],
    includes:['Real-time inventory monitoring dashboard','Auto purchase order generation','Supplier performance tracking','Low-stock & expiry alerts','ERP / Tally / Zoho Inventory integration'],
    bestFor:['Manufacturing','Retail Chains','Warehouses','FMCG','Distribution Companies'] },
];

// ---- Agent helpers ----

function getActiveAgents() {
  return AGENTS.filter(a => {
    const vis = siteSettings.agentVisibility[a.id];
    return vis !== false; // undefined = ON by default
  });
}

function getAgentPrice(id) {
  const overrides = siteSettings.agentPrices[id];
  const agent = AGENTS.find(a => a.id === id);
  if (!agent) return { setup: 'Custom', monthly: 'Custom' };
  return {
    setup:   overrides?.setup   || agent.setup,
    monthly: overrides?.monthly || agent.monthly
  };
}
