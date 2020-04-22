<template>
  <div class="h-screen">
    <header class="fixed top-0 left-0 z-30 h-12 w-full border-b border-gray-200">
      <div class="flex h-full px-3">
        <button
          class="focus:outline-none"
          @click="isSidebarVisible = !isSidebarVisible"
        >
          <img alt="site-logo" src="https://via.placeholder.com/48" class="w-10 h-10">
        </button>
        <div class="flex-grow" />
        <div class="relative pt-1">
          <button
            class="focus:outline-none w-10 h-10 rounded-full block overflow-hidden"
            @click="isAccountMenuVisible = !isAccountMenuVisible"
          >
            <img alt="avatar" src="https://via.placeholder.com/48" class="w-full h-full object-cover">
          </button>
          <transition name="modal">
            <div
              v-show="isAccountMenuVisible"
              class="absolute right-0 mt-2 py-2 w-48 bg-white rounded shadow"
              @click="isAccountMenuVisible = false"
            >
              <a
                href="#"
                class="block px-4 py-2"
                @click.prevent="isSettingsVisible = true"
              >
                Settings
              </a>
              <a
                href="#"
                class="block px-4 py-2"
                @click.prevent=""
              >
                Sign out
              </a>
            </div>
          </transition>
        </div>
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
    <transition name="modal">
      <settings-modal v-show="isSettingsVisible" @close="isSettingsVisible = false" />
    </transition>
  </div>
</template>

<script>
import RoomList from '~/components/RoomList'
import Room from '~/components/Room'
import SettingsModal from '~/components/SettingsModal'

export default {
  components: { SettingsModal, Room, RoomList },
  data () {
    return {
      isSidebarVisible: false,
      isSettingsVisible: false,
      isAccountMenuVisible: false
    }
  }
}
</script>
