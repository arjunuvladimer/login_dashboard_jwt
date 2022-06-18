<template>
    <div class="container mt-5">
        <form @submit="handleLogin" :validation-schema="schema">
            <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" name="password" class="form-control" id="exampleInputPassword1">
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="exampleCheck1">
                <label class="form-check-label" for="exampleCheck1">Check me out</label>
            </div>
            <button type="submit" class="btn btn-primary" :disabled="loading">Submit</button>
        </form>
    </div>
</template>

<script>
export default{
    name:"Login",
    data(){
        const schema = yup.object().shape({
            email: yup.string().required("Email is required!"),
            password: yup.string().required("Password is required!"),
        })
        return {
            loading: false,
            message:"",
            schema,
        }
    },
    computed:{
        loggedIn(){
            return this.$store.state.auth.status.loggedIn
        }
    },
    created(){
        if(this.loggedIn){
            this.$router.push("/dashboard")
        }
    },
    methods:{
        handleLogin(user){
            this.loading = true
            this.$store.dispatch("auth/login", user)
            .then(() => {
                this.$router.push("/dashboard")
            }, (error) => {
                this.loading = false
                this.message = (
                    error.response &&
                    error.response.data.data &&
                    error.response.data.model
                )
            })
        }
    }
}
</script>