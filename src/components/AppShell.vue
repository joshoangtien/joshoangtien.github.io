<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { Moon, Sun } from '@vicons/tabler';
import { NIcon } from 'naive-ui';
import { useCommandPaletteStore } from '@/modules/command-palette/command-palette.store';
import { useStyleStore } from '@/stores/style.store';

const palette = useCommandPaletteStore();
const styleStore = useStyleStore();
const { isDarkTheme } = storeToRefs(styleStore);
const isMac = computed(() => typeof navigator !== 'undefined' && /mac/i.test(navigator.userAgent));
const shortcut = computed(() => (isMac.value ? '⌘K' : 'Ctrl K'));
</script>

<template>
  <div class="shell">
    <header class="shell-header">
      <router-link to="/" class="wordmark" :aria-label="$t('home.home')">
        Tools
      </router-link>

      <button class="search-pill" type="button" @click="palette.open()">
        <span class="search-pill__label">{{ $t('home.searchPlaceholder') }}</span>
        <kbd>{{ shortcut }}</kbd>
      </button>

      <div class="shell-actions">
        <locale-selector class="locale" />
        <button
          class="icon-btn"
          type="button"
          :aria-label="$t('home.nav.mode')"
          @click="styleStore.toggleDark()"
        >
          <n-icon :size="18" :component="isDarkTheme ? Sun : Moon" />
        </button>
        <router-link class="text-link" to="/about">
          {{ $t('home.nav.aboutLabel') }}
        </router-link>
      </div>
    </header>

    <main class="shell-main">
      <slot />
    </main>

    <footer class="shell-footer">
      © {{ new Date().getFullYear() }}
      <a href="https://github.com/joshoangtien" rel="noopener" target="_blank">Jos</a>
    </footer>

    <command-palette hide-trigger />
  </div>
</template>

<style scoped>
.shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.shell-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 16px;
  padding: 14px 22px;
  background: color-mix(in srgb, var(--bg) 72%, transparent);
  backdrop-filter: blur(18px);
  border-bottom: 1px solid var(--glass-edge);
}

.wordmark {
  font-family: var(--font-display);
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;
  opacity: 0.62;
}

.search-pill {
  justify-self: center;
  width: min(560px, 100%);
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  border: 1px solid var(--glass-edge);
  border-radius: 999px;
  background: var(--glass);
  color: var(--ink-soft);
  cursor: pointer;
  font: inherit;
}

.search-pill kbd {
  font: inherit;
  font-size: 12px;
  opacity: 0.7;
}

.shell-actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon-btn,
.text-link {
  color: var(--ink);
  background: none;
  border: 0;
  cursor: pointer;
  font: inherit;
  text-decoration: none;
}

.text-link {
  font-size: 13px;
  opacity: 0.72;
}

.shell-main {
  flex: 1;
  width: min(1120px, calc(100% - 40px));
  margin: 0 auto;
  padding: 12px 0 64px;
}

.shell-footer {
  padding: 24px;
  text-align: center;
  font-size: 13px;
  color: var(--ink-soft);
}

.shell-footer a {
  color: inherit;
}

.locale {
  max-width: 120px;
}

@media (max-width: 740px) {
  .shell-header {
    grid-template-columns: auto auto;
    grid-template-areas:
      "mark actions"
      "search search";
  }

  .wordmark { grid-area: mark; }
  .search-pill { grid-area: search; width: 100%; justify-self: stretch; }
  .shell-actions { grid-area: actions; }
}
</style>
