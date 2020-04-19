import React from 'react';
import { Badge, Button, Card, CardBody, Col } from 'reactstrap';
import { truncate } from 'lodash';
import { Link } from 'react-router-dom';

const getTagColor = (tag) => {
  switch (tag) {
    case 'status':
      return 'primary';
    case 'work stream':
      return 'success';
    case 'volunteers':
      return 'warning';
    default:
      return 'primary';
  }
};

const ProjectCard = ({ project, showIcon = false, showTags = false }) => {
  return (
    <>
      <Col lg="4">
        <Card className="card-lift--hover shadow border-10">
          <CardBody className="py-10">
            {showIcon && (
              <div className="icon icon-shape rounded-circle">
                <i className="fa fa-star text-yellow" />
              </div>
            )}
            <h6 className="text-black text-uppercase">
              {truncate(project.name, { length: 24 })}
            </h6>
            <p className="description mt-3">
              {truncate(project.summary, { length: 60 })}
            </p>
            {showTags && (
              <div>
                {project.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    color={getTagColor(tag.key)}
                    pill
                    className="mr-1"
                  >
                    {tag.value}
                  </Badge>
                ))}
              </div>
            )}
            <Button
              className="mt-4"
              color="primary"
              to={`projects/${project.slug}`}
              tag={Link}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ProjectCard;
