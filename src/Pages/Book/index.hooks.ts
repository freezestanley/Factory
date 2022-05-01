import { useRequest } from 'ahooks'
import { Frequest } from '@/Toolbox'
export const useUserRequest = (param: any) => {
  debugger
  const { data, loading } = useRequest(
    () =>
      Frequest('/messages', {
        method: 'get',
        params: { id: 1 },
        errorHandler: function (error) {
          console.log('messages errorHandler')
        }
      }),
    {
      refreshOnWindowFocus: true,
      refreshDeps: [param],
      cacheKey: 'staleTime-demo',
      staleTime: 5000
      // pollingInterval: 3000
    }
  )
  return { data, loading }
}
