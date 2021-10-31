import axios from "axios";
class ComplianceService {
  url = "http://localhost:8080/compliance/create";
  addCompliance(Compliance) {
    return axios.post(this.url, Compliance);
  }
}

export default new ComplianceService();
