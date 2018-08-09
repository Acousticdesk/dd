import React from 'react';

import NoAppSelectedPrompt from './NoAppSelectedPrompt';
import PlacementSettings from './PlacementSettings';

export default ({app}) => {
  return (
    <React.Fragment>
      {!app ? <NoAppSelectedPrompt/> : <PlacementSettings/>}
    </React.Fragment>
  );
};
