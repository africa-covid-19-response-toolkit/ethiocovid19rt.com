import React from 'react';
import { Badge, Button, Card, CardBody, Col } from 'reactstrap';
import { truncate } from 'lodash';
import ProjectLearnMore from './LearnMore/ProjectLearnMore'

const ProjectCard = ({ project }) => {
  const getTagColor = (tag) => {
    switch (tag) {
      case 'status':
        return 'primary';
      case 'volunteers':
        return 'warning';
      default:
        return 'primary';
    }
  };

  return (
    <Col lg="4" className="mb-5 project-card-content">
      <Card className="card-lift--hover shadow border-10 ">
        <CardBody className="py-10">
          <h6 className="text-black text-uppercase">
            {truncate(project.name, { length: 24 })}
          </h6>
          <p className="description mt-3">
            {truncate(project.summary, { length: 200 })}
          </p>
          {
            <div className="project-tags">
              {project.tags.map(
                (tag, index) =>
                  tag.key !== 'work stream' && (
                    <Badge
                      color={getTagColor(tag.key)}
                      key={index}
                      pill
                      className="mr-1"
                    >
                      {tag.value}
                    </Badge>
                  )
              )}
            </div>
          }
          <ProjectLearnMore centered='true' buttonLabel='Learn More' project={project}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectCard;
