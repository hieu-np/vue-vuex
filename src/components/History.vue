<template>
  <div class="container">
    <h4>History</h4>
    <div class="flex">
      <p
      v-for="(number, i) in history" :key="i"
      :class="activeIndexes(parseInt(value)).includes(i) && 'bold'"
      >
        {{number}}
      </p>
    </div>
    <input type="number"
    placeholder="Search by Index"
    v-model="value">
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'History',
  data() {
    return {
      value: 0
    }
  },
  computed: {
    ...mapState(['history']),
    ...mapGetters(['activeIndexes'])
  }
}
</script>

<style scoped>
.container{
  margin-top: 7rem;
}
.flex{
  display: flex;
  text-align: center;
  width: 25rem;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
}
.flex p {
  margin: 1rem;
}
.bold{
  font-weight: 900;
}
</style>