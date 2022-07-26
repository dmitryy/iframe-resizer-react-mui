import { useRef } from 'react';
import IframeResizer from 'iframe-resizer-react';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Paper } from '@mui/material';

const useStyles = makeStyles({
  container: {
    padding: '10px',
  },
  iframe: {
    minHeight: 1500,
    width: 1,
    minWidth: '100%',
    border: 'none',
  },
});

function App() {
  const classes = useStyles();
  const iframeRef = useRef(null);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.container}>
          <IframeResizer
            className={classes.iframe}
            forwardRef={iframeRef}
            heightCalculationMethod="lowestElement"
            inPageLinks
            log={false}
            checkOrigin={false}
            src={`https://dmitryy.github.io/iframe-resizer-react-content/`}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

export default App;
