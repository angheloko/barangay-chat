<template>
  <div class="h-screen">
    <header class="fixed top-0 left-0 z-30 h-12 w-full border-b border-gray-200">
      <div class="flex items-center h-full px-3">
        <button
          class="focus:outline-none"
          @click="isSidebarVisible = !isSidebarVisible"
        >
          <img alt="site-logo" src="https://via.placeholder.com/48" class="w-10 h-10">
        </button>
        <div class="flex-grow" />
        <img alt="avatar" src="https://via.placeholder.com/48" class="w-10 h-10 rounded-full">
      </div>
    </header>
    <main class="relative pt-12 h-full">
      <aside class="container mx-auto px-4">
        <div
          :class="{'-translate-x-full': !isSidebarVisible}"
          class="fixed top-12 bottom-0 left-0 z-20 w-full block transform ease-linear duration-150"
        >
          <room-list />
        </div>
      </aside>
      <div class="container mx-auto h-full">
        <div class="fixed top-12 bottom-0 left-0 w-full block transform">
          <room />
        </div>
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
