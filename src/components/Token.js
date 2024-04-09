import React from 'react';
import { Container, Heading, Grid, Box } from '@chakra-ui/react';
import { VictoryPie } from 'victory';

const Tokenomics = () => {
  const data = [
    { x: 'Total Supply', y: 25 },
    { x: 'Reserve', y: 15 },
    { x: 'Team & Advisors', y: 10},
    { x: 'Community', y: 5 },
    { x: 'Ecosystem Fund', y: 10 },
  ];

  return (
    <Container maxW="xl" mt={0} mb={0}>
      <Heading as="h2" size="xl" textAlign="center" mb={0}>
        Tokenomics
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={0}>
        <Box p={6} boxShadow="lg">
          <VictoryPie
            data={data}
            colorScale={['#6B46C1', '#F56565', '#38B2AC', '#ED8936', '#fff']} // Example colors, adjust as needed
            innerRadius={70} // Adjust the size of the pie chart here
            padding={70} // Adjust the padding here
            style={{
              labels: {
                fontSize: 8,
                fill: 'white',
              },
            }}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default Tokenomics;
