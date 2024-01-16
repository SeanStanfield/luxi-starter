'use client';

import React, { useState, useEffect } from 'react';
import { Typography, Button, Container } from '@mui/material';
import useStyles from './hero-style';

function Feature() {
  const { classes } = useStyles();
  const [state, setState] = useState('');

  useEffect(() => {
    setState('initial');
  }, []);

  return (
    <div className={classes.featureWrap}>
      <Container fixed>
        <Typography variant="h1" className={classes.heroTitle}>Update your menu today</Typography>
        <Typography variant="subtitle1" className={classes.heroSubtitle}>Increase Customer engagement and profit margins today</Typography>

        <Button variant="contained" onClick={() => setState('updated State')}>Press me</Button>
        {state}
      </Container>
    </div>
  );
}

export default Feature;
