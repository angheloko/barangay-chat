<template>
  <div class="flex my-5">
    <div class="flex-grow">
      <div class="flex items-center mb-1">
        <div class="font-bold text-sm mr-2">
          {{ author }}
        </div>
        <div class="text-xs text-gray-600">
          12:34 pm
        </div>
      </div>
      {{ message }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'Message',
  props: {
    message: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      default: ''
    }
  }
}
</script>
