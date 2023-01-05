import React, { Component, useEffect, useState } from 'react';

export default function AsyncComponent(props) {
    const [component, setComponent] = useState(null)

    useEffect(() => {
        let cleanedUp = false
        import('./pages' + props.path)
            .then(module => {
                if (cleanedUp) {
                    return
                }
                setComponent(() => module.default)
            })
            .catch(e => {
                if (cleanedUp) {
                    return
                }
                setComponent(null)
                if (e.message.startsWith('Cannot find module')) {
                    if (typeof props.onNotFound === 'function') {
                        props.onNotFound()
                    }
                }
            })
        return () => {
            setComponent(null)
            cleanedUp = true
        }
    }, [props.path])
    return Component ? <Component {...props}/> : props.loading || 'Loading..'
}