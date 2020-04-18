<template>
  <div class="h-full relative">
    <div class="h-16 flex items-center border-b  px-4">
      <div class="inline-flex items-center">
        <img alt="barangay-logo" src="https://via.placeholder.com/48" class="w-10 h-10 mr-2 rounded-full shadow">
        Barangay 1
      </div>
      <div class="flex-grow" />
      <button class="rounded-full w-6 h-6 inline-flex items-center justify-center">
        <icon-dots-horizontal-triple class="w-4 h-4 fill-current" />
      </button>
    </div>
    <div class="fixed top-16 bottom-24 left-0 w-full">
      <div class="overflow-y-auto h-full bg-white">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.

        Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.

        Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.

        Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus.

        Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
      </div>
    </div>
    <div class="fixed bottom-0 left-0 w-full h-24 bg-blue-200">
      Textarea
    </div>
  </div>
</template>

<script>
import IconDotsHorizontalTriple from './icons/IconDotsHorizontalTriple'
export default {
  name: 'Room',
  components: { IconDotsHorizontalTriple }
}
</script>

<style scoped>

</style>
