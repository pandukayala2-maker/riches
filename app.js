/* ==========================================================================
   Riches Core Integration Controller
   ========================================================================== */

// Translation Dictionaries (English and Arabic)
const translations = {
  en: {
    brand_tagline: "Wealth Management Portal",
    search_placeholder: "Search modules, rates, stocks...",
    profile_role: "Standard View",
    profile_name: "Demo Admin",
    chat_title: "Riches AI Assistant",
    chat_status: "Powered by Riches intelligence • Online",
    chat_input_placeholder: "Ask Bedoor...",
    
    // Tabs
    tab_all: "All Portfolio",
    tab_individual: "Individual Plan",
    tab_investment: "Investment Hub",
    tab_business: "Business Admin",
    tab_admin: "Dynamic Editor",
    
    // View Titles & Descriptions
    title_all: "All Wealth & Management Portfolio",
    desc_all: "A unified view of your expenses, active investments, and business cash flows.",
    title_individual: "Individual Management Plan",
    desc_individual: "Track your private budgeting, salary distributions, and grocery checklists.",
    title_investment: "Investment Hub & Assets",
    desc_investment: "Monitor live stock trends, global real estate assets, gold/silver rates, and new opportunities.",
    title_business: "Business Administration Portal",
    desc_business: "Oversee commercial accounts, bill client invoices, manage credit scores, and log service rates.",
    title_admin: "Riches Dynamic Editor (Admin)",
    desc_admin: "Directly manipulate demo datasets by adding assets, expenses, and opportunities.",
    
    // Splash
    lbl_splash_loading: "Connecting to Ask Bedoor...",
    lbl_mascot_tooltip: "Ask Bedoor",
    lbl_close_chat: "Close Chat",
    lbl_new_chat: "New Chat",
    lbl_sidebar_history: "Recent Chats",
    lbl_toggle_theme_light: "Light Mode",
    lbl_toggle_theme_dark: "Dark Mode",
    lbl_profile_guest: "Guest Account",
    
    // Common terms
    total_wealth: "Estimated Net Worth",
    monthly_budget: "Monthly Budget Limit",
    spent_so_far: "Spent So Far",
    remaining: "Remaining Balance",
    salary: "Base Monthly Salary",
    needs: "Essential Needs (50%)",
    wants: "Wants & Lifestyle (30%)",
    savings: "Savings & Investments (20%)",
    calculator: "Calculator",
    add_item: "Add Item",
    category: "Category",
    amount: "Amount",
    date: "Date",
    title: "Title",
    price: "Price",
    location: "Location",
    roi: "Annual ROI",
    invest: "Invest",
    risk: "Risk Level",
    funding: "Funding Progress",
    status: "Status",
    action: "Action",
    delete: "Delete",
    submit: "Save & Inject",
    success_added: "Item successfully added and displays across dashboards!",
    search_nav_text: "Navigating to matching section...",
    empty_data: "No data items available.",
    
    // Module titles
    mod_expenses: "Personal Expenses",
    mod_salary: "Salary Manager",
    mod_grocery: "Grocery Checklist",
    mod_stocks: "Live Stocks Ticker",
    mod_estate: "Real Estate Marketplace",
    mod_gold: "Gold & Silver Market",
    mod_opportunities: "Business Ventures",
    mod_finance: "Company Finance Flow",
    mod_services: "Service Management",
    mod_credit: "Credit Score & Limits",
    
    // Chatbot lines
    bot_welcome: "Welcome to **Riches Wealth Portal**. I am **Bedoor**, your personal advisor. Click an option below to examine dashboards, or ask me directly (e.g. *'check gold prices'*, *'simulate salary calculator'*, or *'verify invoices'*):",
    bot_individual_desc: "The **Individual Plan** compiles personal budgeting tools, grocery checklists, and salary allocation curves. I have loaded these views for you.",
    bot_investment_desc: "The **Investment Hub** tracks live-fluctuating stock tickets, gold & silver rates, global real estate ROI projections, and startup opportunities. Navigating you there now.",
    bot_business_desc: "The **Business Admin Portal** oversees invoices, cash flow accounts, service listings, and commercial credit scores. Rerouting dashboard.",
    bot_fallback: "I couldn't match that exact command. Try clicking one of the buttons or ask: *'stocks prices'*, *'gold rates'*, *'grocery list'*, *'salary calculator'*, or *'outstanding invoices'*.",
    welcome_title: "Ask Bedoor",
    welcome_subtitle: "Plans & Modules — Select a category to get started:",
    card_title_ind: "Individual",
    card_desc_ind: "Personal Expenses · Salary Management · Grocery Management",
    card_title_inv: "Investment",
    card_desc_inv: "Live Stock · Real Estate · Gold & Silver · Business Opportunities",
    card_title_bus: "Business Management",
    card_desc_bus: "Finance Management · Service Management · Credit Management",
    lbl_login_heading: "Login to Riches",
    lbl_signup_heading: "Create Riches Account",
    lbl_disclaimer: "Riches AI Assistant is a simulated workspace. Do not upload sensitive credentials.",
    toast_login_success: "Logged in successfully!",
    toast_signup_success: "Account created successfully!",
    toast_logout: "Logged out successfully.",
    toast_theme_light: "Light mode activated.",
    toast_theme_dark: "Dark mode activated."
  },
  ar: {
    brand_tagline: "بوابة إدارة الثروات",
    search_placeholder: "ابحث عن الوحدات، الأسعار، الأسهم...",
    profile_role: "العرض القياسي",
    profile_name: "مدير تجريبي",
    chat_title: "مساعد ريتشز الذكي",
    chat_status: "يعمل بالذكاء الاصطناعي • متصل",
    chat_input_placeholder: "اسأل بيدور...",
    
    // Tabs
    tab_all: "المحفظة الشاملة",
    tab_individual: "الخطة الشخصية",
    tab_investment: "مركز الاستثمار",
    tab_business: "إدارة الأعمال",
    tab_admin: "محرر البيانات",
    
    // View Titles & Descriptions
    title_all: "محفظة إدارة الأموال والثروات الشاملة",
    desc_all: "نظرة موحدة على نفقاتك الشخصية، واستثماراتك النشطة، وتدفقاتك المالية التجارية.",
    title_individual: "خطة الإدارة الشخصية للفرد",
    desc_individual: "تتبع ميزانيتك الخاصة، وتوزيع الراتب الشهري، وقوائم المشتريات والسلع الاستهلاكية.",
    title_investment: "مركز الاستثمار والأصول العالمية",
    desc_investment: "راقب تحركات الأسهم الحية، والعقارات العالمية، وأسعار الذهب والفضة والفرص الواعدة.",
    title_business: "بوابة إدارة أعمال الشركات",
    desc_business: "أشرف على الحسابات التجارية، وفواتير العملاء، وتقييم الائتمان، وقائمة أسعار الخدمات المعروضة.",
    title_admin: "محرر بيانات ريتشز (لوحة التحكم)",
    desc_admin: "تلاعب ببيانات العرض التجريبي مباشرةً لإضافة أصول ونفقات وفرص جديدة فوراً.",
    
    // Splash
    lbl_splash_loading: "جاري الاتصال ببيدور...",
    lbl_mascot_tooltip: "اسأل بيدور",
    lbl_close_chat: "إغلاق المحادثة",
    lbl_new_chat: "محادثة جديدة",
    lbl_sidebar_history: "المحادثات السابقة",
    lbl_toggle_theme_light: "الوضع المضيء",
    lbl_toggle_theme_dark: "الوضع الداكن",
    lbl_profile_guest: "حساب زائر",
    
    // Common terms
    total_wealth: "صافي الثروة التقديري",
    monthly_budget: "حد الميزانية الشهري",
    spent_so_far: "المصروف حتى الآن",
    remaining: "المتبقي من الرصيد",
    salary: "الراتب الشهري الأساسي",
    needs: "الاحتياجات الأساسية (50%)",
    wants: "الكماليات والترفيه (30%)",
    savings: "الادخار والاستثمارات (20%)",
    calculator: "الحاسبة التفاعلية",
    add_item: "إضافة عنصر جديد",
    category: "الفئة",
    amount: "المبلغ",
    date: "التاريخ",
    title: "العنوان",
    price: "السعر",
    location: "الموقع",
    roi: "العائد السنوي الاستثماري",
    invest: "استثمار الآن",
    risk: "مستوى المخاطرة",
    funding: "تقدم تمويل المشروع",
    status: "الحالة",
    action: "الإجراء",
    delete: "حذف",
    submit: "حفظ وإدخال البيانات",
    success_added: "تمت إضافة العنصر بنجاح وعرضه في لوحات التحكم ذات الصلة!",
    search_nav_text: "جاري الانتقال إلى القسم المطابق...",
    empty_data: "لا توجد بيانات متاحة حالياً.",
    
    // Module titles
    mod_expenses: "المصاريف الشخصية",
    mod_salary: "إدارة الرواتب والمدخرات",
    mod_grocery: "قائمة البقالة والسلع",
    mod_stocks: "مؤشر الأسهم المالي المباشر",
    mod_estate: "سوق العقارات العالمية",
    mod_gold: "بورصة الذهب والفضة",
    mod_opportunities: "المشاريع الاستثمارية الواعدة",
    mod_finance: "التدفق المالي للشركة",
    mod_services: "إدارة الخدمات والتسعير",
    mod_credit: "التقييم الائتماني والحدود المالية",
    
    // Chatbot lines
    bot_welcome: "مرحباً بك في **بوابة ريتشز لإدارة الثروات**. أنا **بيدور**، مستشارتك المالية. انقر فوق الخيارات أدناه أو اسألني مباشرة (مثل: *'نفقات ميزانيتي'*, *'حاسبة الراتب'*, أو *'فواتير العملاء'*):",
    bot_individual_desc: "تم تحميل أدوات **الخطة الشخصية** مثل تتبع المصاريف، توزيع الراتب وقائمة التسوق. قمت بفتح الصفحة المحددة على الشاشة الآن.",
    bot_investment_desc: "يعرض **مركز الاستثمار** الأسعار اللحظية للأسهم، العقارات العالمية المتاحة، بورصة المعادن الثمينة والمشاريع الجديدة. تم نقلك الآن.",
    bot_business_desc: "تشمل **إدارة الأعمال** الفواتير، التدفقات النقدية، الخدمات، وسجل التقييم الائتماني التجاري. جاري عرض الصفحة حالياً.",
    bot_fallback: "عذراً، لم أستطع العثور على أمر مطابق تماماً. حاول النقر على الأزرار أو اكتب: *'أسعار الذهب'*, *'الأسهم'*, *'الراتب'*, أو *'الفواتير'*.",
    welcome_title: "اسأل بيدور",
    welcome_subtitle: "الخطط والوحدات — اختر فئة للبدء:",
    card_title_ind: "الشخصية",
    card_desc_ind: "المصاريف الشخصية · إدارة الراتب · إدارة البقالة",
    card_title_inv: "الاستثمار",
    card_desc_inv: "الأسهم الحية · العقارات · الذهب والفضة · الفرص الاستثمارية",
    card_title_bus: "إدارة الأعمال",
    card_desc_bus: "الإدارة المالية · إدارة الخدمات · الإدارة الائتمانية",
    lbl_login_heading: "تسجيل الدخول إلى ريتشز",
    lbl_signup_heading: "إنشاء حساب جديد في ريتشز",
    lbl_disclaimer: "مساعد ريتشز الذكي عبارة عن مساحة عمل تجريبية. يرجى عدم رفع بيانات سرية أو حساسة.",
    toast_login_success: "تم تسجيل الدخول بنجاح!",
    toast_signup_success: "تم إنشاء الحساب بنجاح!",
    toast_logout: "تم تسجيل الخروج بنجاح.",
    toast_theme_light: "تم تفعيل الوضع المضيء.",
    toast_theme_dark: "تم تفعيل الوضع الداكن."
  }
};

// Global State
const state = {
  lang: "en",
  theme: "dark",
  activeTab: "all",
  adminActiveSub: "expenses",
  currentUser: null,
  activeChatId: null,
  conversations: [],
  chatHistory: [],
  
  // Data Sets (Page 1 Dashboard Data)
  expenses: [
    { id: 1, title: "Supermarket Groceries", category: "Grocery", amount: 145.50, date: "2026-06-08" },
    { id: 2, title: "Premium Gym Membership", category: "Lifestyle", amount: 85.00, date: "2026-06-05" },
    { id: 3, title: "Office Coworking Desk", category: "Business", amount: 320.00, date: "2026-06-02" },
    { id: 4, title: "Auto Fuel Refill", category: "Transportation", amount: 65.00, date: "2026-06-09" }
  ],
  monthlyBudget: 2500,
  baseSalary: 6000,
  
  groceries: [
    { id: 1, name: "Organic Whole Milk (1L)", qty: "2 bottles", checked: true },
    { id: 2, name: "Fresh Baked Sourdough", qty: "1 loaf", checked: false },
    { id: 3, name: "Free Range Large Eggs (12pk)", qty: "1 carton", checked: false }
  ],
  
  stocks: [
    { symbol: "AAPL", name: "Apple Inc.", price: 182.40, change: 1.25, trend: "up", history: [178, 179, 181, 180, 182.4] },
    { symbol: "NVDA", name: "NVIDIA Corp.", price: 875.12, change: 3.42, trend: "up", history: [840, 852, 848, 860, 875.12] },
    { symbol: "TSLA", name: "Tesla Motors", price: 175.50, change: -2.15, trend: "down", history: [181, 180, 178, 179, 175.5] }
  ],
  
  realEstate: [
    { id: 1, title: "Luxury Marina Penthouse", location: "Dubai Marina, UAE", price: 1200000, roi: 8.4, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&q=80", desc: "Premium 3-bedroom penthouse with direct ocean view." },
    { id: 2, title: "Riyadh Hills Modern Villa", location: "Al Malqa, Riyadh", price: 950000, roi: 7.2, image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&q=80", desc: "Contemporary smart villa incorporating solar panel systems." }
  ],
  
  goldRates: {
    gold24k: 75.20,
    gold22k: 68.95,
    gold18k: 56.40,
    silver: 0.95,
    history: [72, 73.1, 74, 73.5, 75.2]
  },
  
  opportunities: [
    { id: 1, title: "Organic Coffee Franchise", investment: 50000, risk: "Medium", progress: 65, desc: "Boutique coffee expansion." },
    { id: 2, title: "Commercial Solar Power Grid", investment: 120000, risk: "Low", progress: 40, desc: "Industrial park solar leases." }
  ],
  
  businessFinance: {
    revenue: 45000,
    expenses: 28400,
    invoices: [
      { id: "INV-2026-001", client: "Acme Corporates Ltd.", amount: 4500, status: "paid" },
      { id: "INV-2026-002", client: "Stark Labs Solutions", amount: 8200, status: "pending" }
    ]
  },
  
  services: [
    { id: 1, name: "Bespoke Financial Advisory", price: 150, unit: "hour", status: "active" },
    { id: 2, name: "System Integration & Setup", price: 5000, unit: "flat", status: "active" }
  ],
  
  credit: {
    limit: 50000,
    used: 12400,
    score: 785,
    debts: [
      { lender: "National Finance Bank", amount: 8500, due: "2026-07-15" }
    ]
  }
};

// Toast notification helper
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.textContent = message;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = "toastSlide 0.4s reverse forwards";
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Global UI Translation
function translateUI() {
  const dict = translations[state.lang];
  
  // Header
  document.getElementById("brand-tagline").textContent = dict.brand_tagline;
  document.getElementById("global-search-input").placeholder = dict.search_placeholder;
  
  // Tabs
  document.getElementById("lbl-tab-all").textContent = dict.tab_all;
  document.getElementById("lbl-tab-individual").textContent = dict.tab_individual;
  document.getElementById("lbl-tab-investment").textContent = dict.tab_investment;
  document.getElementById("lbl-tab-business").textContent = dict.tab_business;
  document.getElementById("lbl-tab-admin").textContent = dict.tab_admin;
  
  // View headers — hide on all-portfolio tab (hub view has no title)
  const viewHeader = document.querySelector(".dashboard-view-header");
  if (viewHeader) viewHeader.style.display = state.activeTab === "all" ? "none" : "";
  document.getElementById("dashboard-view-title").textContent = dict[`title_${state.activeTab}`];
  document.getElementById("dashboard-view-desc").textContent = dict[`desc_${state.activeTab}`];
  
  // Language button toggler in Header
  const headerLangBtnText = document.querySelector("#header-language-toggle-btn .lang-text");
  headerLangBtnText.textContent = state.lang === "en" ? "العربية" : "English";
  
  // Drawer Language Button
  const drawerLangText = document.querySelector("#drawer-language-toggle-btn .lang-text");
  if (drawerLangText) drawerLangText.textContent = state.lang === "en" ? "العربية" : "English";
  
  // Sidebar elements inside slide pane
  document.getElementById("lbl-new-chat").textContent = dict.lbl_new_chat;
  document.getElementById("lbl-sidebar-history").textContent = dict.lbl_sidebar_history;
  document.getElementById("lbl-toggle-theme").textContent = state.theme === "dark" ? dict.lbl_toggle_theme_light : dict.lbl_toggle_theme_dark;
  document.getElementById("lbl-close-chat").textContent = dict.lbl_close_chat;
  
  if (!state.currentUser) {
    document.getElementById("lbl-profile-guest").textContent = dict.lbl_profile_guest;
  }
  
  // Welcome panel
  document.getElementById("welcome-title").textContent = dict.welcome_title;
  document.getElementById("welcome-subtitle-text").textContent = "";
  document.getElementById("card-title-ind").textContent = dict.card_title_ind;
  document.getElementById("card-desc-ind").textContent = dict.card_desc_ind;
  document.getElementById("card-title-inv").textContent = dict.card_title_inv;
  document.getElementById("card-desc-inv").textContent = dict.card_desc_inv;
  document.getElementById("card-title-bus").textContent = dict.card_title_bus;
  document.getElementById("card-desc-bus").textContent = dict.card_desc_bus;
  
  // Modals
  document.getElementById("lbl-login-heading").textContent = dict.lbl_login_heading;
  document.getElementById("lbl-signup-heading").textContent = dict.lbl_signup_heading;
  
  // Inputs
  document.getElementById("chat-message-input").placeholder = dict.chat_input_placeholder || "Ask Riches AI...";
  document.getElementById("lbl-disclaimer").textContent = dict.lbl_disclaimer;
  
  // Floating Mascot Tooltip
  document.getElementById("lbl-mascot-tooltip").textContent = dict.lbl_mascot_tooltip;
  
  // Splash Loading
  const splashTextEl = document.getElementById("lbl-splash-loading");
  if (splashTextEl) splashTextEl.textContent = dict.lbl_splash_loading;
  
  renderSidebarConversations();
}

// Tab navigation handler
function setTab(tabName) {
  state.activeTab = tabName;
  
  // Manage CSS Classes
  document.querySelectorAll(".tab-btn").forEach(btn => btn.classList.remove("active"));
  const tabBtn = document.getElementById(`tab-${tabName}`);
  if (tabBtn) tabBtn.classList.add("active");
  
  // Translate title description headings
  translateUI();
  
  // Render Tab Content
  renderDashboard();
  
  // Scroll content to top
  const wrapper = document.getElementById("app-main-view");
  if (wrapper) wrapper.scrollTop = 0;
}

// ==========================================================================
// Themes Management (Light / Dark)
// ==========================================================================
function toggleTheme() {
  const body = document.body;
  const darkIcon = document.querySelector(".theme-icon-dark");
  const lightIcon = document.querySelector(".theme-icon-light");
  
  if (state.theme === "dark") {
    state.theme = "light";
    body.classList.remove("dark-theme");
    body.classList.add("light-theme");
    darkIcon.classList.add("hidden");
    lightIcon.classList.remove("hidden");
    showToast(translations[state.lang].toast_theme_light, "info");
  } else {
    state.theme = "dark";
    body.classList.remove("light-theme");
    body.classList.add("dark-theme");
    lightIcon.classList.add("hidden");
    darkIcon.classList.remove("hidden");
    showToast(translations[state.lang].toast_theme_dark, "info");
  }
  
  localStorage.setItem("riches_theme", state.theme);
  translateUI();
}

function initTheme() {
  const savedTheme = localStorage.getItem("riches_theme");
  if (savedTheme === "light") {
    state.theme = "light";
    document.body.classList.remove("dark-theme");
    document.body.classList.add("light-theme");
    document.querySelector(".theme-icon-dark").classList.add("hidden");
    document.querySelector(".theme-icon-light").classList.remove("hidden");
  }
}

// ==========================================================================
// Dashboard Component Renderers
// ==========================================================================
function renderDashboard() {
  const container = document.getElementById("dashboard-content-area");
  const dict = translations[state.lang];
  let html = "";
  
  switch(state.activeTab) {
    case "all":
      html = renderAllPortfolio(dict);
      break;
    case "individual":
      html = renderIndividualPlan(dict);
      break;
    case "investment":
      html = renderInvestmentHub(dict);
      break;
    case "business":
      html = renderBusinessAdmin(dict);
      break;
    case "admin":
      html = renderAdminEditor(dict);
      break;
  }
  
  container.innerHTML = html;
  const isHub = state.activeTab === "all";
  if (isHub) {
    container.style.cssText = "position:fixed;inset:0;display:flex;align-items:center;justify-content:center;z-index:5;pointer-events:none;";
  } else {
    container.style.cssText = "";
    container.classList.remove("dashboard-fullscreen");
  }
  postRenderSetup();
}

// Tab View 1: ALL PORTFOLIO — Clean center logo only
function renderAllPortfolio(dict) {
  return `
    <div class="dashboard-hub-wrapper">
      <div class="hub-ring-system">
        <div class="hub-ring hub-ring-1"></div>
        <div class="hub-ring hub-ring-2"></div>
        <div class="hub-ring hub-ring-3"></div>
        <div class="hub-logo-core">
          <img src="riches.jpg" alt="Riches" class="hub-logo-img">
        </div>
      </div>
    </div>
  `;
}

// Tab View 2: INDIVIDUAL PLAN
function renderIndividualPlan(dict) {
  const totalExpenses = state.expenses.reduce((sum, item) => sum + item.amount, 0);
  const expensesListHTML = state.expenses.map(exp => `
    <tr class="detail-tr">
      <td><strong>${exp.title}</strong><br><small style="color: var(--text-sub)">${exp.category}</small></td>
      <td>${exp.date}</td>
      <td style="font-weight:700">${state.lang === 'ar' ? 'د.إ ' : '$'}${exp.amount.toFixed(2)}</td>
      <td style="text-align: right">
        <button class="card-action-trigger" onclick="deleteExpenseItem(${exp.id})" title="${dict.delete}">🗑️</button>
      </td>
    </tr>
  `).join("");

  const groceryItemsHTML = state.groceries.map(item => `
    <div class="grocery-row ${item.checked ? 'checked' : ''}" onclick="toggleGroceryCheck(${item.id})">
      <input type="checkbox" ${item.checked ? 'checked' : ''} style="pointer-events: none">
      <span class="grocery-name">${item.name}</span>
      <span class="grocery-qty">${item.qty}</span>
      <button class="card-action-trigger" style="margin-inline-start: auto; padding: 2px" onclick="event.stopPropagation(); deleteGroceryItem(${item.id})">×</button>
    </div>
  `).join("");

  const salNeeds = state.baseSalary * 0.5;
  const salWants = state.baseSalary * 0.3;
  const salSavings = state.baseSalary * 0.2;

  return `
    <div class="dashboard-grid">
      <div class="widget-card" id="card-ind-expenses" style="grid-column: span 2">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-icon-container">💸</div>
            <div>
              <h3>${dict.mod_expenses}</h3>
              <div class="card-subtitle">TRANSACTIONS LOG</div>
            </div>
          </div>
        </div>
        
        <table class="simple-grid-table">
          <thead>
            <tr>
              <th>${state.lang === 'en' ? 'Purchase/Category' : 'المشتريات / الفئة'}</th>
              <th>${dict.date}</th>
              <th>${dict.amount}</th>
              <th style="text-align: right">${dict.action}</th>
            </tr>
          </thead>
          <tbody>
            ${expensesListHTML.length > 0 ? expensesListHTML : `<tr><td colspan="4" style="text-align:center;color:var(--text-muted)">${dict.empty_data}</td></tr>`}
          </tbody>
        </table>
        
        <div class="card-mini-calculator" style="margin-top: 10px;">
          <div class="calc-input-row">
            <input type="text" id="inline-exp-title" placeholder="Shop name..." style="flex: 2;">
            <input type="number" id="inline-exp-amount" placeholder="Amount..." style="flex: 1;">
            <button class="form-submit-btn" style="padding: 0 16px; height: 32px;" onclick="addInlineExpense()">${dict.add_item}</button>
          </div>
        </div>
      </div>

      <div class="widget-card" id="card-ind-salary">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-icon-container">💰</div>
            <div>
              <h3>${dict.mod_salary}</h3>
              <div class="card-subtitle">50 / 30 / 20 BUDGETING RULE</div>
            </div>
          </div>
        </div>
        
        <div class="form-group" style="gap: 4px;">
          <label>${dict.salary}: <strong style="color:white">${state.lang === 'ar' ? ' د.إ ' : '$'}${state.baseSalary.toLocaleString()}</strong></label>
          <input type="range" id="salary-slider-input" min="2000" max="25000" step="500" value="${state.baseSalary}" oninput="onSalarySliderChange(this.value)">
        </div>

        <div class="detail-list">
          <div class="detail-row" style="border-inline-start: 4px solid var(--accent-blue);">
            <span class="detail-label">${dict.needs}</span>
            <span class="detail-value" id="sal-needs-val">${state.lang === 'ar' ? ' د.إ ' : '$'}${salNeeds.toLocaleString()}</span>
          </div>
          <div class="detail-row" style="border-inline-start: 4px solid var(--accent-gold);">
            <span class="detail-label">${dict.wants}</span>
            <span class="detail-value" id="sal-wants-val">${state.lang === 'ar' ? ' د.إ ' : '$'}${salWants.toLocaleString()}</span>
          </div>
          <div class="detail-row" style="border-inline-start: 4px solid var(--accent-green);">
            <span class="detail-label">${dict.savings}</span>
            <span class="detail-value" id="sal-savings-val">${state.lang === 'ar' ? ' د.إ ' : '$'}${salSavings.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div class="widget-card" id="card-ind-grocery">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-icon-container">🛒</div>
            <div>
              <h3>${dict.mod_grocery}</h3>
              <div class="card-subtitle">SHOPPING CHECKLIST</div>
            </div>
          </div>
        </div>

        <div class="grocery-checklist">
          ${groceryItemsHTML.length > 0 ? groceryItemsHTML : `<div style="text-align:center;color:var(--text-muted);padding:10px">${dict.empty_data}</div>`}
        </div>

        <div class="card-mini-calculator">
          <div class="calc-input-row">
            <input type="text" id="inline-grocery-name" placeholder="Item name..." style="flex: 2;">
            <input type="text" id="inline-grocery-qty" placeholder="Qty..." style="flex: 1;">
            <button class="form-submit-btn" style="padding: 0 16px; height: 32px;" onclick="addInlineGrocery()">${dict.add_item}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Tab View 3: INVESTMENT HUB
function renderInvestmentHub(dict) {
  const stocksHTML = state.stocks.map(stock => {
    const isUp = stock.trend === "up";
    const trendSymbol = isUp ? "▲" : "▼";
    
    return `
      <div class="stock-item" data-stock-symbol="${stock.symbol}">
        <div class="stock-top">
          <div>
            <span class="stock-symbol">${stock.symbol}</span><br>
            <small style="color:var(--text-sub)">${stock.name}</small>
          </div>
          <span class="trend-indicator ${isUp ? 'up' : 'down'}">${trendSymbol} ${stock.change}%</span>
        </div>
        <div style="display:flex; justify-content:space-between; align-items:flex-end; margin-top:4px;">
          <span class="stock-price">$${stock.price.toLocaleString(undefined, {minimumFractionDigits: 2})}</span>
          <div class="sparkline-container" style="width: 100px; height: 30px;">
            ${generateSparklineHTML(stock.history, isUp, stock.symbol)}
          </div>
        </div>
      </div>
    `;
  }).join("");

  const estateHTML = state.realEstate.map(prop => `
    <div class="estate-item">
      <div class="estate-img-wrapper" onclick="openLightbox('${prop.image}', '${prop.title} - ${prop.location}')">
        <img src="${prop.image}" alt="${prop.title}">
      </div>
      <div class="estate-details">
        <div>
          <span class="estate-title">${prop.title}</span><br>
          <span class="estate-location">📍 ${prop.location}</span>
        </div>
        <div class="estate-price-row">
          <span class="estate-price">${state.lang === 'ar' ? 'د.إ ' : '$'}${prop.price.toLocaleString()}</span>
          <span class="estate-roi">${prop.roi}% ${state.lang === 'en' ? 'ROI' : 'عائد'}</span>
        </div>
      </div>
    </div>
  `).join("");

  return `
    <div class="dashboard-grid">
      <div class="widget-card" id="card-inv-stocks">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-icon-container">📈</div>
            <div>
              <h3>${dict.mod_stocks}</h3>
              <div class="card-subtitle">DYNAMIC RE-INDEXING TICKETS</div>
            </div>
          </div>
        </div>
        <div class="stock-ticker-grid">${stocksHTML}</div>
      </div>

      <div class="widget-card" id="card-inv-estate">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-icon-container">🏢</div>
            <div>
              <h3>${dict.mod_estate}</h3>
              <div class="card-subtitle">GLOBAL PROPERTIES LISTINGS</div>
            </div>
          </div>
        </div>
        <div class="estate-cards-container">${estateHTML}</div>
      </div>

      <div class="widget-card" id="card-inv-gold">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-icon-container">🪙</div>
            <div>
              <h3>${dict.mod_gold}</h3>
              <div class="card-subtitle">LIVE GRAM VALUATIONS</div>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <span class="hero-value" style="font-size:26px;">$${state.goldRates.gold24k}/g</span><br>
            <small style="color:var(--text-sub)">Gold 24K Spot price</small>
          </div>
          <div class="sparkline-container" style="width: 140px; height: 40px;">
            ${generateSparklineHTML(state.goldRates.history, true, "gold")}
          </div>
        </div>

        <div class="card-mini-calculator">
          <div class="calc-input-row">
            <select id="gold-calc-type" onchange="runGoldCalculator()">
              <option value="24">Gold 24k</option>
              <option value="22">Gold 22k</option>
              <option value="silver">Silver</option>
            </select>
            <input type="number" id="gold-calc-grams" value="10" placeholder="Grams..." oninput="runGoldCalculator()" style="width:70px;">
          </div>
          <div class="calc-result" id="gold-calc-result-box">Value: $752.00</div>
        </div>
      </div>
    </div>
  `;
}

// Tab View 4: BUSINESS ADMIN
function renderBusinessAdmin(dict) {
  const profit = state.businessFinance.revenue - state.businessFinance.expenses;
  
  const invoicesListHTML = state.businessFinance.invoices.map(inv => `
    <tr>
      <td><strong>${inv.id}</strong><br><small style="color:var(--text-sub)">${inv.client}</small></td>
      <td><span class="trend-indicator ${inv.status === 'paid' ? 'up' : 'down'}">${inv.status.toUpperCase()}</span></td>
      <td style="font-weight:700">${state.lang === 'ar' ? 'د.إ ' : '$'}${inv.amount.toLocaleString()}</td>
    </tr>
  `).join("");

  return `
    <div class="dashboard-grid">
      <div class="widget-card" id="card-bus-finance" style="grid-column: span 2">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-icon-container">📊</div>
            <div>
              <h3>${dict.mod_finance}</h3>
              <div class="card-subtitle">REVENUE & INVOICING ACCOUNT</div>
            </div>
          </div>
        </div>

        <div style="display:grid; grid-template-columns: repeat(3, 1fr); gap: 16px;">
          <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:16px;">
            <small style="color:var(--text-sub); text-transform:uppercase; font-size:10px;">GROSS REVENUE</small>
            <h3 style="font-size: 22px; color: white; margin-top: 4px;">$${state.businessFinance.revenue.toLocaleString()}</h3>
          </div>
          <div style="background:rgba(255,255,255,0.02); border:1px solid var(--border-color); border-radius:var(--radius-sm); padding:16px;">
            <small style="color:var(--text-sub); text-transform:uppercase; font-size:10px;">OPERATING EXPENSES</small>
            <h3 style="font-size: 22px; color: var(--brand-red-hover); margin-top: 4px;">$${state.businessFinance.expenses.toLocaleString()}</h3>
          </div>
          <div style="background:rgba(209,10,20,0.03); border:1px solid var(--brand-red-glow); border-radius:var(--radius-sm); padding:16px;">
            <small style="color:var(--brand-red-hover); text-transform:uppercase; font-size:10px;">NET PROFIT</small>
            <h3 style="font-size: 22px; color: var(--accent-green); margin-top: 4px;">$${profit.toLocaleString()}</h3>
          </div>
        </div>

        <h4 style="font-size:13px; font-weight:700; margin-top:10px;">Corporate invoices log</h4>
        <table class="simple-grid-table">
          <thead>
            <tr>
              <th>Invoice / Recipient</th>
              <th>Status</th>
              <th>Total Amount</th>
            </tr>
          </thead>
          <tbody>
            ${invoicesListHTML}
          </tbody>
        </table>
      </div>

      <div class="widget-card" id="card-bus-credit">
        <div class="card-header">
          <div class="card-title-group">
            <div class="card-icon-container">💳</div>
            <div>
              <h3>${dict.mod_credit}</h3>
              <div class="card-subtitle">DEBT LIMIT AGING</div>
            </div>
          </div>
        </div>

        <div style="display:flex; justify-content:space-between; align-items:center;">
          <div>
            <span class="hero-value" style="font-size:26px;">$${(state.credit.limit - state.credit.used).toLocaleString()}</span><br>
            <small style="color:var(--text-sub)">Available Line</small>
          </div>
          <div class="gauge-visual-box" style="margin:0;">
            <svg class="gauge-svg" style="width:80px; height:80px;">
              <circle class="gauge-track" cx="40" cy="40" r="30" style="stroke-width:6;"></circle>
              <circle class="gauge-fill" cx="40" cy="40" r="30" style="stroke-width:6;"></circle>
            </svg>
            <div class="gauge-text">
              <span class="gauge-number" style="font-size:16px;">${state.credit.score}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

// Tab View 5: ADMIN DATA INJECTOR (EDITOR)
function renderAdminEditor(dict) {
  let subFormHTML = "";
  
  switch(state.adminActiveSub) {
    case "expenses":
      subFormHTML = `
        <form id="admin-add-expense-form" class="admin-form" onsubmit="handleFormSubmission(event, 'expense')">
          <h3 class="admin-form-title">${state.lang === 'en' ? 'Add Personal Expense' : 'إضافة مصروفات شخصية'}</h3>
          <div class="form-group">
            <label>${dict.title}</label>
            <input type="text" name="title" required placeholder="e.g. Supermarket, Taxi...">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>${dict.category}</label>
              <select name="category">
                <option value="Grocery">Grocery</option>
                <option value="Lifestyle">Lifestyle</option>
                <option value="Business">Business</option>
              </select>
            </div>
            <div class="form-group">
              <label>${dict.amount} ($)</label>
              <input type="number" step="0.01" name="amount" required placeholder="0.00">
            </div>
          </div>
          <button type="submit" class="form-submit-btn">${dict.submit}</button>
        </form>
      `;
      break;
      
    case "stocks":
      subFormHTML = `
        <form id="admin-add-stock-form" class="admin-form" onsubmit="handleFormSubmission(event, 'stock')">
          <h3 class="admin-form-title">${state.lang === 'en' ? 'Inject Custom Stock Equity' : 'إضافة سهم جديد'}</h3>
          <div class="form-row">
            <div class="form-group">
              <label>Ticker Symbol</label>
              <input type="text" name="symbol" required placeholder="e.g. GOOG, AMZN" maxlength="5">
            </div>
            <div class="form-group">
              <label>Company Name</label>
              <input type="text" name="name" required placeholder="e.g. Alphabet Inc.">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Initial Stock Price ($)</label>
              <input type="number" step="0.01" name="price" required placeholder="100.00">
            </div>
            <div class="form-group">
              <label>Daily Price Delta (%)</label>
              <input type="number" step="0.01" name="change" required placeholder="0.00">
            </div>
          </div>
          <button type="submit" class="form-submit-btn">${dict.submit}</button>
        </form>
      `;
      break;

    case "estate":
      subFormHTML = `
        <form id="admin-add-estate-form" class="admin-form" onsubmit="handleFormSubmission(event, 'estate')">
          <h3 class="admin-form-title">${state.lang === 'en' ? 'Add Real Estate Listing' : 'إضافة عقار استثماري جديد'}</h3>
          <div class="form-group">
            <label>Asset Name / Title</label>
            <input type="text" name="title" required placeholder="e.g. Beverly Hills Mansion">
          </div>
          <div class="form-group">
            <label>${dict.location}</label>
            <input type="text" name="location" required placeholder="e.g. Los Angeles, CA">
          </div>
          <div class="form-row">
            <div class="form-group">
              <label>Valuation Price ($)</label>
              <input type="number" name="price" required placeholder="500000">
            </div>
            <div class="form-group">
              <label>Annual Return ROI (%)</label>
              <input type="number" step="0.1" name="roi" required placeholder="8.5">
            </div>
          </div>
          <button type="submit" class="form-submit-btn">${dict.submit}</button>
        </form>
      `;
      break;
  }

  return `
    <div class="admin-tab-layout">
      <div class="admin-side-menu">
        <button class="admin-side-btn ${state.adminActiveSub === 'expenses' ? 'active' : ''}" onclick="setAdminSub('expenses')">
          💸 ${state.lang === 'en' ? 'Expenses Data' : 'سجل النفقات'}
        </button>
        <button class="admin-side-btn ${state.adminActiveSub === 'stocks' ? 'active' : ''}" onclick="setAdminSub('stocks')">
          📈 ${state.lang === 'en' ? 'Stock Equities' : 'محفظة الأسهم'}
        </button>
        <button class="admin-side-btn ${state.adminActiveSub === 'estate' ? 'active' : ''}" onclick="setAdminSub('estate')">
          🏢 ${state.lang === 'en' ? 'Real Estate' : 'العقارات الاستثمارية'}
        </button>
      </div>

      <div class="admin-forms-container">
        ${subFormHTML}
      </div>
    </div>
  `;
}

// Handler for changing Sub sections inside Admin
window.setAdminSub = function(subName) {
  state.adminActiveSub = subName;
  renderDashboard();
};

// Handle Admin form submissions
window.handleFormSubmission = function(event, type) {
  event.preventDefault();
  const formData = new FormData(event.target);
  
  if (type === "expense") {
    state.expenses.unshift({
      id: Date.now(),
      title: formData.get("title"),
      category: formData.get("category"),
      amount: parseFloat(formData.get("amount")),
      date: new Date().toISOString().split('T')[0]
    });
  } 
  else if (type === "stock") {
    const price = parseFloat(formData.get("price"));
    state.stocks.push({
      symbol: formData.get("symbol").toUpperCase(),
      name: formData.get("name"),
      price: price,
      change: parseFloat(formData.get("change")),
      trend: "up",
      history: [price * 0.95, price * 1.02, price * 0.98, price]
    });
  }
  else if (type === "estate") {
    state.realEstate.push({
      id: Date.now(),
      title: formData.get("title"),
      location: formData.get("location"),
      price: parseInt(formData.get("price")),
      roi: parseFloat(formData.get("roi")),
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=80",
      desc: "Added via Admin panel."
    });
  }

  showToast(translations[state.lang].success_added, "success");
  event.target.reset();
  renderDashboard();
};

// ==========================================================================
// Sub-module Operations (Expenses, Salary, Groceries)
// ==========================================================================
window.onSalarySliderChange = function(val) {
  state.baseSalary = parseInt(val);
  
  const salNeeds = state.baseSalary * 0.5;
  const salWants = state.baseSalary * 0.3;
  const salSavings = state.baseSalary * 0.2;
  
  const sliderLabel = document.querySelector("#card-ind-salary label strong");
  if (sliderLabel) sliderLabel.textContent = `${state.lang === 'ar' ? ' د.إ ' : '$'}${state.baseSalary.toLocaleString()}`;
  
  const needsEl = document.getElementById("sal-needs-val");
  if (needsEl) needsEl.textContent = `${state.lang === 'ar' ? ' د.إ ' : '$'}${salNeeds.toLocaleString()}`;
  
  const wantsEl = document.getElementById("sal-wants-val");
  if (wantsEl) wantsEl.textContent = `${state.lang === 'ar' ? ' د.إ ' : '$'}${salWants.toLocaleString()}`;
  
  const savingsEl = document.getElementById("sal-savings-val");
  if (savingsEl) savingsEl.textContent = `${state.lang === 'ar' ? ' د.إ ' : '$'}${salSavings.toLocaleString()}`;
};

window.toggleGroceryCheck = function(id) {
  const item = state.groceries.find(g => g.id === id);
  if (item) {
    item.checked = !item.checked;
    renderDashboard();
  }
};

window.deleteGroceryItem = function(id) {
  state.groceries = state.groceries.filter(g => g.id !== id);
  renderDashboard();
};

window.addInlineGrocery = function() {
  const nameInput = document.getElementById("inline-grocery-name");
  const qtyInput = document.getElementById("inline-grocery-qty");
  if (nameInput.value.trim() === "") return;
  
  state.groceries.push({
    id: Date.now(),
    name: nameInput.value.trim(),
    qty: qtyInput.value.trim() || "1 unit",
    checked: false
  });
  
  renderDashboard();
  showToast(state.lang === 'en' ? "Grocery item added." : "تمت إضافة السلعة.", "success");
};

window.addInlineExpense = function() {
  const titleInput = document.getElementById("inline-exp-title");
  const amountInput = document.getElementById("inline-exp-amount");
  if (titleInput.value.trim() === "" || amountInput.value === "") return;
  
  state.expenses.unshift({
    id: Date.now(),
    title: titleInput.value.trim(),
    category: "Quick Log",
    amount: parseFloat(amountInput.value),
    date: new Date().toISOString().split('T')[0]
  });
  
  renderDashboard();
  showToast(translations[state.lang].success_added, "success");
};

window.deleteExpenseItem = function(id) {
  state.expenses = state.expenses.filter(exp => exp.id !== id);
  renderDashboard();
};

window.runGoldCalculator = function() {
  const typeSelect = document.getElementById("gold-calc-type");
  const gramsInput = document.getElementById("gold-calc-grams");
  const resultBox = document.getElementById("gold-calc-result-box");
  if (!typeSelect || !gramsInput || !resultBox) return;
  
  const type = typeSelect.value;
  const grams = parseFloat(gramsInput.value) || 0;
  let rate = 0;
  
  if (type === "24") rate = state.goldRates.gold24k;
  else if (type === "22") rate = state.goldRates.gold22k;
  else if (type === "silver") rate = state.goldRates.silver;
  
  resultBox.textContent = `Value: $${(rate * grams).toLocaleString(undefined, {minimumFractionDigits: 2})}`;
};

window.openLightbox = function(src, caption) {
  const lightbox = document.getElementById("image-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxCap = document.getElementById("lightbox-caption");
  
  lightboxImg.src = src;
  lightboxCap.textContent = caption;
  lightbox.classList.remove("hidden");
};

window.appSetTab = function(tabName) {
  setTab(tabName);
};

function postRenderSetup() {
  updateCircularCreditScoreGauge();
}

function updateCircularCreditScoreGauge() {
  const circle = document.querySelector(".gauge-fill");
  if (!circle) return;
  const score = state.credit.score;
  const maxScore = 850;
  const percentage = score / maxScore;
  const circumference = 2 * Math.PI * 50;
  circle.style.strokeDashoffset = circumference - (percentage * circumference);
}

// Sparkline builder helper
function generateSparklineHTML(history, isUp, id) {
  const width = 100;
  const height = 30;
  const min = Math.min(...history);
  const max = Math.max(...history);
  const range = max - min === 0 ? 1 : max - min;
  
  const points = history.map((val, index) => {
    const x = (index / (history.length - 1)) * width;
    const y = height - ((val - min) / range) * (height - 6) - 3;
    return `${x},${y}`;
  }).join(" ");
  
  const strokeColor = isUp ? "var(--accent-green)" : "var(--brand-red)";
  return `
    <svg class="sparkline-svg" width="${width}" height="${height}">
      <polyline points="${points}" fill="none" stroke="${strokeColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></polyline>
    </svg>
  `;
}

// Stock pricing ticking simulator loop
function startStockPriceTickerSimulator() {
  setInterval(() => {
    state.stocks.forEach(stock => {
      const percentageChange = (Math.random() - 0.5) * 0.8;
      stock.price = parseFloat((stock.price * (1 + percentageChange / 100)).toFixed(2));
      stock.change = parseFloat((stock.change + percentageChange).toFixed(2));
      stock.trend = percentageChange >= 0 ? "up" : "down";
      stock.history.shift();
      stock.history.push(stock.price);
      
      const tickerPriceEl = document.querySelector(`[data-stock-symbol="${stock.symbol}"] .stock-price`);
      if (tickerPriceEl) {
        tickerPriceEl.textContent = `$${stock.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`;
        const flashClass = percentageChange >= 0 ? "flash-green" : "flash-red";
        tickerPriceEl.classList.add(flashClass);
        setTimeout(() => tickerPriceEl.classList.remove(flashClass), 150);
      }
    });
  }, 3500);
}

// ==========================================================================
// Page 2: Chatbot Overlay State & History Control
// ==========================================================================
const botResponses = {
  welcome: {
    en: "Welcome to **Riches**. I am **Bedoor**, your personal advisor. Select a category below:",
    ar: "مرحباً بك في **ريتشز**. أنا **بيدور**، مستشارتك المالية. اختر فئة من القائمة أدناه:"
  },
  individual: {
    en: "**Individual Plan** — Choose a module:",
    ar: "**الخطة الشخصية** — اختر وحدة:"
  },
  investment: {
    en: "**Investment Hub** — Choose a module:",
    ar: "**مركز الاستثمار** — اختر وحدة:"
  },
  business: {
    en: "**Business Management** — Choose a module:",
    ar: "**إدارة الأعمال** — اختر وحدة:"
  }
};

// Sub-module definitions
const subModules = {
  individual: {
    en: [
      { label: "💳 Personal Expenses",   value: "ind_expenses" },
      { label: "💰 Salary Management",   value: "ind_salary"   },
      { label: "🛒 Grocery Management",  value: "ind_grocery"  }
    ],
    ar: [
      { label: "💳 المصاريف الشخصية",     value: "ind_expenses" },
      { label: "💰 إدارة الراتب",          value: "ind_salary"   },
      { label: "🛒 إدارة البقالة",         value: "ind_grocery"  }
    ]
  },
  investment: {
    en: [
      { label: "📈 Live Stock",             value: "inv_stocks"  },
      { label: "🏠 Real Estate",            value: "inv_estate"  },
      { label: "🪙 Gold & Silver",          value: "inv_gold"    },
      { label: "🚀 Business Opportunities", value: "inv_opp"     }
    ],
    ar: [
      { label: "📈 الأسهم الحية",            value: "inv_stocks"  },
      { label: "🏠 العقارات",                value: "inv_estate"  },
      { label: "🪙 الذهب والفضة",            value: "inv_gold"    },
      { label: "🚀 الفرص الاستثمارية",       value: "inv_opp"     }
    ]
  },
  business: {
    en: [
      { label: "📊 Finance Management", value: "bus_finance"  },
      { label: "⚙️ Service Management", value: "bus_services" },
      { label: "💳 Credit Management",  value: "bus_credit"   }
    ],
    ar: [
      { label: "📊 الإدارة المالية",     value: "bus_finance"  },
      { label: "⚙️ إدارة الخدمات",      value: "bus_services" },
      { label: "💳 الإدارة الائتمانية", value: "bus_credit"   }
    ]
  }
};

// Sub-module → tab + scroll anchor mapping
const subModuleNav = {
  ind_expenses: { tab: "individual", anchor: "card-ind-expenses" },
  ind_salary:   { tab: "individual", anchor: "card-ind-salary"   },
  ind_grocery:  { tab: "individual", anchor: "card-ind-grocery"  },
  inv_stocks:   { tab: "investment", anchor: "card-inv-stocks"   },
  inv_estate:   { tab: "investment", anchor: "card-inv-estate"   },
  inv_gold:     { tab: "investment", anchor: "card-inv-gold"     },
  inv_opp:      { tab: "investment", anchor: null                },
  bus_finance:  { tab: "business",   anchor: "card-bus-finance"  },
  bus_services: { tab: "business",   anchor: null                },
  bus_credit:   { tab: "business",   anchor: "card-bus-credit"   }
};

function initChatbot() {
  // Chat starts clean — welcome screen shows the 3 category cards
  const messagesContainer = document.getElementById("chat-messages-container");
  messagesContainer.innerHTML = "";
}

function renderBotMessageBubble(text, options = []) {
  const messagesContainer = document.getElementById("chat-messages-container");
  const bubble = document.createElement("div");
  bubble.className = "message-row bot";
  
  let formattedText = text
    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.*?)\*/g, "<em>$1</em>");
  
  let avatarHTML = `<div class="message-avatar"><img src="miss_bindur.png" alt="Ask Bedoor"></div>`;
  let bubbleHTML = `<div class="message-bubble"><p>${formattedText}</p>`;
  
  if (options.length > 0) {
    bubbleHTML += `<div class="message-action-links">`;
    options.forEach(opt => {
      bubbleHTML += `
        <button class="message-action-btn" onclick="handleBotOptionClick('${opt.value}')">
          <span>${opt.label}</span>
          <span class="card-action-arrow">➔</span>
        </button>
      `;
    });
    bubbleHTML += `</div>`;
  }
  bubbleHTML += `</div>`;
  
  bubble.innerHTML = avatarHTML + bubbleHTML;
  messagesContainer.appendChild(bubble);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function renderUserMessageBubble(text) {
  const messagesContainer = document.getElementById("chat-messages-container");
  const bubble = document.createElement("div");
  bubble.className = "message-row user";
  
  const initials = state.currentUser ? state.currentUser.email.substring(0, 2).toUpperCase() : "UR";
  let avatarHTML = `<div class="message-avatar user-icon">${initials}</div>`;
  let bubbleHTML = `<div class="message-bubble"><p>${text}</p></div>`;
  
  bubble.innerHTML = avatarHTML + bubbleHTML;
  messagesContainer.appendChild(bubble);
  messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function sendBotMessage(text, options = []) {
  renderBotMessageBubble(text, options);
  state.chatHistory.push({ sender: "bot", text, options });
  if (state.activeChatId) {
    const activeChat = state.conversations.find(c => c.id === state.activeChatId);
    if (activeChat) {
      activeChat.messages.push({ sender: "bot", text, options });
    }
  }
}

function sendUserMessage(text) {
  renderUserMessageBubble(text);
  state.chatHistory.push({ sender: "user", text });
  if (state.activeChatId) {
    const activeChat = state.conversations.find(c => c.id === state.activeChatId);
    if (activeChat) {
      activeChat.messages.push({ sender: "user", text });
    }
  }
}

// Top-level category click (from welcome screen cards or chat buttons)
function openCategoryInChat(value) {
  document.getElementById("chat-welcome-screen").classList.add("hidden");
  document.getElementById("chat-messages-container").classList.remove("hidden");

  if (!state.activeChatId) {
    const newId = Date.now();
    const labels = { individual: "Individual", investment: "Investment", business: "Business" };
    state.conversations.unshift({ id: newId, title: labels[value] || value, messages: [] });
    state.activeChatId = newId;
    document.getElementById("chat-messages-container").innerHTML = "";
    renderSidebarConversations();
  }

  const userLabels = {
    en: { individual: "Individual Plan", investment: "Investment Hub", business: "Business Management" },
    ar: { individual: "الخطة الشخصية", investment: "مركز الاستثمار", business: "إدارة الأعمال" }
  };
  sendUserMessage(userLabels[state.lang][value] || value);

  setTimeout(() => {
    sendBotMessage(botResponses[value][state.lang], subModules[value][state.lang]);
  }, 350);
}

// Sub-module click → navigate to tab + scroll to section
window.handleSubModuleClick = function(subValue) {
  const nav = subModuleNav[subValue];
  if (!nav) return;

  const subLabels = {
    en: { ind_expenses: "Personal Expenses", ind_salary: "Salary Management", ind_grocery: "Grocery Management",
          inv_stocks: "Live Stock", inv_estate: "Real Estate", inv_gold: "Gold & Silver", inv_opp: "Business Opportunities",
          bus_finance: "Finance Management", bus_services: "Service Management", bus_credit: "Credit Management" },
    ar: { ind_expenses: "المصاريف الشخصية", ind_salary: "إدارة الراتب", ind_grocery: "إدارة البقالة",
          inv_stocks: "الأسهم الحية", inv_estate: "العقارات", inv_gold: "الذهب والفضة", inv_opp: "الفرص الاستثمارية",
          bus_finance: "الإدارة المالية", bus_services: "إدارة الخدمات", bus_credit: "الإدارة الائتمانية" }
  };

  sendUserMessage(subLabels[state.lang][subValue] || subValue);

  setTab(nav.tab);

  setTimeout(() => {
    if (nav.anchor) {
      const el = document.getElementById(nav.anchor);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const doneMsg = state.lang === "en"
      ? `Opening **${subLabels.en[subValue]}** for you.`
      : `جاري فتح **${subLabels.ar[subValue]}**.`;
    sendBotMessage(doneMsg);
  }, 400);
};

window.handleBotOptionClick = function(value) {
  if (subModuleNav[value]) {
    // It's a sub-module → navigate
    window.handleSubModuleClick(value);
  } else {
    // It's a top-level category → show sub-options
    openCategoryInChat(value);
  }
};

window.handleSuggestionClick = function(value) {
  // Welcome screen card click → same as top-level category
  openCategoryInChat(value);
};

window.createNewChat = function() {
  state.activeChatId = null;
  state.chatHistory = [];
  document.getElementById("chat-welcome-screen").classList.remove("hidden");
  document.getElementById("chat-messages-container").classList.add("hidden");
  document.getElementById("chat-messages-container").innerHTML = "";
  renderSidebarConversations();
};

window.openChat = function(chatId) {
  state.activeChatId = chatId;
  const chat = state.conversations.find(c => c.id === chatId);
  if (!chat) return;
  
  state.chatHistory = [...chat.messages];
  
  // Show message list
  document.getElementById("chat-welcome-screen").classList.add("hidden");
  const feed = document.getElementById("chat-messages-container");
  feed.classList.remove("hidden");
  feed.innerHTML = "";
  
  // Render messages
  chat.messages.forEach(msg => {
    if (msg.sender === "bot") {
      renderBotMessageBubble(msg.text, msg.options || []);
    } else {
      renderUserMessageBubble(msg.text);
    }
  });
  
  renderSidebarConversations();
};

window.deleteChat = function(chatId, event) {
  if (event) event.stopPropagation();
  
  state.conversations = state.conversations.filter(c => c.id !== chatId);
  if (state.activeChatId === chatId) {
    window.createNewChat();
  } else {
    renderSidebarConversations();
  }
};

// Process chatbot typed inputs
function processChatbotCommand(userText) {
  const query = userText.toLowerCase().trim();
  const dict = translations[state.lang];
  
  // Create chat session if empty
  if (!state.activeChatId) {
    const newId = Date.now();
    state.conversations.unshift({
      id: newId,
      title: userText.substring(0, 20) + "...",
      messages: []
    });
    state.activeChatId = newId;
    
    document.getElementById("chat-welcome-screen").classList.add("hidden");
    const feed = document.getElementById("chat-messages-container");
    feed.classList.remove("hidden");
    feed.innerHTML = "";
  }
  
  // 1. Check if user typed a direct navigation command (e.g. "open grocery", "open gold", etc.)
  const isNavTrigger = query.match(/(open|show|go to|check|inspect|navigate|افتح|اعرض|شاهد|اذهب)/);
  
  // Fuzzy target checks
  const isGrocery = query.match(/(gros|grocer|groc|grosy|grosary|grosery|بقال)/);
  const isExpense = query.match(/(expense|spend|budget|transaction|مصروف|مصاريف|ميزان)/);
  const isSalary = query.match(/(salary|pay|distribution|allocation|راتب|رواتب)/);
  const isGold = query.match(/(gold|silver|metal|rates|ذهب|فضة|سعر الذهب)/);
  const isStock = query.match(/(stock|aapl|nvda|tsla|سهم|أسهم)/);
  const isCredit = query.match(/(credit|score|debt|limit|ائتمان|تقييم)/);
  const isInvoice = query.match(/(invoice|bill|revenues|profit|فاتورة|فواتير)/);
  
  // Determine if we should perform an auto-jump directly to the first page (dashboard)
  if (isNavTrigger || isGrocery || isExpense || isSalary || isGold || isStock || isCredit || isInvoice) {
    let actionCode = "";
    let navText = "";
    
    if (isGrocery) {
      actionCode = "check_grocery";
      navText = state.lang === 'en' ? "Opening your Grocery Checklist under the Individual Plan tab..." : "جاري فتح قائمة السلع والمشتريات في الخطة الشخصية...";
    } else if (isExpense) {
      actionCode = "check_expenses";
      navText = state.lang === 'en' ? "Opening your Personal Expenses log under the Individual Plan tab..." : "جاري فتح سجل المصاريف الشخصية في الخطة الشخصية...";
    } else if (isSalary) {
      actionCode = "calc_salary";
      navText = state.lang === 'en' ? "Opening your Salary Distribution Calculator under the Individual Plan tab..." : "جاري فتح حاسبة توزيع الراتب في الخطة الشخصية...";
    } else if (isGold) {
      actionCode = "check_gold";
      navText = state.lang === 'en' ? "Opening live Gold Spot rates index under the Investment Hub..." : "جاري فتح أسعار الذهب والفضة في مركز الاستثمار...";
    } else if (isStock) {
      actionCode = "check_stocks";
      navText = state.lang === 'en' ? "Opening live Stocks Ticker widgets under the Investment Hub..." : "جاري فتح مؤشر الأسهم المالي في مركز الاستثمار...";
    } else if (isCredit) {
      actionCode = "check_credit";
      navText = state.lang === 'en' ? "Opening your Business Credit health gauges..." : "جاري فتح التقييم الائتماني للشركة في إدارة الأعمال...";
    } else if (isInvoice) {
      actionCode = "check_invoices";
      navText = state.lang === 'en' ? "Opening your Corporate Invoices under Business Admin..." : "جاري فتح كشف فواتير العملاء في إدارة الأعمال...";
    }
    
    if (actionCode !== "") {
      sendUserMessage(userText);
      setTimeout(() => {
        sendBotMessage(navText);
        setTimeout(() => {
          window.handleCustomAction(actionCode);
        }, 800); // Wait 800ms so they read the bubble, then slide open dashboard!
      }, 300);
      return;
    }
  }
  
  // Standard conversational behavior fallback if no direct match is parsed
  sendUserMessage(userText);
  
  setTimeout(() => {
    let botReply = "";
    let options = [];
    
    if (query.match(/(ind|individual|شخصي)/)) {
      setTab("individual");
      botReply = dict.bot_individual_desc;
      options = [
        { label: state.lang === 'en' ? "Simulate budget" : "توزيع الميزانية", value: "check_expenses" },
        { label: state.lang === 'en' ? "Open grocery list" : "عرض قائمة التسوق", value: "check_grocery" }
      ];
    }
    else if (query.match(/(invest|investment|استثمار)/)) {
      setTab("investment");
      botReply = dict.bot_investment_desc;
      options = [
        { label: state.lang === 'en' ? "Gold prices today" : "أسعار الذهب اللحظية", value: "check_gold" },
        { label: state.lang === 'en' ? "Simulate Stocks" : "أسعار الأسهم المباشرة", value: "check_stocks" }
      ];
    }
    else if (query.match(/(bus|business|أعمال)/)) {
      setTab("business");
      botReply = dict.bot_business_desc;
      options = [
        { label: state.lang === 'en' ? "Verify Credit Limit" : "التقييم الائتماني للشركة", value: "check_credit" }
      ];
    }
    else {
      botReply = state.lang === 'en'
        ? "Select a category to get started:"
        : "اختر فئة للبدء:";
      options = [
        { label: state.lang === 'en' ? "👤 Individual"           : "👤 الخطة الفردية",     value: "individual"  },
        { label: state.lang === 'en' ? "📈 Investment"           : "📈 الاستثمار",          value: "investment"  },
        { label: state.lang === 'en' ? "💼 Business Management"  : "💼 إدارة الأعمال",      value: "business"    }
      ];
    }

    sendBotMessage(botReply, options);
    renderSidebarConversations();
  }, 500);
}

// Actions clicks inside chatbot reply bubbles (Auto-navigates and closes panel!)
window.handleCustomAction = function(actionCode) {
  const dict = translations[state.lang];
  
  // 1. Close chat overlay drawer so user can examine dashboard
  document.body.classList.remove("chat-open");
  
  let targetTab = "all";
  let cardAnchorId = "";
  
  if (actionCode === "check_expenses") {
    targetTab = "individual";
    cardAnchorId = "card-ind-expenses";
  } else if (actionCode === "check_grocery") {
    targetTab = "individual";
    cardAnchorId = "card-ind-grocery";
  } else if (actionCode === "calc_salary") {
    targetTab = "individual";
    cardAnchorId = "card-ind-salary";
  } else if (actionCode === "check_gold") {
    targetTab = "investment";
    cardAnchorId = "card-inv-gold";
  } else if (actionCode === "check_stocks") {
    targetTab = "investment";
    cardAnchorId = "card-inv-stocks";
  } else if (actionCode === "check_credit") {
    targetTab = "business";
    cardAnchorId = "card-bus-credit";
  } else if (actionCode === "check_invoices") {
    targetTab = "business";
    cardAnchorId = "card-bus-finance";
  }
  
  // 2. Jump to tab
  setTab(targetTab);
  
  // 3. Scroll and highlight dashboard card
  setTimeout(() => {
    const targetEl = document.getElementById(cardAnchorId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      targetEl.classList.add("search-highlight");
      setTimeout(() => targetEl.classList.remove("search-highlight"), 3000);
    }
  }, 400);
};

// Sidebar chats history
function renderSidebarConversations() {
  const list = document.getElementById("sidebar-chats-list");
  if (!list) return;
  list.innerHTML = "";
  
  if (state.conversations.length === 0) {
    list.innerHTML = `<div style="padding: 10px; text-align: center; color: var(--text-muted); font-size:12px;">${state.lang === 'en' ? 'No recent chats' : 'لا يوجد محادثات'}</div>`;
    return;
  }
  
  state.conversations.forEach(chat => {
    const activeClass = chat.id === state.activeChatId ? "active" : "";
    const item = document.createElement("button");
    item.className = `history-item ${activeClass}`;
    item.onclick = () => openChat(chat.id);
    
    item.innerHTML = `
      <span class="history-item-text">${chat.title}</span>
      <span class="history-item-delete" onclick="deleteChat(${chat.id}, event)">&times;</span>
    `;
    list.appendChild(item);
  });
}

// ==========================================================================
// Authentication modal controllers
// ==========================================================================
function setupAuthModals() {
  const loginModal = document.getElementById("modal-login");
  const signupModal = document.getElementById("modal-signup");
  
  document.getElementById("btn-login-open").onclick = () => loginModal.classList.remove("hidden");
  document.getElementById("btn-signup-open").onclick = () => signupModal.classList.remove("hidden");
  
  document.getElementById("btn-chat-login-open").onclick = () => loginModal.classList.remove("hidden");
  document.getElementById("btn-chat-signup-open").onclick = () => signupModal.classList.remove("hidden");

  // Sidebar auth buttons
  document.getElementById("btn-sidebar-login").onclick = () => loginModal.classList.remove("hidden");
  document.getElementById("btn-sidebar-signup").onclick = () => signupModal.classList.remove("hidden");
  document.getElementById("btn-sidebar-logout").onclick = () => {
    state.currentUser = null;
    updateAuthHeaderState();
    showToast(translations[state.lang].toast_logout, "info");
  };

  // Sidebar Close Chat button (mobile)
  document.getElementById("btn-sidebar-close-chat").onclick = () => {
    document.body.classList.remove("chat-open");
    document.body.classList.remove("sidebar-open");
  };
  
  document.getElementById("btn-login-close").onclick = () => loginModal.classList.add("hidden");
  document.getElementById("btn-signup-close").onclick = () => signupModal.classList.add("hidden");
  
  loginModal.querySelector(".modal-overlay").onclick = () => loginModal.classList.add("hidden");
  signupModal.querySelector(".modal-overlay").onclick = () => signupModal.classList.add("hidden");
  
  document.getElementById("form-login").addEventListener("submit", (e) => {
    e.preventDefault();
    state.currentUser = { email: document.getElementById("login-email").value };
    loginModal.classList.add("hidden");
    updateAuthHeaderState();
    showToast(translations[state.lang].toast_login_success, "success");
  });
  
  document.getElementById("form-signup").addEventListener("submit", (e) => {
    e.preventDefault();
    state.currentUser = { email: document.getElementById("signup-email").value, username: document.getElementById("signup-username").value };
    signupModal.classList.add("hidden");
    updateAuthHeaderState();
    showToast(translations[state.lang].toast_signup_success, "success");
  });
  
  document.getElementById("btn-logout").onclick = () => {
    state.currentUser = null;
    updateAuthHeaderState();
    showToast(translations[state.lang].toast_logout, "info");
  };
  
  document.getElementById("btn-chat-logout").onclick = () => {
    state.currentUser = null;
    updateAuthHeaderState();
    showToast(translations[state.lang].toast_logout, "info");
  };
}

function updateAuthHeaderState() {
  const guestLabels = document.querySelectorAll("#lbl-profile-guest");
  const userAvatar = document.querySelector(".user-avatar");
  
  const dashboardLoginBtn = document.getElementById("btn-login-open");
  const dashboardSignupBtn = document.getElementById("btn-signup-open");
  const dashboardLoggedBadge = document.getElementById("user-logged-badge");
  const dashboardLoggedUserName = document.getElementById("logged-user-name");
  
  const chatLoginBtn = document.getElementById("btn-chat-login-open");
  const chatSignupBtn = document.getElementById("btn-chat-signup-open");
  const chatLoggedBadge = document.getElementById("chat-user-logged-badge");
  const chatLoggedUserName = document.getElementById("chat-logged-user-name");
  
  const sidebarGuest = document.getElementById("sidebar-auth-guest");
  const sidebarLogged = document.getElementById("sidebar-auth-logged");
  const sidebarEmail = document.getElementById("sidebar-logged-email");

  if (state.currentUser) {
    if (dashboardLoginBtn) dashboardLoginBtn.classList.add("hidden");
    if (dashboardSignupBtn) dashboardSignupBtn.classList.add("hidden");
    if (dashboardLoggedBadge) dashboardLoggedBadge.classList.remove("hidden");
    if (dashboardLoggedUserName) dashboardLoggedUserName.textContent = state.currentUser.email;

    if (chatLoginBtn) chatLoginBtn.classList.add("hidden");
    if (chatSignupBtn) chatSignupBtn.classList.add("hidden");
    if (chatLoggedBadge) chatLoggedBadge.classList.remove("hidden");
    if (chatLoggedUserName) chatLoggedUserName.textContent = state.currentUser.email;

    if (sidebarGuest) sidebarGuest.classList.add("hidden");
    if (sidebarLogged) sidebarLogged.classList.remove("hidden");
    if (sidebarEmail) sidebarEmail.textContent = state.currentUser.email;

    guestLabels.forEach(lbl => lbl.textContent = state.currentUser.username || state.currentUser.email);
    if (userAvatar) userAvatar.textContent = state.currentUser.email.substring(0, 2).toUpperCase();
  } else {
    if (dashboardLoginBtn) dashboardLoginBtn.classList.remove("hidden");
    if (dashboardSignupBtn) dashboardSignupBtn.classList.remove("hidden");
    if (dashboardLoggedBadge) dashboardLoggedBadge.classList.add("hidden");

    if (chatLoginBtn) chatLoginBtn.classList.remove("hidden");
    if (chatSignupBtn) chatSignupBtn.classList.remove("hidden");
    if (chatLoggedBadge) chatLoggedBadge.classList.add("hidden");

    if (sidebarGuest) sidebarGuest.classList.remove("hidden");
    if (sidebarLogged) sidebarLogged.classList.add("hidden");

    guestLabels.forEach(lbl => lbl.textContent = translations[state.lang].lbl_profile_guest);
    if (userAvatar) userAvatar.textContent = "UR";
  }
}

// ==========================================================================
// Global Search autocomplete controller
// ==========================================================================
function setupGlobalSearch() {
  const input = document.getElementById("global-search-input");
  const suggestionsBox = document.getElementById("search-suggestions");
  const clearBtn = document.getElementById("search-clear-btn");
  
  const searchIndex = [
    { title: "Personal Expenses", titleAr: "المصاريف الشخصية", desc: "Transactions log, budgets limits", tab: "individual", anchor: "card-ind-expenses" },
    { title: "Salary Management", titleAr: "إدارة الرواتب والمدخرات", desc: "50-30-20 salary budgeter", tab: "individual", anchor: "card-ind-salary" },
    { title: "Grocery Checklist", titleAr: "قائمة البقالة والسلع", desc: "Smart shopping checklist", tab: "individual", anchor: "card-ind-grocery" },
    { title: "Stocks Ticker Market", titleAr: "مؤشر الأسهم المالي", desc: "Live APPL, NVDA, TSLA values", tab: "investment", anchor: "card-inv-stocks" },
    { title: "Real Estate Portfolios", titleAr: "سوق العقارات العالمية", desc: "Dubai, Riyadh properties ROI", tab: "investment", anchor: "card-inv-estate" },
    { title: "Gold & Silver Spot Rates", titleAr: "بورصة الذهب والفضة", desc: "Live precious metals calculator", tab: "investment", anchor: "card-inv-gold" },
    { title: "Company Finance Statements", titleAr: "التدفق المالي للشركة", desc: "Gross revenues, operating bills, invoices", tab: "business", anchor: "card-bus-finance" }
  ];

  input.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query === "") {
      suggestionsBox.classList.add("hidden");
      clearBtn.classList.add("hidden");
      return;
    }
    
    clearBtn.classList.remove("hidden");
    const matches = searchIndex.filter(item => {
      const matchEn = item.title.toLowerCase().includes(query) || item.desc.toLowerCase().includes(query);
      const matchAr = item.titleAr.includes(query) || item.desc.includes(query);
      return matchEn || matchAr;
    });
    
    renderSearchSuggestions(matches);
  });

  clearBtn.addEventListener("click", () => {
    input.value = "";
    suggestionsBox.classList.add("hidden");
    clearBtn.classList.add("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest(".header-search-container")) {
      suggestionsBox.classList.add("hidden");
    }
  });
}

function renderSearchSuggestions(matches) {
  const suggestionsBox = document.getElementById("search-suggestions");
  if (matches.length === 0) {
    suggestionsBox.innerHTML = `<div style="padding: 10px; text-align: center; color: var(--text-muted); font-size:12px;">${state.lang === 'en' ? 'No matches' : 'لا توجد نتائج'}</div>`;
    suggestionsBox.classList.remove("hidden");
    return;
  }
  
  suggestionsBox.innerHTML = matches.map(item => {
    const title = state.lang === 'en' ? item.title : item.titleAr;
    return `
      <div class="search-suggestion-item" onclick="triggerSearchRoute('${item.tab}', '${item.anchor}')">
        <div class="suggestion-info">
          <span class="suggestion-title">${title}</span>
          <span class="suggestion-desc">${item.desc}</span>
        </div>
        <span class="suggestion-badge">${item.tab}</span>
      </div>
    `;
  }).join("");
  suggestionsBox.classList.remove("hidden");
}

window.triggerSearchRoute = function(tabName, cardAnchorId) {
  document.getElementById("global-search-input").value = "";
  document.getElementById("search-suggestions").classList.add("hidden");
  document.getElementById("search-clear-btn").classList.add("hidden");
  
  // Close chat overlay drawer if open
  document.body.classList.remove("chat-open");
  
  setTab(tabName);
  
  setTimeout(() => {
    const targetEl = document.getElementById(cardAnchorId);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
      targetEl.classList.add("search-highlight");
      setTimeout(() => targetEl.classList.remove("search-highlight"), 3000);
    }
  }, 400);
};

// ==========================================================================
// Initialization Loop
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  translateUI();
  renderDashboard();
  initChatbot();
  setupAuthModals();
  setupGlobalSearch();
  startStockPriceTickerSimulator();
  
  // Bind tab buttons click events
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.onclick = () => {
      const tabName = btn.getAttribute("data-tab");
      if (tabName) setTab(tabName);
    };
  });
  
  // Floating mascot click (Slides open chat overlay)
  document.getElementById("floating-mascot-trigger").onclick = () => {
    document.body.classList.add("chat-open");
  };
  
  // Close chat drawer pane (slides out)
  document.getElementById("btn-close-chat-pane").onclick = () => {
    document.body.classList.remove("chat-open");
  };

  document.getElementById("chat-pane-backdrop").onclick = () => {
    document.body.classList.remove("chat-open");
  };

  // Mobile sidebar hamburger toggle
  const sidebarToggleBtn = document.getElementById("btn-sidebar-toggle");
  if (sidebarToggleBtn) {
    sidebarToggleBtn.onclick = (e) => {
      e.stopPropagation();
      document.body.classList.toggle("sidebar-open");
    };
  }
  // Close sidebar when tapping outside of it on mobile
  document.addEventListener("click", (e) => {
    if (document.body.classList.contains("sidebar-open") && !e.target.closest("#drawer-sidebar") && !e.target.closest("#btn-sidebar-toggle")) {
      document.body.classList.remove("sidebar-open");
    }
  });
  
  // Language button clicks
  document.getElementById("header-language-toggle-btn").onclick = () => {
    state.lang = state.lang === "en" ? "ar" : "en";
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = state.lang;
    translateUI();
    updateAuthHeaderState();
  };
  
  document.getElementById("drawer-language-toggle-btn").onclick = () => {
    state.lang = state.lang === "en" ? "ar" : "en";
    document.documentElement.dir = state.lang === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = state.lang;
    translateUI();
    updateAuthHeaderState();
  };
  
  // New chat reset
  document.getElementById("btn-new-chat").onclick = createNewChat;
  
  // Theme toggle
  document.getElementById("theme-toggle-btn").onclick = toggleTheme;
  
  // Chat form submission
  document.getElementById("chat-input-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("chat-message-input");
    const val = input.value.trim();
    if (val === "") return;
    input.value = "";
    processChatbotCommand(val);
  });
  
  const textarea = document.getElementById("chat-message-input");
  textarea.addEventListener("keydown", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      document.getElementById("chat-input-form").dispatchEvent(new Event("submit"));
    }
  });

  // Lightbox close
  document.getElementById("btn-lightbox-close").onclick = () => {
    document.getElementById("image-lightbox").classList.add("hidden");
  };
  document.getElementById("image-lightbox").querySelector(".lightbox-overlay").onclick = () => {
    document.getElementById("image-lightbox").classList.add("hidden");
  };

  // Splash Screen Timeout
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    if (splash) {
      splash.classList.add("fade-out");
      setTimeout(() => splash.remove(), 800);
    }
  }, 2200);
});
