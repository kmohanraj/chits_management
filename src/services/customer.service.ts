import axios from "axios";
import Customer from "../models/customer.model";

const baseUrl = "http://192.168.132.199:3001"

class CustomerService {

  getAllCustomers() {
    return axios.get(baseUrl + "/api/v1/customers");
  }

  create(data: Customer) {
    return axios.post(baseUrl + "/api/v1/customers", data)
  }

}

export default new CustomerService;