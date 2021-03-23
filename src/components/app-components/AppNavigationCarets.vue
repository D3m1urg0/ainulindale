<template>
  <div class="relative flex max-w-full">
    <svg
      :id="`prev-caret-${uid}`"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 24"
      stroke="currentColor"
      class="flex-none h-10 my-auto cursor-pointer"
      :class="{ 'md:hidden': mobileOnly }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 19l-7-7 7-7"
      />
    </svg>
    <slot />
    <svg
      :id="`next-caret-${uid}`"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 10 24"
      stroke="currentColor"
      class=" flex-none h-10 my-auto cursor-pointer"
      :class="{ 'md:hidden': !allResolution }"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M1 5l7 7-7 7"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    mobileOnly: Boolean,
    uid: { required: true }
  }
};
</script>
