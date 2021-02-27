import React, { useState, useEffect } from 'react';
import OrganizationChart from '../components/ChartContainer';
import Dialog from '../components/Dialog';
import CardEdit from '../modal/CardEdit';
import { API_GET } from '../utils/api';

const DragDropChart = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(false);
  const [draggedCardPath, setDraggedCardPath] = useState({
    id: '',
    name: '',
    title: '',
    ancestors: [],
    parent: null,
  });
  const [initialData, setInitialData] = useState({});

  useEffect(() => {
    API_GET('chart/collection/type/roles')
      .then((res) => {
        setInitialData(res.data.collection);
      })
      .catch((err) => {
        console.log('Error while fetching data');
      });
  }, []);

  const handleClose = () => {
    setModalOpen((prevState) => !prevState);
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

  const handleHierarchy = ({ updatedData, draggedItemData }) => {
    setInitialData(updatedData);
    // const draggedItemId = draggedItemData.id;
    // setDraggedCardPath((prevState) => {
    //   prevState.id = draggedItemData.id;
    //   prevState.name = draggedItemData.name;
    //   prevState.title = draggedItemData.title;
    //   return prevState;
    // });
    // getPathOfNode(updatedData, draggedItemId);
  };

  // const getPathOfNode = (updatedData, draggedItemId) => {
  //   if (updatedData.id === draggedItemId) {
  //     return;
  //   } else {
  //     setDraggedCardPath((prevState) => {
  //       const ancestorArray = prevState.ancestors;
  //       ancestorArray.push(updatedData.id);
  //       prevState.ancestors = ancestorArray;
  //       prevState.parent = updatedData.id;
  //       return prevState;
  //     });
  //     if (Array.isArray(updatedData.children)) {
  //       findPath(updatedData.children, draggedItemId);
  //     }
  //   }
  // };

  // const findPath = (children, draggedItemId) => {
  //   children.find((child) => {
  //     const tempParent = draggedCardPath.parent;
  //     setDraggedCardPath((prevState) => {
  //       const ancestorArray = prevState.ancestors;
  //       ancestorArray.push(child.id);
  //       prevState.ancestors = ancestorArray;
  //       prevState.parent = child.id;
  //       return prevState;
  //     });
  //     if (child.id === draggedItemId) {
  //       return true;
  //     } else {
  //       if (Array.isArray(child.children)) {
  //         findPath(child.children, draggedItemId);
  //       }
  //       return false;
  //     }
  //   });
  // };

  // console.log('draggedCardPath', draggedCardPath);

  return (
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
  );
};

export default DragDropChart;
