import React, { useState } from 'react';

import { Badge, Button, Card, CardBody, Col, Modal } from 'reactstrap';

const DetailModal = ({ project, isOpen, closeModal }) => (
  <Modal
    className="modal-dialog-centered"
    isOpen={isOpen}
    toggle={() => closeModal}
  >
    <div className="modal-header">
      <h5 className="modal-title" id="exampleModalLabel">
        {project.name}
      </h5>
      <button
        aria-label="Close"
        className="close"
        data-dismiss="modal"
        type="button"
        onClick={closeModal}
      >
        <span aria-hidden={true}>×</span>
      </button>
    </div>
    <div className="modal-body">
      <p>{project.description}</p>
    </div>
  </Modal>
);

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

const ProjectCard = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <DetailModal
        project={project}
        isOpen={isOpen}
        closeModal={() => {
          setIsOpen(false);
        }}
      />
      <Col lg="4">
        <Card className="card-lift--hover shadow border-10">
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
              <i className="ni ni-check-bold" />
            </div>
            <h6 className="text-primary text-uppercase">{project.name}</h6>
            <p className="description mt-3">{project.summary}</p>
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
            <Button
              className="mt-4"
              color="primary"
              href=""
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(true);
              }}
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
