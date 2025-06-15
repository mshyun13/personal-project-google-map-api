import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { deleteLocation, getLocations } from '../apis/locations'
import { Link, useNavigate } from 'react-router'
import { Location } from '../../models/locations'

export default function Body() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    data: locations,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['locations'],
    queryFn: getLocations,
  })

  const deleteMutation = useMutation({
    mutationFn: deleteLocation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['locations'] })
    },
  })

  const handleDelete = async (
    event: React.MouseEvent<HTMLButtonElement>,
    locationId: number,
  ) => {
    event.preventDefault()
    deleteMutation.mutate(locationId)
    navigate(0)
  }

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Unexpected Error</p>

  return (
    <div className="option_container">
      <h2>Location List</h2>
      {locations.map((location: Location) => (
        <>
          <Link
            className="option_text"
            to={`/${location.id}/${location.lat}/${location.lng}`}
            key={location.id}
          >
            <h4>Place Name: {location.name}</h4>
            <p>
              Lat: {location.lat}, Lng: {location.lng}
            </p>
          </Link>
          <button onClick={(event) => handleDelete(event, location.id)}>
            Delete
          </button>
          <Link to={`/edit/${location.id}`}>Edit</Link>
        </>
      ))}
    </div>
  )
}
