export default function Contact() {
  const onDownloadClick = () => {
    fetch("Joe Winter CV.pdf").then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Joe Winter CV.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <h4>Let&apos;s Get In Touch!</h4>
      <p>Feel free to download my CV</p>
      <button onClick={onDownloadClick}>Download</button>
    </>
  );
}
