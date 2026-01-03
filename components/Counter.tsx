'use client';

import { useAppSelector, useAppDispatch } from '@/lib/redux/hooks';
import { increment, decrement, selectCount } from '@/lib/redux/slices/exampleSlice';

export default function Counter() {
    const count = useAppSelector(selectCount);
    const dispatch = useAppDispatch();

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', maxWidth: '300px' }}>
            <h2>Redux Counter Example</h2>
            <div style={{ fontSize: '24px', margin: '20px 0' }}>
                Count: <strong>{count}</strong>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
                <button
                    onClick={() => dispatch(decrement())}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        border: '1px solid #333',
                        background: '#f0f0f0',
                    }}
                >
                    Decrement
                </button>
                <button
                    onClick={() => dispatch(increment())}
                    style={{
                        padding: '10px 20px',
                        fontSize: '16px',
                        cursor: 'pointer',
                        borderRadius: '4px',
                        border: '1px solid #333',
                        background: '#f0f0f0',
                    }}
                >
                    Increment
                </button>
            </div>
        </div>
    );
}
