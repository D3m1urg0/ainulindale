<template>
  <div class="flex">
    <app-navigation-carets v-if="items" :uid="uid">
      <swiper
        v-bind="$attrs"
        :navigation="{
          prevEl: `#prev-caret-${uid}`,
          nextEl: `#next-caret-${uid}`
        }"
      >
        <swiper-slide v-for="(item, i) in [...items]" :key="i">
          <slot name="slide" v-bind="item" />
        </swiper-slide>
      </swiper>
    </app-navigation-carets>
  </div>
</template>

<script>
export default {
  props: ["items", "uid"]
};
</script>
