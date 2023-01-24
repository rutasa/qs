import React, { useEffect, useRef } from 'react';
import {
     qdtCapabilityApp, QdtViz,
} from 'qdt-components';

/* const config = {
    host: "localhost",
    secure: false,
    port: 4848,
    prefix: "",
    identity: "1",
    appId: "KK Prastovos TECHNINĖ TARNYBA (2).qvf"
}

const capabilityApiAppPromise = qdtCapabilityApp(config);
*/
function QdtComponent({
    properties, options, identity, appId
}) {
    const elementRef = useRef(null);
    const config = {
        host: "localhost",
        secure: false,
        port: 4848,
        prefix: "",
        identity,
        appId
    }

    const capabilityApiAppPromise = qdtCapabilityApp(config);
    const init = async () => {
        
        let app = await capabilityApiAppPromise;
        QdtViz({
            element: elementRef.current,
            app,
            options,
            properties
        });
    };

    useEffect(() => {
        if (elementRef) init();
    }, [init]);

    return (
        <div ref={elementRef} className="customChart" />
    );
}

export default QdtComponent;