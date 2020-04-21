<template>
  <div>
    <div class="absolute top-0 left-0 w-full h-full bg-gray-900 opacity-50 z-40" />
    <div class="fixed top-0 left-0 z-40 bg-white m-4 rounded shadow">
      <div class="flex border-b border-gray-200 p-2">
        <h2 class="text-lg flex-grow">
          Invite people
        </h2>
        <button @click="$emit('close')">
          <icon-close class="w-6 h-6 fill-current" />
        </button>
      </div>
      <div class="p-2">
        <input
          class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded-full py-3 px-4 my-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
          type="text"
          placeholder="Email"
        >
        <p class="text-sm mb-4">
          Enter the email addresses of the people you want to invite.
        </p>
      </div>
      <div class="text-right p-2 border-t border-gray-200">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Send invite
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import IconClose from './icons/IconClose'
export default {
  name: 'InviteUserModal',
  components: { IconClose }
}
</script>
