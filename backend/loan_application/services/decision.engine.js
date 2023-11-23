import axios from 'axios';
const serviceUrl = process.env.DECISION_ENGINE_URL;

const getDecision = async(data) => {
  return axios.post(`${serviceUrl}/api/makeDecision`, data);
};

export {
  getDecision
}