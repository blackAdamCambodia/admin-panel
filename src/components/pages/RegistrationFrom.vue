<template>
  <div class=" w-96 m-auto md:w-full">
    <div class="fixed top-6 left-6 flex w-full flex-col  justify-between items-start">
      <a href="/login.vue">
        <svg
        xmlns="http://www.w3.org/2000/svg"
        height="1em"
        viewBox="0 0 320 512"
      >
        <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
        <path
          d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"
        />
      </svg>
      </a>
      <select
        class=" text-lg font-bold mt-20 md:mt-10 sm:mt-6  py-4 px-8 sm:py-2 sm:px-5  text-black border-none rounded-md focus:outline-none"
        v-model="selected"
      >
        <option
          class="text-lg font-bold hover:bg-sky-200"
          v-for="option in options"
          v-bind:key="option.value"
        >
          {{ option.value }}
        </option>
      </select>
    </div>
    <div>
      <form class="md:mt-20 " @submit="register">
        <input
          class="w-full border-none bg-[#6a6e72] rounded-sm py-3 px-6 focus:outline-none"
          required
          id="name"
          type="text"
          placeholder="6-16 letters or numbers"
          v-model="name"
        /><br /><br />

        <input
          class="w-full text-white border-none bg-[#6a6e72] rounded-sm py-3 px-6 focus:outline-none"
          required
          type="password"
          id="password"
          placeholder="6-16 alphanumeric pasword"
          v-model="password"
        />
        <br /><br />
        
        <input
          class="w-full text-white border-none bg-[#6a6e72] rounded-sm py-3 px-6 focus:outline-none"
          required
          type="password"
          placeholder="Please Re enter your password"
          id="ConfrimPassword"
          v-model="ConfrimPassword"
        />
        <br /><br />
        <div v-if="password != ConfrimPassword" class="text-red-600">
          Password doesn't match
        </div>
        <input
          class="w-full text-white border-none bg-[#6a6e72] rounded-sm py-3 px-6 focus:outline-none"
          required
          type="password"
          placeholder="(6-16)Withdrawal Password"
          id="withdrawalPassword"
          v-model="withdrawalPassword"
        />
        <br /><br />

        <input
          class="w-full text-white border-none bg-[#6a6e72] rounded-sm py-3 px-6 focus:outline-none"
          required
          type="text"
          placeholder="Invitation code (required)"
          id="invitationCode"
          v-model="invitationCode"
        />
        <br /><br />

        <input
          class="w-full text-white border-none bg-[#6a6e72] rounded-sm py-3 px-6 focus:outline-none"
          required
          type="text"
          placeholder="Mobile phone number with country code"
          id="mobileNumber"
          v-model="mobileNumber"
        />
        <br /><br />
        <div class="flex justify-between sm:flex-col">
            
        <input
          class="w-3/4 sm:w-full sm:mb-6 border-none text-white bg-[#6a6e72] rounded-sm py-3 px-2 focus:outline-none"
          required
          type="text"
          placeholder="Verification Code"
          id="verificationCode"
          v-model="verificationCode"
        />

        <input
          class="w-20 sm:w-full border-none text-white bg-[#fff] rounded-sm py-3 px-4 focus:outline-none"
          type="text"
          placeholder="4222"
        />
        </div>
        <br /><br />

        <button
          class="w-full text-white bg-[#135ecd99] border-none rounded-sm py-4  sm:py-3 font-semibold text-lg px-6 focus:outline-none"
          type="submit"
        >
          Registration
        </button>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "RegistrationFrom",
  data() {
    return {
      error: [],
      name: null,
      password: null,
      ConfrimPassword: null,
      withdrawalPassword: null,
      invitationCode: null,
      mobileNumber: null,
      verificationCode: null,
      selected: 'US',
            options: [
                {value: 'US'},
                {value: 'UAE'},
                {value: 'RU' },
                {value: 'ES' },
                {value: 'FR' },
                {value: 'IT' },
                {value: 'DE' },
                {value: 'UK' },
                {value: 'BR' }
            ]
    };
  },
  methods: {
    register(e) {
      if (
        this.name &&
        this.password &&
        this.ConfrimPassword &&
        this.withdrawalPassword &&
        this.invitationCode &&
        this.mobileNumber &&
        this.verificationCode
      ) {
        console.log("Registration function called");
      }
      this.error = [];
      if (!this.name) {
        this.error.push("name is required");
      }
      if (!this.password) {
        this.error.push("password is required");
      }
      if (!this.ConfrimPassword) {
        this.error.push("confrim password is required");
      }
      if (!this.withdrawalPassword) {
        this.error.push("withdrawal Password password is required");
      }
      if (!this.invitationCode) {
        this.error.push("invitaiton code is required");
      }
      if (!this.mobileNumber) {
        this.error.push("Mobile Number code is required");
      }
      if (!this.verificationCode) {
        this.error.push("Verification is required");
      }
      console.warn("error", this.error);
      e.preventDefault();
    },
  },
};
</script>
<style scoped>
svg {
    position: absolute;
    font-size: 30px;
    fill: white;
}

</style>
