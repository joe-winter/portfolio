
const ExternalLinkButton = ({url, content}) => {
  return (
    <div>
      <button onClick={window.open(url)}>
        {content}
      </button>
    </div>
  )
}

export default ExternalLinkButton