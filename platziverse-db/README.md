# platziverse-db

## Usage

``` js
const setupDatabase = require('platziverse-db')

setupDatabase(conifg).then(db => {
  const{ Agent, Metric } = db
}).catch(err => console.error(err))

```
