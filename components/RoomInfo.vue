<template>
  <div class="h-full w-full overflow-y-auto">
    <div class="px-4 pb-4 mb-4 border-b border-gray-200">
      <h2 class="text-lg">{{ name }}</h2>
      <div class="text-sm">Full barangay name</div>
    </div>
    <div class="px-4 pb-4 mb-4">
      <h3 class="text-lg">Members</h3>
      <input
        class="appearance-none block w-full bg-gray-200 border border-gray-200 rounded-full py-3 px-4 my-2 leading-tight focus:outline-none focus:bg-white focus:border-gray-300"
        type="text"
        placeholder="Search"
      >
      <details ref="residents" @click="onToggle('residents')">
        <summary>Residents</summary>
        <div>
          <div v-for="resident of residents" :key="resident.id">
            {{ resident.name }}
          </div>
        </div>
      </details>
      <details ref="guests" @click="onToggle('guests')">
        <summary>Guests</summary>
        <div>
          <div v-for="guest of guests" :key="guest.id">
            {{ guest.name }}
          </div>
        </div>
      </details>
    </div>
  </div>
</template>
<script>
export default {
  name: 'RoomInfo',
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
      guests: []
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
