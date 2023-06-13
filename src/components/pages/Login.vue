<template>
    <main class="w-96 m-auto md:w-full">
    <select class="flex justify-start text-lg font-bold absolute top-8 left-8 py-4 px-10 sm:py-2 sm:px-6  text-black border-none rounded-md focus:outline-none" v-model="selected">
    <option class="text-lg font-bold hover:bg-sky-200" v-for="option in options" v-bind:key="option.value">
       
        {{ option.value }}
    </option>
  </select>
    <div>        
        <h2 class="mb-6 text-lg">Login</h2>
            
        <form @submit="login">
            <input class="w-full border-none bg-[#6a6e72] rounded-md py-3 px-6 focus:outline-none" type="text" placeholder="6-16 letters or numbers" v-model="name"><br><br>
            <input class="w-full text-white border-none bg-[#6a6e72] rounded-md py-3 px-6 focus:outline-none" type="password" placeholder="6-16 alphanumeric pasword" v-model="password"> <br><br>
            <div class="flex justify-between sm:flex-col">
                <input class="w-3/4 sm:w-full sm:mb-6 border-none text-white bg-[#6a6e72] rounded-md py-3 px-2  focus:outline-none" type="text" placeholder="Verification Code" v-model="verificationCode">
                <input class="w-20 sm:w-full  border-none text-white bg-[#fff] rounded-md py-3 px-4 focus:outline-none" type="text" placeholder="4222">
            </div> <br>
            <div class="flex justify-between">
                <div class="flex justify-start items-center mb-6">
                <input class="mr-2 checkbox-round " type="checkbox" id="checkbox" v-model="RemembarPassword" />
                <label for="checkbox" class="md:text-xs">Remembar Password</label>
            </div>
            <RouterLink to="/forgetPassword" class="text-white text-md md:text-xs">Forget Password</RouterLink>
            </div>
            <button class="w-full text-white bg-[#135ecd99] border-none text-lg rounded-md py-4 px-6 sm:py-3 sm:px-4 focus:outline-none" type="submit">Login</button>
            <p class="w-full mt-5" v-if="error.length">
                <b>please fill up yours form</b>
                <ul>
                    <li v-for="e in error" v-bind:key="e.id" class="text-red-700">
                        {{ e }}
                    </li>
                </ul>
            </p>
        </form>

        <RouterLink to="/registration" class="flex justify-end mt-5 text-white text-lg">Registration</RouterLink>
     </div>
    </main>
</template>
<script>
import { RouterLink } from 'vue-router';
export default {
    name: "Login",
    data() {
        return {
            error: [],
            name: null,
            password: null,
            verificationCode: null,
            RemembarPassword: "Remembar Password",
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
        login(e) {
            if (this.name && this.password && this.verificationCode) {
                console.log("Login function called");
            }
            this.error = [];
            if (!this.name) {
                this.error.push("name is required");
            }
            if (!this.password) {
                this.error.push("password is required");
            }
            if (!this.verificationCode) {
                this.error.push("Verification is required");
            }
            console.warn("error", this.error);
            e.preventDefault();
        }
    },
    components: { RouterLink }
}
</script>
<style scoped>
.checkbox-round {
    width: 20px;
    height: 20px;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 4px solid #ccc;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
}
.checkbox-round:checked {
    background-color: #4852d8;
}



</style>