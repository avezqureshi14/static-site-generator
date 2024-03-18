import React from 'react';

const Cover = ({ coverFields }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Cover</h3>
            <div className="grid gap-4">
                <div>
                    <label htmlFor="trailer_video" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{coverFields.trailer_video.label}</label>
                    <input
                        type={coverFields.trailer_video.type}
                        id="trailer_video"
                        name="trailer_video"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={coverFields.trailer_video.placeholder}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="trailer_video_thumbnail" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{coverFields.trailer_video_thumbnail.label}</label>
                    <input
                        type={coverFields.trailer_video_thumbnail.type}
                        id="trailer_video_thumbnail"
                        name="trailer_video_thumbnail"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder={coverFields.trailer_video_thumbnail.placeholder}
                        required
                    />
                </div>
            </div>
        </div>
    );
};

export default Cover;
