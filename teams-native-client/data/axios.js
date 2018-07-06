import axios from "axios";

export default axios.create({
  baseURL: "http://ec2-18-130-86-246.eu-west-2.compute.amazonaws.com/api/",
  // baseURL: "http://homestead.test/api",
  headers: {
    Accept: "application/json",
  },
});

// if the app is being connected to the hosted backend, please use the 1st baseURL
// the 2nd baseURL will be where you put in the url for your vagrant server if you want to run the app locally
