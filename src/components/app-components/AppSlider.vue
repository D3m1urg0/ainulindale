<template>
  <div class="flex">
    <app-navigation-carets v-if="items" :uid="key">
      <swiper
        v-if="items"
        v-bind="$attrs"
        :navigation="{
          prevEl: `#prev-caret-${key}`,
          nextEl: `#next-caret-${key}`,
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
import { v4 as uuidv4 } from "uuid";

export default {
  props: { items: { required: true }, key: { default: uuidv4() } },
};
</script>
