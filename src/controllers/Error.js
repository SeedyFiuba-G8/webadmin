import { Typography, Paper } from '@material-ui/core';

export default function Error() {
  return (
    <Paper>
      <Typography variant="h1" color="primary">
        404
      </Typography>
      <Typography variant="h5" color="primary">
        Oops. Looks like the page you're looking for no longer exists
      </Typography>
    </Paper>
  );
}
