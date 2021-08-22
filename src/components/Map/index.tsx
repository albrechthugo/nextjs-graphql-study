import { MapContainer, Marker, TileLayer } from 'react-leaflet'

type Location = {
  latitude: number
  longitude: number
}

type Place = {
  id: string
  name: string
  slug: string
  location: Location
}

export type MapProps = {
  places?: Place[]
}

const Map = ({ places }: MapProps) => (
  <MapContainer
    center={[0, 0]}
    zoom={3}
    scrollWheelZoom={true}
    style={{ height: '100%', width: '100%' }}
  >
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />

    {places?.map(({ id, name, location }) => {
      const { latitude, longitude } = location

      return (
        <Marker
          key={`place-${id}`}
          position={[latitude, longitude]}
          title={name}
        />
      )
    })}
  </MapContainer>
)

export default Map
