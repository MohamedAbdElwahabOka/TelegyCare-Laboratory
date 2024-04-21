const { default: axiosClient } = require(`./axiosClient`);

const getDoctors = () => axiosClient.get('/doctors?populate=*');