import React from 'react';
import { render } from 'react-dom';
import { Meteor } from 'meteor/meteor';

import {renderRouter} from './app/router.jsx';

Meteor.startup(() => {
    render(renderRouter() , document.getElementById('container'));
})