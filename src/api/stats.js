import axios from "axios"
import {API_URL} from "@/config"

class Stats {
  async visit(page) {
    try {
      const res = await axios({
        method: "POST",
        url: `${API_URL}/api/stats/visit`,
        data: {
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
