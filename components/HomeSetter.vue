<template>
  <div>
    Welcome to Barangay Chat.
    <barangay-picker />
  </div>
</template>
<script>
import BarangayPicker from '~/components/BarangayPicker'

export default {
  name: 'HomeSetter',
  components: { BarangayPicker }
}
</script>
