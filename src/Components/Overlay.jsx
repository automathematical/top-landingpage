export function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <div style={{ position: 'absolute', bottom: 40, left: 40, fontSize: '13px' }}>
        <p>
          AECO Software Development - Web Development - 3D - BIM - CAD/CAM - Computational Design - Design Technology
        </p>
      </div>
      <div style={{ position: 'absolute', top: 40, left: 40, fontSize: '13px' }}>
        <p>
          <a href='mailto:info@timeoffprojects.be'>info@timeoffprojects.be</a>
        </p>
      </div>
      <div style={{ position: 'absolute', bottom: 40, right: 40, fontSize: '13px' }}>
        <p>BE 0781.382.510</p>
      </div>
    </div>
  )
}
