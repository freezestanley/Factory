import React from 'react'
import useSWR from 'swr'
import request from 'umi-request'
import { useUser } from '@/Utils/bb'

function Ert() {
  const { data, error } = useUser()
  return (
    <div>
      <h1>{data?.code}</h1>
      <p>{data?.msg}</p>
      <strong>👁 {data?.subscribers_count}</strong>{' '}
      <strong>✨ {data?.stargazers_count}</strong>{' '}
      <strong>🍴 {data?.forks_count}</strong>
    </div>
  )
}
export default Ert