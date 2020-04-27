import React from 'react';
import MainLayout from 'components/Layout/MainLayout';
import {
  Button,
  Card,
  Container,
  NavLink,
  Row,
  Col,
} from 'reactstrap';
const MutualAidPage = () => {
  return (
    <MainLayout
      title="Mutual Aid Page"
      description=" Our team of volunteers is able to provide technical, resource-based and awareness support. It was clear that a better clearing mechanism was needed for people and initiatives that are not part of our platform to access resources like money, connection, and material goods. Mutual-aid refers to a voluntary reciprocal exchange of resources and services for mutual benefit.
  We, therefore, created a space where efforts on the ground could be matched with resources available through our volunteer group Resources both needed and available for use include volunteers, technical support, funding and so much more. 
  We require a minimal amount coordination solution for the maximum outcome and impact, and this concept and its execution achieved just that."
  
    >

    <iframe
        title="projects"
        className="airtable-embed"
        src="https://airtable.com/embed/shr2J750ULFDomQMO?backgroundColor=gray&viewControls=on"
        frameBorder="0"
        width="100%"
        height="533"
        style={{ background: 'transparent', border: ' 1px solid #ccc' }}
      />
      
    </MainLayout>
  );
};

export default MutualAidPage;
