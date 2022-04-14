//@ts-nocheck
import React, { useEffect } from 'react'
import classNames from 'classnames/bind'
import Style from './assets/styles/index.less'
import { useOutletContext, Link } from 'react-router-dom'
import { useUser } from '@/Utils/index'

let cx = classNames.bind(Style)
const Book = () => {
  const { data, error } = useUser()
  useEffect(() => {
    console.log(`useEffect data: }`)
    return () => {
      console.log(`removeEffect data:$}`)
    }
  })

  const GetHandler: React.MouseEventHandler<HTMLDivElement> = async (e) => {
    console.log('1111')
    // getData({ name: '123123', prd: 'bbbb' })
    debugger
    // let result = useUser()
    debugger
  }
  const PostHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log('222222')
  }
  return (
    <div className={cx({ book: true })}>
      <div>data: {data?.msg}</div>
      <div>
        <Link to={'/'}> index </Link>
      </div>
      <br />
      <div>
        <Link to={'/shop'}> shop </Link>
      </div>
      <br />
      <div>
        <Link to={'/team'}> team </Link>
      </div>
      <br />
      <div>
        <Link to={'/car'}> car </Link>
      </div>
      <br />
      <div>
        <Link to={'/asset'}> asset </Link>
      </div>
      <br />
      <div>
        <Link to={'/lazy'}> lazy </Link>
      </div>
      <div>
        <Link to={'/swr'}> swr </Link>
      </div>
      <br />
      <div onClick={GetHandler}>on click get</div>
      <div onClick={PostHandler}>on click post</div>
      this is book
    </div>
  )
}
export default Book
