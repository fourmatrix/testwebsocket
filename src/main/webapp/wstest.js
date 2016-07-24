var stompClient = null;
        var subscribeClient1 = null;

        function setConnected(connected) {
            document.getElementById('connect').disabled = connected;
            document.getElementById('disconnect').disabled = !connected;
            document.getElementById('conversationDiv').style.visibility = connected ? 'visible' : 'hidden';
            document.getElementById('response').innerHTML = '';
        }

        function connect() {
            var socket = new SockJS('/hello');
            stompClient = Stomp.over(socket);
            stompClient.connect({}, function(frame) {
                setConnected(true);
                console.log('Connected: ' + frame);
                stompClient.subscribe('/topic/greetings', function(greeting){
                    showGreeting(JSON.parse(greeting.body).content);
                });
            });
        }

        function disconnect() {
            if (stompClient != null) {
                stompClient.disconnect();
            }
            setConnected(false);
            console.log("Disconnected");
        }

        function sendName() {
            var name = document.getElementById('name').value;
            stompClient.send("/app/hello", {}, JSON.stringify({ 'name': name }));
            //stompClient.send("/topic/greetings", {}, JSON.stringify({ 'name': "topic-" + name }));
        }

        function showGreeting(message) {
            var response = document.getElementById('response');
            var p = document.createElement('p');
            p.style.wordWrap = 'break-word';
            p.appendChild(document.createTextNode(message));
            response.appendChild(p);
        }


        //--------------- trail ---------------

        function subscribe() {
            
            subscribeClient1 = stompClient.subscribe("/topic/sap", function(message) {
                console.log(message);
                showGreeting2(message.body);
                //message.ack();
            }, {'selector':"filter='topoview'" });//, {'selector':"filter='topoview'" }
        }

        function unsubscribe() {
            if (subscribeClient1 != null) {
                subscribeClient1.unsubscribe();
            }
            setConnected(false);
            console.log("Unsubscribed");
        }

        function showGreeting2(message) {
            var response = document.getElementById('subscribeMsgs');
            var p = document.createElement('p');
            p.style.wordWrap = 'break-word';
            p.appendChild(document.createTextNode(message));
            response.appendChild(p);
        }

        function sendMsg() {
            var type = document.getElementById('subType').value;
            var msg = document.getElementById('subMsgContent').value;
            var m = {body:msg, type:type};
            
            stompClient.send("/topic/sap", {filter:type}, JSON.stringify(m));
        }

        function conn1() {
            var socket = new SockJS('/hello');
            stompClient = Stomp.over(socket);

            stompClient.connect({}, function(frame) {
                
            });
            stompClient.heartbeat.outgoing = 30000;
            stompClient.heartbeat.incoming = 30000;
        }

        function disconn1() {
            if (stompClient != null) {
                stompClient.disconnect();
            }
        }