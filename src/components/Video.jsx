
const Video = () => {
  const greenBarStyle = {
    height: '5px',
    backgroundColor: 'green',
  };

  const videoContainerStyle = {
    paddingTop: '10px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '20px',
  };

  return (
    <div>
      <div style={greenBarStyle}></div>
      <div style={videoContainerStyle}>
        <iframe
          className="responsive-video"
          src="https://www.youtube.com/embed/4CQUl9IoKiU?si=sbOizxb37yiF63hO"
          title="YouTube video 1"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>

        <iframe
          className="responsive-video"
          src="https://www.youtube.com/embed/csZxnUNrRIg?si=kJvyPCac-tkSVOuL"
          title="YouTube video 2"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Video;

