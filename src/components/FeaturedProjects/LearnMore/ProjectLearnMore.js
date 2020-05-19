import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { map, pickBy } from 'lodash';

const ProjectLearnMore = (props) => {
  const excludedSheetColumns = [
    'links',
    'Project Name',
    'Description',
    'Summary',
  ];
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
        <ModalBody>
          <div>{project.Description}</div>

          <br />
          <div className="all-sheet-columns">
            <table>
              {map(
                pickBy(
                  project,
                  (value, key) => !excludedSheetColumns.includes(key)
                ),
                (value, key) => (
                  <tr>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                )
              )}
            </table>
          </div>
        </ModalBody>
        <ModalFooter className="project-learn-more-footer">
          {map(project.links, (value, key) => (
            <a className="external-link" href={value} target="_blank">
              {key}
            </a>
          ))}
        </ModalFooter>
      </Modal>
    </div>
  );
};
export default ProjectLearnMore;
