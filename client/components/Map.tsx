import {
  APIProvider,
  Map,
  MapCameraChangedEvent,
} from '@vis.gl/react-google-maps'

function ExampleMap() {
  async function nearbySearch() {
    const { Place, SearchNearbyRankPreference } =
      (await google.maps.importLibrary('places')) as google.maps.PlacesLibrary
    const { AdvancedMarkerElement } = (await google.maps.importLibrary(
      'marker',
    )) as google.maps.MarkerLibrary

    const center = new google.maps.LatLng(52.369358, 4.889258)

    const request = {
      // required parameters
      fields: ['displayName', 'location', 'businessStatus'],
      locationRestriction: {
        center: center,
        radius: 500,
      },
      // optional parameters
      includedPrimaryTypes: ['restaurant'],
      maxResultCount: 5,
      rankPreference: SearchNearbyRankPreference.POPULARITY,
      language: 'en-US',
      region: 'us',
    }

    const { places } = await Place.searchNearby(request)

    if (places.length) {
      console.log(places)

      const { LatLngBounds } = (await google.maps.importLibrary(
        'core',
      )) as google.maps.CoreLibrary
      const bounds = new LatLngBounds()

      // Loop through and get all the results.
      places.forEach((place) => {
        const markerView = new AdvancedMarkerElement({
          map,
          position: place.location,
          title: place.displayName,
        })

        bounds.extend(place.location as google.maps.LatLng)
        console.log(place)
      })

      map.fitBounds(bounds)
    } else {
      console.log('No results')
    }
  }

  return (
    <APIProvider apiKey={''} onLoad={() => console.log('Maps API has loaded.')}>
      <Map
        defaultZoom={13}
        style={{ width: '100vw', height: '100vh' }}
        defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
        onCameraChanged={(ev: MapCameraChangedEvent) =>
          console.log(
            'camera changed:',
            ev.detail.center,
            'zoom:',
            ev.detail.zoom,
          )
        }
      >
        {nearbySearch()}
      </Map>
    </APIProvider>
  )
}

export default ExampleMap
