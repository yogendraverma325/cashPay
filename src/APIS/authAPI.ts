import axios, {AxiosResponse} from 'axios';
export async function login(credentials: any): Promise<any> {
  const {tmc, password} = credentials;
  const formObject = {
    userName: tmc,
    password: password,
  };
  console.log('formObject', formObject);
  const response = await axios.post(
    'https://cbvsqd2f-8089.inc1.devtunnels.ms/api/auth/login',
    formObject,
  );
  return response.data;
}
