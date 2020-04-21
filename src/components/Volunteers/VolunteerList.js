import React, { useState, useEffect } from 'react';
import { Nav, NavItem, NavLink, TabContent, TabPane } from 'reactstrap';
import Tabletop from 'tabletop';
import classnames from 'classnames';
import { kebabCase } from 'lodash';
import { Link, useParams } from 'react-router-dom';

const DATA_URL =
  'https://docs.google.com/spreadsheets/d/18iq-c-NvggsY3Yl5qElgovUzD6awAXSCzzHZ91Bwbzs/pubhtml';

const Tabs = ({ tabs = [], currentTab }) => (
  <div className="nav-wrapper">
    <Nav
      className="nav-fill flex-column flex-md-row"
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
            to={`volunteers/${kebabCase(tab)}`}
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

const formatCellData = (type, value) => {
  switch (type.toLocaleLowerCase()) {
    case 'linkedin':
      return (
        <td key={type.toLocaleLowerCase()} className="text-center">
          <a href={value}>
            <i className="fa fa-linkedin-square" />
          </a>
        </td>
      );
    case 'twitter':
      return (
        <td key={type.toLocaleLowerCase()} className="text-center">
          <a href={value}>
            <i className="fa fa-twitter-square" />
          </a>
        </td>
      );
    case 'github':
      return (
        <td key={type.toLocaleLowerCase()} className="text-center">
          <a href={value}>
            <i className="fa fa-github-square" />
          </a>
        </td>
      );

    default:
      return <td key={type.toLocaleLowerCase()}>{value}</td>;
  }
};

const TabTable = ({ columnNames, rows }) => {
  return (
    <div className="table-responsive-md">
      <table className="table table-md">
        {/* Table header */}
        <thead className="thead-light">
          <tr>
            {columnNames.map((column, index) => (
              <th
                key={index}
                scope="col"
                className={column === 'Name' ? null : 'text-center'}
              >
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              {Object.keys(row).map((rk) => {
                let cellValue = row[rk];
                return formatCellData(rk, cellValue);
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

const VolunteerList = () => {
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

export default VolunteerList;
