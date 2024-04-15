const { default: axiosClient } = require(`./axiosClient`);

const getPatient = () => axiosClient.get('/patients?populate=*');
const getPatientById = (id) => axiosClient.get(`/patients/${id}?populate=*`);
const getPatientByRegistrationNumber = (RegistrationNumber) => axiosClient.get(`/patients?filters[reg_Num][$eq]=${RegistrationNumber}&populate=*`)



export default {
    getPatient,
    getPatientById,
    getPatientByRegistrationNumber
}