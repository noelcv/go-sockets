package main

import (
	"log"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)


type Message struct {
	Greeting string `json:"greeting"`
}

var (
	wsUpgrader = websocket.wsUpgrader {
		ReadBufferSize: 1024,
		WriteBufferSize: 1024
	}
	
	wsConn *websocket.Conn //pointer to the ws connection
)


func main() {
	
	router := mux.NewRouter();
	
	log.Fatal(http.ListenAndServe(":9100", router))
}