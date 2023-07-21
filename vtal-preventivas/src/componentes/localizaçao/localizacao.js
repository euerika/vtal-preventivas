import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; // Importe o CSS do Leaflet
import '../../pages/servicos/servico.css'

const Mapa = () => {
  const posicaoAtual = [-23.6141008, -46.7403598]; // Substitua latitude e longitude pelas coordenadas reais

  return (
    <MapContainer  className="map-container" center={posicaoAtual} zoom={13} >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // URL do tile layer do OpenStreetMap
      />
      <Marker position={posicaoAtual}>
        <Popup>
          Sua localização
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Mapa;
