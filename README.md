# Stringable

![GitHub last commit](https://img.shields.io/github/last-commit/rudashi/stringable)
![GitHub repo size](https://img.shields.io/github/repo-size/rudashi/stringable)
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/rudashi/stringable/Node.js%20CI)
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
- [Str.preg_quote](docs/methods.md#strpreg_quote)
- [Str.random](docs/methods.md#strrandom)
- [Str.createRandomStringsUsing](docs/methods.md#strcreaterandomstringsusing)
- [Str.createRandomStringsUsingSequence](docs/methods.md#strcreaterandomstringsusingsequence)
- [Str.createRandomStringsNormally](docs/methods.md#strcreaterandomstringsnormally)
- [Str.substr](docs/methods.md#strsubstr)
- [Str.uuid](docs/methods.md#struuid)

## TO DO
- [plural](docs/methods.md#plural)
- [singular](docs/methods.md#singular)
- [Str.orderedUuid](docs/methods.md#strordereduuid)
- [Str.ulid](docs/methods.md#strulid)
- [Str.isUlid](docs/methods.md#strisulid)

## Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/rudashi/stringable/releases).