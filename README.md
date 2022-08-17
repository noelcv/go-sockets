# Go-WebSockets-React-Vite

Quick exercise to test bidirectional communication between a Go Backend and a React Frontend bootstrapped using Websockets.


## GO Backend

The routing is being handled with Gorilla/Mux and the Websockets with Gorilla/Websockets

### Steps to reproduce

1. Within your go-workspace, initiate a mod

`git mod init github.com/<yourusername>/<yourrepo>`

2. Make sure to get both packages for Routing and WebSockets

`go get github.com/gorilla/mux`

`go get github.com/gorilla/websocket`

3. Start your server

`go run main.go`

## React Frontend

The Frontend was bootstrapped with [Vite](vitejs.dev) using the TypeScript template

`npm create vite@latest gosocket-frontend -- --template react-ts`

`cd gosocket-frontend`

`npm i`

`npm run dev`

## Send a message
1. In the input form, write a message and click submit;
2. In your terminal, observe that the backend received the message.
3. Observe that each message that you send is rendered bellow in real-time from the server-side.