import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router'
import { getSingleLocations } from '../apis/locations'
import { FormEvent, useState } from 'react'
import request from 'superagent'

function EditLocation() {
  const { id } = useParams()
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const {
    data: location,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['location', id],
    queryFn: () => getSingleLocations(id),
  })

  const [locationForm, setLocationForm] = useState({
    name: '',
    lat: '',
    lng: '',
  })

  if (location && locationForm.name == '') {
    setLocationForm({
      name: location.name,
      lat: location.lat,
      lng: location.lng,
    })
  }

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target
    setLocationForm({ ...locationForm, [name]: value })
  }

  const editMutation = useMutation({
    mutationFn: async () => {
      return await request.patch(`/api/v1/locations/${id}`).send(locationForm)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['locations'] })
      navigate('/locations')
    },
  })

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    editMutation.mutate()
  }

  const handleReturn = () => {
    navigate('/locations')
  }

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Unexpected Error</p>

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h4>Edit Location for {location.name}</h4>
        <label>
          Name:{' '}
          <input
            name="name"
            type="text"
            value={locationForm.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Lat:{' '}
          <input
            name="lat"
            type="text"
            value={locationForm.lat}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Lng:{' '}
          <input
            name="lng"
            type="text"
            value={locationForm.lng}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Update Review</button>
      </form>
      <button onClick={handleReturn}>Cancel Edit</button>
    </>
  )
}

export default EditLocation
