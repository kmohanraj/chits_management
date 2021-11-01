import axios from "axios";
import Customer from "../models/customer.model";

const baseUrl = "http://192.168.225.128:3001"

class CustomerService {

  getAllCustomers() {
    return axios.get(baseUrl + "/api/v1/customers");
  }

  create(data) {
    return axios.post(baseUrl + "/api/v1/customers", data)
  }

  getById(id) {
    return axios.get(baseUrl + "/api/v1/customer/" + id)
  }

  update(id, data) {
    return axios.put(baseUrl + `/api/v1/customer/${id}`, data)
  }

  delete(id) {
    return axios.delete(baseUrl + "/api/v1/customer/" +  id)
  }

}

export default new CustomerService;