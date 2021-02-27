const styles = (theme) => {
  return {
    header: {
      padding: '7px 20px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '5px 5px 0 0',
      color: theme.palette.common.white,
    },
    body: {
      padding: theme.spacing(3, 3, 0, 3),
    },
    action: {
      margin: theme.spacing(2, 0),
    },
  };
};

export default styles;
