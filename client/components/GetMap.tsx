import {
  AdvancedMarker,
  APIProvider,
  Map,
  MapCameraChangedEvent,
  Pin,
} from '@vis.gl/react-google-maps'
import { useParams } from 'react-router'

// type Poi = {
//   key: string
//   location: google.maps.LatLngLiteral
// }

function GetMap() {
  const { id, lat, lng } = useParams()
  const selectedLocation = { lat: Number(lat), lng: Number(lng) }

  // const locations: Poi = [
  //   { key: 'operaHouse', location: { lat: -33.8567844, lng: 151.213108 } },
  //   { key: 'tarongaZoo', location: { lat: -33.8472767, lng: 151.2188164 } },
  //   { key: 'manlyBeach', location: { lat: -33.8209738, lng: 151.2563253 } },
  //   { key: 'hyderPark', location: { lat: -33.8690081, lng: 151.2052393 } },
  //   { key: 'theRocks', location: { lat: -33.8587568, lng: 151.2058246 } },
  //   { key: 'circularQuay', location: { lat: -33.858761, lng: 151.2055688 } },
  //   { key: 'harbourBridge', location: { lat: -33.852228, lng: 151.2038374 } },
  //   { key: 'kingsCross', location: { lat: -33.8737375, lng: 151.222569 } },
  //   { key: 'botanicGardens', location: { lat: -33.864167, lng: 151.216387 } },
  //   { key: 'museumOfSydney', location: { lat: -33.8636005, lng: 151.2092542 } },
  //   { key: 'maritimeMuseum', location: { lat: -33.869395, lng: 151.198648 } },
  //   {
  //     key: 'kingStreetWharf',
  //     location: { lat: -33.8665445, lng: 151.1989808 },
  //   },
  //   { key: 'aquarium', location: { lat: -33.869627, lng: 151.202146 } },
  //   { key: 'darlingHarbour', location: { lat: -33.87488, lng: 151.1987113 } },
  //   { key: 'barangaroo', location: { lat: -33.8605523, lng: 151.1972205 } },
  // ]

  // const PoiMakers = (props: { pois: Poi[] }) => {
  const PoiMakers = () => {
    return (
      <>
        {/* {props.pois.map((poi: Poi) => ( */}
        <AdvancedMarker key={id} position={selectedLocation}>
          <Pin
            background={'#FBBC04'}
            glyphColor={'#000'}
            borderColor={'#000'}
          />
        </AdvancedMarker>
        {/* ))} */}
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
