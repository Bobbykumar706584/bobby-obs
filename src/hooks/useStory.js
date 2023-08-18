import React,{ useState } from "react"

//Todo: document typesof stroy:first, middel, last

const useStory = () => {
    const [story, setStory] = useState([])
    const updateSection = (textValue, sectionId) => {
        const value = textValue.toString().replace(/[\n\r]/gm, '');
        const section = story[sectionId - 1];
        let newStory = {};
        if (Object.prototype.hasOwnProperty.call(section, 'title')) {
            newStory = {
            id: section.id,
            title: value,
            };
        } else if (Object.prototype.hasOwnProperty.call(section, 'text')) {
            newStory = {
            id: section.id,
            img: section.img,
            text: value,
            };
        } else if (Object.prototype.hasOwnProperty.call(section, 'end')) {
            newStory = {
            id: section.id,
            end: value,
            };
        }
    
        const newStories = story.map((item) => (item.id !== newStory.id ? item : newStory));
        let newData = { ...story };
        newData = newStories;
        setStory(newData);
        };

    return {
        state:{story},
        actions:{setStory, updateSection}
    }
}
export default useStory;