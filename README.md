Simple Web UI Status for PM2 Instances.
![pm2dashboard](https://github.com/south11235/pm2dashboard/raw/master/pres/dashboard-screen1.png)
# Installation
````bash
$ git clone https://github.com/pptik/pm2-dashboard.git
$ cd pm2-dashboard
$ npm install
$ pm2 start App.js
````
Point your browser towards
````bash
http://localhost:4040
````


# Adding a Host

* On remote machine start `pm2` web server: `pm2 web`

* Enter a fully qualified domain name along with URL scheme with the PM2 port (default port is 9615)

![pm2dashboard](https://github.com/south11235/pm2dashboard/raw/master/pres/dashboard-screen2.png)
