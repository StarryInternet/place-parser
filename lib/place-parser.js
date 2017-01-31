'use strict';

class Place {

  constructor( components ) {
    Object.assign( this, { components } );
  }

  get( type, short = false ) {
    for ( let component of this.components ) {
      if ( component.types.includes( type ) ) {
        return short ? component.short_name : component.long_name;
      }
    }
    return null;
  }

}

module.exports = function( { address_components = [] } = {} ) {
  const place = new Place( address_components );

  const result = {
    street_number: place.get('street_number'),
    street_name:   place.get('route'),
    city:          place.get('locality'),
    county:        place.get('administrative_area_level_2'),
    state_short:   place.get( 'administrative_area_level_1', true ),
    state_long:    place.get('administrative_area_level_1'),
    country_short: place.get( 'country', true ),
    country_long:  place.get('country'),
    zip_code:      place.get('postal_code')
  };

  result.address = result.street_number + ' ' + result.street_name;

  return result;
};
