import { useState } from "react";
import "./Timeline.css";
import { useEffect } from "react";

const Timeline = () => {
  const [screenSize, setScreenSize] = useState(1200);

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="timeline">
      <div className="topTimelineTexts">
        <h2>Timeline</h2>
        <p>
          Here is the breakdown of the time we anticipate using for the upcoming
          event.
        </p>
      </div>
      {screenSize > 576 && (
        <div className="mainTimeline">
          <div className="timelineRow">
            <div className="groupOne">
              <h3>Hackathon Announcement</h3>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
            </div>
            <div className="groupTwo">
              <div className="timelineShapes">
                <div className="horizontalRule special"></div>
                <div className="circle">
                  <p className="timelineCircleP">1</p>
                </div>
              </div>
              <h3 className="normalH2">November 18, 2023</h3>
            </div>
          </div>

          <div className="timelineRow">
            <div className="groupOne mali">
              <h3>Teams Registration begins</h3>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
            </div>
            <div className="groupTwo mali2">
              <div className="timelineShapes mobad">
                <div className="horizontalRule"></div>
                <div className="circle">
                  <p className="timelineCircleP">2</p>
                </div>
              </div>
              <h3 className="rotationalH2">November 18, 2023</h3>
            </div>
          </div>
          {/* {Group 2} */}
          <div className="timelineRow">
            <div className="groupOne">
              <h3>Teams Registration ends</h3>
              <p>Interested Participants are no longer Allowed to register</p>
            </div>
            <div className="groupTwo">
              <div className="timelineShapes">
                <div className="horizontalRule"></div>
                <div className="circle">
                  <p className="timelineCircleP">3</p>
                </div>
              </div>
              <h3 className="normalH2">November 18, 2023</h3>
            </div>
          </div>

          <div className="timelineRow">
            <div className="groupOne mali">
              <h3>Announcement of the accepted teams and ideas</h3>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
            </div>
            <div className="groupTwo mali2">
              <div className="timelineShapes mobad">
                <div className="horizontalRule"></div>
                <div className="circle">
                  <p className="timelineCircleP">4</p>
                </div>
              </div>
              <h3 className="rotationalH2">November 18, 2023</h3>
            </div>
          </div>

          {/* {Group 3} */}
          <div className="timelineRow">
            <div className="groupOne">
              <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
            </div>
            <div className="groupTwo">
              <div className="timelineShapes">
                <div className="horizontalRule"></div>
                <div className="circle">
                  <p className="timelineCircleP">5</p>
                </div>
              </div>
              <h3 className="normalH2">November 18, 2023</h3>
            </div>
          </div>

          <div className="timelineRow">
            <div className="groupOne mali">
              <h3>Demo Day</h3>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
            </div>
            <div className="groupTwo mali2">
              <div className="timelineShapes mobad">
                <div className="horizontalRule"></div>
                <div className="circle">
                  <p className="timelineCircleP">6</p>
                </div>
              </div>
              <h3 className="rotationalH2">November 18, 2023</h3>
            </div>
          </div>
        </div>
      )}
      {screenSize < 576 && (
        <div className="responsiveTimeline">
          <div className="responsiveRow">
            <div className="timelineShapes">
              <div className="horizontalRule special"></div>
              <div className="circle">
                <p className="timelineCircleP">1</p>
              </div>
            </div>
            <div className="responsiveTT">
              <h3>Hackathon Announcement</h3>
              <p>
                The getlinked tech hackathon 1.0 is formally announced to the
                general public and teams begin to get ready to register
              </p>
              <h2>November 18, 2023</h2>
            </div>
          </div>
          <div className="responsiveRow">
            <div className="timelineShapes">
              <div className="horizontalRule special"></div>
              <div className="circle">
                <p className="timelineCircleP">2</p>
              </div>
            </div>
            <div className="responsiveTT">
              <h3>Teams Registration begins</h3>
              <p>
                Interested teams can now show their interest in the getlinked
                tech hackathon 1.0 2023 by proceeding to register
              </p>
              <h2>November 18, 2023</h2>
            </div>
          </div>
          <div className="responsiveRow">
            <div className="timelineShapes">
              <div className="horizontalRule special"></div>
              <div className="circle">
                <p className="timelineCircleP">3</p>
              </div>
            </div>
            <div className="responsiveTT">
              <h3>Teams Registration ends</h3>
              <p>Interested Participants are no longer Allowed to register</p>
              <h2>November 18, 2023</h2>
            </div>
          </div>
          <div className="responsiveRow">
            <div className="timelineShapes">
              <div className="horizontalRule special"></div>
              <div className="circle">
                <p className="timelineCircleP">4</p>
              </div>
            </div>
            <div className="responsiveTT">
              <h3>Announcement of the accepted teams and ideas</h3>
              <p>
                All teams whom idea has been accepted into getlinked tech
                hackathon 1.0 2023 are formally announced
              </p>
              <h2>November 18, 2023</h2>
            </div>
          </div>
          <div className="responsiveRow">
            <div className="timelineShapes">
              <div className="horizontalRule special"></div>
              <div className="circle">
                <p className="timelineCircleP">5</p>
              </div>
            </div>
            <div className="responsiveTT">
              <h3>Getlinked Hackathon 1.0 Offically Begins</h3>
              <p>
                Accepted teams can now proceed to build their ground breaking
                skill driven solutions
              </p>
              <h2>November 18, 2023</h2>
            </div>
          </div>
          <div className="responsiveRow">
            <div className="timelineShapes">
              <div className="horizontalRule special"></div>
              <div className="circle">
                <p className="timelineCircleP">6</p>
              </div>
            </div>
            <div className="responsiveTT">
              <h3>Demo Day</h3>
              <p>
                Teams get the opportunity to pitch their projects to judges. The
                winner of the hackathon will also be announced on this day
              </p>
              <h2>November 18, 2023</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Timeline;
