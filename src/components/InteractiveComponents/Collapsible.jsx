import React, { useState } from 'react';

const Collapsible = ({ title, children, defaultOpen = false }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div style={{
            margin: '16px 0',
            border: '1px solid #e5e5e5',
            borderRadius: '8px',
            overflow: 'hidden',
        }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '12px 16px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: '#f9f9f9',
                    border: 'none',
                    cursor: 'pointer',
                    fontSize: '1rem',
                    fontWeight: '500',
                    textAlign: 'left',
                }}
            >
                <span>{title}</span>
                <span style={{
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.2s ease',
                }}>
                    ▼
                </span>
            </button>
            {isOpen && (
                <div style={{
                    padding: '16px',
                    borderTop: '1px solid #e5e5e5',
                }}>
                    {children}
                </div>
            )}
        </div>
    );
};

export default Collapsible;
