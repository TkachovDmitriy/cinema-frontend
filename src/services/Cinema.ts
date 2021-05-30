// import axios from 'axios'
import Api from '~/utils/Api'

class Malleni extends Api {
  /**
   *
   * Create methods
   */
  /**
   * Create a new user
   * @param  {SignUpFormValues} user user input values
   */
  //    createUser = (user: SignUpFormValues): Promise<void> =>
  //    this.post('/api/v1/users/registrations', { data: { user } })
}

export default new Malleni({
  baseURL: process.env.REACT_APP_API,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})
