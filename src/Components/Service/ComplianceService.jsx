import axios from "axios";
class ComplianceService {
  url = "http://localhost:8080/compliance/create";
  addCompliance(RegisterCompliance) {
    return axios.post(this.url, RegisterCompliance);
  }
}

export default new ComplianceService();
