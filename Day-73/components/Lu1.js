import React from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import options from './cities';
import '../styles/typeahead.css'


class Nothing extends React.Component {
    render() {
        return (
            <div>
                <Typeahead options={options}
                    placeholder='Enter city name' />
            </div>
        )
    }
}

export default Nothing;