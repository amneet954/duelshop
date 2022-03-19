import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navBar: {
    backgroundColor: '#2F2F32',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  brand: {
    fontWeight: 'bold',
    fontSize: '1.5rem',
  },
  grow: {
    flexGrow: 1,
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    marginTop: 15,
    textAlign: 'center',
  },
  section: {
    marginTop: 15,
    marginBottom: 15,
  },
});

export default useStyles;
