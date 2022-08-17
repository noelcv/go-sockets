package main

import (
	"fmt"
	"log"
	"net/http"
	"github.com/gorilla/mux"
	"github.com/gorilla/websocket"
)


type Message struct {
	Greeting string `json:"greeting"`
}

var (
	wsUpgrader = websocket.Upgrader {
		ReadBufferSize: 1024,
		WriteBufferSize: 1024,
	}
	
	wsConn *websocket.Conn 
	//pointer to the ws connection
)

func WsEndpoint(w http.ResponseWriter, r *http.Request) {
	
	wsUpgrader.CheckOrigin = func(r *http.Request) bool {
   //check the http request and make sure it's okay to access
	return true
	}
	
	wsConn, err := wsUpgrader.Upgrade(w, r, nil)
	if err != nil {
		fmt.Printf("could not upgrade: %s\n", err.Error())
		return
	}
	
	defer wsConn.Close();
	//event loop 
	for {
		var msg Message
		err := wsConn.ReadJSON(&msg) 
		if err != nil {
			fmt.Printf("error reading JSON: %s\n", err.Error())
			return
		}
		fmt.Printf("Message Received: %s\n", msg.Greeting)
		
		
		if err = wsConn.WriteJSON(msg.Greeting); err != nil {
			fmt.Println(err)
			return
		}
		
	}
	
}


func main() {
	
	router := mux.NewRouter();
	
	router.HandleFunc("/socket", WsEndpoint)
	
	log.Fatal(http.ListenAndServe(":8080", router))
}