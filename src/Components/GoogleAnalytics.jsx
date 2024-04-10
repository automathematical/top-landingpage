import ReactGA from 'react-ga4'
import { useEffect } from 'react'
const TRACKING_ID = 'G-WR3E9BJWNP' // your Measurement ID

function GoogleAnalytics() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID)
    // Send pageview with a custom path
    ReactGA.send({ hitType: 'pageview', page: '/landingpage', title: 'Landing Page' })
  }, [])

  return (
    <div className=''>
      <></>
    </div>
  )
}
export default GoogleAnalytics
