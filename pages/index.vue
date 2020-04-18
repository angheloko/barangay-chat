<template>
  <div class="h-screen">
    <header class="fixed top-0 left-0 z-30">
      <button @click="isSidebarVisible = !isSidebarVisible">brgy.io</button>
    </header>
    <main class="bg-gray-200 relative pt-12">
      <div class="container mx-auto px-4">
        <div
          :class="{'-translate-x-full': !isSidebarVisible}"
          class="fixed z-20 w-full transform ease-linear duration-150 left-0 bg-red-200 block top-12 bottom-0"
        >
          <div class="h-full relative">
            <room-list />
          </div>
        </div>
      </div>
      <div class="border border-red-200">
        Room
      </div>
    </main>
  </div>
</template>

<script>
import RoomList from '~/components/RoomList'

export default {
  components: { RoomList },
  data () {
    return {
      isSidebarVisible: false
    }
  }
}
</script>
