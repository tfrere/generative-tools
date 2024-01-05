# Generative Tools Library

This is a fork of GeorgesDocode's Generative Tools, tailored for specific generative art projects.

## Installation
```sh
npm install @tfrere/generative-tools
```

## Usage
Import the modules from the library as needed in your projects.


## Documentation

### `createCoordsTransformer`
Transforms screen coordinates to SVG coordinates.
[Source](./src/createCoordsTransformer.js)
```js
createCoordsTransformer(svgElement);
```

### `createNoiseGrid`
Generates a noise grid using simplex noise.
[Source](./src/createNoiseGrid.js)
```js
createNoiseGrid(options);
```

### `randomBias`
Generates a biased random number between a range.
[Source](./src/randomBias.js)
```js
randomBias(min, max, bias, influence);
```

### `randomBool`
Returns a random boolean value.
[Source](./src/randomBool.js)
```js
randomBool();
```

### `randomChoice`
Selects a random element from an array.
[Source](./src/randomChoice.js)
```js
randomChoice(array);
```

### `randomSnap`
Generates a random number and snaps it to a specified increment.
[Source](./src/randomSnap.js)
```js
randomSnap(min, max, snapIncrement);
```

### `map`
Maps a number from one range to another.
[Source](./src/map.js)
```js
map(value, start1, end1, start2, end2);
```

### `pointsInPath`
Generates points along an SVG path.
[Source](./src/pointsInPath.js)
```js
pointsInPath(svgPath, numPoints);
```

### `spline`
Creates a smooth spline curve through a set of points.
[Source](./src/spline.js)
```js
spline(points, tension, close);
```

### `shuffle`
Shuffles an array randomly.
[Source](./src/shuffle.js)
```js
shuffle(array);
```

### `simplex`
Generates simplex noise.
[Source](./src/simplex.js)
```js
simplex(x, y);
```

### `createVoronoiDiagram`
Generates a Voronoi diagram from a set of points.
[Source](./src/createVoronoiDiagram.js)
```js
createVoronoiDiagram(points);
```

## Contributing
Contributions are welcomed. Please adhere to the guidelines.

## License
Licensed under the MIT License.
