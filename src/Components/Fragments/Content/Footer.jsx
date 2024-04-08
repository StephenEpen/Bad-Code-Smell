/* eslint-disable react/prop-types */
const Footer = (props) => {
    const {url} = props;
    return(
        <a className="flex justify text-sm underline pb-5" href={url}>{url}</a>
    );
};

export default Footer;