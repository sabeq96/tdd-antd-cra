import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Table, Descriptions, Tag, Input, Button, Row, Col, Card } from 'antd';
import { randomArrayItem } from '../../../lib/random';

const { Item } = Descriptions;

const columns = [
  { key: 'id', dataIndex: 'id', title: 'ID' },
  { key: 'name', dataIndex: 'name', title: 'Name', sorter: true },
  { key: 'username', dataIndex: 'username', title: 'Username', sorter: true },
  { key: 'email', dataIndex: 'email', title: 'Email', sorter: true },
];

export default ({ list, loading, handleTableChange, handleSubmitFilters }) => {
  return (
    <React.Fragment>
      <Card style={{ marginBottom: "48px" }}>
        <FormComponent onSubmit={handleSubmitFilters} loading={loading} />
      </Card>
      <Card>
        <Table
          rowKey='id'
          columns={columns}
          dataSource={list}
          onChange={handleTableChange}
          pagination={{defaultCurrent: 1, defaultPageSize: 5, total: 10, showSizeChanger: true, pageSizeOptions: ['5', '10']}}
          expandedRowRender={RowExpander}
          loading={loading}
        />
      </Card>
    </React.Fragment>
  )
}

const RowExpander = (u) => (
  <Descriptions title="User details" column={3}>
    <Item label="Address" span={3}>{`${u.address.street} ${u.address.suite} ${u.address.city} ${u.address.zipcode}`}</Item>
    <Item label="Geo">{`${u.address.geo.lat} / ${u.address.geo.lng}`}</Item>
    <Item label="Phone">{u.phone}</Item>
    <Item label="Website">{u.website}</Item>
    <Item label="Company name">{u.company.name}</Item>
    <Item label="Company catch phrase" span={2}>{u.company.catchPhrase}</Item>
    <Item label="Company bs">
      <RandomCompanyBadge bs={u.company.bs}/>
    </Item>
  </Descriptions>
);

const tagColors = ['geekblue', 'green', 'volcano', 'yellow'];

const RandomCompanyBadge = ({ bs }) => (
  <div>
    {bs.split(' ').map((el, i) => (
      <Tag color={randomArrayItem(tagColors)} key={i}>
        {el}
      </Tag>
    ))}
  </div>
);


const defaultValues = { username: '', email: '' };

const FormComponent = ({ onSubmit, loading }) => {
  const { control, handleSubmit, reset } = useForm({ defaultValues });

  const handleResetForm = (e) => {
    onSubmit({}, e);
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Row justify="space-between" type="flex" gutter={[0, 16]}>
        <Col xs={24} lg={9}>
          <Controller
            name="username"
            placeholder="Username"
            as={Input}
            control={control}
            allowClear
            size="large"
          />
        </Col>
        <Col xs={24} lg={9}>
          <Controller
            name="email"
            placeholder="Email"
            as={Input}
            control={control}
            allowClear
            size="large"
          />
        </Col>
        <Col xs={24} lg={4} style={{ minWidth: '180px' }}>
          <Row justify="end" type="flex" gutter={[16, 0]}>
            <Col>
              <Button size="large" type="primary" onClick={handleSubmit(onSubmit)} disabled={loading}>Search</Button>
            </Col>
            <Col>
              <Button size="large" type="secondary" onClick={handleResetForm} disabled={loading}>Reset</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </form>
  )
}