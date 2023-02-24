import React from 'react';
import {PluginClient, usePlugin, createState, useValue, Layout} from 'flipper-plugin';
import { Button } from 'antd';

type Data = {
  water?: number;
  goal?: number;
};

type Events = {
  state: Data;
};

let client: PluginClient<Events, {}>;

export function plugin(_client: PluginClient<Events, {}>) {
  client = _client;
  const data = createState<Record<string, Data>>({}, {persist: 'data'});

  client.onMessage('state', (newData) => {
    data.update((draft) => {
      draft['State'] = newData;
    });
  });

  client.addMenuEntry({
    action: 'clear',
    handler: async () => {
      data.set({});
    },
    accelerator: 'ctrl+l',
  });

  return {data};
}

export function Component() {
  const instance = usePlugin(plugin);
  const data = useValue(instance.data);

  return (
    <Layout.ScrollContainer style={{padding:8}}>
      <h1>Raw state data</h1>
      {Object.entries(data).map(([id, d]) => (
        <pre key={id} data-testid={id}>
          {JSON.stringify(d)}
        </pre>
      ))}
      <Button onClick={()=>{client.send('getState')}}>Refresh State Data</Button>
      {/* <h1>Data parsed</h1> */}
    </Layout.ScrollContainer>
  );
}
