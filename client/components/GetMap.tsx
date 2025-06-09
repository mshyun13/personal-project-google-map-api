import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

function GetMap() {
  return (
  <APIProvider apiKey={''} onLoad={() => console.log('Maps API has loaded.')} >
    <Map defaultZoom={13}
      style={{width: '100vw', height: '100vh'}}
      defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
      onCameraChanged={ (ev: MapCameraChangedEvent) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
    </Map>
  </APIProvider>
  )
}

export default GetMap