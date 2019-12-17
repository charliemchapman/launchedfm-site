import React from "react";
import Helmet from 'react-helmet';

export default ({title, description, image}) => { 
    title = title || "Launched";
    description = description || "Official website of the Launched podcast.";
    image = image || "https://charliemchapman-podcasts.s3.us-east-2.amazonaws.com/launched-beta/assets/launched_artwork-1024.jpg";

    return (
        <Helmet
            title= { title }
            meta={[
            { name: "description", content: description },
            { name: "keywords", content: "atownfm, podcast, Arnold, Missouri" },
            { name: "apple-itunes-app", content: "app-id=1491582246" },
            { property: "og:type", content: "website" },
            { property: "og:title", content: title },
            { property: "og:description", content: description },
            { property: "og:image", content: image },
            { property: "fb:app_id", content: "321000698338630" }
            ]}
        />
)};