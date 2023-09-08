import Iframe from 'react-iframe'

function App() {
  return (
    <div>
      
      <Iframe url={process.env.REACT_APP_URL}
        styles={{height: "100vh",
        width: "100vw"
      }}
        id=""
        className=""
        display="block"
        position="relative"/>
    </div>
  );
}

export default App;
