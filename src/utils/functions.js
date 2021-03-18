import Moment from 'react-moment';

export const formatDate = (date) => <Moment format="MMMM Do, YYYY">{date}</Moment>;

export const readTime = (content) => {
    const wordsPerMinute = 200;
    const words = content.split(" ").length;
    
    return Math.ceil(words / wordsPerMinute);
};

export const searchText = (text, content) => {
    let index = 0;
    let found = false;
    const words = [...new Set(text.trim().split(" "))];
    
    while(!found && index < words.length) {
        found = content.toLowerCase().includes(words[index].toLowerCase());
        index++;
    }

    return found;
};