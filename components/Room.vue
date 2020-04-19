<template>
  <div class="h-full relative">
    <div class="h-16 flex items-center border-b  px-4">
      <div class="inline-flex items-center">
        <img alt="barangay-logo" src="https://via.placeholder.com/48" class="w-10 h-10 mr-2 rounded-full shadow">
        Barangay 1
      </div>
      <div class="flex-grow" />
      <button class="rounded-full w-6 h-6 inline-flex items-center justify-center">
        <icon-dots-horizontal-triple class="w-4 h-4 fill-current" />
      </button>
    </div>
    <div class="fixed top-16 bottom-24 left-0 w-full pl-4">
      <div class="overflow-y-auto h-full bg-white">
        <message
          v-for="(message, index) of messages"
          :key="index"
          :message="message.message"
          :author="message.author"
        />
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full h-24 bg-blue-200">
      Textarea
    </div>
  </div>
</template>

<script>
import IconDotsHorizontalTriple from './icons/IconDotsHorizontalTriple'
import Message from './Message'
export default {
  name: 'Room',
  components: { Message, IconDotsHorizontalTriple },
  data () {
    return {
      messages: []
    }
  },
  mounted () {
    for (let i = 1; i <= 20; i++) {
      this.messages.push({
        message: `Message ${i}`,
        author: `Author ${i}`
      })
    }
  }
}
</script>

<style scoped>

</style>
