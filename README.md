# infographic
Project for the course T-408-IAGH, Inngangur að grafískri hönnun, 2015-1 Reykjavik University.

## How to start

Clone the repository
```
git clone https://github.com/sse87/infographic.git
```

Change directory to the repository and again to project folder *where all the magic happens*
```
cd infographic
cd html5-boilerplate
```

Install all dependencies with [npm](https://www.npmjs.com/) (npm comes with an installation of [Node.js](https://nodejs.org/))
```
npm install
```

Start simple http server with python so it is as real as if it is on the web
```
C:\Python27\python.exe -m SimpleHTTPServer
```

Now you can browse the address [http://localhost:8000/](http://localhost:8000/) to view the project ([chrome](http://www.google.com/chrome/) is recommended)



---



## Develop with grunt

The only grunt tasks is `jshint` and `watch` and the `watch` task only watches the JavaScript files.

To run execute grunt command:
```
grunt
```
