const ExternalLinkButton = ({ url, content }) => {
  const onClick = (url) => {
    window.open(url);
  };
  return (
    <div>
      <button onClick={() => onClick(url)}>{content}</button>
    </div>
  );
};

export default ExternalLinkButton;
