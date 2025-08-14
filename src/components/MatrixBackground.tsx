import { useEffect } from 'react'

const MatrixBackground = () => {
  useEffect(() => {
    const chars = '01010101010101010101MORESIM01010101'
    const container = document.getElementById('matrix-container')
    
    if (!container) return

    const createChar = () => {
      const char = document.createElement('div')
      char.className = 'matrix-char'
      char.textContent = chars[Math.floor(Math.random() * chars.length)]
      char.style.left = Math.random() * 100 + 'vw'
      char.style.animationDuration = (Math.random() * 3 + 2) + 's'
      char.style.animationDelay = Math.random() * 2 + 's'
      container.appendChild(char)
      
      setTimeout(() => {
        if (container.contains(char)) {
          container.removeChild(char)
        }
      }, 5000)
    }

    const interval = setInterval(createChar, 200)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div id="matrix-container" className="matrix-bg" />
}

export default MatrixBackground