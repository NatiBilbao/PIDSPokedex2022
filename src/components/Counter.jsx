import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { isLoading } from '../store/auth/authSlice'
import { login } from '../store/auth/authThunk'
import { decrement, increment } from '../store/counter/counterSlice'

export function Counter() {
  const count = 5;
  const dispatch = useDispatch()
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(login())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}