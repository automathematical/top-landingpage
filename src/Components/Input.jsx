import React from 'react'
import { useStore } from './store'

const styles = {
  container: {
    position: 'absolute',
    bottom: 40,
    right: 40,
    fontSize: '13px',
    fontFamily: 'Inter var, sans-serif',
  },
  form: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  input: {
    padding: '8px 12px',
    fontSize: '14px',
    border: '1px solid #e0e0e0',
    borderRadius: '6px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    backdropFilter: 'blur(8px)',
    transition: 'all 0.2s ease',
    outline: 'none',
    width: '200px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
  },
  inputFocus: {
    borderColor: '#9ca9ff',
    boxShadow: '0 2px 8px rgba(156, 169, 255, 0.2)',
  },
  button: {
    padding: '8px 16px',
    fontSize: '14px',
    border: 'none',
    borderRadius: '6px',
    backgroundColor: '#9ca9ff',
    color: 'white',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    fontWeight: 500,
  },
  buttonHover: {
    backgroundColor: '#8a97e6',
    transform: 'translateY(-1px)',
    boxShadow: '0 2px 8px rgba(156, 169, 255, 0.3)',
  },
}

export default function Input() {
  const [text, setText] = React.useState('write whatever')
  const [isFocused, setIsFocused] = React.useState(false)
  const [isHovered, setIsHovered] = React.useState(false)

  const handleChange = event => {
    setText(event.target.value)
  }
  const setData = useStore(state => state.setData)

  const handleSubmit = event => {
    event.preventDefault()
    setData(text)
  }

  return (
    <div style={styles.container}>
      <form
        onSubmit={handleSubmit}
        style={styles.form}>
        <input
          type='text'
          value={text}
          onChange={handleChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          style={{
            ...styles.input,
            ...(isFocused ? styles.inputFocus : {}),
          }}
        />
        <button
          type='submit'
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            ...styles.button,
            ...(isHovered ? styles.buttonHover : {}),
          }}>
          Submit
        </button>
      </form>
    </div>
  )
}
