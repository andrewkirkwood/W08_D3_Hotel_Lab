<template lang="html">
  <div id="bookingForm">
    <form method="post" v-on:submit="handleSubmit">

      <label for="">First name</label>
      <input type="text" v-model="firstName">

      <label for="">Surname</label>
      <input type="text" v-model="surname" >

      <label for="">email: </label>
      <input type="text" v-model="email">

      <label for="">Check in</label>
      <select v-model="checkedIn">
        <option value="true" >yes</option>
        <option value="false">no</option>
      </select>
      <input type="submit">
    </form>

  </div>
</template>

<script>
import BookingService from '../services/BookingService'
import {eventBus} from '../main'

export default {
  name: "bookings-form",
  data() {
    return {
      firstName: "",
      surname: "",
      email: "",
      checkedIn: null
    }
  },
  methods: {
    handleSubmit(event){
      event.preventDefault();

      const payload = {
        firstName: this.firstName,
        surname: this.surname,
        email: this.email,
        checkedIn: this.checkedIn
      };
      BookingService.postBooking(payload)
        .then(booking => {
          eventBus.$emit('booking-added', booking);
        })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
