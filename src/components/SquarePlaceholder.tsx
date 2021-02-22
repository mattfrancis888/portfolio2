import React from "react";
import ContentLoader from "react-content-loader";

const SquarePlaceholder = (props: any) => (
    <ContentLoader
        speed={2}
        width={1500}
        height={1500}
        viewBox="0 0 1500 1500"
        backgroundColor="#181818"
        foregroundColor="#252525"
        {...props}
    >
        <rect x="0" y="60" rx="2" ry="2" width="1500" height="1500" />
    </ContentLoader>
);

export default SquarePlaceholder;
