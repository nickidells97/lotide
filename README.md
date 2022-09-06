# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @nickidells/lotide`

**Require it:**

`const _ = require('@nickidells/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head`: Returns only the first value of an array.
* `tail`: Returns every value of an array except the first.
* `middle`: Returns the middle value of an array.
* `eqArrays`: Checks to see if the arrays are equal or not.
* `assertEqual`: Returns true or false of wether the actual value is equal to the expected value.
* `assertArraysEqual`: Similar functionality to that of assertEqual, however this assertion is used to compare arrays, as assertEqual will not work. 