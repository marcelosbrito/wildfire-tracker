// import Iframe from 'react-iframe'
// import LocationMarker from './components/LocationMarker';
import { useState, useEffect } from 'react';
import Map  from './components/Map'
import Loader  from './components/Loader'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
      const {events} = await res.json()

      setEventData(events)
      setLoading(false)
    }

    fetchEvents()
  }, [])

  return (
    <div>
    { !loading ? <Map eventData={eventData} /> : <Loader /> }
      {/* <Iframe url={process.env.REACT_APP_URL}
        styles={{height: "100vh",
        width: "100vw"
      }}
        id=""
        className=""
        display="block"
        position="relative" />
         */}
      
    </div>
  );
}

export default App;
