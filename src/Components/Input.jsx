import React from 'react'
import { useStore } from './store'

export default function Input() {
  const [text, setText] = React.useState('more coming soon!')

  const handleChange = (event) => {
    setText(event.target.value)
  }
  const setData = useStore((state) => state.setData)

  const handleSubmit = (event) => {
    event.preventDefault()
    // Pass the text to another component or handle it as needed
    setData(text)
    console.log(text)
    return text
  }

  return (
    <>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={text}
            onChange={handleChange}
          />
          <button type='submit'>Submit</button>
        </form>
      </div>
    </>
  )
}
