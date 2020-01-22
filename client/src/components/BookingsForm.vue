<template lang="html">
  <div id="bookingForm">
    <form method="post">
      <label for="">First name</label>
      <input type="text" name="" value="">
      <label for="">Surname</label>
      <input type="text" name="" value="">
      <label for="">Check in</label>
      <select class="" name="">
        <option value="true">yes</option>
        <option value="false">no</option>
      </select>
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
  }
}
</script>

<style lang="css" scoped>
</style>
