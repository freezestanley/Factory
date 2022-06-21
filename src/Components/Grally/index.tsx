import Image from '@/Components/Image'
import React from 'react'
import { Link } from 'react-router-dom'

const Grally = (props: { item: string[] }) => {
  return (
    <div>
      123
      {props?.item.map((ele, idx, arr) => (
        <Image key={`${ele}${idx}`} className={'image'} src={ele} />
      ))}
    </div>
  )
}
export default Grally
