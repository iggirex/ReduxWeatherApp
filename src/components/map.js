import React, { Component } from 'react';

class  GoogleMap extends Component {

    componentDidMount() {
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: this.props.lat,
                lng: this.props.log
            }
        });
    }
    render() {
        // ref is a direct to an HTML component, done so with this.refs.map
        return <div ref="map" />;
    }
}

export default GoogleMap;