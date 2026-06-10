// RICHES PowerPoint Presentation Generator
// Requires PptxGenJS (loaded via CDN in index.html)

window.generateRichesPPT = async function () {
  const btn = document.getElementById('btn-download-ppt');
  if (btn) { btn.disabled = true; btn.textContent = 'Generating…'; }

  try {
    if (typeof PptxGenJS === 'undefined') {
      alert('PowerPoint library not loaded. Please refresh the page and try again.');
      return;
    }

    const pptx = new PptxGenJS();
    pptx.title   = 'RICHES – Wealth Management & AI Companion';
    pptx.author  = 'RICHES';
    pptx.subject = 'Wealth Management Platform';

    const B = {
      dark:     '0A0A0D',
      card:     '111116',
      red:      'D10A14',
      white:    'FFFFFF',
      light:    'F5F5F7',
      gray:     'AAAAAA',
      darkText: '1A1A1F',
      border:   '2A2A30',
    };
    const F = 'Arial';

    // ── helpers ────────────────────────────────────────────────────────────

    function topBar(slide, right) {
      slide.addShape(pptx.ShapeType.rect, {
        x: 0, y: 0, w: 10, h: 0.55,
        fill: { color: B.red }, line: { color: B.red, width: 0 }
      });
      slide.addText('RICHES', {
        x: 0.25, y: 0.09, w: 2.5, h: 0.36,
        fontFace: F, fontSize: 17, bold: true, color: B.white
      });
      if (right) slide.addText(right, {
        x: 5.5, y: 0.09, w: 4.25, h: 0.36,
        fontFace: F, fontSize: 13, color: 'FFCCCC', align: 'right'
      });
    }

    function cardBox(slide, x, y, w, h, title, desc, darkBg = true) {
      const bg = darkBg ? B.dark : B.light;
      const tc = darkBg ? B.white : B.darkText;
      const dc = darkBg ? B.gray : '555558';
      slide.addShape(pptx.ShapeType.rect, {
        x, y, w, h,
        fill: { color: darkBg ? B.card : B.white }, line: { color: B.border, width: 1 }
      });
      slide.addShape(pptx.ShapeType.rect, {
        x, y, w, h: 0.06,
        fill: { color: B.red }, line: { color: B.red, width: 0 }
      });
      if (title) slide.addText(title, {
        x: x + 0.16, y: y + 0.12, w: w - 0.32, h: 0.38,
        fontFace: F, fontSize: 13, bold: true, color: tc
      });
      if (desc) slide.addText(desc, {
        x: x + 0.16, y: y + 0.52, w: w - 0.32, h: h - 0.65,
        fontFace: F, fontSize: 10.5, color: dc, wrap: true
      });
    }

    function pageNum(slide, n) {
      slide.addText(n + ' / 8', {
        x: 9.2, y: 5.27, w: 0.62, h: 0.28,
        fontFace: F, fontSize: 9, color: '555555', align: 'right'
      });
    }

    // ── Slide 1 — Cover ────────────────────────────────────────────────────
    {
      const s = pptx.addSlide();
      s.background = { color: B.dark };

      s.addShape(pptx.ShapeType.ellipse, {
        x: 6.0, y: -2.2, w: 7, h: 7,
        fill: { color: B.red, transparency: 88 }, line: { color: B.red, transparency: 88 }
      });
      s.addShape(pptx.ShapeType.ellipse, {
        x: -2.2, y: 3.0, w: 5.5, h: 5.5,
        fill: { color: B.red, transparency: 92 }, line: { color: B.red, transparency: 92 }
      });

      s.addText('RICHES', {
        x: 0.5, y: 1.0, w: 9, h: 2.1,
        fontFace: F, fontSize: 92, bold: true, color: B.white, align: 'center'
      });

      s.addShape(pptx.ShapeType.rect, {
        x: 3.6, y: 3.2, w: 2.8, h: 0.07,
        fill: { color: B.red }, line: { color: B.red, width: 0 }
      });

      s.addText('Wealth Management & AI Companion', {
        x: 0.5, y: 3.38, w: 9, h: 0.55,
        fontFace: F, fontSize: 19, color: B.gray, align: 'center'
      });

      s.addText('astonishing-chebakia-6186ab.netlify.app', {
        x: 0.5, y: 4.75, w: 9, h: 0.4,
        fontFace: F, fontSize: 12, color: B.red, align: 'center', bold: true
      });

      pageNum(s, 1);
    }

    // ── Slide 2 — About ────────────────────────────────────────────────────
    {
      const s = pptx.addSlide();
      s.background = { color: B.light };
      topBar(s, 'Platform Overview');

      s.addShape(pptx.ShapeType.rect, {
        x: 0.4, y: 0.72, w: 3.8, h: 4.55,
        fill: { color: B.dark }, line: { color: B.dark, width: 0 }
      });
      s.addText('RICHES', {
        x: 0.6, y: 1.2, w: 3.4, h: 1.0,
        fontFace: F, fontSize: 38, bold: true, color: B.white, align: 'center'
      });
      s.addShape(pptx.ShapeType.rect, {
        x: 1.4, y: 2.28, w: 2.0, h: 0.05,
        fill: { color: B.red }, line: { color: B.red, width: 0 }
      });
      s.addText('Wealth Management\n& AI Companion', {
        x: 0.6, y: 2.42, w: 3.4, h: 1.0,
        fontFace: F, fontSize: 14, color: B.gray, align: 'center'
      });
      s.addText('astonishing-chebakia-6186ab.netlify.app', {
        x: 0.5, y: 4.9, w: 3.6, h: 0.3,
        fontFace: F, fontSize: 9.5, color: B.red, align: 'center'
      });

      s.addText('What is RICHES?', {
        x: 4.5, y: 0.78, w: 5.2, h: 0.55,
        fontFace: F, fontSize: 22, bold: true, color: B.darkText
      });

      const bullets = [
        'A premium AI-powered wealth management platform',
        'Personalised planning for individuals, investors & businesses',
        'Real-time market insights: stocks, gold, and real estate',
        'Conversational AI advisor — Ask Bedoor (EN & AR)',
        'Glassmorphic modern UI with dark & light theme',
        'Accessible anywhere — mobile, tablet & desktop',
      ];
      bullets.forEach((b, i) => {
        s.addShape(pptx.ShapeType.ellipse, {
          x: 4.5, y: 1.56 + i * 0.54 + 0.07, w: 0.11, h: 0.11,
          fill: { color: B.red }, line: { color: B.red, width: 0 }
        });
        s.addText(b, {
          x: 4.76, y: 1.53 + i * 0.54, w: 5.0, h: 0.44,
          fontFace: F, fontSize: 12.5, color: B.darkText
        });
      });

      pageNum(s, 2);
    }

    // ── Slide 3 — Three Pillars ────────────────────────────────────────────
    {
      const s = pptx.addSlide();
      s.background = { color: B.dark };
      topBar(s, 'Core Features');

      s.addText('Three Pillars of Wealth Management', {
        x: 0.5, y: 0.64, w: 9, h: 0.55,
        fontFace: F, fontSize: 20, bold: true, color: B.white, align: 'center'
      });

      const pillars = [
        { e: '👤', title: 'Individual Plan',   items: ['Personal Budgeting', 'Savings Goals', 'Expense Tracking', 'Financial Health Score', 'Zakat Calculator'] },
        { e: '📈', title: 'Investment',         items: ['Stock Market Quotes', 'Gold & Commodities', 'Real Estate Yields', 'Portfolio Analytics', 'AI Forecasts'] },
        { e: '💼', title: 'Business Mgmt',      items: ['P&L Statements', 'Cash Flow Tracking', 'Team Finance', 'Business Reports', 'Tax & Compliance'] },
      ];

      pillars.forEach((p, i) => {
        const x = 0.38 + i * 3.21;
        s.addShape(pptx.ShapeType.rect, {
          x, y: 1.28, w: 3.0, h: 4.0,
          fill: { color: B.card }, line: { color: B.border, width: 1 }
        });
        s.addShape(pptx.ShapeType.rect, {
          x, y: 1.28, w: 3.0, h: 0.08,
          fill: { color: B.red }, line: { color: B.red, width: 0 }
        });
        s.addText(p.e, {
          x: x + 0.1, y: 1.38, w: 2.8, h: 0.72,
          fontSize: 32, align: 'center'
        });
        s.addText(p.title, {
          x: x + 0.1, y: 2.12, w: 2.8, h: 0.44,
          fontFace: F, fontSize: 15, bold: true, color: B.white, align: 'center'
        });
        s.addShape(pptx.ShapeType.rect, {
          x: x + 0.4, y: 2.64, w: 2.2, h: 0.04,
          fill: { color: B.border }, line: { color: B.border, width: 0 }
        });
        p.items.forEach((item, j) => {
          s.addText('• ' + item, {
            x: x + 0.22, y: 2.78 + j * 0.47, w: 2.6, h: 0.38,
            fontFace: F, fontSize: 11.5, color: 'CCCCCC'
          });
        });
      });

      pageNum(s, 3);
    }

    // ── Slide 4 — Ask Bedoor ───────────────────────────────────────────────
    {
      const s = pptx.addSlide();
      s.background = { color: B.dark };
      topBar(s, 'AI Financial Advisor');

      s.addShape(pptx.ShapeType.ellipse, {
        x: 0.4, y: 0.78, w: 3.85, h: 3.85,
        fill: { color: '1A1A22' }, line: { color: B.red, width: 2 }
      });
      s.addText('👩‍💼', {
        x: 0.4, y: 1.1, w: 3.85, h: 3.0,
        fontSize: 82, align: 'center'
      });
      s.addText('Ask Bedoor', {
        x: 0.4, y: 4.63, w: 3.85, h: 0.42,
        fontFace: F, fontSize: 15, bold: true, color: B.red, align: 'center'
      });

      s.addText('Meet Ask Bedoor', {
        x: 4.55, y: 0.68, w: 5.1, h: 0.68,
        fontFace: F, fontSize: 28, bold: true, color: B.white
      });
      s.addShape(pptx.ShapeType.rect, {
        x: 4.55, y: 1.42, w: 2.6, h: 0.06,
        fill: { color: B.red }, line: { color: B.red, width: 0 }
      });
      s.addText('Your AI-Powered Financial Advisor', {
        x: 4.55, y: 1.58, w: 5.1, h: 0.42,
        fontFace: F, fontSize: 14, color: B.gray
      });

      const aiFeats = [
        ['🤖', 'Conversational financial guidance',   'Natural language Q&A about wealth management'],
        ['📊', 'Personalised recommendations',        'Context-aware advice based on your financial profile'],
        ['🌍', 'Bilingual — English & Arabic',        'Full RTL support with culturally relevant responses'],
        ['⚡', 'Smart category routing',              'Auto-routes to Individual, Investment or Business topics'],
      ];
      aiFeats.forEach((f, i) => {
        s.addText(f[0], {
          x: 4.55, y: 2.18 + i * 0.8, w: 0.52, h: 0.55, fontSize: 22
        });
        s.addText(f[1], {
          x: 5.15, y: 2.18 + i * 0.8, w: 4.55, h: 0.32,
          fontFace: F, fontSize: 13, bold: true, color: B.white
        });
        s.addText(f[2], {
          x: 5.15, y: 2.5 + i * 0.8, w: 4.55, h: 0.28,
          fontFace: F, fontSize: 11, color: B.gray
        });
      });

      pageNum(s, 4);
    }

    // ── Slide 5 — Individual Plan ──────────────────────────────────────────
    {
      const s = pptx.addSlide();
      s.background = { color: B.light };
      topBar(s, 'Individual Financial Plan');

      s.addText('👤  Individual Financial Plan', {
        x: 0.4, y: 0.63, w: 9.2, h: 0.58,
        fontFace: F, fontSize: 22, bold: true, color: B.darkText
      });

      const items = [
        ['Personal Budgeting',    'Track income & expenses with intelligent categorisation and monthly summaries'],
        ['Savings Goals',         'Set and monitor targets with progress tracking and milestone notifications'],
        ['Expense Analytics',     'Visual spending breakdowns with AI-powered optimisation tips'],
        ['Financial Health Score','Real-time score based on spending habits, savings rate & debt ratio'],
        ['Zakat Calculator',      'Auto-calculate Zakat obligations based on assets and Islamic finance rules'],
        ['Retirement Planning',   'Long-term projections with inflation-adjusted scenarios & target dates'],
      ];
      items.forEach((item, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        cardBox(s, col === 0 ? 0.4 : 5.2, 1.32 + row * 1.37, 4.6, 1.22, item[0], item[1], true);
      });

      pageNum(s, 5);
    }

    // ── Slide 6 — Investment ───────────────────────────────────────────────
    {
      const s = pptx.addSlide();
      s.background = { color: B.dark };
      topBar(s, 'Investment Management');

      s.addText('📈  Investment Management', {
        x: 0.4, y: 0.63, w: 9.2, h: 0.58,
        fontFace: F, fontSize: 22, bold: true, color: B.white
      });

      const invItems = [
        ['📊  Stock Market',        'Real-time quotes, sector analysis, and portfolio tracking with interactive charts'],
        ['🥇  Gold & Commodities',  'Live gold, silver & oil prices with historical performance charts and alerts'],
        ['🏠  Real Estate',         'Property yield analysis, location data & market comparisons across regions'],
        ['🔮  AI Forecasts',        'ML-powered price predictions, risk assessments & investment opportunity alerts'],
      ];
      invItems.forEach((item, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        cardBox(s, col === 0 ? 0.4 : 5.2, 1.28 + row * 1.9, 4.6, 1.72, item[0], item[1], true);
      });

      pageNum(s, 6);
    }

    // ── Slide 7 — Business Management ─────────────────────────────────────
    {
      const s = pptx.addSlide();
      s.background = { color: B.light };
      topBar(s, 'Business Management');

      s.addText('💼  Business Management', {
        x: 0.4, y: 0.63, w: 9.2, h: 0.58,
        fontFace: F, fontSize: 22, bold: true, color: B.darkText
      });

      const bizItems = [
        ['P&L Statements',    'Profit & loss dashboards with visual charts and period comparisons'],
        ['Cash Flow Analysis','Inflow/outflow forecasting, liquidity alerts and trend analysis'],
        ['Team Finance',      'Payroll management, reimbursements and expense claim workflows'],
        ['Business Reports',  'PDF/Excel exports with custom date ranges and KPI highlights'],
        ['Tax & Compliance',  'VAT, Zakat, and regulatory compliance tools for GCC businesses'],
        ['Growth Analytics',  'KPI tracking, benchmarking and AI-powered growth recommendations'],
      ];
      bizItems.forEach((item, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        cardBox(s, col === 0 ? 0.4 : 5.2, 1.32 + row * 1.37, 4.6, 1.22, item[0], item[1], true);
      });

      pageNum(s, 7);
    }

    // ── Slide 8 — CTA ──────────────────────────────────────────────────────
    {
      const s = pptx.addSlide();
      s.background = { color: B.dark };

      s.addShape(pptx.ShapeType.ellipse, {
        x: 6.5, y: -2.0, w: 6.5, h: 6.5,
        fill: { color: B.red, transparency: 88 }, line: { color: B.red, transparency: 88 }
      });
      s.addShape(pptx.ShapeType.ellipse, {
        x: -2.0, y: 3.0, w: 5.0, h: 5.0,
        fill: { color: B.red, transparency: 92 }, line: { color: B.red, transparency: 92 }
      });

      s.addShape(pptx.ShapeType.rect, { x: 0, y: 0,    w: 10, h: 0.08, fill: { color: B.red }, line: { color: B.red, width: 0 } });
      s.addShape(pptx.ShapeType.rect, { x: 0, y: 5.545,w: 10, h: 0.08, fill: { color: B.red }, line: { color: B.red, width: 0 } });

      s.addText('Experience RICHES', {
        x: 0.5, y: 0.85, w: 9, h: 1.55,
        fontFace: F, fontSize: 52, bold: true, color: B.white, align: 'center'
      });

      s.addShape(pptx.ShapeType.rect, {
        x: 3.6, y: 2.52, w: 2.8, h: 0.07,
        fill: { color: B.red }, line: { color: B.red, width: 0 }
      });

      s.addText('Wealth Management & AI Companion', {
        x: 0.5, y: 2.68, w: 9, h: 0.52,
        fontFace: F, fontSize: 18, color: B.gray, align: 'center'
      });

      s.addText('🌐  astonishing-chebakia-6186ab.netlify.app', {
        x: 0.5, y: 3.55, w: 9, h: 0.5,
        fontFace: F, fontSize: 16, color: B.red, align: 'center', bold: true
      });

      s.addText('Ask Bedoor AI  —  Available 24 / 7', {
        x: 0.5, y: 4.9, w: 9, h: 0.38,
        fontFace: F, fontSize: 11, color: '444444', align: 'center'
      });

      pageNum(s, 8);
    }

    // ── Save ───────────────────────────────────────────────────────────────
    await pptx.writeFile({ fileName: 'RICHES_Presentation.pptx' });

  } finally {
    if (btn) { btn.disabled = false; btn.textContent = '⬇ Download Presentation'; }
  }
};
