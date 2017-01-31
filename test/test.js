'use strict';

const assert = require('assert');
const parser = require('../lib/place-parser');

// full place
const place1 = {
  "address_components": [
    {
      "long_name": "38",
      "short_name": "38",
      "types": [
        "street_number"
      ]
    },
    {
      "long_name": "Chauncy Street",
      "short_name": "Chauncy St",
      "types": [
        "route"
      ]
    },
    {
      "long_name": "Downtown",
      "short_name": "Downtown",
      "types": [
        "neighborhood",
        "political"
      ]
    },
    {
      "long_name": "Boston",
      "short_name": "Boston",
      "types": [
        "locality",
        "political"
      ]
    },
    {
      "long_name": "Suffolk County",
      "short_name": "Suffolk County",
      "types": [
        "administrative_area_level_2",
        "political"
      ]
    },
    {
      "long_name": "Massachusetts",
      "short_name": "MA",
      "types": [
        "administrative_area_level_1",
        "political"
      ]
    },
    {
      "long_name": "United States",
      "short_name": "US",
      "types": [
        "country",
        "political"
      ]
    },
    {
      "long_name": "02111",
      "short_name": "02111",
      "types": [
        "postal_code"
      ]
    }
  ]
};

// missing county information
const place2 = {
  "address_components": [
    {
      "long_name": "38",
      "short_name": "38",
      "types": [
        "street_number"
      ]
    },
    {
      "long_name": "Chauncy Street",
      "short_name": "Chauncy St",
      "types": [
        "route"
      ]
    },
    {
      "long_name": "Downtown",
      "short_name": "Downtown",
      "types": [
        "neighborhood",
        "political"
      ]
    },
    {
      "long_name": "Boston",
      "short_name": "Boston",
      "types": [
        "locality",
        "political"
      ]
    },
    {
      "long_name": "Massachusetts",
      "short_name": "MA",
      "types": [
        "administrative_area_level_1",
        "political"
      ]
    },
    {
      "long_name": "United States",
      "short_name": "US",
      "types": [
        "country",
        "political"
      ]
    },
    {
      "long_name": "02111",
      "short_name": "02111",
      "types": [
        "postal_code"
      ]
    }
  ]
};

describe( 'place-parser', () => {

  it( 'should be a function', () => {
    assert.equal( typeof parser, 'function' );
  });

  let expectations = [
    [ 'street_number', '38' ],
    [ 'street_name', 'Chauncy Street' ],
    [ 'address', '38 Chauncy Street' ],
    [ 'city', 'Boston' ],
    [ 'county', 'Suffolk County' ],
    [ 'state_short', 'MA' ],
    [ 'state_long', 'Massachusetts' ],
    [ 'country_short', 'US' ],
    [ 'country_long', 'United States' ],
    [ 'zip_code', '02111' ]
  ];

  expectations.forEach( ( [ name, value ] ) => {
    it( `should set ${ name }`, () => {
      let result = parser( place1 );
      assert.equal( result[ name ], value );
    });
  });

  it( 'should not complain about missing values', () => {
    let result = parser( place2 );
    assert.equal( result.county_short, null, 'county_short not null' );
    assert.equal( result.county_long, null, 'county_long not null' );
  });

});
