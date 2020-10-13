## Userstory

As a space enthousiast, I want to see the latest launch from spaceX, so I can stay up to date with Elon's adventures

## Model / Storage

Dynamic Data
Data: Object

    - date
    - mission name
    - status
    - payload

Where will we get the data: api
Storage: in the state of component

## Processing

- useState
  - keep track of data, that is dynamic and be able to update it
- useEffect
  - Perform a sideEffect -> fetching the data
- axios
- async / await

## Output

- JSX
  - interpolate values
  - map over an array -> interpolate it

## Steps

- [x] Make a Component
- [x] Use the component in App.js
- [x] Define a state (where the data will be stored)
- [x] Make a request to the api
- [x] Update the state (once we have the data) -> setter
- [x] Display the data
