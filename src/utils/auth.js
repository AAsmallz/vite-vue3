import { useStorage } from './useStorage';
export const getToken = () => {
  return useStorage('token').value;
};
