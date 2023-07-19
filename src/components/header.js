import React from 'react';

const Header = ({ Headers }) => (
    <thead className="text-center">
        <tr>
            {Headers.map(head => (
                <th key={head.field}>{head.name}</th>
            ))}
        </tr>
    </thead>

)

export default Header;
