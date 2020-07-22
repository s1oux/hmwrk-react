import callWebApi from '../helpers/webApiHelper';

const FAKE_MESSAGES_API_URL =
  'https://api.jsonbin.io/b/5f15f73f9180616628457f77';

export const getMessages = async () => {
  const response = await callWebApi({
    endpoint: FAKE_MESSAGES_API_URL,
    type: 'GET',
  });
  return response.json();
};
