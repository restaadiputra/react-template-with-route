import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    top: 0,
    left: 0,
    marginTop: 50
  },
  textRow: {
    marginBottom: theme.spacing.unit * 2
  },
  backButton: {
    textTransform: 'none',
    fontSize: 18,
    width: '200px',
    marginBottom: 20
  }
}));

export default useStyles