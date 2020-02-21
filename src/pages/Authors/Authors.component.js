import React from 'react';
import { Collapse, Table } from 'antd';
const { Panel } = Collapse;

const columns = [
  { key: 'id', dataIndex: 'id', title: 'ID' },
  { key: 'name', dataIndex: 'name', title: 'Name' },
  { key: 'surname', dataIndex: 'surname', title: 'Surname' },
];

export default ({ list, loading }) => {
  return (
    <React.Fragment>
      <Collapse style={{ marginBottom: "48px" }}>
        <Panel header="Filters">
          filters
        </Panel>
      </Collapse>
      <Table
        columns={columns}
        dataSource={list}
        loading={loading}
      />
    </React.Fragment>
  )
}