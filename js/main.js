/* ============================================
   PROFITPILOT — Main JavaScript v5
   ✅ الترجمة العربية الكاملة
   ✅ Formspree xyknygoy
   ✅ RTL كامل
   ============================================ */

// ── Navbar Scroll ──
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar?.classList.toggle('scrolled', window.scrollY > 50);
});

// ── Mobile Menu ──
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');
hamburger?.addEventListener('click', () => mobileMenu?.classList.add('open'));
mobileClose?.addEventListener('click', () => mobileMenu?.classList.remove('open'));
mobileMenu?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => mobileMenu.classList.remove('open'));
});

// ══════════════════════════════════════════════
// ── TRANSLATIONS ──
// ══════════════════════════════════════════════
const translations = {
  fr: {
    'nav.home':'Accueil','nav.about':'À propos','nav.services':'Services',
    'nav.portfolio':'Réalisations','nav.blog':'Blog','nav.contact':'Contact','nav.cta':'Prendre RDV',
    'hero.badge':'Expert Certifié — Auto-Entrepreneur',
    'hero.title':'Des Analyses <em>Financières</em> qui<br>Propulsent votre Croissance',
    'hero.desc':'BENSAID Farouk vous accompagne dans vos décisions stratégiques grâce à des études financières, économiques et marketing sur mesure.',
    'hero.btn1':'Découvrir les services','hero.btn2':'Nous contacter',
    'hero.stat1':'Années d\'expérience','hero.stat2':'Clients accompagnés','hero.stat3':'Missions réalisées',
    'services.label':'Notre expertise','services.title':'Des Solutions Complètes pour Chaque Défi',
    'services.s1.title':'Études Financières','services.s2.title':'Analyse des Risques',
    'services.s3.title':'Études Marketing','services.s4.title':'Études Économiques',
    'services.btn':'Voir tous les services →',
    'about.label':'Qui sommes-nous','about.title':'BENSAID Farouk',
    'about.subtitle':'Chargé d\'Études Financières & Économiques',
    'about.desc':'Auto-entrepreneur certifié établi à Alger, BENSAID Farouk accompagne entreprises, startups et investisseurs dans leurs décisions stratégiques avec rigueur et confidentialité.',
    'about.btn':'En savoir plus →',
    'portfolio.label':'Réalisations récentes','portfolio.title':'Missions Accomplies','portfolio.btn':'Voir toutes les réalisations →',
    'testimonials.label':'Témoignages','testimonials.title':'Ce que Disent nos Clients',
    'blog.label':'Articles & Insights','blog.title':'Blog & Ressources','blog.btn':'Lire tous les articles →',
    'cta.label':'Prêt à commencer ?','cta.title':'Vous avez un projet en tête ?',
    'cta.desc':'Contactez-nous pour une première consultation gratuite.','cta.btn':'Démarrons Ensemble →',
    'contact.label':'Nous écrire','contact.title':'Démarrons Ensemble',
    'contact.desc':'Que vous soyez une PME, une startup ou un investisseur, nous vous accompagnons avec rigueur et confidentialité.',
    'contact.form.title':'Envoyez-nous un message',
    'contact.form.subtitle':'Décrivez votre projet et nous vous recontactons rapidement.',
    'contact.form.name':'Nom complet *','contact.form.company':'Entreprise',
    'contact.form.email':'Email *','contact.form.phone':'Téléphone',
    'contact.form.service':'Service souhaité','contact.form.budget':'Budget estimé (DZD)',
    'contact.form.message':'Description du projet *',
    'contact.form.submit':'Envoyer le message →','contact.form.sending':'Envoi en cours...',
    'contact.form.success':'Message envoyé avec succès !',
    'contact.form.success.sub':'Nous vous répondrons sous 24h ouvrables.',
    'contact.form.error':'Erreur, réessayez',
    'contact.ph.name':'Votre nom','contact.ph.company':'Votre entreprise',
    'contact.ph.email':'votre@email.com','contact.ph.phone':'+213 5XX XX XX XX',
    'contact.ph.message':'Décrivez votre projet, vos besoins et vos objectifs...',
    'aboutpage.label':'Notre Histoire','aboutpage.title':'À Propos de ProfitPilot',
    'aboutpage.subtitle':'Une expertise financière et économique au service de votre croissance.',
    'servicespage.label':'Ce que nous faisons','servicespage.title':'Nos Services',
    'servicespage.subtitle':'Des études sur mesure pour chaque étape de votre projet.',
    'portfoliopage.label':'Nos Réalisations','portfoliopage.title':'Missions & Projets',
    'portfoliopage.subtitle':'Des études concrètes, des résultats mesurables.',
    'blogpage.label':'Nos Articles','blogpage.title':'Blog & Ressources',
    'blogpage.subtitle':'Analyses, guides et insights pour entrepreneurs algériens.',
    'blog.newsletter.title':'Newsletter',
    'blog.newsletter.desc':'Recevez nos analyses et insights directement dans votre boîte mail.',
    'blog.newsletter.ph':'Votre adresse email','blog.newsletter.btn':'S\'abonner',
    'blog.newsletter.sending':'Inscription...','blog.newsletter.success':'✅ Abonné avec succès !',
    'footer.desc':'Expert en études financières, économiques et marketing. Nous accompagnons votre croissance avec rigueur et professionnalisme.',
    'footer.rights':'Tous droits réservés.',
  },
  ar: {
    'nav.home':'الرئيسية','nav.about':'من نحن','nav.services':'الخدمات',
    'nav.portfolio':'إنجازاتنا','nav.blog':'المدونة','nav.contact':'تواصل معنا','nav.cta':'احجز موعداً',
    'hero.badge':'خبير معتمد — مقاول ذاتي',
    'hero.title':'تحليلات <em>مالية</em> تُطلق<br>نمو مشروعك',
    'hero.desc':'بن سعيد فاروق يرافقك في قراراتك الاستراتيجية من خلال دراسات مالية واقتصادية وتسويقية مصمّمة خصيصاً لك.',
    'hero.btn1':'اكتشف خدماتنا','hero.btn2':'تواصل معنا',
    'hero.stat1':'سنوات خبرة','hero.stat2':'عميل مُرافَق','hero.stat3':'مهمة منجزة',
    'services.label':'خبراتنا','services.title':'حلول متكاملة لكل تحدٍّ',
    'services.s1.title':'الدراسات المالية','services.s2.title':'تحليل المخاطر',
    'services.s3.title':'الدراسات التسويقية','services.s4.title':'الدراسات الاقتصادية',
    'services.btn':'عرض جميع الخدمات ←',
    'about.label':'من نحن','about.title':'بن سعيد فاروق',
    'about.subtitle':'مكلف بالدراسات المالية والاقتصادية',
    'about.desc':'مقاول ذاتي معتمد مقيم بالجزائر العاصمة، يرافق المؤسسات والناشئات والمستثمرين في قراراتهم الاستراتيجية بصرامة وسرية تامة.',
    'about.btn':'اعرف أكثر ←',
    'portfolio.label':'أحدث الإنجازات','portfolio.title':'المهام المنجزة','portfolio.btn':'عرض كل الإنجازات ←',
    'testimonials.label':'شهادات العملاء','testimonials.title':'ما يقوله عملاؤنا',
    'blog.label':'مقالات وتحليلات','blog.title':'المدونة والموارد','blog.btn':'قراءة جميع المقالات ←',
    'cta.label':'هل أنت مستعد؟','cta.title':'هل لديك مشروع في ذهنك؟',
    'cta.desc':'تواصل معنا للحصول على استشارة أولى مجانية.','cta.btn':'لنبدأ معاً ←',
    'contact.label':'راسلنا','contact.title':'لنبدأ معاً',
    'contact.desc':'سواء كنت مؤسسة صغيرة أو ناشئة أو مستثمراً، نرافقك بصرامة وسرية تامة في جميع مشاريعك.',
    'contact.form.title':'أرسل لنا رسالة',
    'contact.form.subtitle':'صف مشروعك وسنتواصل معك في أقرب وقت.',
    'contact.form.name':'الاسم الكامل *','contact.form.company':'المؤسسة',
    'contact.form.email':'البريد الإلكتروني *','contact.form.phone':'رقم الهاتف',
    'contact.form.service':'الخدمة المطلوبة','contact.form.budget':'الميزانية التقديرية (دج)',
    'contact.form.message':'وصف المشروع *',
    'contact.form.submit':'إرسال الرسالة ←','contact.form.sending':'جاري الإرسال...',
    'contact.form.success':'تم إرسال رسالتك بنجاح!',
    'contact.form.success.sub':'سنردّ عليك خلال 24 ساعة عمل.',
    'contact.form.error':'خطأ، حاول مجدداً',
    'contact.ph.name':'اسمك الكامل','contact.ph.company':'اسم مؤسستك',
    'contact.ph.email':'بريدك@الإلكتروني.com','contact.ph.phone':'+213 5XX XX XX XX',
    'contact.ph.message':'صف مشروعك واحتياجاتك وأهدافك...',
    'aboutpage.label':'قصتنا','aboutpage.title':'نبذة عن ProfitPilot',
    'aboutpage.subtitle':'خبرة مالية واقتصادية في خدمة نموّك.',
    'servicespage.label':'ما نقوم به','servicespage.title':'خدماتنا',
    'servicespage.subtitle':'دراسات مخصصة لكل مرحلة من مراحل مشروعك.',
    'portfoliopage.label':'إنجازاتنا','portfoliopage.title':'المهام والمشاريع',
    'portfoliopage.subtitle':'دراسات ملموسة ونتائج قابلة للقياس.',
    'blogpage.label':'مقالاتنا','blogpage.title':'المدونة والموارد',
    'blogpage.subtitle':'تحليلات وأدلة ورؤى لرواد الأعمال الجزائريين.',
    'blog.newsletter.title':'النشرة الإخبارية',
    'blog.newsletter.desc':'احصل على تحليلاتنا ورؤانا مباشرةً في بريدك الإلكتروني.',
    'blog.newsletter.ph':'بريدك الإلكتروني','blog.newsletter.btn':'اشترك الآن',
    'blog.newsletter.sending':'جاري الاشتراك...','blog.newsletter.success':'✅ تم الاشتراك بنجاح!',
    'footer.desc':'خبير في الدراسات المالية والاقتصادية والتسويقية. نرافق نموّك بصرامة ومهنية.',
    'footer.rights':'جميع الحقوق محفوظة.',
  },
  en: {
    'nav.home':'Home','nav.about':'About','nav.services':'Services',
    'nav.portfolio':'Portfolio','nav.blog':'Blog','nav.contact':'Contact','nav.cta':'Book a Call',
    'hero.badge':'Certified Expert — Self-Employed',
    'hero.title':'<em>Financial</em> Analysis that<br>Fuels Your Growth',
    'hero.desc':'BENSAID Farouk guides your strategic decisions with tailored financial, economic, and marketing studies.',
    'hero.btn1':'Explore Services','hero.btn2':'Contact Us',
    'hero.stat1':'Years of Experience','hero.stat2':'Clients Served','hero.stat3':'Missions Completed',
    'services.label':'Our Expertise','services.title':'Complete Solutions for Every Challenge',
    'services.s1.title':'Financial Studies','services.s2.title':'Risk Analysis',
    'services.s3.title':'Marketing Studies','services.s4.title':'Economic Studies',
    'services.btn':'View all services →',
    'about.label':'About Us','about.title':'BENSAID Farouk',
    'about.subtitle':'Financial & Economic Studies Expert',
    'about.desc':'Certified self-employed consultant based in Algiers, guiding businesses, startups and investors with rigor and confidentiality.',
    'about.btn':'Learn more →',
    'portfolio.label':'Recent Work','portfolio.title':'Completed Missions','portfolio.btn':'View all projects →',
    'testimonials.label':'Testimonials','testimonials.title':'What Our Clients Say',
    'blog.label':'Articles & Insights','blog.title':'Blog & Resources','blog.btn':'Read all articles →',
    'cta.label':'Ready to start?','cta.title':'Got a project in mind?',
    'cta.desc':'Contact us for a free first consultation.','cta.btn':'Let\'s Start Together →',
    'contact.label':'Write to Us','contact.title':'Let\'s Start Together',
    'contact.desc':'Whether you\'re a SME, startup or investor, we support you with rigor and confidentiality.',
    'contact.form.title':'Send us a message',
    'contact.form.subtitle':'Describe your project and we\'ll get back to you quickly.',
    'contact.form.name':'Full name *','contact.form.company':'Company',
    'contact.form.email':'Email *','contact.form.phone':'Phone',
    'contact.form.service':'Desired service','contact.form.budget':'Estimated budget (DZD)',
    'contact.form.message':'Project description *',
    'contact.form.submit':'Send message →','contact.form.sending':'Sending...',
    'contact.form.success':'Message sent successfully!',
    'contact.form.success.sub':'We\'ll reply within 24 working hours.',
    'contact.form.error':'Error, please retry',
    'contact.ph.name':'Your full name','contact.ph.company':'Your company',
    'contact.ph.email':'your@email.com','contact.ph.phone':'+213 5XX XX XX XX',
    'contact.ph.message':'Describe your project, needs and objectives...',
    'aboutpage.label':'Our Story','aboutpage.title':'About ProfitPilot',
    'aboutpage.subtitle':'Financial and economic expertise at the service of your growth.',
    'servicespage.label':'What We Do','servicespage.title':'Our Services',
    'servicespage.subtitle':'Custom studies for every stage of your project.',
    'portfoliopage.label':'Our Work','portfoliopage.title':'Missions & Projects',
    'portfoliopage.subtitle':'Concrete studies, measurable results.',
    'blogpage.label':'Our Articles','blogpage.title':'Blog & Resources',
    'blogpage.subtitle':'Analyses, guides and insights for Algerian entrepreneurs.',
    'blog.newsletter.title':'Newsletter',
    'blog.newsletter.desc':'Receive our analyses and insights directly in your inbox.',
    'blog.newsletter.ph':'Your email address','blog.newsletter.btn':'Subscribe',
    'blog.newsletter.sending':'Subscribing...','blog.newsletter.success':'✅ Subscribed successfully!',
    'footer.desc':'Expert in financial, economic and marketing studies. We support your growth with rigor and professionalism.',
    'footer.rights':'All rights reserved.',
  }
};

// ══════════════════════════════════════════════
// ── Language Engine ──
// ══════════════════════════════════════════════
// Detect language from <html lang=""> attribute (set per language folder)
const _htmlLang = document.documentElement.lang || 'fr';
const _validLangs = ['fr', 'ar', 'en'];
const _savedLang = localStorage.getItem('pp_lang');
// If saved lang matches html lang → use saved. Otherwise use html lang (page-level override)
let currentLang = (_savedLang && _validLangs.includes(_savedLang) && _savedLang === _htmlLang)
  ? _savedLang
  : (_validLangs.includes(_htmlLang) ? _htmlLang : 'fr');

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('pp_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const val = translations[lang]?.[el.dataset.i18n];
    if (!val) return;
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = val;
    } else {
      el.innerHTML = val;
    }
  });

  document.body.classList.toggle('rtl', lang === 'ar');
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// Apply on load
setLang(currentLang);

// ══════════════════════════════════════════════
// ── RTL Styles ──
// ══════════════════════════════════════════════
const rtlStyle = document.createElement('style');
rtlStyle.textContent = `
  body.rtl { font-family:'DM Sans','Segoe UI',Tahoma,Arial,sans-serif; letter-spacing:0; }
  body.rtl h1,body.rtl h2,body.rtl h3,body.rtl h4,body.rtl h5 {
    font-family:'Playfair Display','Traditional Arabic',Arial,serif;
  }
  body.rtl .nav-links { flex-direction:row-reverse; }
  body.rtl .nav-inner { flex-direction:row-reverse; }
  body.rtl .hero-content { text-align:right; }
  body.rtl .hero-actions { flex-direction:row-reverse; justify-content:flex-start; }
  body.rtl .hero-stats { flex-direction:row-reverse; }
  body.rtl .section-header { text-align:right; }
  body.rtl .section-header .gold-line.center { margin:1.2rem auto; }
  body.rtl .section-label { text-align:right; display:block; }
  body.rtl .about-content { text-align:right; }
  body.rtl .expertise-item { flex-direction:row-reverse; text-align:right; }
  body.rtl .contact-item { flex-direction:row-reverse; text-align:right; }
  body.rtl .step-card { flex-direction:row-reverse; text-align:right; }
  body.rtl .step-content { text-align:right; }
  body.rtl .footer-col h5 { text-align:right; }
  body.rtl .footer-brand p { text-align:right; }
  body.rtl .footer-bottom { flex-direction:row-reverse; }
  body.rtl .breadcrumb { flex-direction:row-reverse; }
  body.rtl .article-body { text-align:right; }
  body.rtl .article-meta { flex-direction:row-reverse; }
  body.rtl .toc ol { padding-right:1.2rem; padding-left:0; }
  body.rtl .highlight-box { border-left:none; border-right:3px solid var(--purple); border-radius:10px 0 0 10px; }
  body.rtl .highlight-box.gold { border-right-color:var(--gold); }
  body.rtl .blog-layout { direction:rtl; }
  body.rtl .sidebar-widget h5 { text-align:right; }
  body.rtl .related-link { flex-direction:row-reverse; }
  body.rtl .kw-cloud { flex-direction:row-reverse; }
  body.rtl .contact-form { text-align:right; }
  body.rtl .form-group label { text-align:right; display:block; }
  body.rtl select,body.rtl input,body.rtl textarea { text-align:right; direction:rtl; }
  body.rtl .mobile-menu a { text-align:right; }
  body.rtl .portfolio-card,body.rtl .service-card,body.rtl .value-card { text-align:right; }
  body.rtl .service-tags { justify-content:flex-end; }
  body.rtl .testimonial-card { text-align:right; }
  body.rtl .testimonial-author { flex-direction:row-reverse; }
  body.rtl .author-card { flex-direction:row-reverse; text-align:right; }
  body.rtl .faq-q { flex-direction:row-reverse; text-align:right; }
  body.rtl .data-table th,body.rtl .data-table td { text-align:right; }
  body.rtl .page-header { text-align:right; }
  body.rtl .page-header .breadcrumb { justify-content:flex-end; }
  body.rtl .internal-links-box ul { padding-right:1.2rem; padding-left:0; }
  body.rtl .grid-2 { direction:rtl; }
`;
document.head.appendChild(rtlStyle);

// ══════════════════════════════════════════════
// ── Fade-up Animations ──
// ══════════════════════════════════════════════
document.querySelectorAll('.fade-up').forEach(el => el.classList.add('animate-ready'));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove('animate-ready');
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ══════════════════════════════════════════════
// ── Counter Animation ──
// ══════════════════════════════════════════════
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const step = target / 60;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current) + suffix;
  }, 25);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target, parseInt(entry.target.dataset.target), entry.target.dataset.suffix || '');
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

// ══════════════════════════════════════════════
// ── Active Nav ──
// ══════════════════════════════════════════════
window.addEventListener('scroll', () => {
  let current = '';
  document.querySelectorAll('section[id]').forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 200) current = sec.id;
  });
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.classList.toggle('active', !!current && a.getAttribute('href')?.includes(current));
  });
});

// ── Smooth Scroll ──
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior:'smooth', block:'start' }); }
  });
});

// ══════════════════════════════════════════════
// ── Formspree Contact Form ──
// ══════════════════════════════════════════════
const FORMSPREE_ID = 'xyknygoy';
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

if (contactForm) {
  contactForm.action = `https://formspree.io/f/${FORMSPREE_ID}`;

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = translations[currentLang]?.['contact.form.sending'] || 'Envoi en cours...';
    btn.disabled = true;

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        body: new FormData(contactForm),
        headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        contactForm.style.display = 'none';
        if (formSuccess) formSuccess.style.display = 'block';
      } else {
        btn.innerHTML = translations[currentLang]?.['contact.form.error'] || 'Erreur';
        btn.disabled = false;
        setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 3000);
      }
    } catch {
      btn.innerHTML = translations[currentLang]?.['contact.form.error'] || 'Erreur réseau';
      btn.disabled = false;
      setTimeout(() => { btn.innerHTML = orig; btn.disabled = false; }, 3000);
    }
  });
}

// ══════════════════════════════════════════════
// ── Formspree Newsletter ──
// ══════════════════════════════════════════════
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
  newsletterForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = newsletterForm.querySelector('button[type="submit"]');
    const input = newsletterForm.querySelector('input[type="email"]');
    const msgEl = document.getElementById('newsletterMsg');
    const orig = btn.innerHTML;
    btn.innerHTML = translations[currentLang]?.['blog.newsletter.sending'] || 'Inscription...';
    btn.disabled = true;

    try {
      const fd = new FormData();
      fd.append('email', input.value);
      fd.append('_subject', 'Nouvelle inscription newsletter — profitpilot.dz');
      fd.append('type', 'newsletter');
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST', body: fd, headers: { 'Accept': 'application/json' }
      });
      if (res.ok) {
        const successText = translations[currentLang]?.['blog.newsletter.success'] || '✅ Abonné !';
        btn.innerHTML = successText;
        btn.style.cssText = 'background:rgba(34,197,94,0.2);border-color:#22c55e;width:100%;justify-content:center;';
        input.value = '';
        if (msgEl) { msgEl.textContent = successText; msgEl.style.display = 'block'; }
      } else {
        btn.innerHTML = orig; btn.disabled = false;
      }
    } catch { btn.innerHTML = orig; btn.disabled = false; }
  });
}

// ── FAQ Toggle ──
document.querySelectorAll('.faq-q').forEach(q => {
  q.addEventListener('click', () => q.parentElement.classList.toggle('open'));
});
