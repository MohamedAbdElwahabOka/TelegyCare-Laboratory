const { default: axiosClient } = require(`./axiosClient`);

const getMedicalRecordsByLabId = (LabId) => axiosClient.get(`medical-records?filters[laboratory][reg_Num][$eq]=${LabId}&populate=*`);

export default {
    getMedicalRecordsByLabId
}