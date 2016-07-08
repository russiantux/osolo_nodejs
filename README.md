## Osolo

[![](https://img.shields.io/badge/version-v.0.0.2-ff69b4.svg?style=flat-square)](https://github.com/russiantux/osolo_nodejs/releases/tag/v.0.0.2)
[![](https://img.shields.io/badge/documentation-yes-blue.svg?style=flat-square)](https://github.com/russiantux/osolo_nodejs/blob/master/README.md)


a tool to remotely start a minecraft servers. build with node.js and socket.io.

# Roadmap
https://trello.com/b/srkQIgsE/osolo-development
## Dependencies
```
node.js
socket.io
```

## How to use Osolo
Using Osolo is very simple. Simply put Osolo to your minecraft server folder (where ever you put the server files), open command promt, cd into the server folder, and type `node osolo.js`. You then can go to `http://localhost:8080` and access the web page to use Osolo. If you want to use this over the internet, make sure you port-forward `8080`, and connect using `http://{your-IP-here}:8080`.

## Installation
Installation is very simply (that is if you have socket.io, if you need socket-io, run `npm install socket.io` , just drag and drop all the files in the zip into the folder where your minecraft server files are. Make sure you have a `run.bat` inside the folder, otherwise Osolo will not be able to run the server (will fix it in the future)


## License

    
    Copyright (C) <2016>  <russiantux>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU Affero General Public License as published
    by the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Affero General Public License for more details.

    You should have received a copy of the GNU Affero General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

## Special thanks to:
My friend [Andrey](https://github.com/andreybutenko) for suggesting I use socket.io and my friend Austin for helping me pick out a name for this program and for also helping me test this with his minecraft server.



