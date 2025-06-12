import { useQuery } from '@tanstack/react-query'
import { getLocations } from '../apis/locations'
import { Link } from 'react-router'

export default function Body() {
  const {
    data: locations,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  })

  console.log(locations)

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Unexpected Error</p>

  return (
    <>
      <h2>Body</h2>
      {locations.map((location) => (
        <Link
          to={`/${location.id}/${location.lat}/${location.lng}`}
          key={location.id}
        >
          <h4>Place Name: {location.name}</h4>
          <p>
            Lat: {location.lat}, Lng: {location.lng}
          </p>
        </Link>
      ))}
    </>
  )
}
