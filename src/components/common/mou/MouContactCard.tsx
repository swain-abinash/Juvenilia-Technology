import React from 'react';


export const MouContactCard: React.FC<{ person: string; email: string; phone: string }> = ({ person, email, phone }) => {
    return (
        <aside className="p-6 rounded-lg bg-white/5 border border-gray-800">
            <h4 className="text-lg font-semibold text-white">Contact</h4>
            <p className="mt-2 text-sm text-gray-200">{person}</p>
            <p className="mt-1 text-sm text-gray-200">Email: <a href={`mailto:${email}`} className="text-orange-300">{email}</a></p>
            <p className="mt-1 text-sm text-gray-200">Phone: <a href={`tel:${phone}`} className="text-orange-300">{phone}</a></p>
        </aside>
    );
};