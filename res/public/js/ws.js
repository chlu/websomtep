jQuery(function($) {
  function initStream() {
    var ws;
    var mail = document.getElementById("mail");
    var status = document.getElementById("status");
    var numClients = 0;
    var numSenders = 0;
    function onOpen() {
       status.innerText = "<div class=\"alert alert-success\"><h4>connected</h4></div>";
    };
    function onClose() {
       status.innerHTML = "<div class=\"alert\"><h4>connection closed</h4></div>";
    };
    function updateStatus() {
       status.innerHTML = "<div class=\"alert alert-success\"><h4>connected</h4> (" + numClients + " browsers, " + numSenders + " SMTP clients)</div>";
       return;
    }
    function onMessage(e) {
       var m = JSON.parse(e.data);
       if (m.NumClients != null) {
           numClients = m.NumClients;
           updateStatus();
           return;
       }
       if (m.NumSenders != null) {
           numSenders = m.NumSenders;
           updateStatus();
           return;
       }
       var md = document.createElement("div");
       md.innerHTML = "<table class=\"table\">" +
        "<tr class=\"from\"><th>From:</th><td>" + m.From + "</td></tr>" +
        "<tr class=\"to\"><th>To:</th><td>"+m.To+"</td></tr>" +
        "<tr class=\"subject\"><th>Subject:</th><td>" + m.Subject + "</td></tr>" +
        "<tr class=\"body\"><th>Body:</th><td>" + m.Body + "</td></tr>" + "</table>";
       mail.insertBefore(md, mail.firstChild);
    };
    function connect() {
      if (ws != null) {
         ws.close();
         ws = null;
      }
      status.innerText = "connecting...";
      var url = $('meta[name="x-stream-url"]').attr('content');
      ws = new WebSocket(url);
      ws.onopen = onOpen;
      ws.onclose = onClose;
      ws.onmessage = onMessage;
    }
    connect();
  }

  initStream();
});
