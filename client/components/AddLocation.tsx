import { useMutation, useQueryClient } from '@tanstack/react-query'
import { ChangeEvent, FormEvent, useState } from 'react'
import { addLocation } from '../apis/locations'
import { useNavigate } from 'react-router'

function AddLocation() {
  const queryClient = useQueryClient()
  const navigate = useNavigate()

  const [newForm, setNewForm] = useState({
    name: '',
    lat: '',
    lng: '',
  })

  const addMutation = useMutation({
    mutationFn: addLocation,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['locations'] })
    },
  })

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setNewForm({
      ...newForm,
      [name]: value,
    })
  }

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    addMutation.mutate({
      name: newForm.name,
      lat: newForm.lat,
      lng: newForm.lng,
    })
    navigate('/locations')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Add new location:</label>

        <input
          id="newLocationName"
          type="text"
          name="name"
          placeholder="Location Name"
          onChange={handleChange}
          value={newForm.name}
        ></input>

        <label>Add coordinates:</label>

        <input
          id="newLacationLat"
          type="text"
          name="lat"
          placeholder="Location Lat"
          onChange={handleChange}
          value={newForm.lat}
        ></input>

        <input
          id="newLacationLng"
          type="text"
          name="lng"
          placeholder="Location Lng"
          onChange={handleChange}
          value={newForm.lng}
        ></input>

        <button>Add to the list</button>
      </form>
    </>
  )
}

export default AddLocation
