import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { map } from 'lodash';

const ProjectLearnMore = (props) => {
  const { buttonLabel, className, project } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div className="project-learn-more-container">
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
          <b>{project['Project Name']}</b>
        </ModalHeader>
        <ModalBody>{project.Description}</ModalBody>
        <ModalFooter className="project-learn-more-footer">
          {map(project.links, (value, key) => <a className="external-link" href={value} target='_blank'>{key}</a>)}        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ProjectLearnMore;
