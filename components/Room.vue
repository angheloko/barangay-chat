<template>
  <div class="h-full flex flex-col">
    <div class="h-16 flex items-center border-b  px-4">
      <div class="flex-grow">
        Barangay 1
      </div>
      <button @click="isRoomInfoVisible = !isRoomInfoVisible">
        <icon-info-outline class="w-6 h-6 fill-current" />
      </button>
    </div>
    <div class="px-4 flex-1 overflow-y-auto h-full bg-white">
      <message
        v-for="(message, index) of messages"
        :key="index"
        :message="message.message"
        :author="message.author"
      />
    </div>
    <div class="p-4 border-t border-gray-200">
      <editor />
    </div>
    <!-- Room info -->
    <div
      class="fixed top-0 left-0 w-full h-full z-20 bg-white transform ease-linear duration-150"
      :class="{'translate-x-full': !isRoomInfoVisible}"
    >
      <button
        class="absolute top-5 right-5"
        @click="isRoomInfoVisible = false"
      >
        <icon-close class="w-6 h-6 fill-current" />
      </button>
      <room-info
        :name="'Barangay 1'"
        class="pt-12"
      />
    </div>
  </div>
</template>

<script>
import Message from './Message'
import Editor from './Editor'
import IconInfoOutline from './icons/IconInfoOutline'
import RoomInfo from './RoomInfo'
import IconClose from './icons/IconClose'

export default {
  name: 'Room',
  components: { IconClose, RoomInfo, IconInfoOutline, Editor, Message },
  data () {
    return {
      messages: [],
      isRoomInfoVisible: false
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
