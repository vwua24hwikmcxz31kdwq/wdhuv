/* =========================================================
   APP.JS — Logika Interaktif Website Pangan Lokal Indonesia
   Menangani: navbar, dark mode, statistik, produk, artikel,
              galeri, modal, lightbox, animasi, dsb.
   ========================================================= */

(function () {
  "use strict";

  /* =======================================================
     UTIL — SHORTCUT
     ======================================================= */
  const $  = (sel, ctx) => (ctx || document).querySelector(sel);
  const $$ = (sel, ctx) => Array.from((ctx || document).querySelectorAll(sel));


  /* =======================================================
     1. NAVBAR — TOGGLE MOBILE & SCROLL EFFECT
     ======================================================= */
  function initNavbar() {
    const navbar = $("#navbar");
    const navToggle = $("#navToggle");
    const navMenu = $("#navMenu");

    /* Efek shadow saat scroll */
    if (navbar) {
      const onScroll = () => {
        if (window.scrollY > 8) navbar.classList.add("scrolled");
        else navbar.classList.remove("scrolled");
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    /* Toggle menu mobile */
    if (navToggle && navMenu) {
      navToggle.addEventListener("click", () => {
        const isOpen = navMenu.classList.toggle("open");
        navToggle.classList.toggle("open", isOpen);
        navToggle.setAttribute("aria-expanded", String(isOpen));
      });

      /* Klik link → tutup menu */
      $$(".nav-link", navMenu).forEach((link) => {
        link.addEventListener("click", () => {
          navMenu.classList.remove("open");
          navToggle.classList.remove("open");
          navToggle.setAttribute("aria-expanded", "false");
        });
      });

      /* Klik di luar menu → tutup */
      document.addEventListener("click", (e) => {
        if (!navMenu.classList.contains("open")) return;
        if (navMenu.contains(e.target) || navToggle.contains(e.target)) return;
        navMenu.classList.remove("open");
        navToggle.classList.remove("open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    }
  }


  /* =======================================================
     2. DARK MODE
     ======================================================= */
  function initTheme() {
    const root = document.documentElement;
    const btn = $("#themeToggle");

    /* Muat tema tersimpan */
    let savedTheme = "light";
    try {
      const stored = localStorage.getItem("pangan-lokal-theme");
      if (stored === "dark" || stored === "light") savedTheme = stored;
    } catch (e) { /* abaikan */ }

    root.setAttribute("data-theme", savedTheme);

    if (!btn) return;

    btn.addEventListener("click", () => {
      const current = root.getAttribute("data-theme");
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("pangan-lokal-theme", next); } catch (e) { /* */ }
    });
  }


  /* =======================================================
     3. STATISTIK (BERANDA) — HITUNG OTOMATIS
     ======================================================= */
  function countUniqueRegions() {
    if (typeof products === "undefined") return 0;
    const set = new Set();
    products.forEach((p) => {
      /* Ambil versi ID untuk hitung unik */
      const r = p.region || "";
      set.add(r.trim());
    });
    return set.size;
  }

  function initStatistics() {
    const elProducts = $("#statProducts");
    const elCategories = $("#statCategories");
    const elRegions = $("#statRegions");
    if (!elProducts && !elCategories && !elRegions) return;

    const totalProducts = (typeof products !== "undefined") ? products.length : 0;
    const totalCategories = (typeof categories !== "undefined") ? categories.length - 1 : 0; // minus "all"
    const totalRegions = countUniqueRegions();

    animateNumber(elProducts, totalProducts);
    animateNumber(elCategories, totalCategories);
    animateNumber(elRegions, totalRegions, "+");
  }

  /* Animasi angka naik dari 0 → target */
  function animateNumber(el, target, suffix) {
    if (!el) return;
    suffix = suffix || "";
    const duration = 1200;
    const start = performance.now();

    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.round(eased * target);
      el.textContent = value + suffix;
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }


  /* =======================================================
     4. PRODUCT CARD — BUAT HTML
     ======================================================= */
  function createProductCard(product, options) {
    options = options || {};

    const name = pickLang(product, "name");
    const region = pickLang(product, "region");
    const category = pickLang(product, "category");
    const description = pickLang(product, "description");
    const uniqueness = pickLang(product, "keunikan");

    const card = document.createElement("article");
    card.className = "product-card";
    card.setAttribute("data-id", product.id);
    card.setAttribute("data-category", product.category);

    card.innerHTML = `
      <div class="product-image">
        <img src="${product.image}" alt="${name}" loading="lazy">
      </div>
      <div class="product-info">
        <h3 class="product-name">${name}</h3>
        <div class="product-meta">
          <span class="product-category">${category}</span>
        </div>
        <p class="product-region">${region}</p>
        <button class="product-toggle" type="button" aria-expanded="false">
          ${t("products.detail")}
        </button>
      </div>
      <div class="product-detail" aria-hidden="true">
        <h4>${t("products.description")}</h4>
        <p class="product-desc">${description}</p>
        <div class="product-uniqueness-block">
          <h4>${t("products.uniqueness")}</h4>
          <p class="product-uniqueness">${uniqueness}</p>
        </div>
      </div>
    `;

    /* Toggle expand */
    const toggleBtn = $(".product-toggle", card);
    const detail = $(".product-detail", card);

    toggleBtn.addEventListener("click", () => {
      const expanded = card.classList.toggle("expanded");
      toggleBtn.setAttribute("aria-expanded", String(expanded));
      detail.setAttribute("aria-hidden", String(!expanded));
      toggleBtn.textContent = expanded ? t("products.close") : t("products.detail");
    });

    return card;
  }


  /* =======================================================
     5. FEATURED PRODUCTS (BERANDA) — 4 PRODUK
     ======================================================= */
  function renderFeaturedProducts() {
    const container = $("#featuredProducts");
    if (!container || typeof products === "undefined") return;

    /* Ambil 4 produk (bisa disesuaikan) — misal dari id 1,2,4,19 */
    const featuredIds = [1, 2, 4, 19];
    const list = featuredIds
      .map((id) => products.find((p) => p.id === id))
      .filter(Boolean);

    container.innerHTML = "";
    list.forEach((p) => container.appendChild(createProductCard(p)));
  }


  /* =======================================================
     6. LATEST ARTICLES (BERANDA) — 3 ARTIKEL
     ======================================================= */
  function createArticleCard(article) {
    const title = pickLang(article, "title");
    const category = pickLang(article, "category");
    const summary = pickLang(article, "conclusion");

    const card = document.createElement("article");
    card.className = "article-card";
    card.setAttribute("data-id", article.id);
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");

    card.innerHTML = `
      <div class="article-image">
        <img src="${article.image}" alt="${title}" loading="lazy">
      </div>
      <div class="article-info">
        <div class="article-meta">
          <span class="badge">${category}</span>
          <span class="article-date">${article.date}</span>
        </div>
        <h3 class="article-title">${title}</h3>
        <p class="article-summary">${summary}</p>
        <span class="article-read">${t("articles.readMore")}</span>
      </div>
    `;

    return card;
  }

  function renderLatestArticles() {
    const container = $("#latestArticles");
    if (!container || typeof articles === "undefined") return;

    const latest = articles.slice(0, 3);

    container.innerHTML = "";
    latest.forEach((a) => container.appendChild(createArticleCard(a)));
  }


  /* =======================================================
     7. HALAMAN PRODUK — RENDER, SEARCH, FILTER
     ======================================================= */
  const productState = {
    search: "",
    category: "all"
  };

  function renderProductGrid() {
    const container = $("#productsGrid");
    const emptyState = $("#emptyState");
    if (!container || typeof products === "undefined") return;

    const filtered = products.filter((p) => {
      /* Filter kategori */
      if (productState.category !== "all" && p.category !== productState.category) {
        return false;
      }
      /* Filter pencarian */
      if (productState.search) {
        const q = productState.search.toLowerCase();
        const nameID = (p.name || "").toLowerCase();
        const nameEN = (p.name_en || "").toLowerCase();
        if (!nameID.includes(q) && !nameEN.includes(q)) return false;
      }
      return true;
    });

    container.innerHTML = "";
    if (filtered.length === 0) {
      if (emptyState) emptyState.hidden = false;
    } else {
      if (emptyState) emptyState.hidden = true;
      filtered.forEach((p) => container.appendChild(createProductCard(p)));
    }

    updateResultCount(filtered.length);
  }

  function updateResultCount(n) {
    const el = $("#resultCount");
    if (!el) return;
    el.textContent = t("products.count", { n: n });
  }

  function initSearch() {
    const input = $("#searchInput");
    const clearBtn = $("#searchClear");
    if (!input) return;

    input.addEventListener("input", () => {
      productState.search = input.value.trim();
      if (clearBtn) clearBtn.hidden = productState.search.length === 0;
      renderProductGrid();
    });

    if (clearBtn) {
      clearBtn.addEventListener("click", () => {
        input.value = "";
        productState.search = "";
        clearBtn.hidden = true;
        input.focus();
        renderProductGrid();
      });
    }
  }

  function initFilter() {
    const wrapper = $("#filterWrapper");
    if (!wrapper) return;

    $$(".filter-btn", wrapper).forEach((btn) => {
      btn.addEventListener("click", () => {
        $$(".filter-btn", wrapper).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
        productState.category = btn.getAttribute("data-filter") || "all";
        renderProductGrid();
      });
    });
  }


  /* =======================================================
     8. HALAMAN ARTIKEL — RENDER & MODAL
     ======================================================= */
  function renderArticleGrid() {
    const container = $("#articlesGrid");
    const emptyState = $("#emptyState");
    if (!container || typeof articles === "undefined") return;

    container.innerHTML = "";
    if (articles.length === 0) {
      if (emptyState) emptyState.hidden = false;
      return;
    }
    if (emptyState) emptyState.hidden = true;

    articles.forEach((a) => {
      const card = createArticleCard(a);
      card.addEventListener("click", () => openArticleModal(a.id));
      card.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openArticleModal(a.id);
        }
      });
      container.appendChild(card);
    });
  }

  let lastFocusedEl = null;

  function openArticleModal(id) {
    const modal = $("#articleModal");
    if (!modal || typeof articles === "undefined") return;

    const article = articles.find((a) => a.id === id);
    if (!article) return;

    const title = pickLang(article, "title");
    const category = pickLang(article, "category");
    const content = pickLang(article, "content");
    const conclusion = pickLang(article, "conclusion");

    /* Isi modal */
    const imgEl = $("#modalImage");
    const supportEl = $("#modalSupportImage");
    const catEl = $("#modalCategory");
    const dateEl = $("#modalDate");
    const titleEl = $("#modalTitle");
    const contentEl = $("#modalContent");
    const conclEl = $("#modalConclusion");

    if (imgEl) { imgEl.src = article.image; imgEl.alt = title; }
    if (supportEl) { supportEl.src = article.supportImage; supportEl.alt = title; }
    if (catEl) catEl.textContent = category;
    if (dateEl) dateEl.textContent = article.date;
    if (titleEl) titleEl.textContent = title;
    if (conclEl) conclEl.textContent = conclusion;

    if (contentEl) {
      contentEl.innerHTML = "";
      const paragraphs = Array.isArray(content) ? content : [content];
      paragraphs.forEach((p) => {
        const el = document.createElement("p");
        el.textContent = p;
        contentEl.appendChild(el);
      });
    }

    /* Simpan fokus & buka modal */
    lastFocusedEl = document.activeElement;
    modal.hidden = false;
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";

    requestAnimationFrame(() => modal.classList.add("open"));

    /* Fokus ke tombol close */
    const closeBtn = $("#modalClose");
    if (closeBtn) closeBtn.focus();
  }

  function closeArticleModal() {
    const modal = $("#articleModal");
    if (!modal || modal.hidden) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    setTimeout(() => { modal.hidden = true; }, 300);

    if (lastFocusedEl && typeof lastFocusedEl.focus === "function") {
      lastFocusedEl.focus();
    }
  }

  function initArticleModal() {
    const modal = $("#articleModal");
    if (!modal) return;

    const closeBtn = $("#modalClose");
    const backdrop = $("#modalBackdrop");

    if (closeBtn) closeBtn.addEventListener("click", closeArticleModal);
    if (backdrop) backdrop.addEventListener("click", closeArticleModal);

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        if (!modal.hidden) closeArticleModal();
      }
    });
  }


  /* =======================================================
     9. HALAMAN GALERI — RENDER & LIGHTBOX
     ======================================================= */
  let lightboxIndex = 0;

  function renderGalleryGrid() {
    const container = $("#galleryGrid");
    const emptyState = $("#emptyState");
    if (!container || typeof gallery === "undefined") return;

    container.innerHTML = "";
    if (gallery.length === 0) {
      if (emptyState) emptyState.hidden = false;
      return;
    }
    if (emptyState) emptyState.hidden = true;

    gallery.forEach((item, index) => {
      const caption = pickLang(item, "caption");

      const div = document.createElement("div");
      div.className = "gallery-item";
      div.setAttribute("role", "button");
      div.setAttribute("tabindex", "0");
      div.innerHTML = `
        <img src="${item.image}" alt="${caption}" loading="lazy">
        <span class="gallery-caption">${caption}</span>
      `;

      div.addEventListener("click", () => openLightbox(index));
      div.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          openLightbox(index);
        }
      });

      container.appendChild(div);
    });
  }

  function openLightbox(index) {
    const lightbox = $("#lightbox");
    if (!lightbox || typeof gallery === "undefined") return;

    lightboxIndex = index;
    updateLightboxContent();

    lightbox.hidden = false;
    lightbox.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => lightbox.classList.add("open"));

    const closeBtn = $("#lightboxClose");
    if (closeBtn) closeBtn.focus();
  }

  function updateLightboxContent() {
    const item = gallery[lightboxIndex];
    if (!item) return;

    const imgEl = $("#lightboxImage");
    const captionEl = $("#lightboxCaption");
    const caption = pickLang(item, "caption");

    if (imgEl) { imgEl.src = item.image; imgEl.alt = caption; }
    if (captionEl) captionEl.textContent = caption;
  }

  function closeLightbox() {
    const lightbox = $("#lightbox");
    if (!lightbox || lightbox.hidden) return;

    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";

    setTimeout(() => { lightbox.hidden = true; }, 300);
  }

  function nextLightbox() {
    if (typeof gallery === "undefined" || gallery.length === 0) return;
    lightboxIndex = (lightboxIndex + 1) % gallery.length;
    updateLightboxContent();
  }

  function prevLightbox() {
    if (typeof gallery === "undefined" || gallery.length === 0) return;
    lightboxIndex = (lightboxIndex - 1 + gallery.length) % gallery.length;
    updateLightboxContent();
  }

  function initLightbox() {
    const lightbox = $("#lightbox");
    if (!lightbox) return;

    const closeBtn = $("#lightboxClose");
    const prevBtn = $("#lightboxPrev");
    const nextBtn = $("#lightboxNext");
    const backdrop = $("#lightboxBackdrop");

    if (closeBtn) closeBtn.addEventListener("click", closeLightbox);
    if (backdrop) backdrop.addEventListener("click", closeLightbox);
    if (prevBtn) prevBtn.addEventListener("click", prevLightbox);
    if (nextBtn) nextBtn.addEventListener("click", nextLightbox);

    document.addEventListener("keydown", (e) => {
      if (lightbox.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextLightbox();
      if (e.key === "ArrowLeft") prevLightbox();
    });
  }


  /* =======================================================
     10. ANIMASI REVEAL SAAT SCROLL
     ======================================================= */
  function initReveal() {
    const reveals = $$(".reveal");
    if (reveals.length === 0) return;

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );

    reveals.forEach((el) => observer.observe(el));
  }


  /* =======================================================
     11. DOCS SIDEBAR (HALAMAN DESKRIPSI) — ACTIVE LINK
     ======================================================= */
  function initDocsSidebar() {
    const links = $$(".docs-link");
    if (links.length === 0) return;

    /* Smooth scroll saat klik */
    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (!targetId || !targetId.startsWith("#")) return;
        const target = $(targetId);
        if (!target) return;

        e.preventDefault();
        const offset = 88;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top: top, behavior: "smooth" });
      });
    });

    /* Highlight link berdasarkan posisi scroll */
    const sections = $$(".docs-block");
    if (sections.length === 0 || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            links.forEach((l) => {
              l.classList.toggle("active", l.getAttribute("href") === "#" + id);
            });
          }
        });
      },
      { rootMargin: "-25% 0px -65% 0px", threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
  }


  /* =======================================================
     12. HOOK — RE-RENDER SAAT BAHASA BERUBAH
     ======================================================= */
  function rerenderAll() {
    /* Beranda */
    renderFeaturedProducts();
    renderLatestArticles();

    /* Halaman produk */
    renderProductGrid();

    /* Halaman artikel */
    renderArticleGrid();

    /* Halaman galeri */
    renderGalleryGrid();

    /* Update counter saat bahasa berubah */
    if ($("#resultCount")) {
      const currentCount = $$("#productsGrid .product-card").length;
      updateResultCount(currentCount);
    }

    /* Update teks tombol expand jika ada yang sedang terbuka */
    $$(".product-card").forEach((card) => {
      const toggleBtn = $(".product-toggle", card);
      if (!toggleBtn) return;
      const expanded = card.classList.contains("expanded");
      toggleBtn.textContent = expanded ? t("products.close") : t("products.detail");
    });
  }

  /* Daftarkan ke window agar dipanggil dari language.js */
  window.onLanguageChange = function () {
    rerenderAll();
  };


  /* =======================================================
     13. INISIALISASI SEMUA
     ======================================================= */
  document.addEventListener("DOMContentLoaded", function () {
    /* Umum di semua halaman */
    initNavbar();
    initTheme();
    initReveal();

    /* Beranda */
    initStatistics();
    renderFeaturedProducts();
    renderLatestArticles();

    /* Halaman produk */
    initSearch();
    initFilter();
    renderProductGrid();

    /* Halaman artikel */
    renderArticleGrid();
    initArticleModal();

    /* Halaman galeri */
    renderGalleryGrid();
    initLightbox();

    /* Halaman deskripsi */
    initDocsSidebar();
  });

})();


/* =========================================================
   END OF APP.JS
   ========================================================= */
