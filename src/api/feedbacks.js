import axios from "axios"
import {API_URL} from "@/config"

class Feedbacks {
  async message(firstname, lastname, email, message) {
    try {
      const res = await axios({
        method: "POST",
        url: `${API_URL}/api/feedbacks/message`,
        data: {
          firstname: firstname,
          lastname: lastname,
          email: email,
          message: message
        }
      })
      return res.data
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Feedbacks
