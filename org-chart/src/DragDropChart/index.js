import React, { useState, useEffect } from 'react';
import OrganizationChart from '../components/ChartContainer';
import Dialog from '../components/Dialog';
import CardEdit from '../modal/CardEdit';
import { Button, Grid } from '@material-ui/core';
import { API_GET, API_PATCH } from '../utils/api';

const Container = (props) => <Grid container {...props} />;
const Item = (props) => <Grid item {...props} />;

const DragDropChart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [initialData, setInitialData] = useState({});
  const [collectionId, setcollectionId] = useState('');
  const [viewOrg, setViewOrg] = useState(false);

  useEffect(() => {
    API_GET('chart/collection/type/roles')
      .then((res) => {
        setcollectionId(res.data.collectionId);
        setInitialData(res.data.collection);
      })
      .catch((err) => {
        console.log('Error while fetching data');
      });
  }, []);

  const handleClose = () => {
    setModalOpen((prevState) => !prevState);
  };

  const handleViewOrg = () => {
    setViewOrg((prevState) => !prevState);
  };

  const handleClickNode = (data) => {
    setSelectedCard(data);
    setModalOpen((prevState) => !prevState);
  };

  const updateDetails = (initialData, updatedData) => {
    if (initialData.id === updatedData.id) {
      initialData.name = updatedData.name;
      initialData.title = updatedData.title;
    } else {
      if (Array.isArray(initialData.children)) {
        findNode(initialData.children, updatedData);
      }
    }
    saveCollectionInDB(initialData);
    setInitialData(initialData);
  };

  const findNode = (children, updatedData) => {
    children.find((child) => {
      if (child.id === updatedData.id) {
        child.name = updatedData.name;
        child.title = updatedData.title;
        return true;
      } else {
        if (Array.isArray(child.children)) {
          findNode(child.children, updatedData);
        }
        return false;
      }
    });
  };

  const handleUpdate = (updatedData) => {
    updateDetails(initialData, updatedData);
    setModalOpen((prevState) => !prevState);
  };

  const handleHierarchy = ({ updatedData }) => {
    saveCollectionInDB(updatedData);
  };

  const saveCollectionInDB = (updatedData) => {
    API_PATCH('chart/collection', {
      collectionId: collectionId,
      type: 'roles',
      collection: updatedData,
    })
      .then((res) => {
        setInitialData(res.data.collection);
      })
      .catch((err) => {
        console.log('Error while fetching data');
      });
    setInitialData(updatedData);
  };

  return (
    <Container direction="column" alignItems="center">
      <Item>
        <Button onClick={handleViewOrg} variant="contained" color="primary">
          View ORG CHART
        </Button>
      </Item>
      <Item>
        {viewOrg && (
          <>
            <OrganizationChart
              datasource={initialData}
              draggable={true}
              onClickNode={handleClickNode}
              onChangeHierarchy={handleHierarchy}
            />
            <Dialog
              children={
                <CardEdit
                  initialData={selectedCard}
                  handleUpdate={handleUpdate}
                  handleClose={handleClose}
                />
              }
              isOpen={modalOpen}
            ></Dialog>
          </>
        )}
      </Item>
    </Container>
  );
};

export default DragDropChart;
