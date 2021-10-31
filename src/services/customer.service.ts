import axios from "axios";
import Customer from "../models/customer.model";

const baseUrl = "http://192.168.225.128:3001"

class CustomerService {

  getAllCustomers() {
    return axios.get(baseUrl + "/api/v1/customers");
  }
}

export default new CustomerService;