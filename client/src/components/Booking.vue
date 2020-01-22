<template lang="html">
  <div class="booking">
    <h2>Client Info:</h2>
    <p> {{ booking.firstName }}</p>
    <p> {{ booking.surname }}</p>
    <p> {{ booking.email }}</p>
    <p v-if="booking.checkedIn">Yes</p>
    <!-- <p v-else="!booking.checkedIn">No</p> -->

    <button type="button" v-on:click="handleDelete(booking._id)">Delete</button>

  </div>
</template>

<script>
import BookingService from '../services/BookingService'
import {eventBus} from '../main'

export default {
  name: "booking",
  props: ['booking'],
  methods: {
    handleDelete(id){
      BookingService.deleteBooking(id)
        .then(response => eventBus.$emit('booking-deleted', id))
    }
  }
}
</script>

<style lang="css" scoped>
</style>
