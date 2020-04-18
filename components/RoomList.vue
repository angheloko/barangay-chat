<template>
  <div class="h-full relative bg-gray-100">
    <div class="h-16 flex items-center border-b border-gray-200 px-4">
      <input
        class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
        type="text"
        placeholder="Search"
      >
    </div>
    <div class="fixed top-16 left-0 bottom-0 w-full">
      <div class="overflow-y-auto h-full px-4 py-4">
        <div v-for="(room, index) in rooms" :key="index" class="mb-4 h-12 flex items-center">
          <img alt="barangay-logo" src="https://via.placeholder.com/48" class="w-10 h-10 mr-2 rounded-full shadow">
          {{ room.name }}
          <div class="flex-grow" />
          <div v-if="room.isHome" class="inline-flex items-center justify-center shadow-sm bg-yellow-500 w-8 h-8 rounded-full">
            <icon-home class="h-4 text-white fill-current" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import IconHome from './icons/IconHome'
export default {
  name: 'RoomList',
  components: { IconHome },
  data () {
    return {
      rooms: []
    }
  },
  mounted () {
    for (let i = 1; i <= 50; i++) {
      this.rooms.push({
        name: `Barangay ${i}`,
        isHome: i === 1
      })
    }
  }
}
</script>
