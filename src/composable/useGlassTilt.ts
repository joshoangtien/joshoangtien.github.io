import type { Ref } from 'vue';
import { onMounted, onUnmounted } from 'vue';

export function useGlassTilt(target: Ref<HTMLElement | null>) {
  let frame = 0;

  function reducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  function onMove(event: PointerEvent) {
    const el = target.value;
    if (!el || reducedMotion()) {
      return;
    }

    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
      el.style.transform = `rotateX(${(-y * 7).toFixed(2)}deg) rotateY(${(x * 7).toFixed(2)}deg)`;
    });
  }

  function onLeave() {
    const el = target.value;
    if (!el) {
      return;
    }
    cancelAnimationFrame(frame);
    el.style.transform = 'rotateX(0deg) rotateY(0deg)';
  }

  onMounted(() => {
    const el = target.value;
    if (!el) {
      return;
    }
    el.addEventListener('pointermove', onMove);
    el.addEventListener('pointerleave', onLeave);
  });

  onUnmounted(() => {
    cancelAnimationFrame(frame);
    const el = target.value;
    el?.removeEventListener('pointermove', onMove);
    el?.removeEventListener('pointerleave', onLeave);
  });
}
