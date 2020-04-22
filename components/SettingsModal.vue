<template>
  <div class="fixed top-0 left-0 w-full h-full z-40 flex flex-col items-center justify-center">
    <div class="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-40" />
    <div class="z-40 bg-white m-4 rounded shadow max-w-sm">
      <div class="flex border-b border-gray-200 p-4">
        <h2 class="text-lg flex-grow">
          Settings
        </h2>
        <button @click="$emit('close')">
          <icon-close class="w-4 h-4 fill-current" />
        </button>
      </div>
      <div class="p-4">
        <div class="form-control">
          <label class="form-control__label" for="barangay">
            Barangay
          </label>
          <input
            id="barangay"
            class="form-control__input"
            type="text"
            placeholder="Barangay"
          >
        </div>
      </div>
      <div class="flex p-4 border-t border-gray-200">
        <button class="text-red-500 text-sm inline-flex items-center mr-8">
          <icon-exclamation-solid class="w-6 h-6 fill-current" />
          <span class="ml-2">
            Deactivate account
          </span>
        </button>
        <div class="flex-grow" />
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Save changes
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import IconClose from './icons/IconClose'
import IconExclamationSolid from './icons/IconExclamationSolid'
export default {
  name: 'SettingsModal',
  components: { IconExclamationSolid, IconClose }
}
</script>

<style scoped>

</style>
