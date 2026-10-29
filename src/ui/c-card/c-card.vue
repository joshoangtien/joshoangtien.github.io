<script lang="ts" setup>
const props = defineProps<{
  title?: string
}>();

const { title } = toRefs(props);
</script>

<template>
  <div class="c-card">
    <div v-if="title" class="c-card-title">
      {{ title }}
    </div>
    <slot />
  </div>
</template>

<style lang="less" scoped>
.c-card {
  background: transparent;
  border: 0;
  border-radius: 0;
  padding: 0;

  & + .c-card {
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid var(--field-edge);
  }

  &-title {
    font-size: 15px;
    font-weight: 600;
    margin-bottom: 16px;
    color: var(--ink);
  }
}
</style>
