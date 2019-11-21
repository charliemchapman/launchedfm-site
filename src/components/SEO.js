import React from "react";
import Helmet from 'react-helmet';

export default ({title, description, image}) => { 
    title = title || "Launched";
    description = description || "Official website of the Launched podcast.";
    image = image || "/launched_artwork.jpg";

    return (
        <Helmet
            title= { title }
            meta={[
            { name: "description", content: description },
            { name: "keywords", content: "atownfm, podcast, Arnold, Missouri" },
            { name: "apple-itunes-app", content: "app-id=1257353761" },
            { property: "og:type", content: "website" },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: image },
            { property: "fb:app_id", content: "321000698338630" }
            ]}
        />
)};