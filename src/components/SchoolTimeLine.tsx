import React from 'react';
import config from '../../src/config/index.json';

const SchoolTimeLine = () => {
  const { education } = config;
  const academicInfo = education.school;
  return (
<div className="w-full px-4 text-gray-900">
	<div className="tree-wrapper relative md:w-[10px] min-h-[50vh] md:mx-auto ">
		<div
			className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
			<div
				className="p-4 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
				HS</div>
			<div className="details md:max-w-sm p-6 shadow-lg rounded-md my-3">
				<div className="text-2xl font-abc font-bold ">{academicInfo[0].institutionName}</div>
        <div className='text-xl font-abc font-semibold'>{academicInfo[0].bachelorDegree}</div>
        <div className="location">{academicInfo[0].address}</div>
				<div className='flex gap-5 p-3 justify-center'>
          <div className="starting-year">2017</div>
          <div className="graduation-year">2020</div>
        </div>
			</div>
		</div>
		<div
			className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
			<div
				className="pointer p-4 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0">
				U</div>
        <div className="details md:max-w-sm p-6 shadow-lg rounded-md my-3">
				<div className=" text-2xl font-abc font-bold">{academicInfo[1].institutionName}</div>
        <div className='text-xl font-abc font-semibold'>{academicInfo[1].bachelorDegree}</div>
				<div className="location">{academicInfo[1].address}</div>
				<div className='flex gap-5 p-3 justify-center'>
          <div className="starting-year">2020</div>
          <div className="graduation-year">2024</div>
        </div>
			</div>
		</div>
		<div
			className="flex md:flex-row flex-col md:items-center md:gap-2 group  relative top-0 md:left-1/2 md:right-1/2 md:even:translate-x-[-100%] even:translate-x-0 md:w-max w-full z-[1]">
			<div className="pointer p-4 bg-gray-100 aspect-square w-[70px] flex items-center justify-center rounded-full md:group-even:order-2 group-even:order-none md:group-odd:-translate-x-1/2 md:translate-x-1/2 translate-x-0 mx-auto md:mx-0"></div>
        <div className="details md:max-w-sm p-6 shadow-lg rounded-md my-3">
				<div className=" text-2xl font-abc p-2 font-bold">{academicInfo[2].institutionName}</div>
        <div className='text-xl font-abc font-semibold'>{academicInfo[2].bachelorDegree}</div>
				<div className="location">{academicInfo[2].address}</div>
				<div className='flex gap-5 p-3 justify-center'>
          <div className="starting-year">2022</div>
          <div className="graduation-year">2024</div>
        </div>
			</div>
		</div>
	</div>
</div>
  );
};

export default SchoolTimeLine;
