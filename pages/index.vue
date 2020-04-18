<template>
  <div class="h-screen">
    <header class="fixed top-0 left-0 z-30 h-12 w-full bg-gray-400">
      <button @click="isSidebarVisible = !isSidebarVisible">
        brgy.io
      </button>
    </header>
    <main class="relative pt-12 h-full bg-gray-200">
      <aside class="container mx-auto px-4">
        <div
          :class="{'-translate-x-full': !isSidebarVisible}"
          class="fixed top-12 bottom-0 z-20 left-0 w-full block transform ease-linear duration-150 bg-red-200"
        >
          <div class="h-full relative">
            <room-list />
          </div>
        </div>
      </aside>
      <div class="container mx-auto h-full">
        <room />
      </div>
    </main>
  </div>
</template>

<script>
import RoomList from '~/components/RoomList'
import Room from '~/components/Room'

export default {
  components: { Room, RoomList },
  data () {
    return {
      isSidebarVisible: false
    }
  }
}
</script>
