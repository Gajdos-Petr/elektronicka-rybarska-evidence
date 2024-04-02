import React,{useState, useMemo} from 'react'
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { ArrowBigDown } from 'lucide-react';
import RAD_DATA from '../sources/rad.json'

function FishingRules() {
    const sectionLawStyle = {
        width: "100%",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBottom: "4rem",


    }


    const data = useMemo(() => RAD_DATA, []);
    const renderContent = (content) => {
        const paragraphs = content.split(';').map((paragraph, index) => (
          <p key={index}>{paragraph.trim()}</p>
        ));
        return paragraphs;
      };
    return (
        <section style={sectionLawStyle}>
        <div className='container-section'>
          {data.map((item, index) => (
            <>
              {item.section && (
                <h1 style={{paddingTop: 100}}>{item.section}</h1>
              )}
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
            </>
          ))}
        </div>
      </section>
    );
  }
  
  export default FishingRules;
