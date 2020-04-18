# Gruppe 2 startcode - Frontend

## How to setup the project

The project assumes that you have a backend setup with auth, test users aswell as the joke and scrape endpoints.
Startcode for the backend can be found [here](https://github.com/Paepke-cph/TeamGoldStartCode-Backend)

- Clone this repo
- npm install
- Change backend URL in settings.js - remember '/api'
- You're golden...
- Deploy to surge with 'npm run build' and 'surge --project ./build --domain A_DOMAIN_NAME.surge.sh'

## Worth noting in the project.

The project is setup with 2 contexts wrapping the entire app - one for auth and one for advanced state management.

#### The auth-context (useAuth.jsx)

This context handles everything auth related thoughout the app. useAuth serves as a context aswell as a hook, and provides th auth state to every component in the app, aswell as functions to change this state. Every component therefore also subscribes to the auth-state and will rerender should the auth state change.

This approach eliminates that auth-state is passed around with prop-drilling and lifting state.

The auth context exports a user object containing the auth state related to the user;

- name
- roles
- authenticateRole (function for authorizing the user)
- jwtToken
- isLoggedIn

and functions to change this state;

- `signIn()`
- `signOut()`
- `isLoading`

#### The advanced state context (StateContext.jsx)

Alex

#### Utilities

_Components_

- **ProtectedRoute.jsx** - This component takes a role as a prop and a `<Route />` as child, and ensures that the user is authorized to view the `<Route />`.
- **Modal.jsx** - ALEX
- **ToggleComponent.jsx** - This component takes a toggler and a component as props, and toggles visibility of the content using the toggler. This component is used to toggle modals in the app, taking a `<Button />` as the toggler.

_Functions_

- **apiUtils.js** - Contains vanilla js functions to interact with backend api; makeoptions, fetch etc. Mainly used where `useFetch.jsx` wasnt possible.
- **jwtParser** - Cointains a parser that can extract username, and roles from the jwtToken.
