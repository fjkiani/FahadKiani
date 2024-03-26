import React from 'react';
import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/accordion';
import { items } from "./menu";
import styled from 'styled-components';


const MenuList = styled.ul`
  list-style-type: none; // This removes the bullet points
  padding-left: 0; // This removes any default padding which may be present, especially on the left side
  margin: 0; // Resets default margin to ensure there's no extra space
`;

const DropdownMenu: React.FC<{ onClose: () => void; }> = ({ onClose }) => {
  return (
    <div className="w-screen h-screen bg-black pt-20 px-8 items-center justify-center absolute top-20 right-0">
      <Accordion className="pl-2" type="single" collapsible>
        {items.map((item, idx) => (
          <AccordionItem key={idx} className="my-6 border-b" value={`item-${idx}`}>
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>
              {item.options.map((option, index) => (
                <Link to={option.href} key={index} className='flex items-center space-x-4 p-4 hover:bg-gray-800 rounded-lg' onClick={onClose}>
                  {option.emoji}
                  <span>{option.label}</span>
                </Link>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
      {/* Other components within DropdownMenu */}
    </div>
  );
};

export default DropdownMenu;
