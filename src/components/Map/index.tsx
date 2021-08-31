import { useRouter } from 'next/dist/client/router'
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

const Map = ({ places }: MapProps) => {
  const router = useRouter()

  return (
    <MapContainer
      center={[0, 0]}
      minZoom={3}
      zoom={3}
      scrollWheelZoom={true}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places?.map(({ id, name, location, slug }) => {
        const { latitude, longitude } = location

        return (
          <Marker
            key={`place-${id}`}
            position={[latitude, longitude]}
            title={name}
            eventHandlers={{
              click: () => router.push(`place/${slug}`)
            }}
          />
        )
      })}
    </MapContainer>
  )
}

export default Map
