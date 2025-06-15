import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Pin,
} from '@vis.gl/react-google-maps'
import { useParams } from 'react-router'
// import 'dotenv/config'

function GetMap() {
  // const googleApiKey = String(process.env.GOOGLE_MAP_API_KEY)
  const { id, lat, lng } = useParams()
  const selectedLocation = { lat: Number(lat), lng: Number(lng) }

  const PoiMakers = () => {
    return (
      <>
        <AdvancedMarker key={id} position={selectedLocation}>
          <Pin
            background={'#FBBC04'}
            glyphColor={'#000'}
            borderColor={'#000'}
          />
        </AdvancedMarker>
      </>
    )
  }

  return (
    <APIProvider apiKey={''} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={13}
        style={{ width: '80vw', height: '80vh' }}
        defaultCenter={{ lat: Number(lat), lng: Number(lng) }}
        mapId="abcde11d8f090f26c60b3a86"
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            'camera changed:',
            ev.detail.center,
            'zoom:',
            ev.detail.zoom,
          )
        }
      >
        <PoiMakers />
      </Map>
    </APIProvider>
  )
}

export default GetMap
