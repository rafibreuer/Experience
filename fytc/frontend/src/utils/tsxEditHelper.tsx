import * as React from 'react';
import { Input } from '../swift-events';
import { Form } from '../swift-events';
import { Button } from '../swift-events';
const capital = (s: string) => {
    return s.replace(/([A-Z])/g, ' $1')
        .replace(/^./, function (str) {
            return str.toUpperCase();
        })
}

function div(obj: any, p: string) {
    return <div className="row well text-center toggle" id={p} onClick={obj.onClick} key={p}>&#x270E; {capital(p)} : {obj.state.readState[p]}</div>
}
function input(obj: any, p: string) {
    return <div className="row well text-center" key={p}><span className="toggle" id={p} onClick={obj.onClick}>&#x2710; {capital(p)}</span>
        <Input onChange={obj.onChange} name={p} type="text" value={obj.state.readState[p]} required errorMessage={capital(p) + ' is required'} />
    </div>
}
export {
    input,
    div
}
