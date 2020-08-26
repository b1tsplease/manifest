import React, { memo } from 'react';
import CommentDeposition from './CommentDeposition';
import VideoDeposition from './VideoDeposition';

const TYPES = {
  video: VideoDeposition,
  comment: CommentDeposition,
}

const Deposition = memo(({ type, ...props }) => {
  const DepositionType = TYPES[type] || CommentDeposition;

  return <DepositionType {...props} />
});

export default Deposition;
