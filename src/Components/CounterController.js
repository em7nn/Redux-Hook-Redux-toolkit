import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { decrement, divide, increment, multiple } from '../Store/counterSlice'
import "./count.css"

export function Counter() {
    const inp1 = useRef()
    const inp2 = useRef()
    const dispatch = useDispatch()

    return (
        <div>
            <input className='inp' ref={inp1} type={"num"} />
            <input className='inp' ref={inp2} type={"num"} />
            <div className='but'>
            <div>
            <button className='btn' onClick={() => {
                dispatch
                    (increment(
                        {
                            first: inp1.current.value,
                            inp2: inp2.current.value
                        })
                    )
            }}>increase+</button>
            <button className='btn' onClick={() => {
                dispatch
                    (decrement(
                        {
                            first: inp1.current.value,
                            inp2: inp2.current.value
                        })
                    )
            }}>declerase-</button>
            </div>
            <div>
            <button className='btn' onClick={() => {
                dispatch
                    (multiple(
                        {
                            first: inp1.current.value,
                            inp2: inp2.current.value
                        })
                    )
            }}>multiple*</button>
            <button className='btn' onClick={() => {
                dispatch
                    (divide(
                        {
                            first: inp1.current.value,
                            inp2: inp2.current.value
                        })
                    )
            }}>divide /</button>
            </div>
            </div>
        </div>
    )
}