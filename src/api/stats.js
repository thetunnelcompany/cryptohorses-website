import axios from "axios"
import {API_URL} from "../config"

class Stats {
  async visit() {
    try {
      const res = await axios.post(`${API_URL}/stats/visit`)
      return res.data
    } catch (err) {
      console.log(err.data)
    }
  }
}

export default new Stats
