import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationArrow, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import Styles from './Map.module.scss';

const cx = classNames.bind(Styles);

const redMarkerIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize: [25, 41],
    iconAnchor: [12, 41],
});

function useCurrentLocation() {
    const [location, setLocation] = useState(null);

    const getCurrentLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                (error) => {
                    console.error('Lỗi lấy vị trí:', error);
                },
            );
        } else {
            alert('Trình duyệt không hỗ trợ Geolocation.');
        }
    };

    return { location, getCurrentLocation };
}

function MapUpdater({ location }) {
    const map = useMapEvents({});

    useEffect(() => {
        if (location) {
            // Set the center of the map but don't zoom automatically
            map.setView([location.lat, location.lng], map.getZoom(), { animate: false });
        }
    }, [location, map]);

    return null;
}

function ZoomControls({ getCurrentLocation }) {
    const map = useMapEvents({});

    return (
        <div className={cx('button_plus')}>
            <button className={cx('minus')} onClick={() => map.zoomIn()}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
            <button onClick={() => map.zoomOut()} className={cx('minus')}>
                <FontAwesomeIcon icon={faMinus} />
            </button>
            <button onClick={getCurrentLocation} className={cx('minus')}>
                <FontAwesomeIcon icon={faLocationArrow} />
            </button>
        </div>
    );
}

function ClickMarker({ setSelectedLocation }) {
    useMapEvents({
        click(e) {
            const { lat, lng } = e.latlng;
            setSelectedLocation({ lat, lng, address: 'Đang tải địa chỉ...' });

            fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
                .then((res) => res.json())
                .then((data) => {
                    setSelectedLocation({
                        lat,
                        lng,
                        address: data.display_name || 'Không tìm thấy địa chỉ',
                    });
                })
                .catch(() => {
                    setSelectedLocation({ lat, lng, address: 'Lỗi khi lấy địa chỉ' });
                });
        },
    });
    return null;
}

function MapComponent({ todo }) {
    const { location, getCurrentLocation } = useCurrentLocation();
    const [selectedLocation, setSelectedLocation] = useState(null);
    const defaultCenter =
        todo.x && todo.y ? [todo.x, todo.y] : location ? [location.lat, location.lng] : [20.2689, 105.8633];

    useEffect(() => {
        if (!todo.x || !todo.y) {
            getCurrentLocation();
        }
    }, [todo.x, todo.y, getCurrentLocation]);

    return (
        <div style={{ position: 'relative', zIndex: 20 }}>
            <MapContainer
                center={defaultCenter}
                zoom={13}
                style={{ height: todo.height, width: '100%', borderRadius: '20px' }}
                zoomControl={false}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {location && <MapUpdater location={location} />}
                <ClickMarker setSelectedLocation={setSelectedLocation} />

                {location && (
                    <Marker position={[location.lat, location.lng]} icon={redMarkerIcon}>
                        <Popup>Vị trí hiện tại của bạn</Popup>
                    </Marker>
                )}

                {selectedLocation && (
                    <Marker position={[selectedLocation.lat, selectedLocation.lng]} icon={redMarkerIcon}>
                        <Popup>
                            <strong>Tọa độ:</strong> {selectedLocation.lat}, {selectedLocation.lng}
                            <br />
                            <strong>Địa chỉ:</strong> {selectedLocation.address}
                        </Popup>
                    </Marker>
                )}

                {todo.x && todo.y ? (
                    <Marker position={[todo.x, todo.y]} icon={redMarkerIcon}>
                        <Popup>{todo.title || 'Vị trí truyền vào'}</Popup>
                    </Marker>
                ) : (
                    location && (
                        <Marker position={[location.lat, location.lng]} icon={redMarkerIcon}>
                            <Popup>Vị trí hiện tại</Popup>
                        </Marker>
                    )
                )}

                <ZoomControls getCurrentLocation={getCurrentLocation} />
            </MapContainer>
        </div>
    );
}

export default MapComponent;
