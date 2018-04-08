<template>
  <panel title="YouTube Youtube">
    <youtube
      :video-id="youtubeId"
      :player-width="700"
      :player-height="280">
    </youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>
<style scoped>

</style>
