import axios from "axios";
class StatusService {
  url = "http://localhost:8080/status/statusreport";
  addStatus(Status) {
    return axios.post(this.url, Status);
  }
}

export default new StatusService();
