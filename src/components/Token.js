import React from 'react';
import { Container, Heading, Grid, Box } from '@chakra-ui/react';
import { VictoryPie } from 'victory';

const Tokenomics = () => {
  const data = [
    { x: 'Total Supply', y: 25 },
    { x: 'Reserve', y: 25 },
    { x: 'Team & Advisors', y: 25 },
    { x: 'Community Development', y: 25 },
    { x: 'Ecosystem Fund', y: 25 },
  ];

  return (
    <Container maxW="xl" mt={8} mb={8}>
      <Heading as="h2" size="xl" textAlign="center" mb={6}>
        Tokenomics
      </Heading>
      <Grid templateColumns="repeat(auto-fit, minmax(200px, 1fr))" gap={6}>
        <Box p={6} boxShadow="lg">
          <VictoryPie
            data={data}
            colorScale={['#6B46C1', '#F56565', '#38B2AC', '#ED8936', '#fff']} // Example colors, adjust as needed
            innerRadius={70} // Adjust the size of the pie chart here
            padding={40} // Adjust the padding here
            style={{
              labels: {
                fontSize: 12,
                fill: 'black',
              },
            }}
          />
        </Box>
      </Grid>
    </Container>
  );
};

export default Tokenomics;
