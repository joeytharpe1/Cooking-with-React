import React, {useState, useContext} from 'react';
import { ThemeContext } from './App'
                                          //props from CounterHook in App.js
export default function CounterHooks({ initialCount }) {
    const [count, setCount]=useState(initialCount);
    const style = useContext(ThemeContext)

    return (
        <div>
            <button style={style} onClick={()=> setCount(prevCount => prevCount - 1)}>-</button>
            <span>{count}</span>
            <button style={style} onClick={()=> setCount(prevCount=> prevCount + 1)}>+</button>
        </div>
    )
}
