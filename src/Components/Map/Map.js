import React from 'react'
import { MapContainer, TileLayer, useMap } from 'react-leaflet'
import "./Map.css"

export default function Map() {
  return (
    <div className='map'>
<MapContainer center={[31.411930, 73.108047]} zoom={13} scrollWheelZoom={false}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  {/* <Marker position={[51.505, -0.09]}>
    <Popup>
      A pretty CSS3 popup. <br /> Easily customizable.
    </Popup>
  </Marker> */}
</MapContainer>
    </div>
  )
}
