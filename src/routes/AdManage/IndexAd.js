import React from 'react';
import { connect } from 'dva';

const IndexAd = () => {
  return <div>content</div>;
};

IndexAd.propTypes = {};

export default connect(({ loading }) => ({ loading }))(IndexAd);
