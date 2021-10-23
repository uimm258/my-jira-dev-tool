import React from 'react'
import { Button } from 'antd'

export const Reset = () => {
  function clear() {
    const confirmed = window.confirm(
      "Are you sure you want to clean all your data?"
    );
    if (confirmed) {
      window.localStorage.clear();
      window.location.replace(window.location.origin);
    }
  }
  return <Button size={'small'} onClick={clear}>Clean All Data</Button>;
};
