import React, { useState, useEffect } from 'react';
import Card from './Card';
import projects from 'data/projects';
import Tabletop from 'tabletop';
import { map } from 'lodash';
const DATA_URL =
  'https://docs.google.com/spreadsheets/d/1pjcAQkXXTlzwyIioUFCyZi3dVNQr_nzv13gVqB7UaMg/pubhtml';

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
      {Object.keys(workStream).map((item) => {
        return (
          <>
            <h3 className="work-stream display-4">{item}</h3>
            <div className="project-card">
              {map(workStream[item], (project, workStreamName) => (
                <Card project={project} />
              ))}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default FeaturedProjects;
