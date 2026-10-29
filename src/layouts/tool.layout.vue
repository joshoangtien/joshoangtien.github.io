<script lang="ts" setup>
import { useRoute } from 'vue-router';
import { useHead } from '@vueuse/head';
import type { HeadObject } from '@vueuse/head';

import BaseLayout from './base.layout.vue';
import FavoriteButton from '@/components/FavoriteButton.vue';
import type { Tool } from '@/tools/tools.types';

const route = useRoute();

const head = computed<HeadObject>(() => ({
  title: `${route.meta.name} · Tools`,
  meta: [
    {
      name: 'description',
      content: route.meta?.description as string,
    },
    {
      name: 'keywords',
      content: ((route.meta.keywords ?? []) as string[]).join(','),
    },
  ],
}));
useHead(head);
const { t } = useI18n();

const i18nKey = computed<string>(() => route.path.trim().replace('/', ''));
const toolTitle = computed<string>(() => t(`tools.${i18nKey.value}.title`, String(route.meta.name)));
const toolDescription = computed<string>(() => t(`tools.${i18nKey.value}.description`, String(route.meta.description)));
</script>

<template>
  <BaseLayout>
    <article class="workbench">
      <header class="workbench-header">
        <div>
          <h1>{{ toolTitle }}</h1>
          <p>{{ toolDescription }}</p>
        </div>
        <FavoriteButton :tool="{ name: route.meta.name } as Tool" />
      </header>

      <div class="workbench-body">
        <slot />
      </div>
    </article>
  </BaseLayout>
</template>

<style lang="less" scoped>
.workbench {
  margin: 28px auto 0;
  max-width: 920px;
  padding: 28px;
  border-radius: 28px;
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  box-shadow: inset 0 1px 0 var(--glass-inset), 0 24px 60px rgba(8, 10, 16, 0.18);
  backdrop-filter: blur(24px);
}

.workbench-header {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 24px;
}

.workbench-header h1 {
  margin: 0;
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  font-weight: 800;
  letter-spacing: -0.04em;
  line-height: 1;
}

.workbench-header p {
  margin: 10px 0 0;
  color: var(--ink-soft);
  max-width: 62ch;
}

.workbench-body {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;

  ::v-deep(& > *) {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .workbench {
    padding: 18px;
  }
}
</style>
