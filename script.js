// Fetch and parse data.json
async function loadAppData() {
  try {
    const response = await fetch('data.json');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to load app data:', error);
    return null;
  }
}

async function init() {
  const data = await loadAppData();
  if (!data) return;

  const appContainer = document.getElementById('app-container');
  const sections = data.sections;

  // 1. Apply all data-driven styles first
  const settings = sections.app_settings;
  if (settings) {
    document.documentElement.style.setProperty('--primary-color', settings.primary_color.value);
    document.documentElement.style.setProperty('--secondary-color', settings.secondary_color.value);
    document.documentElement.style.setProperty('--background-color', settings.background_color.value);
    document.documentElement.style.setProperty('--text-color', settings.text_color.value);
  }

  // 2. Apply branding/storefront
  const storefront = sections.storefront;
  if (storefront) {
    const appNameEl = document.getElementById('app-name');
    const logoEl = document.getElementById('logo');

    if (appNameEl) appNameEl.textContent = storefront.store_name.value;

    if (storefront.logo.value) {
      logoEl.src = storefront.logo.value;
      logoEl.style.display = 'block';
    }
  }

  // 3. Apply page content
  const content = sections.content;
  if (content) {
    const headlineEl = document.getElementById('headline');
    const subtextEl = document.getElementById('subtext');

    if (headlineEl) headlineEl.textContent = content.headline.value;
    if (subtextEl) subtextEl.textContent = content.subtext.value;
  }

  // 4. Reveal the app
  // Short timeout to ensure styles are fully applied
  setTimeout(() => {
    appContainer.classList.add('loaded');
  }, 100);
}

init();
