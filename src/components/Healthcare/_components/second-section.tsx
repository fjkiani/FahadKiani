import styled from 'styled-components';
import React from 'react';

const MetricsContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
`;

const MetricCard = styled.div`

  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px; // Adjust width as needed
`;

const MetricArrow = styled.div`
  color: #000000;
  margin: 0 20px; // Spacing between cards and arrows
`;

const MetricTitle = styled.h2`
  color: #333333;
  font-size: 2rem;
  margin-bottom: 5px;
`;

const MetricSubtitle = styled.p`
  color: #666666;
  font-size: 1rem;
`;

const ClientName = styled.div`
  color: #333333;
  font-size: 1.2rem;
  margin-top: 20px;
  font-weight: bold;
`;

// Your data structure might vary, this is just for demonstration
const metricsData = [
  {
    title: '15% increase',
    subtitle: 'in daily patient volume',
    client: 'Access Healthcare',
  },
  {
    title: '125+ Google Reviews',
    subtitle: 'new, 5-star patient reviews',
    client: 'Walnut Creek Dental Studio',
  },
  {
    title: '15% increase',
    subtitle: 'in daily patient volume',
    client: 'Access Healthcare',
  },
  {
    title: '125+ Google Reviews',
    subtitle: 'new, 5-star patient reviews',
    client: 'Walnut Creek Dental Studio',
  },
  // ...add more as needed
];

const SecondSection2 = () => (
  <MetricsContainer>
    {metricsData.map((metric, index) => (
      <React.Fragment key={index}>
        {index > 0 }
        <MetricCard>
          <MetricTitle>{metric.title}</MetricTitle>
          <MetricSubtitle>{metric.subtitle}</MetricSubtitle>
          <ClientName>{metric.client}</ClientName>
        </MetricCard>
      </React.Fragment>
    ))}
  </MetricsContainer>
);

export default SecondSection2;
