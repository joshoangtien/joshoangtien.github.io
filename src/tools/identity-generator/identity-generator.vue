<script setup lang="ts">
import InputCopyable from '@/components/InputCopyable.vue';
import { computedRefreshable } from '@/composable/computedRefreshable';
import { useCopy } from '@/composable/copy';
import { generateIdentity, IDENTITY_FIELDS, type IdentityLocale } from './identity-generator.service';

const { t } = useI18n();
const locale = ref<IdentityLocale>('en');

const [identity, refreshIdentity] = computedRefreshable(() => generateIdentity(locale.value));
const json = computed(() => JSON.stringify(identity.value, null, 2));
const { copy } = useCopy({ source: json, text: t('tools.identity-generator.copied') });
</script>

<template>
  <div>
    <c-buttons-select
      v-model:value="locale"
      :options="[
        { label: 'English', value: 'en' },
        { label: 'Tiếng Việt', value: 'vi' },
      ]"
      :label="t('tools.identity-generator.locale')"
      label-width="120px"
      mb-4
    />

    <div v-for="field in IDENTITY_FIELDS" :key="field" mb-2>
      <n-input-group>
        <n-input-group-label style="flex: 0 0 140px">
          {{ t(`tools.identity-generator.fields.${field}`) }}
        </n-input-group-label>
        <InputCopyable :value="identity[field]" readonly />
      </n-input-group>
    </div>

    <div mt-5 flex justify-center gap-3>
      <c-button @click="refreshIdentity()">
        {{ t('tools.identity-generator.button.refresh') }}
      </c-button>
      <c-button @click="copy()">
        {{ t('tools.identity-generator.button.copyJson') }}
      </c-button>
    </div>
  </div>
</template>
