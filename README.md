# react-texting-squirrel
React component to use texts on the website using [Texting Squirrel](https://www.npmjs.com/package/texting-squirrel) as dictionary.

## Installation
```bash
$ npm install react-texting-squirrel --save
```

## Usage
```javascript
import React, { Component } from 'react';
import Text from 'react-texting-squirrel';

Text.addDictionary({ text: 'Text' });

export default class SomeComponent extends Component {

    render() {
        return <Text id='test-id' className='test-class' dictionaryKey='text' />
    }
}

// The HTML rendered will be <span id="test-id" class="text-class">Text</span>
```