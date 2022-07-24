import React from 'react'
import AddCharts from './addCharts'

import {createBrowserHistory} from 'history';
export const history = createBrowserHistory();
const app = () => {
    return (
        <div history={history}>
            <AddCharts/>
        </div>
    )
}

export default app