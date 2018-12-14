import * as React from 'react';
import { connect } from 'react-redux';

import Loading from '../../components/loading';
import { mapStateToProps } from '../../../utils';
// types
import { PropsOrigin, SettingsData } from '../../../types';

interface Props extends PropsOrigin {
  settings: SettingsData;
}

class Check extends React.Component<Props, any> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      loading: true,
    };
  }

  public activate() {
    this.checkUsableIP();
  }

  public checkUsableIP() {

  }

  public render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
  }

}

export default connect(
  mapStateToProps('settings'),
)(Check);
