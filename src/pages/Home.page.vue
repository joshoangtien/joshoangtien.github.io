<script setup lang="ts">
import { useHead } from '@vueuse/head';
import GlassTile from '@/components/GlassTile.vue';
import { useCommandPaletteStore } from '@/modules/command-palette/command-palette.store';
import { useToolStore } from '@/tools/tools.store';

const toolStore = useToolStore();
const palette = useCommandPaletteStore();
const route = useRoute();
const router = useRouter();
const { t } = useI18n();

useHead({ title: 'Tools' });

const selectedCategory = computed(() => typeof route.query.c === 'string' ? route.query.c : '');

const featuredTools = computed(() => {
  if (toolStore.favoriteTools.length > 0) {
    return toolStore.favoriteTools.slice(0, 4);
  }
  if (toolStore.newTools.length > 0) {
    return toolStore.newTools.slice(0, 4);
  }
  return toolStore.tools.slice(0, 4);
});

const categoryTools = computed(() => {
  if (!selectedCategory.value) {
    return [];
  }
  return toolStore.toolsByCategory.find(category => category.name === selectedCategory.value)?.components ?? [];
});

function openCategory(name: string) {
  router.push({ query: { c: name } });
}

function clearCategory() {
  router.push({ path: '/' });
}
</script>

<template>
  <div class="home">
    <section class="hero">
      <h1>{{ t('home.findATool') }}</h1>
      <button class="hero-search" type="button" @click="palette.open()">
        {{ t('home.searchPlaceholder') }}
      </button>
    </section>

    <section v-if="!selectedCategory" class="bento">
      <GlassTile
        v-for="(tool, index) in featuredTools"
        :key="tool.path"
        :to="tool.path"
        :title="tool.name"
        :description="tool.description"
        :icon="tool.icon"
        :featured="index === 0"
        class="tile"
        :class="{ 'tile--lg': index === 0 }"
      />

      <GlassTile
        v-for="category in toolStore.toolsByCategory"
        :key="category.name"
        :title="category.name"
        :count="category.components.length"
        class="tile"
        @click="openCategory(category.name)"
      />
    </section>

    <section v-else>
      <button class="back" type="button" @click="clearCategory">
        ← {{ t('home.backToHome') }}
      </button>
      <h2 class="category-title">
        {{ selectedCategory }}
      </h2>
      <div class="bento bento--tools">
        <GlassTile
          v-for="tool in categoryTools"
          :key="tool.path"
          :to="tool.path"
          :title="tool.name"
          :description="tool.description"
          :icon="tool.icon"
        />
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  padding: 36px 0 28px;
}

.hero h1 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(3.2rem, 8vw, 5.6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 0.9;
}

.hero-search {
  margin-top: 22px;
  width: min(640px, 100%);
  height: 56px;
  padding: 0 22px;
  border-radius: 18px;
  border: 1px solid var(--glass-edge);
  background: var(--glass);
  color: var(--ink-soft);
  font: inherit;
  font-size: 1.05rem;
  text-align: left;
  cursor: pointer;
  box-shadow: inset 0 1px 0 var(--glass-inset);
  backdrop-filter: blur(20px);
}

.bento {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.tile--lg {
  grid-column: span 2;
  grid-row: span 2;
}

.bento--tools {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.back,
.category-title {
  font-family: var(--font-display);
}

.back {
  margin: 8px 0 18px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--ink-soft);
  cursor: pointer;
  font: inherit;
}

.category-title {
  margin: 0 0 18px;
  font-size: 2.4rem;
  letter-spacing: -0.04em;
}

@media (max-width: 900px) {
  .bento,
  .bento--tools {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .tile--lg {
    grid-column: span 2;
  }
}

@media (max-width: 560px) {
  .bento,
  .bento--tools {
    grid-template-columns: 1fr;
  }

  .tile--lg {
    grid-column: span 1;
    grid-row: span 1;
  }
}
</style>
