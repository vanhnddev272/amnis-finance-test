import axios from 'axios'

export const fetchUsersAPI = async () => {
  return (await axios.get('https://jsonplaceholder.typicode.com/users')).data
}