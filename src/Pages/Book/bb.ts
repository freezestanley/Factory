//@ts-nocheck
import request from 'umi-request'
import useSWR from 'swr'

// const fetcher = (...args) => fetch(...args).then((res) => res.json())
export function useUser() {
  debugger
  const fetcher = (url: string) => request.get(url).then((res) => res)
  const { data, error } = useSWR('http://localhost:7777/api/message', fetcher)
  return {
    data,
    error
  }
}
