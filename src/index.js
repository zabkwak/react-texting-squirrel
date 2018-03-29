import React, { Component } from 'react';
import PropTypes from 'prop-types';
import T from 'texting-squirrel';

export default class Text extends Component {

    static propTypes = {
        dictionaryKey: PropTypes.string.isRequired,
        tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        args: PropTypes.arrayOf(PropTypes.any)
    }

    static defaultProps = {
        tag: 'span',
        args: []
    }

    /**
     * Adds the new dictionary.
     * 
     * @param {string|Object.<string, string>} key Key with which is the dictionary accesible to format texts. If it's an object, the key is default.
     * @param {Object.<string, string>} [dictionary] Key-value object for mapping the texts.
     */
    static addDictionary(key, dictionary) {
        T.addDictionary(key, dictionary);
        return this;
    }

    /**
     * Gets the dictionary by the key.
     * 
     * @param {string} key Key of the dictionary.
     * @returns {Dictionary} Dictionary instance or null.
     */
    static getDictionary(key) {
        return T.getDictionary(key);
    }

    /**
     * Sets the actual dictionary.
     * 
     * @param {string} key Key fo the dictionary.
     */
    static setDictionary(key) {
        T.setDictionary(key);
        return this;
    }

    /**
     * Adds the function.
     * 
     * @param {string} name Name of the function.
     * @param {Function} fn Function to execute.
     */
    static addFunction(name, fn) {
        T.addFunction(name, fn);
        return this;
    }

    render() {
        const Tag = this.props.tag;
        const { args, dictionaryKey } = this.props;
        const props = {};
        for (let k in this.props) {
            if (['tag', 'args', 'dictionaryKey'].indexOf(k) >= 0) {
                continue;
            }
            props[k] = this.props[k];
        }
        const value = T.get.apply(T, [dictionaryKey, ...args]);
        return <Tag {...props}>{value}</Tag>;
    }
}