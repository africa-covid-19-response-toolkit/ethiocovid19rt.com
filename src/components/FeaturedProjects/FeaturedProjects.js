import React, { useState, useEffect } from 'react';
import Tabletop from 'tabletop';
import { map } from 'lodash';
import WorkStreams from './WorkStreams';
const DATA_URL =
  'https://docs.google.com/spreadsheets/d/182fGJt36rJFLA3_he5J0i7tRbLvPEi-NyxMiHLN3b3M/pubhtml';

  const FeaturedProjects = (props) => {
  const [workStream, setWorkStream] = useState({});
  const formattedData = {};

  useEffect(() => {
    Tabletop.init({
      key: DATA_URL,
      callback: (allData) => {
        map(allData, (sheetData, workStreamName) => {
          Array.isArray(sheetData.elements) &&
            sheetData.elements.map((row) => {
              let links = {};
              const cardData = {};
              map(row, (cellValue, tableHeader) => {
                if (tableHeader) {
                  if (tableHeader.includes('Link')) {
                    links[tableHeader.replace('Link', '')] = cellValue;
                  } else {
                    cardData[tableHeader] = cellValue;
                  }
                }
              });
              if (!formattedData[workStreamName]) {
                formattedData[workStreamName] = [];
              }
              if (Object.keys(cardData).length) {
                cardData['links'] = links;
                formattedData[workStreamName].push(cardData);
              }
            });
        });
        setWorkStream(formattedData);
      },
    });
  }, []);

  return (
    <div className="featured-projects">
      {map(workStream, (projects, workStreamName) => {
        return (
          <WorkStreams projects={projects} workStreamName={workStreamName} />
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
