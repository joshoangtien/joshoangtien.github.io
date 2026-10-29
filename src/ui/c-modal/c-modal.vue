<script setup lang="ts">
defineOptions({
  inheritAttrs: false,
});

const props = withDefaults(defineProps<{ open?: boolean; centered?: boolean }>(), {
  open: false,
  centered: true,
});

const emit = defineEmits(['update:open']);

const isOpen = useVModel(props, 'open', emit, { passive: true });

const { centered } = toRefs(props);

function close() {
  isOpen.value = false;
}

function open() {
  isOpen.value = true;
}

function toggle() {
  isOpen.value = !isOpen.value;
}

defineExpose({
  close,
  open,
  toggle,
  isOpen,
});

const modal = ref();

onClickOutside(modal, () => {
  if (isOpen.value) {
    close();
  }
});
</script>

<template>
  <transition>
    <div v-if="isOpen" class="c-modal--overlay" fixed left-0 top-0 z-10 h-full w-full flex justify-center px-2 :class="{ 'items-center': centered }">
      <div ref="modal" class="c-modal--container" v-bind="$attrs" max-w-xl w-full flex-grow pa-24px>
        <slot />
      </div>
    </div>
  </transition>
</template>

<style scoped lang="less">
.c-modal--overlay {
  background: color-mix(in srgb, var(--bg) 55%, transparent);
  backdrop-filter: blur(16px);
}

.c-modal--container {
  background: var(--glass);
  border: 1px solid var(--glass-edge);
  border-radius: var(--radius);
  box-shadow: inset 0 1px 0 var(--glass-inset), 0 24px 60px rgba(8, 10, 16, 0.28);
  backdrop-filter: blur(24px);
  color: var(--ink);
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
