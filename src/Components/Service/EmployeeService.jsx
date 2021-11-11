import axios from "axios";

class EmployeeService
{
    url="http://localhost:8080/employee/save"
    saveEmployee(employee)
    {
        return axios.post(this.url,employee)
    }
}

export default new EmployeeService()
