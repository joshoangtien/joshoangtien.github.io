<script lang="ts" setup>
import type { RouteLocationRaw } from 'vue-router';
import { useTheme } from './c-button.theme';

const props = withDefaults(
  defineProps<{
    type?: 'default' | 'primary' | 'warning' | 'error'
    variant?: 'basic' | 'text'
    disabled?: boolean
    round?: boolean
    circle?: boolean
    href?: string
    to?: RouteLocationRaw
    size?: 'small' | 'medium' | 'large'
  }>(),
  {
    type: 'default',
    variant: 'basic',
    disabled: false,
    round: false,
    circle: false,
    href: undefined,
    to: undefined,
    size: 'medium',
  },
);
const emits = defineEmits(['click']);

const { variant, disabled, round, circle, href, type, to, size: sizeName } = toRefs(props);

function handleClick(event: MouseEvent) {
  if (!disabled.value) {
    emits('click', event);
  }
}

const theme = useTheme();
const variantTheme = computed(() => theme.value[variant.value][type.value]);
const tag = computed(() => {
  if (href.value) {
    return 'a';
  }
  if (to.value) {
    return 'router-link';
  }
  return 'button';
});
const size = computed(() => theme.value.size[sizeName.value]);
</script>

<template>
  <component
    :is="tag"
    :href="href ?? to"
    class="c-button"
    :class="{ disabled, round, circle, [`is-${variant}`]: true }"
    :to="to"
    @click="handleClick"
  >
    <slot />
  </component>
</template>

<style lang="less" scoped>
.c-button {
  line-height: 1;
  font-family: inherit;
  font-size: v-bind('size.fontSize');
  border: none;
  text-align: center;
  cursor: pointer;
  text-decoration: none;
  height: v-bind('size.width');
  font-weight: 500;
  color: v-bind('variantTheme.textColor');
  padding: 0 14px;
  border-radius: var(--radius-control);
  transition: background-color 180ms ease, border-color 180ms ease, box-shadow 180ms ease;

  background-color: v-bind('variantTheme.backgroundColor');
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  // outline-offset: 1px;
  &.is-basic {
    border: 1px solid var(--field-edge);
    box-shadow: inset 0 1px 0 var(--glass-inset);
    backdrop-filter: blur(16px);
  }

  &.is-text {
    border: 0;
    box-shadow: none;
  }

  &.round {
    border-radius: 100px;
  }

  &.circle {
    border-radius: v-bind('size.width');
    width: v-bind('size.width');
    padding: 0;
  }

  &:not(.disabled) {
    &:hover {
      background-color: v-bind('variantTheme.hover.backgroundColor');
    }

    &:active {
      background-color: v-bind('variantTheme.pressed.backgroundColor');
    }
  }

  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }

  &.disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
