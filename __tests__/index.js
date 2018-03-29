import React from 'react';
import renderer from 'react-test-renderer';

import Text from '../src';

Text.addDictionary({ test: 'TEST', var_test: 'TEST {0}', link: 'LINK' });

it('renders correctly with default props', () => {

    const component = renderer.create(<Text dictionaryKey='test' />);
    const { type, props, children } = component.toJSON();

    expect(type).toBe('span');
    expect(children).toBeInstanceOf(Array);
    expect(children).toHaveLength(1);
    expect(children[0]).toBe('TEST');
});

it('renders correctly with one argument', () => {

    const component = renderer.create(<Text dictionaryKey='var_test' args={['TEST']} />);
    const { type, props, children } = component.toJSON();

    expect(type).toBe('span');
    expect(children).toBeInstanceOf(Array);
    expect(children).toHaveLength(1);
    expect(children[0]).toBe('TEST TEST');
});

it('renders correctly with a tag and href property', () => {

    const component = renderer.create(<Text dictionaryKey='link' tag='a' href='https://google.com' />);
    const { type, props, children } = component.toJSON();

    expect(type).toBe('a');
    expect(props).toHaveProperty('href');
    expect(props.href).toBe('https://google.com');
    expect(children).toBeInstanceOf(Array);
    expect(children).toHaveLength(1);
    expect(children[0]).toBe('LINK');
});