(function () {
  document.documentElement.classList.add("js");

  var toggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");

  if (toggle && mobileNav) {
    toggle.addEventListener("click", function () {
      var isOpen = mobileNav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    Array.prototype.forEach.call(mobileNav.querySelectorAll("a"), function (link) {
      link.addEventListener("click", function () {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && mobileNav.classList.contains("is-open")) {
        mobileNav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }

  var revealEls = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window && revealEls.length) {
    var revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );

    Array.prototype.forEach.call(revealEls, function (el) {
      revealObserver.observe(el);
    });
  } else {
    Array.prototype.forEach.call(revealEls, function (el) {
      el.classList.add("is-visible");
    });
  }

  var navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  var sections = Array.prototype.map
    .call(navLinks, function (link) {
      return document.querySelector(link.getAttribute("href"));
    })
    .filter(Boolean);

  if ("IntersectionObserver" in window && sections.length) {
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = document.querySelector(
            ".nav-links a[href='#" + entry.target.id + "']"
          );
          if (!link || !entry.isIntersecting) return;
          Array.prototype.forEach.call(navLinks, function (l) {
            l.classList.remove("is-active");
          });
          link.classList.add("is-active");
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    sections.forEach(function (section) {
      spy.observe(section);
    });
  }
})();

(function () {
  var translations = {
    "meta.title": {
      bg: "Lili — Индивидуални уроци по френски",
      en: "Lili — Private French Lessons",
    },
    "meta.description": {
      bg: "Индивидуални онлайн уроци по френски с Лили — от първите думи до свободното говорене, подготовка за учене във Франция и увереност на френски в работата.",
      en: "Private online French lessons with Lili — from your first words to speaking freely, preparing to study in France, and confidence using French at work.",
    },
    "skip.link": { bg: "Към съдържанието", en: "Skip to content" },
    "nav.lessons": { bg: "Уроци", en: "Lessons" },
    "nav.approach": { bg: "Подход", en: "Approach" },
    "nav.about": { bg: "За мен", en: "About" },
    "nav.pricing": { bg: "Цени", en: "Pricing" },
    "nav.contact": { bg: "Контакт", en: "Contact" },
    "nav.ariaMain": { bg: "Основна навигация", en: "Main navigation" },
    "nav.ariaMobile": { bg: "Мобилна навигация", en: "Mobile navigation" },
    "nav.ariaToggle": { bg: "Отвори менюто", en: "Open menu" },
    "nav.langAria": { bg: "Избор на език", en: "Choose language" },
    "cta.book": { bg: "Запази безплатна среща", en: "Book a free call" },
    "cta.email": { bg: "Пиши ми по имейл", en: "Email me" },
    "hero.h1": {
      bg: "Научи френски, който <em>наистина</em> ще използваш.",
      en: "Learn French you’ll <em>actually</em> use.",
      html: true,
    },
    "hero.tagline": {
      bg: "От първите думи до свободното говорене.",
      en: "From your first words to speaking freely.",
    },
    "credentials.full": {
      bg: "10 години във Франция · CELSA – Sorbonne Université · Опит във френска бизнес среда и преподаване",
      en: "10 years in France · CELSA – Sorbonne Université · Experience in French business and teaching",
    },
    "credentials.france": { bg: "10 години във Франция", en: "10 years in France" },
    "credentials.celsa": { bg: "CELSA – Sorbonne Université", en: "CELSA – Sorbonne Université" },
    "credentials.experience": {
      bg: "Опит във френска бизнес среда и преподаване",
      en: "Experience in French business and teaching",
    },
    "lessons.h2": {
      bg: "Избери урок според целта си",
      en: "Choose a course based on your goal",
    },
    "lesson1.title": { bg: "Научи френски", en: "Learn French" },
    "lesson1.tagline": {
      bg: "За свободна комуникация",
      en: "For fluent, confident communication",
    },
    "lesson1.for": {
      bg: "<strong>Подходящо за:</strong> начинаещи и хора, които искат да подобрят френския си.",
      en: "<strong>Best for:</strong> beginners and anyone looking to improve their French.",
      html: true,
    },
    "lesson2.title": { bg: "Учи във Франция", en: "Study in France" },
    "lesson2.tagline": {
      bg: "За обучение в университетска среда.",
      en: "For studying in a university environment.",
    },
    "lesson2.for": {
      bg: "<strong>Подходящо за:</strong> хора, на които предстои следване, Erasmus или друга академична програма във Франция.",
      en: "<strong>Best for:</strong> anyone about to start university, Erasmus, or another academic programme in France.",
      html: true,
    },
    "lesson3.title": { bg: "Работи на френски", en: "Work in French" },
    "lesson3.tagline": {
      bg: "За задачите в работна среда.",
      en: "For the tasks of a work environment.",
    },
    "lesson3.for": {
      bg: "<strong>Подходящо за:</strong> хора, които вече говорят френски и искат да го използват по-уверено в работата си.",
      en: "<strong>Best for:</strong> anyone who already speaks French and wants to use it more confidently at work.",
      html: true,
    },
    "approach.h2": {
      bg: "Няма просто да учиш френски. <em>Ще започнеш</em> да го използваш.",
      en: "You won’t just study French. <em>You’ll start</em> using it.",
      html: true,
    },
    "benefit1.title": { bg: "Реален френски", en: "Real French" },
    "benefit1.text": {
      bg: "Автентични ситуации и език, а не изкуствени учебникови диалози.",
      en: "Authentic situations and language, not scripted textbook dialogues.",
    },
    "benefit2.title": { bg: "Персонален подход", en: "A personal approach" },
    "benefit2.text": {
      bg: "Според нивото, темпото и целта на всеки ученик.",
      en: "Tailored to each student’s level, pace, and goal.",
    },
    "benefit3.title": { bg: "Активна практика", en: "Active practice" },
    "benefit3.text": {
      bg: "Използваш наученото активно още по време на самия урок.",
      en: "You put what you learn into practice during the lesson itself.",
    },
    "about.alt": {
      bg: "Лили, преподавател по френски език",
      en: "Lili, French language teacher",
    },
    "about.h2": {
      bg: "Френският е езикът, на който учих, работих и живях повече от 10 години.",
      en: "French is the language I studied, worked, and lived in for more than 10 years.",
    },
    "about.p1": {
      bg: "Аз съм <strong>Лили</strong> и завърших бакалавърска и магистърска степен по международна комуникация в CELSA – Sorbonne Université във Франция.",
      en: "I’m <strong>Lili</strong>, and I hold a bachelor’s and master’s degree in international communication from CELSA – Sorbonne Université in France.",
      html: true,
    },
    "about.p2": {
      bg: "Живях във Франция 10 години, като опитът ми включва работа във френски компании като <strong>BNP Paribas</strong> и <strong>L’Oréal</strong>, както и преподаване на френски език на студенти в САЩ.",
      en: "I lived in France for 10 years, including experience working at French companies such as <strong>BNP Paribas</strong> and <strong>L’Oréal</strong>, as well as teaching French to students in the US.",
      html: true,
    },
    "about.p3": {
      bg: "Днес съм в България и искам да предам не само знанията си по езика, но и разбирането си за начина, по който френският действително се говори и използва — в ежедневието, университета и професионалната среда.",
      en: "Today I’m based in Bulgaria, and I want to share not just knowledge of the language, but an understanding of how French is really spoken and used — in everyday life, at university, and in professional settings.",
    },
    "pricing.h2": { bg: "Индивидуални уроци", en: "Private lessons" },
    "pricing.meta": { bg: "/ 60 минути", en: "/ 60 minutes" },
    "pricing.include1": { bg: "Индивидуален урок", en: "A one-on-one lesson" },
    "pricing.include2": {
      bg: "Съдържание според нивото и целите ти",
      en: "Content tailored to your level and goals",
    },
    "pricing.include3": { bg: "Учебни материали", en: "Learning materials" },
    "pricing.include4": {
      bg: "Допълнителна подкрепа и практика",
      en: "Extra support and practice",
    },
    "pricing.free": {
      bg: '<strong>Първа опознавателна среща</strong> — 20 минути, <span class="highlight">безплатно</span>.',
      en: '<strong>First intro call</strong> — 20 minutes, <span class="highlight">free</span>.',
      html: true,
    },
    "pricingNext.title": { bg: "Какво следва?", en: "What happens next?" },
    "pricingNext.step1": { bg: "Запазваш среща", en: "You book a call" },
    "pricingNext.step2": {
      bg: "Говорим за целите ти",
      en: "We talk about your goals",
    },
    "pricingNext.step3": { bg: "Започваме", en: "We get started" },
    "contact.h2": {
      bg: "Не е нужно да знаеш откъде да започнеш.",
      en: "You don’t need to know where to start.",
    },
    "contact.lead": {
      bg: "За 20 минути ще поговорим за нивото ти, целите ти и какъв подход би бил най-подходящ за теб.",
      en: "In 20 minutes, we’ll talk about your level, your goals, and which approach would suit you best.",
    },
    "contact.meta": {
      bg: "20 минути · онлайн · без ангажимент",
      en: "20 minutes · online · no commitment",
    },
    "footer.text": {
      bg: "© 2026 Lili · Уроци по френски език",
      en: "© 2026 Lili · French language lessons",
    },
  };

  function applyTranslations(lang) {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var entry = translations[el.getAttribute("data-i18n")];
      if (!entry) return;
      var value = entry[lang] || entry.bg;
      if (entry.html) {
        el.innerHTML = value;
      } else {
        el.textContent = value;
      }
    });

    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      el.getAttribute("data-i18n-attr")
        .split(";")
        .forEach(function (pair) {
          var parts = pair.split(":");
          var attr = parts[0] && parts[0].trim();
          var key = parts[1] && parts[1].trim();
          var entry = key && translations[key];
          if (attr && entry) {
            el.setAttribute(attr, entry[lang] || entry.bg);
          }
        });
    });

    document.documentElement.lang = lang;

    var titleEntry = translations["meta.title"];
    if (titleEntry) document.title = titleEntry[lang] || titleEntry.bg;

    var descEntry = translations["meta.description"];
    var descEl = document.querySelector('meta[name="description"]');
    if (descEntry && descEl) {
      descEl.setAttribute("content", descEntry[lang] || descEntry.bg);
    }

    document.querySelectorAll(".lang-switch").forEach(function (group) {
      group.classList.toggle("is-en", lang === "en");
      group.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
        var isActive = btn.getAttribute("data-lang") === lang;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    });

    try {
      localStorage.setItem("lang", lang);
    } catch (e) {
      /* storage unavailable — language choice just won't persist */
    }
  }

  function setLanguage(lang) {
    var reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reduceMotion && document.startViewTransition) {
      document.startViewTransition(function () {
        applyTranslations(lang);
      });
      return;
    }

    if (!reduceMotion) {
      document.documentElement.classList.add("lang-fade-out");
      setTimeout(function () {
        applyTranslations(lang);
        document.documentElement.classList.remove("lang-fade-out");
      }, 200);
      return;
    }

    applyTranslations(lang);
  }

  document.querySelectorAll(".lang-switch__btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var lang = btn.getAttribute("data-lang");
      if (document.documentElement.lang !== lang) {
        setLanguage(lang);
      }
    });
  });

  var initialLang = "bg";
  try {
    var stored = localStorage.getItem("lang");
    if (stored === "en" || stored === "bg") initialLang = stored;
  } catch (e) {
    /* storage unavailable — fall back to default language */
  }

  applyTranslations(initialLang);
})();
