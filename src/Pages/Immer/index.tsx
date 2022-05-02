//@ts-nocheck
import React, { useCallback, useState } from 'react'
import produce, { enablePatches, applyPatches } from 'immer'
import { useImmer } from 'use-immer'
import Style from './index.style.less'

const Immer = () => {
  const [todos, setTodos] = useState([
    {
      id: 'React',
      title: 'Learn React',
      done: true
    },
    {
      id: 'Immer',
      title: 'Try Immer',
      done: false
    }
  ])

  const handleToggle = useCallback((id) => {
    setTodos(
      produce((draft) => {
        draft.splice(0, 1)
      })
    )
  }, [])

  const handleAdd = useCallback(() => {
    setTodos(
      produce((draft) => {
        draft.push({
          id: 'todo_' + Math.random(),
          title: 'A new todo',
          done: false
        })
      })
    )
  }, [])

  const [todosImmer, setTodosImmer] = useImmer([
    {
      id: 'React',
      title: 'Learn React',
      done: true
    },
    {
      id: 'Immer',
      title: 'Try Immer',
      done: false
    }
  ])

  const handleToggleImmer = useCallback(
    (id) => {
      setTodosImmer((draft) => {
        draft.splice(0, 1)
      })
    },
    [setTodosImmer]
  )

  const handleAddImmer = useCallback(() => {
    setTodosImmer((draft) => {
      draft.push({
        id: 'todo_' + Math.random(),
        title: 'A new todo',
        done: false
      })
    })
  }, [setTodosImmer])

  let state = {
    name: 'Micheal',
    age: 32
  }

  let fork = state

  let changes = []
  let inverseChanges = []
  fork = produce(
    fork,
    (draft) => {
      draft.age = 33
    },
    // 产生的第三个参数是一个回调，patches 将从这里产生
    (patches, inversePatches) => {
      changes.push(...patches)
      inverseChanges.push(...inversePatches)
    }
  )
  state = produce(state, (draft) => {
    draft.name = 'Michel'
  })
  state = applyPatches(state, changes)
  console.log(state)
  state = applyPatches(state, inverseChanges)
  console.log(state)

  return (
    <div className={Style.Immer}>
      <h1 className={Style.title}>Immer</h1>
      <div>
        <h3>Immer produce</h3>
        <p>https://immerjs.github.io/immer/zh-CN/produce</p>
        <ul>
          <li>(base)state， 传递给 produce 的不可变状态</li>
          <li>
            recipe: produce 的第二个参数，它捕获了 base state 应该如何 mutated。
          </li>
          <li>
            draft: 任何 recipe 的第一个参数，它是可以安全 mutate
            的原始状态的代理。
          </li>
          <li>{`producer. 一个使用 produce 的函数，通常形式为 (baseState, ...arguments) => resultState`}</li>
        </ul>

        <code>{`produce(currentState, recipe: (draftState) => void): nextState`}</code>
        <div align="center">
          <button onClick={handleAdd}>+</button>
          or
          <button onClick={handleToggle}>-</button>
        </div>
        <div>
          {todos.map((ele) => {
            return <div key={ele.id}>{ele.title}</div>
          })}
        </div>
        <div align="center">
          <button onClick={handleAddImmer}>+</button>
          or
          <button onClick={handleToggleImmer}>-</button>
        </div>
        <div>
          {todosImmer.map((ele) => {
            return <div key={ele.id}>{ele.title}</div>
          })}
        </div>
      </div>
    </div>
  )
}
export default Immer
