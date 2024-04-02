import React,{useState, useMemo} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ArrowBigDown } from 'lucide-react';
import RAD_DATA from '../sources/rad.json'

function FishingRules() {
    const data = useMemo(() => RAD_DATA, []);
    const renderContent = (content) => {
        const paragraphs = content.split(';').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ));
        return paragraphs;
      };
    return (
      <>
        <h1>Přehled nejdůležitějších ustanovení zákona č. 99/2004 Sb. a vyhlášky č. 197/2004 Sb., ve znění pozdějších předpisů</h1>
        {data.map((item, index) => (
          <Accordion key={index}>
            <AccordionSummary
              expandIcon={<ArrowBigDown />}
              aria-controls={`panel${index + 1}-content`}
              id={`panel${index + 1}-header`}
            >
              <h4>{item.tittle}</h4>
            </AccordionSummary>
            <AccordionDetails>
              <div>
              {renderContent(item.content)}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </>
    );
  }
  
  export default FishingRules;
