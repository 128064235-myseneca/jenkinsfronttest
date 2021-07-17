import React, { PureComponent } from 'react';
import { observer } from 'mobx-react';

import Container from 'react-bootstrap/Container';

export function HomePage() {
  return (
    <Container fluid="md">
      <h1 className="my-4">DRM TEST</h1>
    </Container>
  );
}
