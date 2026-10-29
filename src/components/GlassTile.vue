<script setup lang="ts">
import type { Component } from 'vue';
import { NIcon } from 'naive-ui';
import { useGlassTilt } from '@/composable/useGlassTilt';

const props = withDefaults(defineProps<{
  to?: string
  title: string
  description?: string
  icon?: Component
  featured?: boolean
  count?: number
}>(), {
  featured: false,
});

const shell = ref<HTMLElement | null>(null);
useGlassTilt(shell);
</script>

<template>
  <component
    :is="to ? 'router-link' : 'button'"
    v-bind="to ? { to } : { type: 'button' }"
    class="glass-tile"
    :class="{ featured }"
  >
    <div ref="shell" class="glass-tile__shell">
      <div class="glass-tile__top">
        <n-icon v-if="icon" class="glass-tile__icon" :component="icon" :size="featured ? 36 : 26" />
        <span v-if="count != null" class="glass-tile__count">{{ count }}</span>
      </div>
      <div class="glass-tile__title">
        {{ title }}
      </div>
      <p v-if="description" class="glass-tile__desc">
        {{ description }}
      </p>
      <slot />
    </div>
  </component>
</template>

<style scoped>
.glass-tile {
  display: block;
  width: 100%;
  text-align: left;
  text-decoration: none;
  color: inherit;
  background: none;
  border: 0;
  padding: 0;
  cursor: pointer;
  font: inherit;
  perspective: 900px;
  min-height: 132px;
}

.glass-tile.featured {
  min-height: 240px;
}

.glass-tile__shell {
  height: 100%;
  min-height: inherit;
  padding: 20px;
  border-radius: var(--radius);
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  box-shadow:
    inset 0 1px 0 var(--glass-inset),
    0 18px 40px rgba(8, 10, 16, 0.16);
  backdrop-filter: blur(22px);
  transform-style: preserve-3d;
  transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease;
}

.glass-tile:hover .glass-tile__shell,
.glass-tile:focus-visible .glass-tile__shell {
  border-color: var(--accent);
}

.glass-tile__top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 18px;
}

.glass-tile__icon {
  opacity: 0.72;
}

.glass-tile__count {
  font-size: 12px;
  color: var(--ink-soft);
}

.glass-tile__title {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  line-height: 1.15;
}

.featured .glass-tile__title {
  font-size: 1.7rem;
}

.glass-tile__desc {
  margin: 8px 0 0;
  color: var(--ink-soft);
  font-size: 0.92rem;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@media (prefers-reduced-motion: reduce) {
  .glass-tile__shell {
    transition: none;
  }
}
</style>
