<template>
  <div class="flex">
    <app-navigation-carets v-if="items" :uid="uuid">
      <swiper
        v-if="items"
        v-bind="$attrs"
        :navigation="{
          prevEl: `#prev-caret-${uuid}`,
          nextEl: `#next-caret-${uuid}`,
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
  props: { items: { required: true } },
};
</script>
