import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Input, Button, Row, Col, Drawer, Typography, Tag } from 'antd';
import { randomArrayItem } from '../../../lib/random';
const { Title } = Typography;

export default ({ loading, handleSubmitForm, handleClosePage }) => {
  return (
    <Drawer visible width={'50%'} title="Add user" onClose={handleClosePage} bodyStyle={{ padding: '48px' }}>
      <FormComponent onSubmit={handleSubmitForm} loading={loading} />
    </Drawer>
  )
}


const defaultValues = {
  "name": "",
  "username": "",
  "email": "",
  "address": {
    "street": "",
    "suite": "",
    "city": "",
    "zipcode": "",
    "geo": {
      "lat": "",
      "lng": ""
    }
  },
  "phone": "",
  "website": "",
  "company": {
    "name": "",
    "catchPhrase": "",
    "bs": ""
  }
};

const FormComponent = ({ onSubmit, loading }) => {
  const { control, handleSubmit, reset } = useForm({ defaultValues });

  const handleResetForm = (e) => {
    onSubmit({}, e);
    reset(defaultValues);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}> 
      <Row justify="space-between" type="flex" gutter={[0, 16]}>
        <Col xs={24}><Title level={4}>Base data</Title></Col>
        <Col xs={24}>
          <Controller name="name" placeholder="Full name" as={Input} control={control} allowClear size="large" />
        </Col>
        <Col xs={24}>
          <Controller name="username" placeholder="Username" as={Input} control={control} allowClear size="large" />
        </Col>
        <Col xs={24}>
          <Controller name="email" placeholder="Email" as={Input} control={control} allowClear size="large" />
        </Col>
        <Col xs={24}>
          <Row justify="space-between" type="flex" gutter={[0, 16]}>
            <Col xs={24}><Title level={4}>Address</Title></Col>
            <Col xs={24}><Controller name="address.street" placeholder="Street" as={Input} control={control} allowClear size="large" /></Col>
            <Col xs={24}><Controller name="address.suite" placeholder="Suite" as={Input} control={control} allowClear size="large" /></Col>
            <Col xs={14}><Controller name="address.city" placeholder="City" as={Input} control={control} allowClear size="large" /></Col>
            <Col xs={8}><Controller name="address.zipcode" placeholder="Zip code" as={Input} control={control} allowClear size="large" /></Col>
            <Col xs={24}>
              <Row>
                <Col xs={8}><Controller name="address.geo.lat" placeholder="Lat" as={Input} control={control} allowClear size="large" /></Col>
                <Col xs={8} offset={2}><Controller name="address.geo.lng" placeholder="Lng" as={Input} control={control} allowClear size="large" /></Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <Row justify="space-between" type="flex" gutter={[0, 16]}>
            <Col xs={24}><Title level={4}>Contact</Title></Col>
            <Col xs={16}><Controller name="phone" placeholder="Phone" as={Input} control={control} allowClear size="large" /></Col>
            <Col xs={24}><Controller name="website" placeholder="Website" as={Input} control={control} allowClear size="large" /></Col>
          </Row>
        </Col>
        <Col xs={24}>
          <Row justify="space-between" type="flex" gutter={[0, 16]}>
            <Col xs={24}><Title level={4}>Company</Title></Col>
            <Col xs={16}><Controller name="company.name" placeholder="Name" as={Input} control={control} allowClear size="large" /></Col>
            <Col xs={24}><Controller name="company.catchPhrase" placeholder="Catch phrase" as={Input} control={control} allowClear size="large" /></Col>
            <Col xs={24}>
              <Controller name="company.bs" placeholder="Bs (coma separated)" as={TagInput} control={control} allowClear size="large" />
            </Col>
          </Row>
        </Col>
        <Col xs={24}>
          <Row justify="end" type="flex" gutter={[16, 0]}>
            <Col>
              <Button size="large" type="primary" onClick={handleSubmit(onSubmit)} disabled={loading}>Save</Button>
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

const tagColors = ['geekblue', 'green', 'volcano', 'yellow'];

const TagInput = (p) => {
  const currentValue = p.value.split(',');
  const prevValue = [...currentValue];
  prevValue.pop();

  const handleRemoveTag = (i) => {
    const filteredValue = [...currentValue];
    filteredValue.splice(i, 1);
    const valueToChange = filteredValue.join(',');

    p.onChange(valueToChange);
  }

  const handleChange = (e) => {
    const formattedPrevVal = prevValue.length ? prevValue.join(',') + ',' : '';
    p.onChange(formattedPrevVal + e.target.value);
  };

  return (
    <div>
      <div>
        {!!prevValue.length && (
          prevValue.map((val, i) => (
            <Tag
              key={i}
              closable
              visible={true}
              onClose={() => { handleRemoveTag(i); }}
              color={randomArrayItem(tagColors)}
              style={{ marginBottom: '8px' }}
            >
              {val}
            </Tag>
          ))
        )}
      </div>
      <Input
        name={p.name}
        placeholder={p.placeholder}
        onChange={handleChange}
        value={currentValue[currentValue.length - 1]}
        size="large"
      />
    </div>
  )
}