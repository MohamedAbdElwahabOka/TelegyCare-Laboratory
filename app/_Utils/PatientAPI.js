const { default: axiosClient } = require(`./axiosClient`);

const getPatient = () => axiosClient.get('/patients?populate=*');


export default {
    getPatient
}