import React from "react";
import { Card, Table, Tag, Image } from "antd";
import samplePng from "../assets/sample.png";
import sampleWebp from "../assets/sample.webp";
import sampleSvg from "../assets/sample.svg";

// Mock file sizes (replace these with your actual file sizes)
const FILE_SIZES = {
  png: 148, // KB
  webp: 29.6, // KB
  svg: 21.9,   // KB
};

const ImageOptimization = () => {
  const columns = [
    {
      title: 'Format',
      dataIndex: 'format',
      key: 'format',
      render: (text, record) => (
        <div className="flex items-center">
          {record.icon}
          <span className="ml-2">{text}</span>
        </div>
      )
    },
    {
      title: 'File Size',
      dataIndex: 'size',
      key: 'size',
      render: (size) => `${size} KB`,
    },
    {
      title: '300% Zoom Quality',
      dataIndex: 'zoomQuality',
      key: 'zoomQuality',
      render: (text) => <Tag color={text === 'Pixelated' ? 'red' : text === 'Perfect' ? 'green' : 'orange'}>{text}</Tag>
    },
  ];

  const data = [
    {
      key: '1',
      format: 'PNG',
      icon: <img src={samplePng} alt="png" className="w-6 h-6" />,
      size: FILE_SIZES.png,
      zoomQuality: 'Pixelated',
    },
    {
      key: '2',
      format: 'WebP',
      icon: <img src={sampleWebp} alt="webp" className="w-6 h-6" />,
      size: FILE_SIZES.webp,
      zoomQuality: 'Good',
    },
    {
      key: '3',
      format: 'SVG',
      icon: <img src={sampleSvg} alt="svg" className="w-6 h-6" />,
      size: FILE_SIZES.svg,
      zoomQuality: 'Perfect',
    },
  ];

  return (
    <Card 
      title="Image Format Comparison" 
      className="m-4 shadow-lg"
      extra={<Tag color="blue">Real File Sizes</Tag>}
    >
      <div className="mb-6">
        <Table 
          columns={columns} 
          dataSource={data} 
          pagination={false}
          bordered
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-red-500">
            ❌ PNG - {FILE_SIZES.png} KB
          </h3>
          <div className="relative">
            <Image 
              src={samplePng} 
              width="100%"
              preview={{
                src: samplePng,
                scaleStep: 0.5
              }}
            />
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded text-xs">
              {FILE_SIZES.png} KB
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            Becomes pixelated when enlarged
          </p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-green-500">
            ✅ WebP - {FILE_SIZES.webp} KB
          </h3>
          <div className="relative">
            <Image 
              src={sampleWebp} 
              width="100%"
              preview={{
                src: sampleWebp,
                scaleStep: 0.5
              }}
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
              {FILE_SIZES.webp} KB
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {Math.round((1 - FILE_SIZES.webp/FILE_SIZES.png)*100)}% smaller than PNG
          </p>
        </div>
        
        <div className="border rounded-lg p-4">
          <h3 className="font-medium text-green-500">
            ✅ SVG - {FILE_SIZES.svg} KB
          </h3>
          <div className="relative">
            {/* <img 
              src={sampleSvg} 
              className="w-full h-auto"
              style={{ transform: 'scale(3)', transformOrigin: 'top left' }}
            /> */}
            <Image 
              src={sampleSvg} 
              width="100%"
              preview={{
                src: sampleSvg,
                scaleStep: 0.5
              }}
            />
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs">
              {FILE_SIZES.svg} KB
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-2">
            {Math.round((1 - FILE_SIZES.svg/FILE_SIZES.png)*100)}% smaller than PNG
          </p>
        </div>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg">
        <h3 className="font-bold text-blue-800">Key Findings:</h3>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li>
            <strong>SVG</strong> remains perfectly sharp at any resolution
          </li>
          <li>
            <strong>PNG</strong> becomes pixelated when scaled up
          </li>
        </ul>
      </div>
    </Card>
  );
};

export default ImageOptimization;