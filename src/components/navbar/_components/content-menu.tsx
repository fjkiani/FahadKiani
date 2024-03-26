import React from 'react';
import { Link } from "react-router-dom";

interface ContentMenuProps {
    options: { label: string; emoji: React.ReactElement; href: string }[];
}

const ContentMenu: React.FC<ContentMenuProps> = ({ options }) => {
    return (
        <div className='
            w-80
            border
            border-gray-200
            rounded-[40px]
            shadow-md
            absolute
            left-0
            top-full
            mt-0
            bg-black
            flex
            justify-start
        '>
            <ul className='flex flex-col items-start space-y-1 py-4' style={{ listStyleType: 'none', paddingLeft: 0, margin: 0 }}>
                {options.map((option, index) => (
                    <li key={index} className='w-full'>
                        <Link to={option.href} className='flex items-center space-x-4 hover:bg-gray-100 w-full px-6 py-4 rounded-3xl text-white'>
                            {option.emoji}
                            <span>{option.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ContentMenu;
