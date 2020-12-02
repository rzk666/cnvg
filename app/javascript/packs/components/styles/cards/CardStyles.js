const CARD_STYLES = {
  loading: {
    opacity: 0.5,
    pointerEvents: 'none',
  },
  container: {
    transition: 'opacity 0.3s ease-in',
    height: 700,
    minWidth: 300,
    maxWidth: 300,
    marginRight: 50,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: '50px 0',
    borderRadius: '256px',
    height: 150,
    width: 150,
  },
  header: {
    height: 57,
    width: '100%',
    backgroundColor: '#303030',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '0.875rem',
    fontWeight: '500',
    color: 'white',
    borderBottom: '1px solid rgb(81,81,81)',
  },
  subtitle: {
    fontSize: '0.875rem',
    fontWeight: '500',
    color: '#B3B3B3',
    margin: 0,
  },
  title: {
    fontSize: '18px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 20px 0',
  },
  btn: {
    width: '80%',
    height: 50,
    marginTop: 'auto',
    marginBottom: 30,
  },
};

export default CARD_STYLES;
