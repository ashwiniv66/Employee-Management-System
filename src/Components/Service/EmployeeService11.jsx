import axios from "axios";
class EmployeeService11
{
    url="http://localhost:8080/employee/update"
    updateEmployee(employee)
    {
        return axios.put(this.url,employee)
    }
}
export default new EmployeeService11()