import React from "react";
import "./Home.scss";
//import VideoGrid from "../../components/VideoGrid/VideoGrid";
//import SideBar from "../SideBar/SideBar";
//import { HomeContent } from "./HomeContent/HomeContent";
import { connect } from "react-redux";
import * as videoActions from "../../store/actions/video";
import { bindActionCreators } from "redux";
import { getYoutubeLibraryLoaded } from "../../store/reducers/api";
import SideBar from "../../containers/SideBar/SideBar";
import { HomeContent } from "./HomeContent/HomeContent";

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <SideBar />
        <div className="home">
          <HomeContent />
        </div>
      </React.Fragment>
    );
  }

  /* ... */
  componentDidMount() {
    if (this.props.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos();
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.youtubeLibraryLoaded !== prevProps.youtubeLibraryLoaded) {
      this.props.fetchMostPopularVideos();
    }
  }
}

function mapStateToProps(state) {
  return {
    youtubeLibraryLoaded: getYoutubeLibraryLoaded(state)
  };
}

function mapDispatchToProps(dispatch) {
  const fetchMostPopularVideos = videoActions.mostPopular.request;
  return bindActionCreators({ fetchMostPopularVideos }, dispatch);
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);

// export default class Home extends Component {
//   render() {
//     return (
//       <React.Fragment>
//         <SideBar />
//         <HomeContent />
//         {/* <div className="home">
//           <div className="responsive-video-grid-container">
//             <VideoGrid title="Trending" />
//             <VideoGrid title="Autos & Vehicles" hideDivider={true} />
//           </div>
//         </div> */}
//       </React.Fragment>
//     );
//   }
// }
