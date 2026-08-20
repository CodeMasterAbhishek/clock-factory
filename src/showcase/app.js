// Universal Showcase & Studio Modal Controller

function initShowcase() {
  const themeToggle = document.getElementById('theme-toggle-btn') || document.getElementById('theme-toggle');
  const filterChips = document.querySelectorAll('.filters .chip');

  // 1. Instant Dark / Light Theme Toggle
  const savedTheme = localStorage.getItem('cf_theme') || 'light';
  document.documentElement.setAttribute('data-theme', savedTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme') || 'light';
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('cf_theme', next);
    });
  }

  // Randomize / Shuffle clock grid cards while keeping India watch always at the very top
  function shuffleGrid() {
    const grid = document.getElementById('clock-grid');
    if (!grid) return;
    const cards = Array.from(grid.children);
    const indiaIndex = cards.findIndex(c => c.getAttribute('data-theme') === 'india');
    let indiaCard = null;
    if (indiaIndex > -1) {
      indiaCard = cards.splice(indiaIndex, 1)[0];
    }

    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    if (indiaCard) {
      cards.unshift(indiaCard);
    }

    const fragment = document.createDocumentFragment();
    cards.forEach(card => fragment.appendChild(card));
    grid.appendChild(fragment);
  }

  // Shuffle immediately on load
  shuffleGrid();

  // 2. Category Filter Chips
  filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
      filterChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const category = chip.getAttribute('data-category');
      if (category === 'all') {
        shuffleGrid();
      }

      const allCards = document.querySelectorAll('.clock-card');
      allCards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        if (category === 'all' || cardCat === category) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Studio Modal Controls & 100% Real-Time Live Preview Sync
  const modalBackdrop = document.getElementById('studio-modal');
  const modalClock = document.getElementById('modalClock');
  const modalTitleElem = document.getElementById('modalTitleText') || document.querySelector('.modal-title');
  const modalThemeSelect = document.getElementById('modalThemeSelect');
  const modalTimezoneSelect = document.getElementById('modalTimezoneSelect');
  const modalSmoothToggle = document.getElementById('modalSmoothToggle');
  const modalSecondsToggle = document.getElementById('modalSecondsToggle');
  const modalSizeSlider = document.getElementById('modalSizeSlider');
  const modalSizeLabel = document.getElementById('modalSizeLabel');
  const modalCodeDisplay = document.getElementById('modalGeneratedCode');
  const modalCopyBtn = document.getElementById('btnCopyModalCode');
  const modalTabs = document.querySelectorAll('.modal-code-tab');

  let activeModalTab = 'html';

  function updateModalTitle(customTitle = '') {
    if (!modalTitleElem) return;
    if (customTitle) {
      modalTitleElem.textContent = customTitle;
      return;
    }
    if (modalThemeSelect && modalThemeSelect.selectedIndex >= 0) {
      modalTitleElem.textContent = modalThemeSelect.options[modalThemeSelect.selectedIndex].text;
    }
  }

  function openModal(selectedTheme = 'india', customTitle = '') {
    if (!modalBackdrop) return;
    if (modalThemeSelect) modalThemeSelect.value = selectedTheme;
    
    // Always default to 320px full pixel size on open
    if (modalSizeSlider) {
      modalSizeSlider.value = '320';
    }

    updateModalTitle(customTitle);
    updateModalClock();
    if (modalClock && modalClock.startClock) modalClock.startClock();
    modalBackdrop.classList.add('active');
    modalBackdrop.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modalBackdrop) return;
    modalBackdrop.classList.remove('active');
    modalBackdrop.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Universal Event Delegation for Card Clicking
  document.addEventListener('click', (e) => {
    const card = e.target.closest('.clock-card');
    if (card) {
      const theme = card.getAttribute('data-theme') || 'india';
      const title = card.getAttribute('data-title') || card.querySelector('.card-title')?.textContent?.trim() || '';
      openModal(theme, title);
      return;
    }

    if (e.target === modalBackdrop || e.target.closest('#modal-close-btn')) {
      closeModal();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // REAL-TIME MODAL SYNC: Every control immediately updates the preview element & code snippet
  function updateModalClock() {
    if (!modalClock) return;

    const theme = modalThemeSelect ? modalThemeSelect.value : 'india';
    const timezone = modalTimezoneSelect ? modalTimezoneSelect.value : '';
    const isSmooth = modalSmoothToggle ? modalSmoothToggle.checked : true;
    const showSeconds = modalSecondsToggle ? modalSecondsToggle.checked : true;
    const size = modalSizeSlider ? `${modalSizeSlider.value}px` : '320px';

    modalClock.setAttribute('theme', theme);
    if (timezone) modalClock.setAttribute('timezone', timezone);
    else modalClock.removeAttribute('timezone');

    modalClock.setAttribute('smooth', String(isSmooth));
    modalClock.setAttribute('show-seconds', String(showSeconds));
    modalClock.setAttribute('size', size);

    if (modalClock.startClock) modalClock.startClock();
    if (modalSizeLabel) modalSizeLabel.textContent = size;
    generateModalCode();
  }

  function generateModalCode() {
    const theme = modalThemeSelect ? modalThemeSelect.value : 'india';
    const timezone = modalTimezoneSelect ? modalTimezoneSelect.value : '';
    const isSmooth = modalSmoothToggle ? modalSmoothToggle.checked : true;
    const showSeconds = modalSecondsToggle ? modalSecondsToggle.checked : true;
    const size = modalSizeSlider ? `${modalSizeSlider.value}px` : '320px';

    let attrs = `theme="${theme}"`;
    if (timezone) attrs += ` timezone="${timezone}"`;
    if (size !== '320px') attrs += ` size="${size}"`;
    if (isSmooth) attrs += ` smooth`;
    if (!showSeconds) attrs += ` show-seconds="false"`;

    const langLabel = document.getElementById('modalCodeLang');
    if (langLabel) {
      if (activeModalTab === 'html') langLabel.textContent = 'HTML / Web Component';
      else if (activeModalTab === 'react') langLabel.textContent = 'React JSX';
      else if (activeModalTab === 'vue') langLabel.textContent = 'Vue 3 SFC';
      else if (activeModalTab === 'npm') langLabel.textContent = 'JavaScript (ESM)';
    }

    let snippet = '';
    if (activeModalTab === 'html') {
      snippet = `<!-- 1. Include Script (via CDN) -->
<script type="module" src="https://cdn.jsdelivr.net/npm/clock-factory/dist/analog-clock.min.js"></script>

<!-- 2. Drop the component anywhere -->
<analog-clock ${attrs}></analog-clock>`;
    } else if (activeModalTab === 'react') {
      snippet = `import React from 'react';
import 'clock-factory';

export default function App() {
  return (
    <div className="flex justify-center p-4">
      <analog-clock ${attrs} />
    </div>
  );
}`;
    } else if (activeModalTab === 'vue') {
      snippet = `<template>
  <analog-clock ${attrs} />
</template>

<script setup>
import 'clock-factory';
</script>`;
    } else if (activeModalTab === 'npm') {
      snippet = `// npm install clock-factory
import { createClock } from 'clock-factory';

const clock = createClock('#clock-container', {
  theme: '${theme}',
  timezone: ${timezone ? `'${timezone}'` : 'undefined'},
  size: '${size}',
  smooth: ${isSmooth}
});`;
    }

    if (modalCodeDisplay) {
      modalCodeDisplay.textContent = snippet;
    }
  }

  // Bind live change and input events on all customizer inputs
  if (modalThemeSelect) {
    modalThemeSelect.addEventListener('change', () => {
      updateModalTitle();
      updateModalClock();
    });
  }
  if (modalTimezoneSelect) modalTimezoneSelect.addEventListener('change', updateModalClock);
  if (modalSmoothToggle) modalSmoothToggle.addEventListener('change', updateModalClock);
  if (modalSecondsToggle) modalSecondsToggle.addEventListener('change', updateModalClock);
  if (modalSizeSlider) modalSizeSlider.addEventListener('input', updateModalClock);

  modalTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      modalTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeModalTab = tab.getAttribute('data-tab') || 'html';
      generateModalCode();
    });
  });

  // Copy Code Button
  if (modalCopyBtn) {
    modalCopyBtn.addEventListener('click', () => {
      const code = modalCodeDisplay.textContent || '';
      navigator.clipboard.writeText(code).then(() => {
        const copyText = modalCopyBtn.querySelector('.copy-text');
        modalCopyBtn.classList.add('copied');
        if (copyText) copyText.textContent = 'Copied!';
        setTimeout(() => {
          modalCopyBtn.classList.remove('copied');
          if (copyText) copyText.textContent = 'Copy';
        }, 2000);
      });
    });
  }
}

// Ensure execution regardless of script load timing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initShowcase);
} else {
  initShowcase();
}
