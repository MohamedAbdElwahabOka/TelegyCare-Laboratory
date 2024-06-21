const { default: axiosClient } = require(`./axiosClient`);

const getLaboratories = () => axiosClient.get('/laboratories?populate=*');

const getLaboratoreyByRegNum = (RegNum) => axiosClient.get(`/laboratories?filters[reg_Num][$eq]=${RegNum}&populate=*`)


export default {
    getLaboratories,
    getLaboratoreyByRegNum
}