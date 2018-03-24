import Api from '@/services/Api'

export default {
  register (credentials) {
    return Api().post('register', credentials)
  }
}


// AuthenticationService.register({
//   email: 'hoanlongsu92@gmail.com'
//   password: '123456'
// })
