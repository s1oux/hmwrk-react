import callWebApi from '../helpers/webApiHelper';
import mockMessages from './messagesMock';

const FAKE_MESSAGES_API_URL =
  'https://api.jsonbin.io/b/5f15f73f9180616628457f77';

export const getMessagesFromMock = () => {
  return mockMessages;
};

export const getMessages = async () => {
  const response = await callWebApi({
    endpoint: FAKE_MESSAGES_API_URL,
    type: 'GET',
  });
  return response.json();
};
