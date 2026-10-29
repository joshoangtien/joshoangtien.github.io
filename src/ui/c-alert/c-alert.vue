<script lang="ts" setup>
import { useTheme } from './c-alert.theme';

const props = withDefaults(defineProps<{ type?: 'warning'; title?: string }>(), { type: 'warning', title: undefined });
const { type, title } = toRefs(props);

const theme = useTheme();
const variantTheme = computed(() => theme.value[type.value]);
</script>

<template>
  <div class="c-alert" flex items-center pa-5>
    <div class="c-alert--icon" mr-4 text-40px op-60>
      <slot name="icon">
        <component :is="variantTheme.icon" />
      </slot>
    </div>

    <div class="c-alert--content">
      <div v-if="title" class="c-alert--title" text-15px fw-600>
        {{ title }}
      </div>
      <slot />
    </div>
  </div>
</template>

<style lang="less" scoped>
.c-alert {
  background-color: v-bind('variantTheme.backgroundColor');
  color: v-bind('variantTheme.textColor');
  border: 1px solid v-bind('variantTheme.borderColor');
  border-radius: var(--radius-control);
  font-size: inherit;
  line-height: 20px;
}
</style>
