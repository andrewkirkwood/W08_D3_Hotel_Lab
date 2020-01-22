<template lang="html">

</template>

<script>
import BookingService from '../services/BookingService'
import {eventBus} from '../main'

export default {
  name: "bookings-grid",
  data() {
    return {
      bookings: []
    }
  },
  mounted() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      BookingService.getBookings()
      .then(bookings => this.bookings = bookings)
      // console.log(this.bookings);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
