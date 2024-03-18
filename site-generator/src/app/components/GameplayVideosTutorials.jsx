import React from 'react';

const GameplayVideosTutorials = ({ gameplayVideosTutorials }) => {
    return (
        <div>
            <h3 className="mb-4 text-lg font-medium leading-none text-gray-900 dark:text-white">Gameplay Videos & Tutorials</h3>
            <div className="grid gap-4">
                {gameplayVideosTutorials.videos.map((video, index) => (
                    <div key={index}>
                        <label htmlFor={`video_${index}`} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{video.label}</label>
                        <input
                            type={video.type}
                            id={`video_${index}`}
                            name={`video_${index}`}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder={video.placeholder}
                            required
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GameplayVideosTutorials;
