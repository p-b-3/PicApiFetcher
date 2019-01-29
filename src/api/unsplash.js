import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID b212386ce9bf48f6cc4ba162ba7afadf1fcf1fa8627064aea156287645e50211"
  }
});
