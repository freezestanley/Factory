import React, { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import Style from './index.less'
import { Link } from 'react-router-dom'
import dataDb from '@TB/goDB'
import ReactDOM from 'react-dom'

let cx = classNames.bind(Style)
const Book = () => {
  const [userId, setUserId] = useState(1)

  useEffect(() => {
    // console.log(`useEffect data: ${JSON.stringify(data)}}`)
    return () => {
      console.log(`removeEffect data:$}`)
    }
  })

  const GetHandler: React.MouseEventHandler<HTMLDivElement> = async (e) => {
    console.log('1111')
    setUserId(userId + 1)
    debugger
  }
  const PostHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log('222222')
    debugger
    // let portal = document.getElementById('protal')
    // ReactDOM.createPortal('123123', portal || document.body)
  }
  const log = () => {
    setTimeout(() => {
      console.log('3 秒前 temp = 5，现在 temp =', userId)
    }, 3000)
  }
  type User = {
    id: number
    kind: string
  }
  function makeCustomer<T extends User>(u: T): T {
    return {
      ...u,
      id: u.id,
      kind: 'customer'
    }
  }

  interface Todo {
    title: string
    description: string
  }
  function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, fieldsToUpdate }
  }

  function f(a: string | number, b: string | number) {
    if (typeof a === 'string') {
      return a + ':' + b // no error but b can be number!
    } else {
      return (a as number) + (b as number) // error as b can be number | string
    }
  }

  return (
    <div className={cx({ book: true })}>
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
      <div
        onClick={(e) => {
          log()
          PostHandler(e)
        }}
      >
        on click post
      </div>
      this is book
    </div>
  )
}
export default Book
