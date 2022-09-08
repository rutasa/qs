import React, { useEffect, useRef } from 'react';
import {
    qdtEnigma, qdtCapabilityApp, qdtCompose, QdtViz,
} from 'qdt-components';

const config = {
    host: "localhost",
    secure: false,
    port: 4848,
    prefix: "",
    identity: "7",
    appId: "KK KPI.qvf"
}

const engineApiAppPromise = qdtEnigma(config);
const capabilityApiAppPromise = qdtCapabilityApp(config);

function QdtComponent7({
    component, properties, options, appIndex,
}) {
    const elementRef = useRef(null);
    const init = async () => {
        let app = await engineApiAppPromise;
        if (appIndex === 2) {
            app = await capabilityApiAppPromise;
            QdtViz({
                element: elementRef.current,
                app,
                options,
            });
        } else {
            app = await capabilityApiAppPromise;
            QdtViz({
                element: elementRef.current,
                app,
                options,
                properties
            });
        }
    };

    useEffect(() => {
        if (elementRef) init();
    }, [init]);

    return (
        <div ref={elementRef} className="customChart" />
    );
}

export default QdtComponent7;