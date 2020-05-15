import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ProjectLearnMore = (props) => {
  const { buttonLabel, className, project } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div style={{ display: 'flex' }}>
      <Button
        className="project-learn-more-trigger"
        outline
        color="secondary"
        onClick={toggle}
      >
        {buttonLabel}
      </Button>
      <Modal size="lg" isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>
          <b>{project.name}</b>
        </ModalHeader>
        <ModalBody>{project.description}</ModalBody>
        <ModalFooter class="project-learn-more-footer">
          <Button
            className="btn-icon"
            color="slack"
            href={project.slackChannel}
            target="_blank"
          >
            <span className="btn-inner--icon">
              <i className="fa fa-slack" />
            </span>
            <span className="btn-inner--text">Slack</span>
          </Button>
          <Button
            className="btn-icon"
            color="github"
            href={project.github}
            target="_blank"
          >
            <span className="btn-inner--icon">
              <i className="fa fa-github" />
            </span>
            <span className="btn-inner--text">Github</span>
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ProjectLearnMore;
