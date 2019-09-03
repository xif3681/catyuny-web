import * as React from 'react'
import Loadable, { LoadingComponentProps, LoadableComponent, OptionsWithRender } from 'react-loadable'

import { Button } from 'antd'
import LoadSpin from './LoadSpin'

const LoadableLoads = (params: LoadingComponentProps) => {
  const { isLoading, pastDelay, timedOut, retry, error } = params

  // 重载
  const reload = () => window.location.reload()

  if (error) {
    return (<div><Button onClick={reload}>刷新</Button></div>)
  } else if (pastDelay) {
    return (<LoadSpin/>)
  } else {
    return (<LoadSpin/>)
  }
}

const loadableConfig = {
  delay: 500,
  loading: LoadableLoads
}

interface Loader {
  (): any;
}
// export default loadableConfig
//过场组件默认采用通用的，若传入了loading，则采用传入的过场组件
export default (loader: Loader,loading = loadableConfig)=>{
  return Loadable({
      loader,
      ...loading
  });
}