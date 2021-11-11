import axios from 'axios'



class DepartmentService {

    url = "http://localhost:8080/department/save"

    addDepartment(department) {

        return axios.post(this.url, department)

    }







}



export default new DepartmentService