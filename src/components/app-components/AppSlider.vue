<template>
  <div class="flex">
    <app-navigation-carets v-if="items">
      <swiper v-bind="$attrs">
        <swiper-slide v-for="(item, i) in [...items]" :key="i">
          <slot name="slide" v-bind="item" />
        </swiper-slide>
      </swiper>
    </app-navigation-carets>
  </div>
</template>

<script>
***REMOVED***
  props: ["items"]
***REMOVED***
</script>
