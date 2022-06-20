import React, { useEffect, useState, memo } from 'react'
import classNames from 'classnames/bind'
import Style from './index.style.less'
import { Link } from 'react-router-dom'
import Grally from '@/Components/Grally'

let cx = classNames.bind(Style)
const Aa = () => <div>1233</div>
function Counter(props: { children: React.ReactChild; name: string }) {
  const [count, setCount] = useState(0)
  const fff = () => {
    // return React.createElement()
  }
  return (
    <div>
      <div>{props.children}</div>
      <p>count: {count}</p>
      <button
        onClick={() =>
          setCount((count) => {
            debugger
            console.log(props.children)
            return count + 1
          })
        }
      >
        Add
      </button>
    </div>
  )
}

const Book = () => {
  const [userId, setUserId] = useState(1)
  const [show, setShow] = useState(true)
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
    // eslint-disable-next-line babel/no-invalid-this
    console.log(this)
  }
  // eslint-disable-next-line babel/no-invalid-this
  let _this = this
  const PostHandler: React.MouseEventHandler<HTMLDivElement> = (e) => {
    console.log('222222')
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
      {show && (
        <Counter name="0000">
          <Aa />
        </Counter>
      )}
      <button onClick={() => setShow((show) => !show)}>Toggle</button>
      <br />
      11111111111111111
      <div>
        <Link to={'/'}> index </Link>
      </div>
      <br />
      <div>
        <Link to={'/about'}> about </Link>
      </div>
      <br />
      <div>
        <Link to={'/home'}> home </Link>
      </div>
      <div>
        <Link to={'/team?name=ffff'} state={{ id: '123123' }}>
          team
        </Link>
      </div>
      <div onClick={GetHandler}>on click get</div>
      <div
        onClick={(e) => {
          log()
          PostHandler(e)
        }}
      >
        on click post
      </div>
    </div>
  )
}
export default memo(Book)
