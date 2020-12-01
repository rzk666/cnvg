const TABLE_STYLES = {
  wrapper: {
    width: '100%',
    height: 700,
  },
  container: {
    maxHeight: 700,
    minHeight: 700,
  },
  img: {
    width: '85px',
    height: '85px',
    borderRadius: '256px',
  },

  row: {
    padding: '5px 0',
    height: 120,
    opacity: 0.6,
    transition: 'opacity 0.3s ease-in',
    '&:hover': {
      cursor: 'pointer',
      opacity: 1,
    },
  },
  cell: {
    fontSize: 18,
  },
};

export default TABLE_STYLES;
