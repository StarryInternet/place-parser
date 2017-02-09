# place-parser

[![Build Status](https://travis-ci.org/StarryInternet/place-parser.svg?branch=master)](https://travis-ci.org/StarryInternet/place-parser)

Break Google Places up into US address components


---

### Installing

```
npm install --save place-parser
```

---

### Example

```js
'use strict';

const parser = require('place-parser');

const result = parser( someGooglePlaceObject );

console.log( result );

// {
//   street_number: '38',
//   street_name: 'Chauncy Street',
//   city: 'Boston',
//   county: 'Suffolk County',
//   state_short: 'MA',
//   state_long: 'Massachusetts',
//   country_short: 'US',
//   country_long: 'United States',
//   zip_code: '02111',
//   address: '38 Chauncy Street'
// }
```
