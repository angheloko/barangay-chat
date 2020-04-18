<template>
  <div class="bg-yellow-200 overflow-y-auto h-full py-4">
    <div v-for="(room, index) in rooms" :key="index" class="mx-2 mb-4">
      {{ room.name }}
    </div>
  </div>
</template>
<script>
export default {
  name: 'RoomList',
  data () {
    return {
      rooms: [
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room 1'
        },
        {
          name: 'Room end'
        }
      ]
    }
  }
}
</script>
