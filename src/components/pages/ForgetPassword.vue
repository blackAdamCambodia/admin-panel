<template>
    <div >
        <div class="absolute top-6 left-6 flex  justify-center w-full items-center">
            
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg>
            <h2 class="text-lg text-center">Modify login password</h2>
        </div>
        
        <form @submit="forgetPassword">
            <label class="text-start block mb-4" for="mobilenumber"><span>*</span>Mobile Phone Number</label>
            <input 
            id="mobilenumber" 
            class="w-full border-none bg-[#6a6e72] rounded-sm py-3 px-6 focus:outline-none" 
            type="text" 
            placeholder="Please enter a mobile phone numbers" 
            v-model="mobileNumber"
            required
            ><br><br>
            <label class="text-start block mb-4" for="verificationCode"><span>*</span>Mobile Phone verification code</label>
            <div class="flex w-full justify-between">
                <input 
            class="w-full  text-white border-none bg-[#6a6e72] rounded-lg py-3 mr-2 px-6 focus:outline-none" 
            type="text" 
            placeholder="Verification Code" 
            v-model="verificationCode"
            required
            > 
            <button type="button" class="bg-[#1989fa] w-20 rounded-lg py-3 px-6">Get</button>
            </div>
           <br>           
            <label class="text-start block mb-4" for="newpassword"><span>*</span>New Password</label>
            <input 
            id="newPassword" 
            class="w-full text-white border-none bg-[#6a6e72] rounded-lg py-3 px-6 focus:outline-none" 
            type="password" 
            placeholder="Please enter the new password" 
            v-model="newPassword"
            required
            > <br><br>
           
            <label class="text-start block mb-4" for="confrimnewpassword"><span>*</span>Confrim new password</label>
            <input 
            id="confrimNewPassword" 
            class="w-full text-white border-none bg-[#6a6e72] rounded-lg py-3 px-6 focus:outline-none" 
            type="password" 
            placeholder="Please Re enter your password" 
            v-model="confrimNewPassword"
            required
            > <br><br>
            <div v-if="newPassword != confrimNewPassword" class="text-red-600">Password doesn't match</div>
            
            <br><br>
            <button class="w-full text-white bg-[#1989fa] border-none rounded-lg py-4 font-semibold text-lg px-6 focus:outline-none" type="submit">ok</button>
            
        </form>
    </div>
</template>
<script>

export default {
    name:'Login',
    
    data(){
        return{
            error:[],
            mobileNumber:null,
            verificationCode:null,
            newPassword:null,
            confrimNewPassword:null
            

        }
    },
    methods:{
        forgetPassword(e){
            if(this.mobileNumber && this.verificationCode && this.newPassword && this.confrimNewPassword){
                console.log("Reset function called")
            }
            this.error=[];
            if(!this.mobileNumber){
                this.error.push("Mobile Number is required")
            }
            if(!this.verificationCode){
                this.error.push("Verification is required")
            }
            if(!this.newPassword){
                this.error.push("New Password")
            }
            if(!this.confrimNewPassword){
                this.error.push("Password are not same")
            }
            console.warn("error",this.error)
            e.preventDefault();
            
        }
    }
}
</script>
<style scoped>
svg {
    position: absolute;
    font-size: 30px;
    left: 0;
    fill: white;
}
span {
    color: red;
    margin-right: 8px;
}

</style>