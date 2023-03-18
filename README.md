# Stringable

![GitHub last commit](https://img.shields.io/github/last-commit/rudashi/stringable)
![GitHub repo size](https://img.shields.io/github/repo-size/rudashi/stringable)
![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/rudashi/stringable/node.js.yml)
![Twitter Follow](https://img.shields.io/twitter/follow/BorysZmuda?style=social)

Javascript version's of Laravel's `Illuminate\Support\Str`

Based on great [Laravel](https://laravel.com/docs/master/helpers#fluent-strings-method-list) string helper

## Installation

### NPM

```bash
npm install --save-dev stringable-laravel
```

### Yarn

```bash
yarn add stringable-laravel --save
```

### CDN

```html
<script src='https://unpkg.com/stringable-laravel@latest/dist/index.js'></script>
```

## Usage

Import package:

```js
const {Str, Stringable} = require('stringable-laravel');

//or

import {Str, Stringable} from 'stringable-laravel';
```

Typical usage:

```js
const {Str, Stringable} = require('stringable-laravel');

const message = 'hello world';

console.log(Stringable.of(message).upper().toString());

// HELLO WORLD

console.log(Str.uuid().toString());

// 3b097562-88aa-4f50-b28a-d6bce77c8329
```

## Introduction
Fluent strings provide a more fluent, object-oriented interface for working with string values, allowing you to 
chain multiple string operations together using a more readable syntax compared to traditional string operations.

## Available Methods
List of all fluent methods you can find [here](docs/methods.md#fluent-methods).

## Strings methods
List of all static methods you can find [here](docs/statics.md#strings).

## TO DO
- [plural](docs/methods.md#plural)
- [singular](docs/methods.md#singular)

and for `Str`
- [password](docs/statics.md#password)
- [orderedUuid](docs/statics.md#ordereduuid)

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/rudashi/stringable/releases).