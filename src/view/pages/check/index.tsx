import * as React from 'react';

import Loading from '../../components/loading';

class Check extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    
    this.state = {
      loading: true,
    };
  }

  public activate() {
    
  }

  public render() {
    const { loading } = this.state;
    if (loading) return <Loading />;
  }

}

export default Check;
