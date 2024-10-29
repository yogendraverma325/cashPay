import {useMutation, useQueryClient} from '@tanstack/react-query';
import {login} from '../APIS/authAPI';
export function loginMutate() {
  return useMutation({
    mutationFn: (values: {tmc: string; password: string}) => login(values),
  });
}
