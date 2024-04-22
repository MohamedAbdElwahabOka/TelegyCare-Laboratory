const { default: axiosClient } = require(`./axiosClient`);

const getLaboratories = () => axiosClient.get('/laboratories?populate=*');


export default {
    getLaboratories
}