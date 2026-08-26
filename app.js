/**
 * Joy Tran Portfolio - Bilingual (EN / VI) Engine & Case Study Data
 */

// 1. Current Active Language
let currentLang = localStorage.getItem("portfolio_lang") || "en";

// Check URL query parameters (?lang=vi or ?lang=en)
const urlParams = new URLSearchParams(window.location.search);
if (urlParams.has("lang")) {
  const paramLang = urlParams.get("lang").toLowerCase();
  if (paramLang === "vi" || paramLang === "en") {
    currentLang = paramLang;
  }
}

// 2. Comprehensive Bilingual Dictionary
const i18n = {
  en: {
    nav_services: "Services",
    nav_projects: "Case Studies",
    nav_skills: "Tech Stack",
    nav_certifications: "Certifications",
    nav_estimator: "Estimator",
    btn_upwork: "Upwork Profile",
    btn_contact: "Contact Me",

    hero_badge: "AVAILABLE FOR FREELANCE & CONTRACTS",
    hero_title_raw: `Engineering <span class="text-gradient">Production SaaS</span>, AI Automation &amp; Data Solutions.`,
    hero_bio: `Hi, I'm <strong class="text-slate-900 font-bold">Joy Tran</strong>. I help founders, startups, and enterprise teams turn complex business requirements into fast, maintainable SaaS platforms, practical AI integrations, and reliable data pipelines.`,
    pill_saas: "🚀 Full-Stack SaaS (Laravel / Vue / React)",
    pill_ai: "🤖 RAG & LLM Agent Workflows",
    pill_auto: "⚡ n8n & API Integrations",
    pill_bi: "📊 Power BI & Star-Schema SQL",
    pill_cloud: "☁️ AWS Cloud & Docker CI/CD",
    hero_btn_explore: "Explore Case Studies",
    hero_btn_estimate: "Estimate Project",
    code_status: '"Open for Projects"',
    code_delivery: '"100% On-Time"',

    stat_cases: "Flagship Case Studies",
    stat_certs: "Industry Certs",
    stat_ready: "Production Ready",

    services_subtitle: "Freelance & Engineering Services",
    services_title: "Practical Solutions That Move The Needle",
    services_desc: "Whether you need a new SaaS product launched from scratch, AI automation plugged into your existing workflow, or executive BI dashboards built from raw databases.",

    svc_build_title: "1. Build",
    svc_build_desc: "Develop complete SaaS MVPs, internal admin portals, interactive dashboards, and scalable multi-tenant web applications from scratch.",
    svc_build_f1: "Full-Stack SaaS & APIs",
    svc_build_f2: "Auth, Multi-Tenancy & Billing",
    svc_build_f3: "Docker & Cloud Deployment",

    svc_integrate_title: "2. Integrate",
    svc_integrate_desc: "Embed LLM intelligence, RAG document search, third-party APIs, vector databases, and payment processors into existing codebases.",
    svc_integrate_f1: "LLM APIs (OpenAI / Claude / Gemini)",
    svc_integrate_f2: "RAG & Vector Embeddings",
    svc_integrate_f3: "Payment & OAuth Gateways",

    svc_automate_title: "3. Automate",
    svc_automate_desc: "Replace tedious manual operations with automated pipelines using n8n, Python scripts, webhooks, and deterministic error handling.",
    svc_automate_f1: "n8n & Custom Webhooks",
    svc_automate_f2: "Structured Document Extraction",
    svc_automate_f3: "Automated ETL & Syncing",

    svc_modernize_title: "4. Modernize",
    svc_modernize_desc: "Refactor legacy systems, optimize slow SQL queries, build executive Power BI models, and implement automated CI/CD testing.",
    svc_modernize_f1: "SQL & Power BI Optimization",
    svc_modernize_f2: "Architecture & Security Audits",
    svc_modernize_f3: "CI/CD & Testing Pipelines",

    projects_subtitle: "Flagship Case Studies",
    projects_title: "Engineered For Production",
    projects_desc: "Each project is structured with architectural rigor: Problem → Solution → Architecture → Tech Stack → Outcomes.",

    filter_all: "All (5)",
    filter_saas: "SaaS & Full-Stack",
    filter_ai: "AI & Automation",
    filter_data: "Data & BI",

    tag_saas: "Full-Stack SaaS",
    tag_ai: "AI & Automation",
    tag_rag: "RAG & AI Search",
    tag_bi: "Data & BI",
    tag_data: "Data Engineering",

    p1_title: "AI-Powered SaaS Application",
    p1_sub: "Multi-Tenancy · Subscription Billing · AI Features",
    p1_desc: "Modular SaaS architecture separating core business logic from decoupled AI services. Features team workspaces, Stripe billing, Redis background workers, and quota enforcement.",

    p2_title: "AI Business Workflow Automation",
    p2_sub: "n8n Orchestration · Document Extraction · Webhooks",
    p2_desc: "Automates repetitive business operations by using LLMs for schema-validated JSON extraction and deterministic rule engines for zero-hallucination routing into CRMs and databases.",

    p3_title: "Enterprise AI Knowledge Assistant",
    p3_sub: "RAG Engine · Vector Search · Source Citations",
    p3_desc: "Retrieval-Augmented Generation platform allowing organizations to query internal PDFs, policies, and manuals with verifiable source citations and role-based access control.",

    p4_title: "Executive BI & KPI Dashboard",
    p4_sub: "Power BI · Star Schema · Advanced DAX Modeling",
    p4_desc: "Transforms raw, disconnected transaction data into clean dimensional models and real-time executive dashboards for revenue, cohort retention, and operational KPIs.",

    p5_title: "Automated Data ETL Pipeline",
    p5_sub: "Python · Schema Validation · PostgreSQL Sync",
    p5_desc: "Fault-tolerant data pipeline extracting from rate-limited external APIs, validating schema types, applying idempotent upserts, and preparing clean analytical tables for downstream BI.",

    btn_view_case: "View Architecture & Case Study",

    eng_subtitle: "Engineering Standard",
    eng_title: "How I Build Software That Lasts",
    eng_desc: "I don't just write code that \"works on my machine.\" I build production-grade software with business outcomes, maintainability, clean architecture, and security baked in from Day 1.",
    eng_reviews: "View client reviews on Upwork",

    eng_card1_num: "01 / ARCHITECTURE",
    eng_card1_title: "Business-First Engineering",
    eng_card1_desc: "Choosing tech stacks that solve real business problems without unnecessary overhead or vendor lock-in.",

    eng_card2_num: "02 / STABILITY",
    eng_card2_title: "Deterministic AI Workflows",
    eng_card2_desc: "Restricting LLMs to structured data extraction while strictly enforcing critical rules in code.",

    eng_card3_num: "03 / SECURITY",
    eng_card3_title: "Secure by Default",
    eng_card3_desc: "Enforcing strict authentication, RBAC, input sanitization, and automated secret isolation.",

    eng_card4_num: "04 / DELIVERY",
    eng_card4_title: "CI/CD & Automated Testing",
    eng_card4_desc: "Dockerized local environments, GitHub Actions automated test suites, and zero-downtime deployment pipelines.",

    skills_subtitle: "Skills & Technologies",
    skills_title: "Full-Stack & AI Ecosystem",
    cat_backend: "Backend & APIs",
    cat_frontend: "Frontend & UI",
    cat_ai: "AI & Automation",
    cat_data: "Data & BI",
    cat_cloud: "Cloud & DevOps",

    certs_subtitle: "Industry Credentials",
    certs_title: "Verified Certifications",
    cert1_desc: "Validates deep understanding of core AWS cloud services, serverless deployment, security best practices, and CI/CD pipelines.",
    cert2_desc: "Demonstrates proficiency in generative AI concepts, foundational models, responsible AI deployment, and enterprise AI architectures.",
    cert3_desc: "Validates expertise in star-schema data modeling, Power Query transformations, DAX business logic, and executive KPI dashboarding.",
    cert_verified: "Verified Credential",

    est_badge: "Interactive Client Tool",
    est_title: "Project Scope & Inquiry Builder",
    est_desc: "Select your project requirements to calculate estimated timeline and instantly generate a formatted proposal inquiry.",
    est_step1: "1. Select Project Type",
    opt_saas: "Full-Stack SaaS",
    opt_saas_desc: "MVP / Portal / Web App",
    opt_ai: "AI & RAG System",
    opt_ai_desc: "Doc Search / Assistant",
    opt_auto: "Workflow Auto",
    opt_auto_desc: "n8n / Webhooks / APIs",
    opt_bi: "Power BI & Data",
    opt_bi_desc: "ETL / KPI Dashboards",

    est_step2: "2. Add Add-on Modules",
    addon_billing: "Stripe / Billing",
    addon_billing_time: "+1 week",
    addon_ai: "LLM / AI Integration",
    addon_ai_time: "+1-2 weeks",
    addon_devops: "Docker & AWS CI/CD",
    addon_devops_time: "+3-5 days",

    est_summary_lbl: "Estimated Delivery Timeframe",
    est_summary_sub: "Includes architecture, development, testing, and deployment.",
    btn_gen_inquiry: "Generate Inquiry Draft",

    contact_badge: "Let's Connect",
    contact_title: "Have a Project in Mind?",
    contact_desc: "I am actively accepting select freelance contracts, technical consulting, and development projects. Reach out via email, Upwork, or LinkedIn.",
    contact_email_lbl: "Direct Email",
    contact_upwork_lbl: "Upwork Verified Profile",

    form_title: "Send a Direct Message",
    form_name: "Your Name",
    form_email: "Your Email",
    form_subject: "Subject / Project Scope",
    form_message: "Message",
    btn_send: "Send Message via Email",

    footer_copy: "© 2026 Joy Tran (t2adung). All rights reserved.",
    footer_top: "Back to Top ↑",

    modal_repo_lbl: "Repository Folder",
    modal_close: "Close",
    modal_discuss: "Discuss Similar Project",

    toast_email_copied: "Email copied to clipboard!",
    toast_inquiry_drafted: "Inquiry draft generated in contact form below!"
  },

  vi: {
    nav_services: "Dịch Vụ",
    nav_projects: "Dự Án Thực Tế",
    nav_skills: "Kỹ Năng & Công Nghệ",
    nav_certifications: "Chứng Chỉ Quốc Tế",
    nav_estimator: "Ước Tính Dự Án",
    btn_upwork: "Hồ Sơ Upwork",
    btn_contact: "Liên Hệ Tôi",

    hero_badge: "SẴN SÀNG NHẬN DỰ ÁN & HỢP ĐỒNG FREELANCE",
    hero_title_raw: `Kỹ Thuật Xây Dựng <span class="text-gradient">SaaS Vận Hành Thực Tế</span>, AI Tự Động Hóa &amp; Dữ Liệu.`,
    hero_bio: `Xin chào, tôi là <strong class="text-slate-900 font-bold">Joy Tran</strong>. Tôi đồng hành cùng các nhà sáng lập, startup và doanh nghiệp chuyển đổi các yêu cầu nghiệp vụ phức tạp thành nền tảng SaaS vận hành ổn định, ứng dụng AI thực tế và đường ống dữ liệu đáng tin cậy.`,
    pill_saas: "🚀 Full-Stack SaaS (Laravel / Vue / React)",
    pill_ai: "🤖 Quy trình RAG & Tác tử AI (Agents)",
    pill_auto: "⚡ Tự động hóa n8n & Tích hợp API",
    pill_bi: "📊 Power BI & Mô hình hóa SQL",
    pill_cloud: "☁️ Hạ tầng AWS & CI/CD Docker",
    hero_btn_explore: "Khám Phá Dự Án",
    hero_btn_estimate: "Ước Tính Dự Án",
    code_status: '"Đang nhận dự án"',
    code_delivery: '"100% Đúng Hạn"',

    stat_cases: "Dự Án Tiêu Biểu",
    stat_certs: "Chứng Chỉ Quốc Tế",
    stat_ready: "Sẵn Sàng Vận Hành",

    services_subtitle: "Dịch Vụ Kỹ Thuật & Freelance",
    services_title: "Giải Pháp Thực Tiễn Mang Lại Giá Trị Kinh Doanh",
    services_desc: "Dù bạn cần khởi chạy một sản phẩm SaaS mới từ đầu, tích hợp tự động hóa AI vào quy trình hiện tại, hay xây dựng dashboard Power BI điều hành từ cơ sở dữ liệu phân tán.",

    svc_build_title: "1. Xây Dựng (Build)",
    svc_build_desc: "Phát triển trọn gói MVP SaaS, cổng quản trị nội bộ, dashboard tương tác và các ứng dụng web đa người dùng (Multi-tenant) từ đầu.",
    svc_build_f1: "Full-Stack SaaS & REST APIs",
    svc_build_f2: "Xác thực, Phân quyền & Thanh toán",
    svc_build_f3: "Đóng gói Docker & Triển khai Cloud",

    svc_integrate_title: "2. Tích Hợp (Integrate)",
    svc_integrate_desc: "Tích hợp trí tuệ nhân tạo LLM, tìm kiếm tài liệu RAG, API bên thứ ba, cơ sở dữ liệu Vector và cổng thanh toán vào hệ thống sẵn có.",
    svc_integrate_f1: "API LLM (OpenAI / Claude / Gemini)",
    svc_integrate_f2: "Tìm kiếm RAG & Vector Embeddings",
    svc_integrate_f3: "Cổng Thanh toán & Xác thực OAuth",

    svc_automate_title: "3. Tự Động Hóa (Automate)",
    svc_automate_desc: "Thay thế các thao tác thủ công lặp đi lặp lại bằng luồng tự động hóa qua n8n, kịch bản Python, Webhooks và xử lý lỗi chặt chẽ.",
    svc_automate_f1: "Quy trình n8n & Webhooks Tùy chỉnh",
    svc_automate_f2: "Trích xuất Tài liệu có Cấu trúc",
    svc_automate_f3: "Đồng bộ & ETL Dữ liệu Tự động",

    svc_modernize_title: "4. Hiện Đại Hóa (Modernize)",
    svc_modernize_desc: "Tái cấu trúc mã nguồn cũ, tối ưu hóa truy vấn SQL chậm, xây dựng mô hình Power BI điều hành và thiết lập kiểm thử CI/CD tự động.",
    svc_modernize_f1: "Tối ưu hóa SQL & Power BI",
    svc_modernize_f2: "Kiểm toán Kiến trúc & Bảo mật",
    svc_modernize_f3: "Đường ống CI/CD & Kiểm thử Tự động",

    projects_subtitle: "Dự Án Thực Tế Tiêu Biểu",
    projects_title: "Thiết Kế Chuẩn Mực Cho Vận Hành Thực Tế",
    projects_desc: "Mỗi dự án đều được cấu trúc với sự nghiêm cẩn về mặt kỹ thuật: Vấn đề → Giải pháp → Kiến trúc Hệ thống → Công nghệ → Kết quả.",

    filter_all: "Tất Cả (5)",
    filter_saas: "SaaS & Full-Stack",
    filter_ai: "AI & Tự Động Hóa",
    filter_data: "Dữ Liệu & BI",

    tag_saas: "Full-Stack SaaS",
    tag_ai: "AI & Tự Động Hóa",
    tag_rag: "Tìm kiếm RAG & AI",
    tag_bi: "Dữ Liệu & BI",
    tag_data: "Kỹ Thuật Dữ Liệu",

    p1_title: "Ứng Dụng SaaS Tích Hợp AI",
    p1_sub: "Đa người dùng · Thanh toán gói · Tính năng AI",
    p1_desc: "Kiến trúc SaaS module hóa tách biệt logic nghiệp vụ khỏi các dịch vụ AI. Tích hợp không gian làm việc theo nhóm, thanh toán Stripe, hàng đợi ngầm Redis và kiểm soát hạn mức.",

    p2_title: "Tự Động Hóa Quy Trình Nghiệp Vụ Với AI",
    p2_sub: "Điều phối n8n · Trích xuất Dữ liệu · Webhooks",
    p2_desc: "Tự động hóa các tác vụ lặp đi lặp lại bằng cách dùng LLM trích xuất dữ liệu JSON chuẩn hóa, kết hợp bộ quy tắc tất định để định tuyến chính xác vào CRM/PostgreSQL.",

    p3_title: "Trợ Lý Tri Thức Doanh Nghiệp RAG",
    p3_sub: "Công cụ RAG · Tìm kiếm Vector · Trích dẫn Nguồn",
    p3_desc: "Nền tảng RAG cho phép tổ chức truy vấn tài liệu nội bộ (PDF, chính sách, sổ tay) với câu trả lời trích dẫn số trang chính xác và phân quyền truy cập nghiêm ngặt.",

    p4_title: "Dashboard BI & Chỉ Số KPI Điều Hành",
    p4_sub: "Power BI · Star Schema · Mô hình hóa DAX Nâng cao",
    p4_desc: "Chuyển đổi dữ liệu giao dịch rời rạc thành mô hình nhiều chiều sạch sẽ và hệ thống dashboard thời gian thực theo dõi doanh thu, tỷ lệ giữ chân và chỉ số KPI.",

    p5_title: "Pipeline Tự Động Hóa ETL Dữ Liệu",
    p5_sub: "Python · Xác thực Schema · Đồng bộ PostgreSQL",
    p5_desc: "Đường ống ETL chịu lỗi cao trích xuất từ các API giới hạn lượt gọi, kiểm tra cấu trúc dữ liệu, thực hiện nạp dữ liệu không trùng lặp (Idempotent) cho phân tích BI.",

    btn_view_case: "Xem Kiến Trúc & Chi Tiết Dự Án",

    eng_subtitle: "Tiêu Chuẩn Kỹ Thuật",
    eng_title: "Cách Tôi Xây Dựng Phần Mềm Bền Vững",
    eng_desc: "Tôi không chỉ viết code 'chạy được trên máy cá nhân'. Tôi xây dựng phần mềm chuẩn sản xuất hướng đến kết quả kinh doanh, dễ bảo trì, kiến trúc sạch và an toàn từ ngày đầu.",
    eng_reviews: "Xem đánh giá của khách hàng trên Upwork",

    eng_card1_num: "01 / KIẾN TRÚC",
    eng_card1_title: "Kỹ Thuật Ưu Tiên Nghiệp Vụ",
    eng_card1_desc: "Lựa chọn công nghệ giải quyết đúng bài toán kinh doanh, không làm phức tạp hóa hệ thống hay lệ thuộc nhà cung cấp.",

    eng_card2_num: "02 / ĐỘ ỔN ĐỊNH",
    eng_card2_title: "Quy Trình AI Tất Định",
    eng_card2_desc: "Giới hạn AI ở vai trò trích xuất cấu trúc dữ liệu, đồng thời kiểm soát 100% logic quyết định bằng mã nguồn chặt chẽ.",

    eng_card3_num: "03 / BẢO MẬT",
    eng_card3_title: "An Toàn Theo Mặc Định",
    eng_card3_desc: "Thực thi xác thực nghiêm ngặt, phân quyền RBAC, kiểm duyệt dữ liệu đầu vào và cô lập bí mật môi trường hoàn toàn.",

    eng_card4_num: "04 / BÀN GIAO",
    eng_card4_title: "CI/CD & Kiểm Thử Tự Động",
    eng_card4_desc: "Môi trường Docker hóa chuẩn mực, kịch bản kiểm thử tự động với GitHub Actions và triển khai không gián đoạn dịch vụ.",

    skills_subtitle: "Kỹ Năng & Công Nghệ",
    skills_title: "Hệ Sinh Thái Full-Stack & AI",
    cat_backend: "Backend & APIs",
    cat_frontend: "Frontend & Giao diện",
    cat_ai: "AI & Tự Động Hóa",
    cat_data: "Dữ Liệu & BI",
    cat_cloud: "Cloud & DevOps",

    certs_subtitle: "Chứng Nhận Chuyên Môn",
    certs_title: "Chứng Chỉ Quốc Tế Đã Xác Thực",
    cert1_desc: "Chứng nhận năng lực chuyên sâu về dịch vụ đám mây AWS, triển khai serverless, thực hành bảo mật chuẩn và đường ống CI/CD.",
    cert2_desc: "Chứng nhận sự am hiểu về các khái niệm Generative AI, mô hình nền tảng, triển khai AI an toàn và kiến trúc AI doanh nghiệp.",
    cert3_desc: "Chứng nhận chuyên môn về mô hình hóa Star-Schema, chuyển đổi Power Query, logic nghiệp vụ DAX và thiết kế dashboard KPI.",
    cert_verified: "Chứng Chỉ Đã Xác Thực",

    est_badge: "Công Cụ Tương Tác Dành Cho Khách Hàng",
    est_title: "Ước Tính Phạm Vi & Bản Nháp Yêu Cầu Dự Án",
    est_desc: "Chọn các yêu cầu cho dự án của bạn để tính toán thời gian hoàn thành dự kiến và tự động tạo bản nháp email đề xuất hợp tác.",
    est_step1: "1. Chọn Loại Dự Án",
    opt_saas: "Full-Stack SaaS",
    opt_saas_desc: "MVP / Cổng TT / Web App",
    opt_ai: "Hệ Thống AI & RAG",
    opt_ai_desc: "Trợ lý / Tra cứu Tài liệu",
    opt_auto: "Tự Động Hóa Luồng",
    opt_auto_desc: "n8n / Webhooks / APIs",
    opt_bi: "Power BI & Dữ Liệu",
    opt_bi_desc: "ETL / Dashboard KPI",

    est_step2: "2. Thêm Module Nâng Cao",
    addon_billing: "Thanh toán Stripe",
    addon_billing_time: "+1 tuần",
    addon_ai: "Tích hợp AI / LLM",
    addon_ai_time: "+1-2 tuần",
    addon_devops: "Docker & AWS CI/CD",
    addon_devops_time: "+3-5 ngày",

    est_summary_lbl: "Thời Gian Hoàn Thành Dự Kiến",
    est_summary_sub: "Bao gồm thiết kế kiến trúc, lập trình, kiểm thử và triển khai lên môi trường thực tế.",
    btn_gen_inquiry: "Tạo Bản Nháp Đề Xuất",

    contact_badge: "Kết Nối Với Tôi",
    contact_title: "Bạn Đang Có Dự Án Cần Triển Khai?",
    contact_desc: "Tôi sẵn sàng nhận các dự án phát triển freelance, tư vấn kỹ thuật kiến trúc và hợp đồng lập trình. Hãy liên hệ qua Email, Upwork hoặc LinkedIn.",
    contact_email_lbl: "Email Trực Tiếp",
    contact_upwork_lbl: "Hồ Sơ Upwork Đã Xác Thực",

    form_title: "Gửi Tin Nhắn Trực Tiếp",
    form_name: "Tên của bạn",
    form_email: "Email của bạn",
    form_subject: "Chủ đề / Yêu cầu dự án",
    form_message: "Nội dung tin nhắn",
    btn_send: "Gửi Tin Nhắn Qua Email",

    footer_copy: "© 2026 Joy Tran (t2adung). Bản quyền được bảo lưu.",
    footer_top: "Lên Đầu Trang ↑",

    modal_repo_lbl: "Thư mục mã nguồn",
    modal_close: "Đóng",
    modal_discuss: "Thảo Luận Dự Án Tương Tự",

    toast_email_copied: "Đã sao chép email vào bộ nhớ tạm!",
    toast_inquiry_drafted: "Đã tạo bản nháp yêu cầu trong form liên hệ bên dưới!"
  }
};

// 3. Case Studies Detailed Data (Bilingual)
const caseStudiesData = {
  en: {
    "ai-powered-saas": {
      title: "AI-Powered SaaS Application",
      subtitle: "Production-Style SaaS Architecture with Multi-Tenancy & AI Workflows",
      category: "Full-Stack SaaS",
      status: "Production Ready",
      repoPath: "./ai-powered-saas",
      problem: "Modern SaaS platforms require enterprise multi-tenancy, usage-based billing, robust background workers, and AI capabilities without tightly coupling business logic to volatile AI APIs.",
      solution: "Engineered a decoupled, modular Laravel + Vue 3 architecture. Implemented tenant-isolated databases, asynchronous queue workers for LLM requests, Stripe billing webhooks, and Redis token bucket rate limiters.",
      architecture: `User
 ↓
Web App (Vue 3 / React SPA)
 ↓
Laravel REST API (Auth & Multi-Tenancy)
 ↓
PostgreSQL (Tenant Schemas) + Redis (Queues)
 ↓
AI Provider Gateway (OpenAI / Anthropic)
 ↓
RAG & Vector Retrieval
 ↓
AI Agent & Background Workers ---> Real-time Result`,
      features: [
        "Multi-tenant data isolation and organization workspaces",
        "Stripe subscription billing with usage quotas & tier enforcement",
        "Asynchronous background LLM generation with real-time UI polling",
        "Granular team role-based access control (RBAC)",
        "Comprehensive audit logging and health check endpoints"
      ],
      techStack: ["PHP 8.2", "Laravel 10", "Vue 3 / TypeScript", "PostgreSQL", "Redis", "Stripe API", "AWS EC2/S3", "Docker", "GitHub Actions"],
      engineeringHighlights: [
        "Demonstrates: Full-stack SaaS, REST API, Database isolation, Cloud hosting, AI integration, Stripe payment, and JWT authentication.",
        "Provider-Agnostic AI Interface: Swapping OpenAI for Anthropic requires zero changes to core domain logic.",
        "Resilient Webhooks: Stripe webhook events are cryptographically verified and queued with exponential backoff.",
        "Automated CI/CD: GitHub Actions running PHPUnit, Pest, ESLint, and automated Docker build testing."
      ]
    },

    "ai-business-automation": {
      title: "AI Business Workflow Automation",
      subtitle: "Event-Driven Automation with LLM Extraction & Deterministic Rules",
      category: "AI & Automation",
      status: "Production Ready",
      repoPath: "./ai-business-automation",
      problem: "High volume customer inquiries, inbound vendor invoices, and support tickets overwhelm operations, causing slow response times and manual data entry errors.",
      solution: "Designed an automated orchestration pipeline using n8n and Python microservices. Unstructured documents are parsed using LLM schema-constrained JSON extraction, passed through deterministic validation rules, and synced directly to CRM/PostgreSQL with a human-in-the-loop fallback.",
      architecture: `[Inbound Trigger: Email / Webhook / S3 Upload]
                 |
                 v
     [n8n Workflow Orchestrator]
                 |
        +--------+--------+
        |                 |
        v                 v
[LLM JSON Extraction]  [Deterministic Rule Engine]
(Pydantic Validation)    (Business Logic Verification)
        |                 |
        +--------+--------+
                 |
                 v
    [PostgreSQL & CRM API Sync]
                 |
        +--------+--------+
        |                 |
        v                 v
[Slack Notification]  [Human Review Queue (If Confidence < 90%)]`,
      features: [
        "Automatic parsing and classification of invoices, RFQs, and support emails",
        "Strict Pydantic JSON schema extraction preventing LLM hallucinations",
        "Automated retry mechanisms with Dead Letter Queues (DLQ)",
        "Slack/Email alerting on failed validations and exception routing",
        "Audit trail database recording full prompt, model response, and execution cost"
      ],
      techStack: ["n8n", "Python 3.11", "OpenAI / Claude / Gemini APIs", "Pydantic", "PostgreSQL", "Docker", "Webhooks", "Slack API"],
      engineeringHighlights: [
        "Zero-Hallucination Guarantee: Financial calculations and critical business decisions are executed strictly in deterministic Python code, never trusted to raw LLM math.",
        "Cost Optimization: Implemented semantic caching and token-efficient prompt templates, reducing API costs by 65%."
      ]
    },

    "ai-knowledge-assistant": {
      title: "Enterprise AI Knowledge Assistant",
      subtitle: "RAG Engine with pgvector, Semantic Search & Source Citation",
      category: "RAG & AI Search",
      status: "Production Ready",
      repoPath: "./ai-knowledge-assistant",
      problem: "Teams waste hours searching across fragmented PDFs, company policies, and technical handbooks using keyword search that fails to understand context.",
      solution: "Built an enterprise-grade Retrieval-Augmented Generation (RAG) platform with FastAPI and PostgreSQL pgvector. Documents are chunked using recursive semantic splitters, embedded, and retrieved with hybrid re-ranking to provide factual answers citing specific page numbers.",
      architecture: `[Internal Documents (PDF / DOCX / Markdown)]
                    |
                    v
    [Extraction & Semantic Chunking Engine]
                    |
                    v
   [Embedding Generation (OpenAI / Cohere)]
                    |
                    v
    [PostgreSQL + pgvector (HNSW Index)]
                    ^
                    |
[User Query] -> [Hybrid Search / Re-Ranker] -> [LLM Context Assembly]
                                                      |
                                                      v
                                        [Grounded Answer + Citations]`,
      features: [
        "Multi-document format ingestion pipeline (PDF, Markdown, Office docs)",
        "Hybrid dense & sparse vector retrieval using pgvector HNSW indexing",
        "Source citation highlighting with direct clickable page references",
        "Conversational memory with semantic relevance pruning",
        "Document-level access control permissions (RBAC)"
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LangChain / LlamaIndex", "OpenAI Embeddings", "TypeScript", "Docker"],
      engineeringHighlights: [
        "Grounded Factuality: Prompt templates strictly enforce 'No extrapolation' constraints to prevent incorrect guidance.",
        "Sub-second Response Time: Optimized pgvector queries with HNSW indexing and metadata filtering."
      ]
    },

    "business-intelligence-dashboard": {
      title: "Executive BI & KPI Dashboard",
      subtitle: "Dimensional Data Modeling, Advanced DAX & Executive Analytics",
      category: "Data & BI",
      status: "Production Ready",
      repoPath: "./business-intelligence-dashboard",
      problem: "Business executives struggled with scattered spreadsheets, inconsistent metric definitions, and lack of real-time visibility into revenue and churn.",
      solution: "Architected a star-schema data model in Power BI, unified disparate data sources via Power Query M transformations, and engineered reusable DAX business measures for MRR, CAC, LTV, and customer cohort retention.",
      architecture: `[Operational Databases / Stripe / CRM / Sheets]
                       |
                       v
         [Power Query ETL & Data Cleansing]
                       |
                       v
        [Star-Schema Dimensional Model]
          - Fact: Transactions / Subscriptions
          - Dim: Customers, Products, Dates, Plans
                       |
                       v
       [Optimized DAX Calculation Engine]
    (MRR, Churn Rate, LTV, YoY Growth, Cohorts)
                       |
                       v
      [Interactive Executive KPI Dashboard]
    (Executive Overview, Cohort Heatmap, Drilldowns)`,
      features: [
        "Star-schema data architecture optimized for fast drill-down analytics",
        "Comprehensive DAX calculation library for SaaS recurring revenue and cohort analysis",
        "Automated scheduled data refresh with row-level security (RLS)",
        "Executive summary views with dynamic KPI variance indicators"
      ],
      techStack: ["Microsoft Power BI", "DAX", "Power Query (M)", "SQL", "PostgreSQL", "Data Modeling (Star Schema)"],
      engineeringHighlights: [
        "Single Source of Truth: Created unified definitions for key metrics, eliminating conflicting internal reports.",
        "Performance Tuning: Removed high-cardinality unused columns and optimized DAX iterators, reducing dashboard render time to under 1.5s."
      ]
    },

    "data-automation-pipeline": {
      title: "Automated Data ETL Pipeline",
      subtitle: "Fault-Tolerant API Ingestion, Schema Validation & Storage",
      category: "Data Engineering",
      status: "Production Ready",
      repoPath: "./data-automation-pipeline",
      problem: "Manual data exports from third-party vendor APIs were prone to rate limit timeouts, silent schema drifts, and partial load failures.",
      solution: "Developed a resilient Python ETL pipeline that extracts from rate-limited REST endpoints, validates payload structures with Pydantic, applies idempotent upserts into PostgreSQL, and sends automated health alerts.",
      architecture: `[Third-Party REST APIs / Partner Webhooks]
                       |
                       v
     [Extractor with Token Bucket & Exponential Backoff]
                       |
                       v
        [Pydantic Data Validation & Type Coercion]
                       |
                       v
      [Transformation & Schema Normalization]
                       |
                       v
     [Idempotent PostgreSQL Upsert Engine (ON CONFLICT)]
                       |
                       v
          [Automated Data Health & Alerting]`,
      features: [
        "Configurable rate limiting with automated retry and backoff handling",
        "Strict schema validation catching API contract breaks before DB writes",
        "100% idempotent upsert logic preventing duplicate transaction records",
        "Automated logging and metric tracking for extraction volume and latency",
        "Containerized deployment ready for AWS ECS / Cron scheduling"
      ],
      techStack: ["Python 3.11", "PostgreSQL", "Pydantic", "SQLAlchemy", "Docker", "AWS S3 / EC2", "REST APIs"],
      engineeringHighlights: [
        "Idempotency by Design: Safe to re-run any batch at any time without risking data corruption.",
        "Fault Isolation: Broken records are routed to an error quarantine table without halting the entire pipeline."
      ]
    }
  },

  vi: {
    "ai-powered-saas": {
      title: "Ứng Dụng SaaS Tích Hợp AI",
      subtitle: "Kiến Trúc SaaS Chuẩn Sản Xuất Đa Người Dùng & Tác Vụ AI",
      category: "Full-Stack SaaS",
      status: "Sẵn Sàng Vận Hành",
      repoPath: "./ai-powered-saas",
      problem: "Các nền tảng SaaS hiện đại cần giải quyết bài toán đa tổ chức (Multi-tenancy), tính phí theo mức sử dụng, xử lý hàng đợi ngầm và tích hợp AI mà không làm phụ thuộc chặt chẽ logic kinh doanh vào API của bên thứ ba.",
      solution: "Thiết kế kiến trúc module hóa phân tách giữa Laravel & Vue 3. Triển khai cô lập cơ sở dữ liệu theo tenant, công nhân hàng đợi bất đồng bộ xử lý yêu cầu LLM, webhook thanh toán Stripe và giới hạn tần suất Redis Token Bucket.",
      architecture: `Người Dùng (User)
 ↓
Giao Diện Web App (Vue 3 / React SPA)
 ↓
Laravel REST API (Xác Thực Auth & Đa Tổ Chức)
 ↓
PostgreSQL (Cơ Sở Dữ Liệu) + Redis (Hàng Đợi Queues)
 ↓
Cổng AI Provider (OpenAI / Anthropic / Gemini)
 ↓
Truy Xuất Dữ Liệu RAG & Embeddings
 ↓
Tác Tử AI (Agent) & Worker Ngầm ---> Trả Kết Quả Real-Time`,
      features: [
        "Cô lập dữ liệu đa người dùng và phân chia không gian làm việc tổ chức",
        "Thanh toán thuê bao Stripe tự động với hạn mức và gói dịch vụ linh hoạt",
        "Sinh nội dung AI bất đồng bộ dưới nền kèm cơ chế cập nhật giao diện thời gian thực",
        "Phân quyền người dùng theo vai trò chi tiết (RBAC)",
        "Ghi log kiểm toán đầy đủ và giám sát trạng thái hệ thống qua endpoint"
      ],
      techStack: ["PHP 8.2", "Laravel 10", "Vue 3 / TypeScript", "PostgreSQL", "Redis", "Stripe API", "AWS EC2/S3", "Docker", "GitHub Actions"],
      engineeringHighlights: [
        "Minh Chứng Năng Lực Toàn Diện: Full-stack, SaaS, REST API, Database isolation, Cloud, AI integration, Payment Stripe, Authentication.",
        "Giao diện AI Độc lập Nền tảng: Thay đổi giữa OpenAI và Anthropic mà không cần sửa đổi bất kỳ logic cốt lõi nào.",
        "Webhook Bền vững: Các sự kiện thanh toán từ Stripe được ký số xác thực và lưu vào hàng đợi có cơ chế retry lũy thừa.",
        "CI/CD Tự động hóa: Quy trình GitHub Actions chạy toàn bộ PHPUnit, Pest, ESLint và kiểm thử build Docker tự động."
      ]
    },

    "ai-business-automation": {
      title: "Tự Động Hóa Quy Trình Nghiệp Vụ Với AI",
      subtitle: "Tự Động Hóa Dựa Trên Sự Kiện Kết Hợp LLM & Quy Tắc Tất Định",
      category: "AI & Tự Động Hóa",
      status: "Sẵn Sàng Vận Hành",
      repoPath: "./ai-business-automation",
      problem: "Khối lượng lớn email yêu cầu báo giá, hóa đơn nhà cung cấp và vé hỗ trợ gây quá tải cho bộ phận vận hành, dẫn đến chậm trễ và sai sót khi nhập liệu thủ công.",
      solution: "Xây dựng luồng điều phối tự động kết hợp n8n và vi dịch vụ Python. Tài liệu phi cấu trúc được LLM trích xuất thành JSON theo Schema Pydantic nghiêm ngặt, đi qua bộ quy tắc kinh doanh xác thực và đồng bộ vào CRM/PostgreSQL với cơ chế duyệt thủ công khi cần.",
      architecture: `[Sự kiện Kích hoạt: Email / Webhook / S3 Upload]
                 |
                 v
      [Bộ Điều phối Luồng n8n]
                 |
        +--------+--------+
        |                 |
        v                 v
[Trích xuất JSON qua LLM] [Bộ Quy tắc Nghiệp vụ Tất định]
  (Xác thực Pydantic)      (Kiểm tra Logic Kinh doanh)
        |                 |
        +--------+--------+
                 |
                 v
   [Đồng bộ PostgreSQL & CRM API]
                 |
        +--------+--------+
        |                 |
        v                 v
[Thông báo Slack]    [Hàng đợi Duyệt Thủ công (Nếu Độ tin cậy < 90%)]`,
      features: [
        "Tự động phân loại và trích xuất hóa đơn, yêu cầu báo giá, email hỗ trợ",
        "Ràng buộc schema Pydantic ngăn chặn triệt để hiện tượng AI ảo giác (Hallucination)",
        "Cơ chế tự động thử lại với Dead Letter Queue (DLQ) khi xảy ra lỗi",
        "Cảnh báo Slack/Email tức thì khi có lỗi xác thực và định tuyến ngoại lệ",
        "Cơ sở dữ liệu lưu vết kiểm toán đầy đủ prompt, kết quả và chi phí token"
      ],
      techStack: ["n8n", "Python 3.11", "OpenAI / Claude / Gemini APIs", "Pydantic", "PostgreSQL", "Docker", "Webhooks", "Slack API"],
      engineeringHighlights: [
        "Đảm Bảo Không Sai Lệch Số Liệu: Mọi phép tính tài chính và quyết định quan trọng đều do code Python thuần thực hiện.",
        "Tối Ưu Chi Phí: Ứng dụng Semantic Caching và cấu trúc Prompt ngắn gọn, giảm đến 65% chi phí API hàng tháng."
      ]
    },

    "ai-knowledge-assistant": {
      title: "Trợ Lý Tri Thức Doanh Nghiệp RAG",
      subtitle: "Công Cụ RAG Với pgvector, Tìm Kiếm Ngữ Nghĩa & Trích Dẫn Nguồn",
      category: "Tìm kiếm RAG & AI",
      status: "Sẵn Sàng Vận Hành",
      repoPath: "./ai-knowledge-assistant",
      problem: "Đội ngũ nhân sự mất hàng giờ tìm kiếm trong hàng trăm tài liệu PDF, quy định công ty và tài liệu kỹ thuật rải rác vì tìm kiếm từ khóa không hiểu ngữ cảnh.",
      solution: "Phát triển nền tảng RAG cấp doanh nghiệp sử dụng FastAPI và PostgreSQL pgvector. Tài liệu được phân đoạn ngữ nghĩa, tạo vector embedding và truy xuất kết hợp Re-ranking để câu trả lời dẫn chứng rõ ràng số trang cụ thể.",
      architecture: `[Tài liệu Nội bộ (PDF / DOCX / Markdown)]
                    |
                    v
     [Pipeline Trích xuất & Phân đoạn Ngữ nghĩa]
                    |
                    v
      [Tạo Embedding (OpenAI / Cohere)]
                    |
                    v
    [PostgreSQL + pgvector (Chỉ mục HNSW)]
                    ^
                    |
[Câu hỏi User] -> [Truy xuất Kết hợp / Re-Ranker] -> [Lắp ráp Ngữ cảnh LLM]
                                                          |
                                                          v
                                            [Câu trả lời + Trích dẫn Nguồn]`,
      features: [
        "Quy trình xử lý nhiều định dạng tài liệu (PDF, Word, Markdown)",
        "Truy xuất vector lai (Dense & Sparse) với chỉ mục pgvector HNSW tốc độ cao",
        "Đánh dấu trích dẫn nguồn có thể bấm trực tiếp để đối chiếu số trang",
        "Bộ nhớ hội thoại thông minh tự động loại bỏ ngữ cảnh thừa",
        "Phân quyền truy cập tài liệu theo cấp độ người dùng (RBAC)"
      ],
      techStack: ["Python", "FastAPI", "PostgreSQL", "pgvector", "LangChain / LlamaIndex", "OpenAI Embeddings", "TypeScript", "Docker"],
      engineeringHighlights: [
        "Tính Chân Thực Cao: Prompt kiểm soát nghiêm ngặt ràng buộc 'Không suy đoán ngoài tài liệu' để đảm bảo câu trả lời chuẩn xác.",
        "Phản Hồi Dưới 1 Giây: Tối ưu hóa truy vấn pgvector với chỉ mục HNSW và bộ lọc Metadata."
      ]
    },

    "business-intelligence-dashboard": {
      title: "Dashboard BI & Chỉ Số KPI Điều Hành",
      subtitle: "Mô Hình Hóa Dữ Liệu Chiều, DAX Nâng Cao & Phân Tích Điều Hành",
      category: "Dữ Liệu & BI",
      status: "Sẵn Sàng Vận Hành",
      repoPath: "./business-intelligence-dashboard",
      problem: "Ban lãnh đạo gặp khó khăn khi số liệu nằm rải rác ở nhiều bảng tính Excel, định nghĩa chỉ số không thống nhất và thiếu tầm nhìn doanh thu thời gian thực.",
      solution: "Thiết kế mô hình dữ liệu hình sao (Star-Schema) trên Power BI, hợp nhất các nguồn dữ liệu qua Power Query M và xây dựng bộ đo DAX tính toán MRR, CAC, LTV và tỷ lệ giữ chân khách hàng.",
      architecture: `[Dữ liệu Vận hành / Stripe / CRM / Sheets]
                       |
                       v
         [ETL & Làm sạch qua Power Query]
                       |
                       v
         [Mô hình Dữ liệu Chiều Star-Schema]
          - Fact: Giao dịch / Thuê bao
          - Dim: Khách hàng, Sản phẩm, Ngày tháng, Gói
                       |
                       v
        [Bộ Công thức Tính toán DAX Tối ưu]
    (MRR, Churn Rate, LTV, Tăng trưởng YoY, Cohort)
                       |
                       v
       [Dashboard KPI Tương tác Dành cho Điều hành]
    (Tổng quan Điều hành, Bản đồ Nhiệt Cohort, Drilldown)`,
      features: [
        "Kiến trúc dữ liệu hình sao tối ưu cho phân tích đào sâu (Drill-down)",
        "Thư viện công thức DAX toàn diện cho doanh thu định kỳ SaaS và phân tích Cohort",
        "Lên lịch làm mới dữ liệu tự động kèm phân quyền bảo mật cấp dòng (RLS)",
        "Giao diện tổng quan trực quan với chỉ số biến động KPI so với kỳ trước"
      ],
      techStack: ["Microsoft Power BI", "DAX", "Power Query (M)", "SQL", "PostgreSQL", "Mô hình hóa Star Schema"],
      engineeringHighlights: [
        "Nguồn Chân Lý Duy Nhất (Single Source of Truth): Chuẩn hóa định nghĩa các chỉ số kinh doanh, chấm dứt mâu thuẫn số liệu.",
        "Tối Ưu Hiệu Năng: Loại bỏ các cột có độ biến thiên cao không dùng đến và tối ưu hàm lặp DAX, giảm thời gian tải dashboard xuống dưới 1.5s."
      ]
    },

    "data-automation-pipeline": {
      title: "Pipeline Tự Động Hóa ETL Dữ Liệu",
      subtitle: "Hút Dữ Liệu API Chịu Lỗi, Xác Thực Schema & Lưu Trữ Phân Tích",
      category: "Kỹ Thuật Dữ Liệu",
      status: "Sẵn Sàng Vận Hành",
      repoPath: "./data-automation-pipeline",
      problem: "Việc xuất dữ liệu thủ công từ API của các đối tác bên thứ ba thường xuyên bị ngắt quãng do giới hạn Rate Limit, lệch Schema ngầm và lỗi nạp dữ liệu một phần.",
      solution: "Phát triển đường ống ETL Python chịu lỗi cao trích xuất từ các endpoint REST, xác thực cấu trúc qua Pydantic, thực hiện Upsert Idempotent vào PostgreSQL và gửi cảnh báo tự động.",
      architecture: `[REST APIs Đối tác / Webhooks]
                       |
                       v
     [Bộ Trích xuất có Rate Limiter & Exponential Backoff]
                       |
                       v
        [Xác thực Cấu trúc Dữ liệu & Ép kiểu Pydantic]
                       |
                       v
       [Chuyển đổi & Chuẩn hóa Schema Phân tích]
                       |
                       v
      [Bộ Ghi PostgreSQL Idempotent (ON CONFLICT)]
                       |
                       v
          [Cảnh báo & Giám sát Sức khỏe Dữ liệu]`,
      features: [
        "Kiểm soát tốc độ gọi API với cơ chế tự động thử lại và lùi thời gian (Backoff)",
        "Xác thực schema chặt chẽ phát hiện sớm sự thay đổi API trước khi ghi vào DB",
        "Logic Upsert Idempotent 100% ngăn ngừa trùng lặp bản ghi khi chạy lại",
        "Ghi log tự động theo dõi dung lượng dữ liệu và độ trễ từng đợt đồng bộ",
        "Đóng gói Docker sẵn sàng chạy định kỳ trên AWS ECS hoặc Cron Job"
      ],
      techStack: ["Python 3.11", "PostgreSQL", "Pydantic", "SQLAlchemy", "Docker", "AWS S3 / EC2", "REST APIs"],
      engineeringHighlights: [
        "Nguyên Tắc Idempotency: Có thể kích hoạt chạy lại bất kỳ lúc nào mà không bao giờ lo trùng lặp hay hỏng dữ liệu.",
        "Cách Ly Lỗi: Các bản ghi lỗi được chuyển vào bảng cách ly riêng mà không làm dừng toàn bộ tiến trình."
      ]
    }
  }
};

// 4. DOM Ready Initializer
document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitcher();
  initProjectFiltering();
  initCaseStudyModal();
  initEstimatorWidget();
  initContactForm();
  initCopyEmail();
  initMobileMenu();
  initScrollSpy();

  // Apply initial language
  setLanguage(currentLang);
});

// 5. Language Switcher Engine
function initLanguageSwitcher() {
  const switchers = document.querySelectorAll("#langSwitcher, #mobileLangSwitcher");

  switchers.forEach(switcher => {
    const btns = switcher.querySelectorAll(".lang-btn");
    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        const selectedLang = btn.getAttribute("data-lang");
        if (selectedLang && selectedLang !== currentLang) {
          setLanguage(selectedLang);
        }
      });
    });
  });
}

function setLanguage(lang) {
  if (!i18n[lang]) return;
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);

  // Update URL parameter without reload
  const url = new URL(window.location);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url);

  // Update Language Switcher UI buttons
  document.querySelectorAll(".lang-btn").forEach(btn => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active", "text-white", "bg-sky-600");
      btn.classList.remove("text-slate-600");
    } else {
      btn.classList.remove("active", "text-white", "bg-sky-600");
      btn.classList.add("text-slate-600");
    }
  });

  // Translate all DOM elements with data-i18n
  const dict = i18n[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Hero Title HTML
  const heroHeading = document.getElementById("heroHeading");
  if (heroHeading && dict.hero_title_raw) {
    heroHeading.innerHTML = dict.hero_title_raw;
  }

  // Hero Bio HTML
  const heroBio = document.querySelector('[data-i18n="hero_bio"]');
  if (heroBio && dict.hero_bio) {
    heroBio.innerHTML = dict.hero_bio;
  }

  // Code card strings
  const codeStatus = document.getElementById("codeStatus");
  const codeDelivery = document.getElementById("codeDelivery");
  if (codeStatus) codeStatus.textContent = dict.code_status;
  if (codeDelivery) codeDelivery.textContent = dict.code_delivery;

  // Form placeholders
  const nameInput = document.getElementById("senderName");
  const emailInput = document.getElementById("senderEmail");
  const subjectInput = document.getElementById("subject");
  const messageInput = document.getElementById("message");

  if (lang === "vi") {
    nameInput?.setAttribute("placeholder", "Nguyễn Văn A");
    emailInput?.setAttribute("placeholder", "nguyen@company.com");
    subjectInput?.setAttribute("placeholder", "Dự án: Phát triển MVP SaaS Tích hợp AI");
    messageInput?.setAttribute("placeholder", "Mô tả ngắn gọn mục tiêu, thời hạn và yêu cầu cốt lõi của bạn...");
  } else {
    nameInput?.setAttribute("placeholder", "Jane Doe");
    emailInput?.setAttribute("placeholder", "jane@company.com");
    subjectInput?.setAttribute("placeholder", "Project: AI SaaS MVP Development");
    messageInput?.setAttribute("placeholder", "Describe your timeline, goals, and core requirements...");
  }

  // Recalculate estimator
  const form = document.getElementById("estimatorForm");
  if (form) {
    form.dispatchEvent(new Event("change"));
  }
}

// 6. Project Filter Tabs
function initProjectFiltering() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => {
        b.classList.remove("active", "text-white", "bg-sky-600", "shadow-md");
        b.classList.add("text-slate-600");
      });

      btn.classList.add("active");
      btn.classList.remove("text-slate-600");

      const filter = btn.getAttribute("data-filter");

      projectCards.forEach(card => {
        const category = card.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          card.style.display = "flex";
          card.style.opacity = "0";
          setTimeout(() => {
            card.style.transition = "opacity 0.25s ease";
            card.style.opacity = "1";
          }, 10);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

// 7. Case Study Modal Engine (Bilingual)
function initCaseStudyModal() {
  const modal = document.getElementById("caseStudyModal");
  const openBtns = document.querySelectorAll(".open-case-modal");
  const closeBtn = document.getElementById("closeModalBtn");
  const closeBtn2 = document.getElementById("closeModalBtn2");

  const modalCategory = document.getElementById("modalCategory");
  const modalStatus = document.getElementById("modalStatus");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalRepoPath = document.getElementById("modalRepoPath");
  const modalBody = document.getElementById("modalBody");

  function openModal(projectId) {
    const langData = caseStudiesData[currentLang] || caseStudiesData["en"];
    const data = langData[projectId];
    if (!data) return;

    modalCategory.textContent = data.category;
    modalStatus.textContent = data.status;
    modalTitle.textContent = data.title;
    modalSubtitle.textContent = data.subtitle;
    modalRepoPath.textContent = data.repoPath;

    const problemLbl = currentLang === "vi" ? "BÀI TOÁN & VẤN ĐỀ" : "THE PROBLEM";
    const solutionLbl = currentLang === "vi" ? "GIẢI PHÁP TRIỂN KHAI" : "THE SOLUTION";
    const archLbl = currentLang === "vi" ? "SƠ ĐỒ KIẾN TRÚC HỆ THỐNG" : "SYSTEM ARCHITECTURE";
    const featLbl = currentLang === "vi" ? "TÍNH NĂNG & NĂNG LỰC CỐT LÕI" : "KEY CAPABILITIES & DELIVERABLES";
    const highLbl = currentLang === "vi" ? "ĐIỂM NHẤN KỸ THUẬT CHUẨN SENIOR" : "SENIOR ENGINEERING HIGHLIGHTS";
    const techLbl = currentLang === "vi" ? "CÔNG NGHỆ ÁP DỤNG" : "TECHNOLOGY STACK";

    modalBody.innerHTML = `
      <!-- Problem & Solution -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-xs font-mono font-bold text-rose-700 mb-1">${problemLbl}</div>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${data.problem}</p>
        </div>
        <div class="p-4 rounded-xl bg-slate-50 border border-slate-200">
          <div class="text-xs font-mono font-bold text-emerald-700 mb-1">${solutionLbl}</div>
          <p class="text-xs sm:text-sm text-slate-700 leading-relaxed">${data.solution}</p>
        </div>
      </div>

      <!-- Architecture Diagram -->
      <div>
        <div class="text-xs font-mono font-bold text-sky-700 mb-2">${archLbl}</div>
        <pre class="arch-diagram"><code>${escapeHtml(data.architecture)}</code></pre>
      </div>

      <!-- Key Features -->
      <div>
        <div class="text-xs font-mono font-bold text-indigo-700 mb-2">${featLbl}</div>
        <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          ${data.features.map(f => `<li class="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-200"><span class="text-emerald-600 font-bold mt-0.5">✔</span> <span>${f}</span></li>`).join('')}
        </ul>
      </div>

      <!-- Engineering Highlights -->
      <div>
        <div class="text-xs font-mono font-bold text-amber-700 mb-2">${highLbl}</div>
        <div class="space-y-2">
          ${data.engineeringHighlights.map(h => `<div class="text-xs text-slate-800 bg-slate-50 p-3 rounded-lg border border-slate-200 font-mono">${h}</div>`).join('')}
        </div>
      </div>

      <!-- Tech Stack -->
      <div>
        <div class="text-xs font-mono font-bold text-slate-600 mb-2">${techLbl}</div>
        <div class="flex flex-wrap gap-1.5">
          ${data.techStack.map(t => `<span class="tech-tag text-xs">${t}</span>`).join('')}
        </div>
      </div>
    `;

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  }

  function closeModal() {
    modal.classList.add("hidden");
    document.body.style.overflow = "auto";
  }

  openBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const projectId = btn.getAttribute("data-project");
      openModal(projectId);
    });
  });

  closeBtn?.addEventListener("click", closeModal);
  closeBtn2?.addEventListener("click", closeModal);

  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
      closeModal();
    }
  });
}

// 8. Project Estimator Widget
function initEstimatorWidget() {
  const form = document.getElementById("estimatorForm");
  const estimatedTimeEl = document.getElementById("estimatedTime");
  const generateBtn = document.getElementById("generateInquiryBtn");

  if (!form || !estimatedTimeEl) return;

  function calculateEstimate() {
    const projectType = form.querySelector('input[name="projectType"]:checked')?.value || "saas_mvp";
    const addons = Array.from(form.querySelectorAll('input[name="addons"]:checked')).map(cb => cb.value);

    let baseWeeksMin = 2;
    let baseWeeksMax = 4;

    if (projectType === "saas_mvp") {
      baseWeeksMin = 3;
      baseWeeksMax = 6;
    } else if (projectType === "ai_rag") {
      baseWeeksMin = 2;
      baseWeeksMax = 4;
    } else if (projectType === "workflow_automation") {
      baseWeeksMin = 1;
      baseWeeksMax = 3;
    } else if (projectType === "bi_pipeline") {
      baseWeeksMin = 2;
      baseWeeksMax = 3;
    }

    if (addons.includes("billing")) {
      baseWeeksMin += 1;
      baseWeeksMax += 1;
    }
    if (addons.includes("ai_llm")) {
      baseWeeksMin += 1;
      baseWeeksMax += 2;
    }
    if (addons.includes("devops")) {
      baseWeeksMax += 1;
    }

    const unit = currentLang === "vi" ? "Tuần" : "Weeks";
    estimatedTimeEl.textContent = `${baseWeeksMin} - ${baseWeeksMax} ${unit}`;
  }

  form.addEventListener("change", calculateEstimate);
  calculateEstimate();

  generateBtn?.addEventListener("click", () => {
    const projectType = form.querySelector('input[name="projectType"]:checked')?.value || "Custom Project";
    const timeframe = estimatedTimeEl.textContent;
    
    // Fill contact form
    const subjectInput = document.getElementById("subject");
    const messageInput = document.getElementById("message");

    if (subjectInput && messageInput) {
      if (currentLang === "vi") {
        subjectInput.value = `Yêu Cầu Dự Án: ${projectType.toUpperCase().replace('_', ' ')} (${timeframe})`;
        messageInput.value = `Chào Joy,\n\nTôi muốn trao đổi về dự án ${projectType.replace('_', ' ')} với tiến độ mong muốn khoảng ${timeframe}.\n\nCác yêu cầu cốt lõi:\n- [Mô tả chi tiết tại đây]\n\nRất mong sớm nhận được phản hồi từ bạn!`;
      } else {
        subjectInput.value = `Project Inquiry: ${projectType.toUpperCase().replace('_', ' ')} (${timeframe})`;
        messageInput.value = `Hi Joy,\n\nI am interested in collaborating on a ${projectType.replace('_', ' ')} project. We have a target timeline of ${timeframe}.\n\nCore requirements:\n- [Add details here]\n\nLooking forward to hearing from you!`;
      }
      
      // Scroll to contact section
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      const toastMsg = currentLang === "vi" ? i18n.vi.toast_inquiry_drafted : i18n.en.toast_inquiry_drafted;
      showToast(toastMsg);
    }
  });
}

// 9. Contact Form Submission (Mailto Trigger)
function initContactForm() {
  const form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("senderName").value;
    const email = document.getElementById("senderEmail").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    const mailtoBody = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${encodeURIComponent(message)}`;
    const mailtoUrl = `mailto:t2adung@gmail.com?subject=${encodeURIComponent(subject)}&body=${mailtoBody}`;

    window.location.href = mailtoUrl;
    const toastMsg = currentLang === "vi" ? "Đang mở ứng dụng email của bạn để gửi thư..." : "Opening your email client to send message...";
    showToast(toastMsg);
  });
}

// 10. 1-Click Copy Email
function initCopyEmail() {
  const heroCopyBtn = document.getElementById("copyEmailBtnHero");

  function copyText(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        const msg = currentLang === "vi" ? i18n.vi.toast_email_copied : i18n.en.toast_email_copied;
        showToast(msg);
      });
    } else {
      const tempInput = document.createElement("input");
      tempInput.value = text;
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
      const msg = currentLang === "vi" ? i18n.vi.toast_email_copied : i18n.en.toast_email_copied;
      showToast(msg);
    }
  }

  heroCopyBtn?.addEventListener("click", () => {
    copyText("t2adung@gmail.com");
  });
}

// 11. Mobile Menu Toggle
function initMobileMenu() {
  const btn = document.getElementById("mobileMenuBtn");
  const menu = document.getElementById("mobileMenu");
  const links = document.querySelectorAll(".mobile-nav-link");

  btn?.addEventListener("click", () => {
    menu.classList.toggle("hidden");
  });

  links.forEach(l => {
    l.addEventListener("click", () => {
      menu.classList.add("hidden");
    });
  });
}

// 12. ScrollSpy for Navigation Links
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let current = "";
    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("text-sky-600", "font-bold", "bg-sky-50");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("text-sky-600", "font-bold", "bg-sky-50");
      }
    });
  });
}

// 13. Toast Helper
function showToast(msg) {
  const toast = document.getElementById("toast");
  const toastMessage = document.getElementById("toastMessage");
  if (!toast || !toastMessage) return;

  toastMessage.textContent = msg;
  toast.classList.remove("hidden");

  setTimeout(() => {
    toast.classList.add("hidden");
  }, 3500);
}

// 14. Helper to escape HTML strings
function escapeHtml(text) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
