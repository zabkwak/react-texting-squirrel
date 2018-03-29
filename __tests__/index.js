import React, { Component } from 'react';
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

it('renders correctly with id and className', () => {

    const component = renderer.create(<Text id='identificator' className='some-class' dictionaryKey='test' />);
    const { type, props, children } = component.toJSON();

    expect(type).toBe('span');
    expect(props).toHaveProperty('id');
    expect(props.id).toBe('identificator');
    expect(props).toHaveProperty('className');
    expect(props.className).toBe('some-class');
    expect(children).toBeInstanceOf(Array);
    expect(children).toHaveLength(1);
    expect(children[0]).toBe('TEST');
});

it('renders correctly using component as a tag', () => {

    class Title extends Component {

        render() {
            return <h1 {...this.props}>{this.props.children}</h1>
        }
    }

    const component = renderer.create(<Text tag={Title} dictionaryKey='test' />);
    const { type, props, children } = component.toJSON();

    expect(type).toBe('h1');
    expect(children).toBeInstanceOf(Array);
    expect(children).toHaveLength(1);
    expect(children[0]).toBe('TEST');
});