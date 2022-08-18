# GitHub Slugger

Fork of github-slugger written in TS

[![NPM](https://img.shields.io/npm/v/@caldwell619/github-slugger.svg)](https://www.npmjs.com/package/@caldwell619/github-slugger) [![NPM](https://img.shields.io/bundlephobia/min/@caldwell619/github-slugger)](https://www.npmjs.com/package/@caldwell619/github-slugger) [![](https://img.shields.io/github/last-commit/christopher-caldwell/github-slugger)]() [![](https://img.shields.io/npm/types/typescript)]()

## Demo

[GH Pages](https://christopher-caldwell.github.io/github-slugger/)

## Getting Started

```shell
yarn add @caldwell619/github-slugger
```

## Quick Example

```ts
import { slugger } from '@caldwell619/github-slugger'

const slug = slugger('My Cool Post: 2000-08-02')
// my-cool-post-2000-08-02
```

## Maintaining Casing

By default, all characters will be lower cased. If you wish to maintain the casing, pass the second argument as true:

```ts
import { slugger } from '@caldwell619/github-slugger'

const slug = slugger('My Cool Post: 2000-08-02', true)
// 'My-Cool-Post-2000-08-02'
```
