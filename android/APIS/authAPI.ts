import axios, {AxiosResponse} from 'axios';
export async function login(credentials: any): Promise<any> {
  const {tmc, password} = credentials;
  const formObject = {
    tmc: tmc,
    password: password,
  };
  console.log('formObject', formObject);
  const response = await axios.post(
    'https://j8dzzsjz-8089.inc1.devtunnels.ms/api/auth/login',
    formObject,
  );
  console.log('response', response);
  return response.data;
}
