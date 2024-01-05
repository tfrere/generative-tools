# Generative Tools Library

## Introduction
Generative Tools is a JavaScript library designed for creating generative art. It offers a suite of functions to facilitate the creation of complex visual patterns and structures.
It was originaly forked from georgesdocode generative utils.

## To install 

'''
npm i @tfrere/generative-tools
'''


## Features and Examples

### `createCoordsTransformer`
Transforms screen coordinates to SVG coordinates.
'''
Example: 
Use `createCoordsTransformer(svgElement)` to get mouse coordinates relative to an SVG element.
'''

### `createNoiseGrid`
Generates a noise grid using simplex noise.
'''
Example: 
Use `createNoiseGrid(options)` with options like width, height, and resolution to create a noise pattern.
'''

### `randomBias`
Generates a biased random number between a range.
'''
Example: 
`randomBias(min, max, bias, influence)` can be used to skew random numbers towards a bias value.
'''

### `randomBool`
Returns a random boolean value.
'''
Example: 
Use `randomBool()` to get a true or false value randomly.
'''

### `randomChoice`
Selects a random element from an array.
'''
Example: 
`randomChoice(array)` can be used to pick a random item from a list.
'''

### `randomSnap`
Generates a random number and snaps it to a specified increment.
'''
Example: 
`randomSnap(min, max, snapIncrement)` to get a value snapped to a grid.
'''

### `map`
Maps a number from one range to another.
'''
Example: 
Use `map(value, start1, end1, start2, end2)` to re-map a number from one range to another.
'''

### `pointsInPath`
Generates points along an SVG path.
'''
Example: 
`pointsInPath(svgPath, numPoints)` can be used to get a set of evenly distributed points along a path.
'''

### `spline`
Creates a smooth spline curve through a set of points.
'''
Example: 
Use `spline(points, tension, close)` to create a spline through given points.
'''

### `shuffle`
Shuffles an array randomly.
'''
Example: 
`shuffle(array)` can be used to randomize the order of elements in an array.
'''

### `simplex`
Generates simplex noise.
'''
Example: 
Use `simplex(x, y)` to generate 2D simplex noise values.
'''

### `createVoronoiDiagram`
Generates a Voronoi diagram from a set of points.
'''
Example: 
`createVoronoiDiagram(points)` to create a Voronoi diagram for a given set of points.
'''

## Contributing
Contributions are welcome. Please follow the guidelines in the project's repository.

## License
This project is licensed under the MIT License.

