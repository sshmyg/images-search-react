import React, { cloneElement } from 'react';
import { Link } from 'react-router';
import classnames from 'classnames';

import './_button.css';

const buttonsMap = {
    button: <button />,
    a: <Link />,
    div: <div />
};

export default function Button({
    children,
    className,
    tagName = 'button',
    loading,
    ...otherProps
}) {
    if (otherProps.to) {
        tagName = 'a';
    }

    const componentClassName = classnames('c-button', className, {
        'is-loading': loading
    });
    const Component = buttonsMap[tagName];

    if (!Component) {
        return null;
    }

    return cloneElement(Component, {
        ...otherProps,
        className: componentClassName
    }, children);
}
