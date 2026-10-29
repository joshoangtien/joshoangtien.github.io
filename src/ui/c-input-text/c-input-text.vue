<script lang="ts" setup>
import { generateRandomId } from '@/utils/random';
import { type UseValidationRule, useValidation } from '@/composable/validation';

const props = withDefaults(
  defineProps<{
    value?: string
    id?: string
    placeholder?: string
    label?: string
    readonly?: boolean
    disabled?: boolean
    validationRules?: UseValidationRule<string>[]
    validationWatch?: Ref<unknown>[]
    validation?: ReturnType<typeof useValidation>
    labelPosition?: 'top' | 'left'
    labelWidth?: string
    labelAlign?: 'left' | 'right'
    clearable?: boolean
    testId?: string
    autocapitalize?: 'none' | 'sentences' | 'words' | 'characters' | 'on' | 'off' | string
    autocomplete?: 'on' | 'off' | string
    autocorrect?: 'on' | 'off' | string
    spellcheck?: 'true' | 'false' | boolean
    rawText?: boolean
    type?: 'text' | 'password'
    multiline?: boolean
    rows?: number | string
    autosize?: boolean
    autofocus?: boolean
    monospace?: boolean
  }>(),
  {
    value: '',
    id: generateRandomId,
    placeholder: 'Input text',
    label: undefined,
    readonly: false,
    disabled: false,
    validationRules: () => [],
    validationWatch: undefined,
    validation: undefined,
    labelPosition: 'top',
    labelWidth: 'auto',
    labelAlign: 'left',
    clearable: false,
    testId: undefined,
    autocapitalize: undefined,
    autocomplete: undefined,
    autocorrect: undefined,
    spellcheck: undefined,
    rawText: false,
    type: 'text',
    multiline: false,
    rows: 3,
    autosize: false,
    autofocus: false,
    monospace: false,
  },
);
const emit = defineEmits(['update:value']);
const value = useVModel(props, 'value', emit);
const showPassword = ref(false);

const { id, placeholder, label, validationRules, labelPosition, labelWidth, labelAlign, autosize, readonly, disabled, clearable, type, multiline, rows, rawText, autofocus, monospace } = toRefs(props);

const validation
  = props.validation
  ?? useValidation({
    rules: validationRules,
    source: value,
    watch: props.validationWatch,
  });

const textareaRef = ref<HTMLTextAreaElement>();
const inputRef = ref<HTMLInputElement>();
const inputWrapperRef = ref<HTMLElement>();

watch(
  [value, autosize, multiline, inputWrapperRef, textareaRef],
  () => nextTick(() => {
    if (props.multiline && autosize.value) {
      resizeTextarea();
    }
  }),
  { immediate: true },
);

function resizeTextarea() {
  if (!textareaRef.value || !inputWrapperRef.value) {
    return;
  }

  const scrollHeight = textareaRef.value.scrollHeight + 2;

  inputWrapperRef.value.style.height = `${scrollHeight}px`;
}

const htmlInputType = computed(() => {
  if (props.type === 'password' && !showPassword.value) {
    return 'password';
  }

  return 'text';
});

function focus() {
  if (textareaRef.value) {
    textareaRef.value.focus();
  }

  if (inputRef.value) {
    inputRef.value.focus();
  }
}

function blur() {
  if (textareaRef.value) {
    textareaRef.value.blur?.();
  }

  if (inputRef.value) {
    inputRef.value.blur?.();
  }
}

onMounted(() => {
  if (autofocus.value) {
    focus();
  }
});

defineExpose({
  inputWrapperRef,
  focus,
  blur,
});
</script>

<template>
  <div
    class="c-input-text"
    :class="{ disabled, 'error': !validation.isValid, 'label-left': labelPosition === 'left', multiline }"
  >
    <label v-if="label" :for="id" class="label"> {{ label }} </label>

    <div class="feedback-wrapper">
      <div ref="inputWrapperRef" class="input-wrapper">
        <slot name="prefix" />

        <textarea
          v-if="multiline"
          :id="id"
          ref="textareaRef"
          v-model="value"
          class="input"
          :class="{
            'leading-5 !font-mono': monospace,
          }"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          :data-test-id="testId"
          :autocapitalize="autocapitalize ?? (rawText ? 'off' : undefined)"
          :autocomplete="autocomplete ?? (rawText ? 'off' : undefined)"
          :autocorrect="autocorrect ?? (rawText ? 'off' : undefined)"
          :spellcheck="spellcheck ?? (rawText ? false : undefined)"
          :rows="rows"
        />

        <input
          v-else
          :id="id"
          ref="inputRef"
          v-model="value"
          :type="htmlInputType"
          class="input"
          :class="{
            'leading-5 !font-mono': monospace,
          }"
          size="1"
          :placeholder="placeholder"
          :readonly="readonly"
          :disabled="disabled"
          :data-test-id="testId"
          :autocapitalize="autocapitalize ?? (rawText ? 'off' : undefined)"
          :autocomplete="autocomplete ?? (rawText ? 'off' : undefined)"
          :autocorrect="autocorrect ?? (rawText ? 'off' : undefined)"
          :spellcheck="spellcheck ?? (rawText ? false : undefined)"
        >

        <c-button v-if="clearable && value" variant="text" circle size="small" @click="value = ''">
          <icon-mdi-close />
        </c-button>

        <c-button v-if="type === 'password'" variant="text" circle size="small" @click="showPassword = !showPassword">
          <icon-mdi-eye v-if="!showPassword" />
          <icon-mdi-eye-off v-if="showPassword" />
        </c-button>
        <slot name="suffix" />
      </div>
      <span v-if="!validation.isValid" class="feedback"> {{ validation.message }} </span>
    </div>
  </div>
</template>

<style lang="less" scoped>
.c-input-text {
  display: inline-flex;
  flex-direction: column;
  width: 100%;

  &.label-left {
    flex-direction: row;
    align-items: baseline;
  }

  & > .label {
    margin-bottom: 8px;
    flex: 0 0 v-bind('labelWidth');
    text-align: v-bind('labelAlign');
    padding-right: 12px;
    color: var(--ink-soft);
    font-size: 13px;
    font-weight: 500;
  }

  .feedback-wrapper {
    flex: 1 1 0;
    min-width: 0;
  }

  .feedback {
    display: block;
    margin-top: 6px;
    color: var(--error);
    font-size: 12px;
  }

  .input-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;
    min-height: 44px;
    padding: 0 6px 0 14px;
    color: var(--ink);
    background: var(--field-fill);
    border: 1px solid var(--field-edge);
    border-radius: var(--radius-control);
    box-shadow: inset 0 1px 0 var(--glass-inset);
    backdrop-filter: blur(16px);
    transition: border-color 180ms ease, box-shadow 180ms ease, background-color 180ms ease;

    .multiline& {
      align-items: flex-start;
      min-height: 0;
      resize: vertical;
      overflow: hidden;

      & > textarea {
        height: 100%;
        resize: none;
        word-break: break-word;
        white-space: pre-wrap;
        overflow-wrap: break-word;
        border: none;
        outline: none;
        font-family: inherit;
        font-size: inherit;
        color: var(--ink);
        caret-color: var(--accent);

        &::placeholder {
          color: var(--ink-soft);
        }
      }
    }

    & > .input {
      flex: 1 1 0;
      min-width: 0;
      padding: 11px 0;
      outline: none;
      background-color: transparent;
      background-image: none;
      box-shadow: none;
      border: none;
      color: var(--ink);
      caret-color: var(--accent);
      font: inherit;

      &::placeholder {
        color: var(--ink-soft);
      }
    }

    &:hover {
      border-color: color-mix(in srgb, var(--accent) 55%, var(--field-edge));
    }

    &:focus-within {
      border-color: var(--accent);
      background: color-mix(in srgb, var(--field-fill) 82%, var(--accent));
      box-shadow:
        inset 0 1px 0 var(--glass-inset),
        0 8px 24px color-mix(in srgb, var(--accent) 16%, transparent);
    }
  }

  &.error .input-wrapper {
    border-color: var(--error);

    &:hover,
    &:focus-within {
      border-color: var(--error);
    }

    &:focus-within {
      background: color-mix(in srgb, var(--field-fill) 82%, var(--error));
      box-shadow:
        inset 0 1px 0 var(--glass-inset),
        0 8px 24px color-mix(in srgb, var(--error) 18%, transparent);
    }
  }

  &.disabled .input-wrapper {
    opacity: 0.5;

    &:hover,
    &:focus-within {
      border-color: var(--field-edge);
      background: var(--field-fill);
      box-shadow: inset 0 1px 0 var(--glass-inset);
    }

    & > .input {
      cursor: not-allowed;
    }
  }
}
</style>
