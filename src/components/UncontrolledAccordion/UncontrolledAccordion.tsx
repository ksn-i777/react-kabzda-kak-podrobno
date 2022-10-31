import React, { useState } from "react";
import {UncontrolledAccordionTitle} from './UncontrolledAccordionTitle';
import {UncontrolledAccordionBody} from './UncontrolledAccordionBody';

type UncontrolledAccordionPropsType = {
    title: string,
}

export function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [deploy, setDeploy] = useState(true)
    
    function changeDeploy () {
        setDeploy(!deploy)
    }

    return (
        <div>
            <UncontrolledAccordionTitle title={props.title} changeDeploy={changeDeploy}/>
            {deploy && <UncontrolledAccordionBody/>}
        </div>
    )
}
