const { default: axiosClient } = require(`./axiosClient`);

const getMedicalRecordsByLabId = (LabId) => axiosClient.get(`medical-records?filters[laboratory][reg_Num][$eq]=${LabId}&populate=*`);

const getMedicalRecordsByPatientId = (PatientId) => axiosClient.get(`medical-records?filters[patient][id][$eq]=${PatientId}&populate=*`);

const addLabNote = (id,data) => axiosClient.put(`/medical-records/${id}`, data);
export default {
    getMedicalRecordsByLabId,
    getMedicalRecordsByPatientId,
    addLabNote
}