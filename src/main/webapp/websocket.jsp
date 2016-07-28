<!DOCTYPE html>
<html>
<head>
    <title>Hello WebSocket</title>
    <script src="sockjs-0.3.4.min.js"></script>
    <script src="stomp.js"></script>
    <script src="wstest.js"></script>
</head>
<body onload="disconnect()">
<noscript><h2 style="color: #ff0000">Seems your browser doesn't support Javascript! Websocket relies on Javascript being enabled. Please enable
    Javascript and reload this page!</h2></noscript>
<div>
    <div>
        <button id="connect" onclick="connect();">Connect</button>
        <button id="disconnect" disabled="disabled" onclick="disconnect();">Disconnect</button>
    </div>
    <div id="conversationDiv">
        <label>What is your name?</label><input type="text" id="name" />
        <button id="sendName" onclick="sendName();">Send</button>
        <p id="response"></p>
    </div>

    <div>  
        <header>test subscrible -- websocket.jsp</header> 
        <button id="conn1" onclick="conn1();">connect 1</button>
        <button id="disconn1" onclick="disconn1();">dis connect 1</button>
        <button id="subscribe" onclick="subscribe();">subscribe</button>
        <button id="unsubscribe" onclick="unsubscribe();">unsubscribe</button>
        <div>
            <label>message type:</label><input id="subType" />
            <label>message content:</label><input id="subMsgContent" />

            <button id="sendSubMsg" onclick="sendMsg();">Send</button>
        </div>
        <div id="subscribeMsgs"></div>


    </div>

</div>
</body>
</html>