import Input from './Input'

export function Overlay() {
  return (
    <>
      <div
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}></div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        <p>
          <a href='https://timeoffprojects.com/contact'>Contact</a>
        </p>
      </div>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>
        <p>
          <a href=''>Digital Playground</a>
        </p>
        <p>
          <a href='https://github.com/automathematical/top-landingpage'>Get the code</a>
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        <p>
          <a href='https://timeoffprojects.com'>Time Off Projects</a>
        </p>
      </div>
      <Input />
    </>
  )
}
