# glTF Viewer

A simple, fast glTF model viewer.

![image](https://cloud.githubusercontent.com/assets/1951843/25558026/4e9f3404-2cec-11e7-8210-0d9931f6856a.png)

See it in action at: https://www.virtualgis.io/gltfviewer/

It uses [Cesium](https://www.cesiumjs.org) for rendering. Files are read via HTML5 File API, so it's fast. No files are ever uploaded to a server.

## Installation

```bash
git clone https://github.com/virtualgis/gltfviewer
cd gltfviewer
npm install
npm start
```

Then point a browser to http://localhost/

## Known Limitations

 - Cannot load external assets (for example textures). All resources need to be embedded in the gltf/glb file.