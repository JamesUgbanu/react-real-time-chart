import React, { useState, useEffect } from 'react';
import {
  Container,
  Box,
  Card,
  CardHeader,
  Typography,
  makeStyles
} from '@material-ui/core';
import clsx from 'clsx';
import Chart from './Chart';
import logo from './logo.svg'

const useStyles = makeStyles((theme) => ({
  root: {
  },
  current: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5)
  },
}));

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const RealTimeChart = ({ className, ...rest }) => {
  const classes = useStyles();
  const [data, setData] = useState([
    136,
    176,
    116,
    195,
    98,
    136,
    145,
    166,
    167,
    183
  ]);

  const getData = () => {
        setData((prevData) => {
          const newData = [...prevData];
          const random = getRandomInt(100, 200);
          newData.shift();
          newData.push(random);

          return newData;
        });
  };

  useEffect(() => {
    setInterval(() => getData(), 1500);
  }, []);

  const labels = data.map((value, i) => i);

  return (
    <Container
        maxWidth="sm"
      >
        <Box
          mb={4}
          display="flex"
          justifyContent="center"
        >
           <img
          alt="Logo"
          src={logo}
          />
        </Box>
        <Box
          mb={8}
          display="flex"
          justifyContent="center"
        >
          <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Typography
            color="inherit"
            variant="h3"
          >
            {
              data[data.length - 1]
            }
          </Typography>
        )}
        classes={{ action: classes.current }}
        subheader="Page views per second"
        title="Active users"
      />
      <Chart
        data={data}
        labels={labels}
      />
    </Card>
 
     </Box>
    </Container>       
  );
}

export default RealTimeChart;
