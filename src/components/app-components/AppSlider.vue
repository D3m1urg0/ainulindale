<template>
  <div class="flex">
    <app-navigation-carets v-if="items">
      <swiper
        v-bind="$attrs"
        :navigation="{
          prevEl: `#prev-caret-${_uid}`,
          nextEl: `#next-caret-${_uid}`
      ***REMOVED***"
      >
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
