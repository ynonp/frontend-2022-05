import React from 'react';
import repo from '../dl/images_repo';
import { Table, Tag, Space } from 'antd';
import { observer } from 'mobx-react-lite';
import ViewImage from './view_image';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Active',
    dataIndex: 'isActive',
    render: (isActive) => (<input type="checkbox" checked={isActive} readOnly />)
  },
  {
    title: 'Painted Pixels Count',
    dataIndex: 'paintedPixelsCount',
  },
  {
    title: 'Thumbnail',
    dataIndex: 'image',
    render: (image) => (<div className="thumbnail"><ViewImage image={image} /></div>)
  }
];

const MyTable = () => {
  const data = repo.imageNames.map((imageName) => {
    return {
      key: imageName,
      name: imageName,
      isActive: repo.activeImageName === imageName,
      paintedPixelsCount: repo.images[imageName].paintedPixelsCount,
      image: repo.images[imageName],
    }
  });

  return <Table columns={columns} dataSource={data} />
};

export default observer(MyTable);
