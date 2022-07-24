import React from 'react'
import AddCharts from './addCharts'
import Charts from './charts';

import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();
const app = () => {
    return (
        <div history={history}>
            <AddCharts/>
            <Charts/>
        </div>
    )
}

export default app