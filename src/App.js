// import Iframe from 'react-iframe'
// import LocationMarker from './components/LocationMarker';
import Map  from './components/Map'

function App() {
  return (
    <div>
      <Map />
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
