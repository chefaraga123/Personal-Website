import React from 'react';

const styles = {
    base: {
        padding: '16px 20px',
        margin: '24px 0',
        borderRadius: '8px',
        borderLeft: '4px solid',
    },
    info: {
        backgroundColor: '#e7f3ff',
        borderLeftColor: '#0070f3',
        color: '#0056b3',
    },
    warning: {
        backgroundColor: '#fff8e6',
        borderLeftColor: '#f5a623',
        color: '#8a6914',
    },
    success: {
        backgroundColor: '#e6ffed',
        borderLeftColor: '#28a745',
        color: '#1e7e34',
    },
    error: {
        backgroundColor: '#ffe6e6',
        borderLeftColor: '#dc3545',
        color: '#a71d2a',
    },
    note: {
        backgroundColor: '#f5f5f5',
        borderLeftColor: '#6c757d',
        color: '#495057',
    },
};

const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    success: '✅',
    error: '❌',
    note: '📝',
};

const Callout = ({ type = 'note', title, children }) => {
    const typeStyle = styles[type] || styles.note;
    const icon = icons[type] || icons.note;

    return (
        <div style={{ ...styles.base, ...typeStyle }}>
            {title && (
                <div style={{ fontWeight: 'bold', marginBottom: '8px' }}>
                    {icon} {title}
                </div>
            )}
            <div>{children}</div>
        </div>
    );
};

export default Callout;
