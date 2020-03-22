console.log("BOOT UP");

const RELAY3 = D0;
const RELAY2 = D4;
const RELAY1 = D5;
console.log("CONST DONE");

// The last data that was POSTed to us
var postData = {};

/***
 *               _   _ _____ __  __ __ 
 *         /\   | \ | |_   _|  \/  /_ |
 *        /  \  |  \| | | | | \  / || |
 *       / /\ \ | . ` | | | | |\/| || |
 *      / ____ \| |\  |_| |_| |  | || |
 *     /_/    \_\_| \_|_____|_|  |_||_|
 *                                     
 *                                     
 */
var demo1Steps = [
  [1, 0, 0, 1950],
  [0, 0, 0, 50],
  [0, 0, 1, 1950],
  [0, 0, 0, 50]
], currentStep = 0;

/***
 *               _   _ _____ __  __ ___  
 *         /\   | \ | |_   _|  \/  |__ \ 
 *        /  \  |  \| | | | | \  / |  ) |
 *       / /\ \ | . ` | | | | |\/| | / / 
 *      / ____ \| |\  |_| |_| |  | |/ /_ 
 *     /_/    \_\_| \_|_____|_|  |_|____|
 *                                       
 *                                       
 */
var demo2Steps = [
  [0, 1, 0, 4000],

  [1, 0, 1, 500],
  [0, 0, 1, 500],
  [1, 0, 1, 500],
  [0, 0, 1, 500],
  [1, 0, 1, 500],
  [0, 0, 1, 500],
  [1, 0, 1, 500],
  [0, 0, 1, 500],
  [1, 0, 1, 500],
  [0, 0, 1, 500],
  [1, 0, 1, 500],
  [0, 0, 1, 500],
  [1, 0, 1, 500],
  [0, 0, 1, 500],
  [1, 0, 1, 500],
  [0, 0, 1, 500],
  [1, 0, 1, 500],
  
  [0, 0, 0, 500],
  [1, 0, 1, 500],
  [0, 0, 0, 500],
  [1, 0, 1, 500],
  [0, 0, 0, 500],
  [1, 0, 1, 500],
  [0, 0, 0, 500],
  [1, 0, 1, 500],

  [0, 0, 0, 50]
];

/***
 *               _   _ _____ __  __ ____  
 *         /\   | \ | |_   _|  \/  |___ \ 
 *        /  \  |  \| | | | | \  / | __) |
 *       / /\ \ | . ` | | | | |\/| ||__ < 
 *      / ____ \| |\  |_| |_| |  | |___) |
 *     /_/    \_\_| \_|_____|_|  |_|____/ 
 *                                        
 *                                        
 */
var demo3Steps = [
  [0, 0, 0, 100],
  [1, 0, 0, 300],
  [0, 1, 0, 300],
  [0, 0, 1, 300],
  [0, 1, 0, 300],
  [1, 0, 0, 300],

  [1, 0, 0, 200],
  [0, 0, 0, 100],
  [1, 0, 0, 200],

  [1, 1, 0, 200],
  [1, 0, 0, 100],
  [1, 1, 0, 200],

  [1, 1, 1, 200],
  [1, 1, 0, 100],
  [1, 1, 1, 200],

  [0, 1, 1, 200],
  [1, 1, 1, 100],
  [0, 1, 1, 200],

  [0, 0, 1, 200],
  [0, 1, 1, 100],
  [0, 0, 1, 200],

  [0, 0, 0, 200],
  [0, 0, 1, 100],
  [0, 0, 0, 200],



];


var WIFI_IP = { ip: "192.168.0.200", gw: "192.168.0.1", netmask: "255.255.255.0"};
var wifi = require("Wifi"), connectTries = 0;

console.log("VAR DONE");

/***
 *               _   _ _____ __  __ __ 
 *         /\   | \ | |_   _|  \/  /_ |
 *        /  \  |  \| | | | | \  / || |
 *       / /\ \ | . ` | | | | |\/| || |
 *      / ____ \| |\  |_| |_| |  | || |
 *     /_/    \_\_| \_|_____|_|  |_||_|
 *                                     
 *                                     
 */
function demo1Mode() {
  if (postData.demo1) {
    var step = demo1Steps[currentStep];

    digitalWrite(RELAY1, !step[0]);
    digitalWrite(RELAY2, !step[1]);
    digitalWrite(RELAY3, !step[2]);

    currentStep ++;

    if (currentStep >= demo1Steps.length) {
      currentStep = 0;
    }

    setTimeout(demo1Mode, step[3]);
  }
}

/***
 *               _   _ _____ __  __ ___  
 *         /\   | \ | |_   _|  \/  |__ \ 
 *        /  \  |  \| | | | | \  / |  ) |
 *       / /\ \ | . ` | | | | |\/| | / / 
 *      / ____ \| |\  |_| |_| |  | |/ /_ 
 *     /_/    \_\_| \_|_____|_|  |_|____|
 *                                       
 *                                       
 */
function demo2Mode() {
  if (postData.demo2) {
    var step = demo2Steps[currentStep];

    digitalWrite(RELAY1, !step[0]);
    digitalWrite(RELAY2, !step[1]);
    digitalWrite(RELAY3, !step[2]);

    currentStep ++;

    if (currentStep >= demo2Steps.length) {
      currentStep = 0;
    }

    setTimeout(demo2Mode, step[3]);
  }
}

/***
 *               _   _ _____ __  __ ____  
 *         /\   | \ | |_   _|  \/  |___ \ 
 *        /  \  |  \| | | | | \  / | __) |
 *       / /\ \ | . ` | | | | |\/| ||__ < 
 *      / ____ \| |\  |_| |_| |  | |___) |
 *     /_/    \_\_| \_|_____|_|  |_|____/ 
 *                                        
 *                                        
 */
function demo3Mode() {
  if (postData.demo3) {
    var step = demo3Steps[currentStep];

    digitalWrite(RELAY1, !step[0]);
    digitalWrite(RELAY2, !step[1]);
    digitalWrite(RELAY3, !step[2]);

    currentStep ++;

    if (currentStep >= demo3Steps.length) {
      currentStep = 0;
    }

    setTimeout(demo3Mode, step[3]);
  }
}






// This serves up the webpage itself
function sendPage(res) {
  // We're using ES6 Template Literals here to make the HTML easy to read.
  var d = `
<!DOCTYPE HTML>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no">
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
    <meta name="theme-color" content="#484848" />
    <title>The Walking LED</title>
    <!-- Font -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500&display=swap&subset=latin-ext" rel="stylesheet">
    <!-- CSS -->
    <link href="https://adamvari.github.io/adamvari/lampa.css?v=0.01" rel="stylesheet">
    <!-- Favicon -->
    <link rel="shortcut icon" sizes="16x16 32x32" type="image/png" href="https://adamvari.github.io/adamvari/lamp.jpg"/>
  </head>
  <body class="container">
    <div class="inner-wrapper">
      <h3 class="title">The Walking LED</h3>
      <div class="card">
        <form action="#" method="post">
          <div class="boxes">
            <div class="input-wrapper">
              <input type="checkbox" id="led1" class="green" name="led1" value="1" ${postData.led1?"checked":""}>
              <label for="led1">The GREEN Lantern</label>
            </div>
            <div class="input-wrapper">
              <input type="checkbox" id="led2" class="red" name="led2" value="1" ${postData.led2?"checked":""}>
              <label for="led2">The RED Light District</label>
            </div>
            <div class="input-wrapper">
              <input type="checkbox" id="led3" class="walk" name="led3" value="1" ${postData.led3?"checked":""}>
              <label for="led3">WALK The Line</label>
            </div>
            <div class="input-wrapper">
              <input type="checkbox" id="demo1" class="purple" name="demo1" value="1" ${postData.demo1?"checked":""}>
              <label for="demo1">COMBO pt 1</label>
            </div>
            <div class="input-wrapper">
              <input type="checkbox" id="demo2" class="purple" name="demo2" value="1" ${postData.demo2?"checked":""}>
              <label for="demo2">COMBO pt 2</label>
            </div>
            <div class="input-wrapper">
              <input type="checkbox" id="demo3" class="purple" name="demo3" value="1" ${postData.demo3?"checked":""}>
              <label for="demo3">COMBO pt 3</label>
            </div>
            <div class="btn-wrapper">
              <button class="btn">Let it be!</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </body>
</html>`;
  res.writeHead(200, {'Content-Type': 'text/html', 'Content-Length':d.length});
  res.end(d);
}

// This handles the HTTP request itself and serves up the webpage or a
// 404 not found page
function onPageRequest(req, res) {
  var a = url.parse(req.url, true);
  if (a.pathname=="/") {
    // handle the '/' (root) page...
    // If we had a POST, handle the data we're being given
    if (req.method=="POST" &&
        req.headers["Content-Type"]=="application/x-www-form-urlencoded")
      handlePOST(req, function() { sendPage(res); });
    else
      sendPage(res);
  } else {
    // Page not found - return 404
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("404: Page "+a.pathname+" not found");
  }
}

// This handles any received data from the POST request
function handlePOST(req, callback) {
  var data = "";
  req.on('data', function(d) { data += d; });
  req.on('end', function() {
    // All data received from the client, so handle the url encoded data we got
    // If we used 'close' then the HTTP request would have been closed and we
    // would be unable to send the result page.
    postData = {};
    data.split("&").forEach(function(el) {
      var els = el.split("=");
      postData[els[0]] = decodeURIComponent(els[1]);
    });
    // finally our data is in postData
    // console.log(postData);
    // do stuff with it!

    if (!postData.demo1 && !postData.demo2) {
      digitalWrite(RELAY1, !postData.led1);
      digitalWrite(RELAY2, !postData.led2);
      digitalWrite(RELAY3, !postData.led3);
    }
    if (postData.demo1) {
      currentStep = 0;
      demo1Mode();
    }
    if (postData.demo2) {
      currentStep = 0;
      demo2Mode();
    }
    if (postData.demo3) {
      currentStep = 0;
      demo3Mode();
    }

    // call our callback (to send the HTML result)
    callback();
  });
}



/*
 *     __          _______ ______ _____    _____ _______ _    _ ______ ______ 
 *     \ \        / /_   _|  ____|_   _|  / ____|__   __| |  | |  ____|  ____|
 *      \ \  /\  / /  | | | |__    | |   | (___    | |  | |  | | |__  | |__   
 *       \ \/  \/ /   | | |  __|   | |    \___ \   | |  | |  | |  __| |  __|  
 *        \  /\  /   _| |_| |     _| |_   ____) |  | |  | |__| | |    | |     
 *         \/  \/   |_____|_|    |_____| |_____/   |_|   \____/|_|    |_|     
 *                                                                            
 *                                                                            
 */

// This is called when we have an internet connection
function onConnected() {
  console.log("SET WIFI STATIC IP!");
  wifi.setIP(WIFI_IP, function(err) {
    console.log("    CANT SET IP: ");
    console.log(err);
  });
  console.log("    CONNECT to me at http://"+WIFI_IP.ip);
  require("http").createServer(onPageRequest).listen(80);
}

console.log("SET WIFI EVENT HANDLER");
wifi.on('connected', onConnected);
console.log("SET WIFI EVENT HANDLER DONE");


// Feltöltés után manuálisan futtatni
// save(); require('ESP8266').reboot()



/*

These lines added by stenza 2020.03.22 during Covid-19 quarantine




Be van égetve wifi config a nonvolatile flash memory-ba. A neve ".wififcg"
----------------------------------------------------------------------------
Tartalma egy JSON:
{
  ssid: "Fannet",
  password: "Autotransfusio1",
  mode: 1, phyMode: 3, sleepType: 2,
  hostname: "lampa",
  ssidAP: "",
  passwordAP: "",
  authmodeAP: 0, hiddenAP: 0, channelAP: 1 }

Illetve a .boot0 fájlban is el volt mentve:
  require("Storage").write(".boot0", `
    WIFI_NAME = "Fannet";
    WIFI_PASS = "Autotransfusio1";
  `);


Szóval a konfighoz ezt kell kiírni a console-on parancsba csak:
----------------------------------------------------------------------------

require("Storage").write(".wificfg", JSON.stringify({
  ssid: "UPC4487795",
  password: "2ts2unaEPcnu",
  mode: 1, phyMode: 3, sleepType: 2,
  hostname: "lampa",
  ssidAP: "",
  passwordAP: "",
  authmodeAP: 0, hiddenAP: 0, channelAP: 1 }))



Esetleg törölni mindent előbb:
----------------------
require("Storage").erase(".wificfg");
require("Storage").erase(".boot0");



Egyéb infó:
----------------------

KIOLVASÁS:
require("Storage").list();
require("Storage").readJSON(".wificfg");

KIÍRÁS:
require("Storage").write(".wificfg", JSON.stringify({
  ssid: "UPC4487795",
  password: "2ts2unaEPcnu",
  mode: 1, phyMode: 3, sleepType: 2,
  hostname: "lampa",
  ssidAP: "",
  passwordAP: "",
  authmodeAP: 0, hiddenAP: 0, channelAP: 1 }));


More info here:
https://www.espruino.com/Saving

*/

