import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  navBar: {
    backgroundColor: '#2F2F32',
    '& a': {
      color: '#ffffff',
      marginLeft: 10,
    },
  },
  main: {
    minHeight: '80vh',
  },
  footer: {
    textAlign: 'center',
  },
});

export default useStyles;
