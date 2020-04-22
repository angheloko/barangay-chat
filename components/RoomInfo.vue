<template>
  <div class="h-full w-full overflow-y-auto">
    <section>
      <h2>
        {{ name }}
      </h2>
      <p>
        Full barangay name
      </p>
    </section>
    <section>
      <h2>
        Members
      </h2>
      <input
        class="form-control__input form-control__input--rounded-full"
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
<style scoped>
section {
  @apply px-4 pb-4 mb-4 border-b border-gray-200;
}
section:last-child {
  @apply border-b-0;
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
</style>
