<template lang="html">
  <div id="bookingsGrid">
    <booking v-for="booking in bookings" :booking="booking"/>
  </div>
</template>

<script>
import BookingService from '../services/BookingService'
import {eventBus} from '../main'
import Booking from './Booking'

export default {
  name: "bookings-grid",
  data() {
    return {
      bookings: []
    }
  },
  components: {
    'booking': Booking
  },
  mounted() {
    this.fetchData()
    eventBus.$on('booking-added', booking => this.bookings.push(booking));

    eventBus.$on('booking-deleted', id => {
        const indexOfDeleted = this.bookings.indexOf(booking => booking._id === id)
        this.bookings.splice(indexOfDeleted, 1)
    } )
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
