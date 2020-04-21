<template>
  <div class="h-full w-full overflow-y-auto">
    <section>
      <h2>
        {{ name }}
      </h2>
      <p>
        Full barangay name
      </p>
      <div class="text-center pt-4 text-xs">
        <button
          class="inline-flex flex-col justify-center items-center mx-4"
          @click="showInviteUserModal = true"
        >
          <icon-user-add class="w-8 h-8 fill-current" />
          Invite
        </button>
        <button class="inline-flex flex-col justify-center items-center mx-4">
          <icon-share-alt class="w-8 h-8 fill-current" />
          Share
        </button>
      </div>
    </section>
    <section>
      <h2>
        Members
      </h2>
      <input
        class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded-full py-3 px-4 my-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
        type="text"
        placeholder="Search"
      >
      <details ref="residents" @click="onToggle('residents')">
        <summary>Residents</summary>
        <ul>
          <li v-for="resident of residents" :key="resident.id" class="member-list__member">
            {{ resident.name }}
          </li>
        </ul>
      </details>
      <details ref="guests" @click="onToggle('guests')">
        <summary>Guests</summary>
        <ul>
          <li v-for="guest of guests" :key="guest.id" class="member-list__member">
            {{ guest.name }}
          </li>
        </ul>
      </details>
    </section>
    <section>
      <h2>Code of conduct</h2>
      <p>Lorem ipsum dolor...</p>
    </section>
    <transition name="fade">
      <invite-user-modal
        v-show="showInviteUserModal"
        @close="showInviteUserModal = false"
      />
    </transition>
  </div>
</template>
<script>
import IconUserAdd from './icons/IconUserAdd'
import InviteUserModal from './InviteUserModal'
import IconShareAlt from './icons/IconShareAlt'

export default {
  name: 'RoomInfo',
  components: { IconShareAlt, InviteUserModal, IconUserAdd },
  props: {
    name: {
      type: String,
      required: true
    },
    members: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      residents: [],
      guests: [],
      showInviteUserModal: false
    }
  },
  mounted () {
    for (let i = 0; i < 50; i++) {
      this.residents.push({
        id: i,
        name: `Resident ${i}`
      })
      this.guests.push({
        id: i,
        name: `Guest ${i}`
      })
    }
  },
  methods: {
    onToggle (details) {
      switch (details) {
        case 'residents':
          this.$refs.guests.removeAttribute('open')
          break
        case 'guests':
          this.$refs.residents.removeAttribute('open')
      }
    }
  }
}
</script>
<style scoped>
section {
  @apply px-4 pb-4 mb-4 border-b border-gray-200;
}
section:last-child {
  @apply border-none;
}
section > h2 {
  @apply text-lg;
}
section > p {
  @apply text-sm;
}
details {
  @apply my-2;
}
details > summary {
  @apply mb-2;
}
details > summary:focus {
  @apply outline-none;
}
ul {
  @apply list-none p-0 m-0;
}
li {
  @apply mb-2 pl-4;
}
.fade-enter-active, .fade-leave-active {
  @apply transition-opacity duration-150;
}
.fade-enter, .fade-leave-to {
  @apply opacity-0;
}
</style>
