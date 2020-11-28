import React, { Component } from 'react';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionMaps from 'fusioncharts/fusioncharts.maps';
import World from 'fusioncharts/maps/fusioncharts.world';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionMaps, World, FusionTheme);

const postByAge = {
  chart: {
    caption: "Post readership by age bracket",
    plottooltext: "<b>$percentValue</b> of readers are in this $label",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "(0-20)",
      value: "10"
    },
    {
      label: "(20-40)",
      value: "40"
    },
    {
      label: "(40-60)",
      value: "40"
    },
    {
      label: "(60-80)",
      value: "10"
    }
  ]
};

const postByCountry = {
  chart: {
    caption: "Posts readership by country",
    plottooltext: "<b>$percentValue</b> of readers are in this $label",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "India",
      value: "50"
    },
    {
      label: "USA",
      value: "30"
    },
    {
      label: "Germany",
      value: "10"
    },
    {
      label: "France",
      value: "10"
    }
  ]
};

const postReadershipTechnical = {
  chart: {
    caption: "Technical Posts with most readership",
    subcaption: "In MM = One Million Readers",
    xaxisname: "Post",
    yaxisname: "Readers (MM)",
    numbersuffix: "MM",
    theme: "candy"
  },
  data: [
    {
      label: "Angular",
      value: "500"
    },
    {
      label: "React",
      value: "400"
    },
    {
      label: "Vue",
      value: "300"
    },
    {
      label: "JS",
      value: "200"
    },
    {
      label: "CSS",
      value: "100"
    }
  ]
};


const postReadershipNonTechnical = {
  chart: {
    caption: "Non Technical Posts with most readership",
    subcaption: "In MM = One Million Readers",
    xaxisname: "Post",
    yaxisname: "Readers (MM)",
    numbersuffix: "MM",
    theme: "fusion"
  },
  data: [
    {
      label: "Tom Cruise",
      value: "500"
    },
    {
      label: "Kitten",
      value: "400"
    },
    {
      label: "My Own Blog",
      value: "300"
    },
    {
      label: "Sushant",
      value: "200"
    },
    {
      label: "Tom Hanks",
      value: "100"
    }
  ]
};

class PostStats extends Component { 

  constructor(props) {
    window.scrollTo(0, 0)
    super(props);
    this.state = {
      statsType: 'Demographic Information'
    }
  }

  render() {
    let demographicInfo = (<><div className="row ccc">
    <div className="stats-card col-md-6">
      <ReactFC
          type="pie2d"
          width="90%"
          height="90%"
          dataFormat="JSON"
          dataSource={postByAge}
        />
    </div>
    <div className="stats-card col-md-6">
      <ReactFC
          type="pie2d"
          width="90%"
          height="90%"
          dataFormat="JSON"
          dataSource={postByCountry}
        />
    </div>
  </div>
  </>);


let topRatedPosts = (<><div className="row ccc">

    <div className="stats-card col-md-6">
      <ReactFC
        type="column2d"
        width="100%"
        height="100%"
        dataFormat="JSON"
        dataSource={postReadershipNonTechnical}
      />
    </div>

    <div className="stats-card col-md-6">
      <ReactFC
          type="column2d"
          width="100%"
          height="100%"
          dataFormat="JSON"
          dataSource={postReadershipTechnical}
        />
    </div>
  </div>
  </>);
    return (
            <>
              <br></br><br></br><br></br>
              <div className="form-group">
                <select className="form-control" onChange={(e) => {
                  this.setState({
                    statsType: e.target.value
                  })
                }}>
                  <option value="Demographic Information">Demographic Information of posts</option>
                  <option value="Top viewed posts">Top rated posts</option>
                </select> 
              </div>
            {this.state.statsType === 'Demographic Information' && demographicInfo}
            {this.state.statsType === 'Top viewed posts' && topRatedPosts}
            </>

    );
  }
}

export default PostStats;
