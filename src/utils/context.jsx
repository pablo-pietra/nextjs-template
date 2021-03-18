import React from 'react';

const SiteContext = React.createContext({
    title: "",
    setTitle: value => {},
});

export default SiteContext;