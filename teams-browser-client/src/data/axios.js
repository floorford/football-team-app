import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-18-130-86-246.eu-west-2.compute.amazonaws.com/api/",
  // baseURL: "http://homestead.test/api",
  headers: {
    Accept: "application/json",
  },
});
