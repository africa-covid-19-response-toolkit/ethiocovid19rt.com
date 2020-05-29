import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Tabletop from 'tabletop';
import classnames from 'classnames';
import { kebabCase } from 'lodash';
import { Link, useParams } from 'react-router-dom';

const DATA_URL =
  'https://docs.google.com/spreadsheets/d/1xIQkSbUVoTh94Vsn3wq9cYCemoG3s7LA1Ug-Zt9Q_9k/pubhtml';

const Tabs = ({ tabs = [], currentTab }) => (
  <div className="nav-wrapper">
    <Nav
      className="nav-fill flex-column flex-md-row "
      id="tabs-icons-text"
      pills
      role="tablist"
    >
      {tabs.map((tab, index) => (
        <NavItem key={index}>
          <NavLink
            aria-selected={currentTab === kebabCase(tab)}
            className={classnames('mb-sm-3 mb-md-0', {
              active: currentTab === kebabCase(tab),
            })}
            to={`/mutualaid/${kebabCase(tab)}`}
            tag={Link}
            role="tab"
          >
            {tab}
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  </div>
);

const formatCellData = (type, value, link) => {
  switch (type.toLocaleLowerCase()) {
    case 'link':
      return (
        <td key={type.toLocaleLowerCase()} className="text-center">
          <NavLink className="nav-link-icon" href={value} target="_blank">
            {type}
          </NavLink>
        </td>
      );

    default:
      // return <td key={type.toLocaleLowerCase()}>{value}</td>;
      return (
        <td key={type.toLocaleLowerCase()} className="text-center">
          <NavLink className="nav-link-icon" href={link} target="_blank">
            {value}
          </NavLink>
        </td>
      );
  }
};

const TabTable = ({ columnNames, rows }) => {
  return (
    <div className="table-responsive-md">
      <table className="table table-md">
        {/* Table header */}
        <thead className="thead-light">
          <tr>
            {columnNames.map((column, index) => {
              if (column != 'Link'){
                return (
                <th
                  key={index}
                  scope="col"
                  className={column === 'Name' ? null : 'text-center'}
                >
                  {column}
                </th>
              );
              }
            })}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((rk) => {
                let cellValue = row[rk];
                if (rk != 'Link') {
                  return formatCellData(rk, cellValue, row['Link']);
                }
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const CurrentTabContent = ({ currentTab, data = [] }) => (
  <TabContent activeTab={currentTab}>
    {Object.keys(data).map((key) => {
      const tabData = data[key];
      return (
        <TabPane key={tabData.tabKey} tabId={tabData.tabKey}>
          <TabTable columnNames={tabData.columnNames} rows={tabData.rows} />
        </TabPane>
      );
    })}
  </TabContent>
);

const MutualAidList = () => {
  const { slug } = useParams();
  const [data, setData] = useState({ tabs: [], tables: {} });
  const [currentTab, setCurrentTab] = useState('');

  useEffect(() => {
    Tabletop.init({
      key: DATA_URL,
      callback: (sheetData) => {
        const mappedData = {
          tabs: [],
          tables: {},
        };
        Object.keys(sheetData).forEach((key) => {
          mappedData.tabs = [...mappedData.tabs, key];
          mappedData.tables[key] = {
            tabKey: kebabCase(key),
            columnNames: sheetData[key].columnNames,
            rows: sheetData[key].elements,
          };
        });
        setData(mappedData);
        // Select the first tab by default
        const defaultTab = slug ? slug : kebabCase(mappedData.tabs[0]);

        setCurrentTab(defaultTab);
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCurrentTab(slug);
  }, [slug]);

  return (
    <>
      <Tabs tabs={data.tabs} currentTab={currentTab} />
      <CurrentTabContent data={data.tables} currentTab={currentTab} />
    </>
  );
};

export default MutualAidList;
