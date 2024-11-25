import { useState } from "react";
import DownloadIcon from "../Components/DownloadIcon";

export default function Contact() {
  const [isDownloaded, setIsDownloaded] = useState(false);

  const onDownloadClick = () => {
    if (!isDownloaded) {
      fetch("Joe Winter CV.pdf").then((response) => {
        response.blob().then((blob) => {
          const fileURL = window.URL.createObjectURL(blob);

          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = "Joe Winter CV.pdf";
          alink.click();
        });
      });
      setIsDownloaded(true);
    }
  };
  return (
    <div className="flex: justify-center p-96">
      <h4 className="text-black dark:text-white">Let&apos;s Get In Touch!</h4>
      <div>
        <span className="text-black dark:text-white">Feel free to download my CV </span>
        <button onClick={onDownloadClick}>
          <DownloadIcon downloaded={isDownloaded} />
        </button>
      </div>
    </div>
  );
}
