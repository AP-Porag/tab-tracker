import Api from "@/services/Api";

export default {
    register(credentials){
        return Api().post('auth/register',credentials)
            .then((res)=>{
                return res.data
            //console.log(res.data);
        })
            .catch((err)=>{
                return err;
            console.log(err);
        })
    }
}

// AuthenticationService.register({
//     username:'testing',
//     email:'testing@gmail.com',
//     password:'testing@gmail.com'
// })