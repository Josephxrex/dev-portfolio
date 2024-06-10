import React from 'react';

export interface TimelineItem {
    year: string;
    description: string;
    position: string;
    address:string;
    employer:string;
}

const Timeline: React.FC<{ items: TimelineItem[] }> = ({ items }) => {
    return (
        <section className="dark:text-gray-800 mt-20 max-w-5xl mx-auto">
            <div className="grid gap-4 mx-4 sm:grid-cols-12">
                <div className="col-span-12 sm:col-span-3">
                    <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:dark:bg-gray-400">
                        <h3 className=" text-5xl font-abc font-semibold">Experience</h3>
                        <span className="text-sm uppercase dark:text-gray-600">My professional journey</span>
                    </div>
                </div>
                <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                    <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-gray-500">
                                <h3 className="text-2xl font-abc font-semibold ">{item.position} at {item.employer}</h3>
                                <time className="text-xs tracking-wide uppercase dark:text-gray-600">{item.year}</time>
                                <p className="mt-3">{item.description}</p>
                                <p className="mt-1 text-sm dark:text-gray-600">{item.address}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;