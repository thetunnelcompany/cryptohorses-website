import axios from "axios"
import {API_URL} from "../config"

class Stats {
  async visit(page) {
    try {
      const res = await axios.post(`${API_URL}/api/stats/visit`, {
        params: {
          page: page
        }
      })
      return res.data
    } catch (err) {
      console.log(err)
    }
  }
}

export default new Stats
