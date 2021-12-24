import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID qIqk5ntpDPznqHIvu_6jt2csTZywrXpf9_dkI2-A8Tk ",
  },
});
