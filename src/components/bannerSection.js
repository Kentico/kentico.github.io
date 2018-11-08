import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BannerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: true
    }
  }

  render() {
    const leaderBoardUsers = [{
      login: 'KristianJakubik',
      name: 'Kristián Jakubík',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28342527?v=4',
      number_of_pull_requests: 5
    },
    {
      login: 'RichardKalinec',
      name: 'Richard Kalinec',
      avatar_url: 'https://avatars1.githubusercontent.com/u/12047140?v=4',
      number_of_pull_requests: 5
    },
    {
      login: 'DhruvamSharma',
      name: 'Dhruvam',
      avatar_url: 'https://avatars1.githubusercontent.com/u/18664195?v=4',
      number_of_pull_requests: 3
    }];



    const leaderBoardData = leaderBoardUsers.map(user =>
      <div key={user.login} className="person">
        <a href={`https://github.com/${user.login}`}>
          <img src={user.avatar_url} alt={`${user.login}'s avatar}`} />
          <p>
            <strong>{user.name} ({user.login})</strong>
            {user.number_of_pull_requests} pull requests
        </p>
          <div className="clear"></div>
        </a>
      </div>);

    const leaderBoard = <div className="box-50">
      <h4>Leaderboard</h4>
      {leaderBoardData}
    </div>

    const additionalContent = <div>
      <div className="row-flex">
        <div className="box-50 text">
          <p dangerouslySetInnerHTML={{ __html: this.props.data.side_text.value }}></p>
          <div className="brno"
            dangerouslySetInnerHTML={{ __html: this.props.data.main_text.value }}
            style={{
              background: `url(${this.props.data.icon.assets[4].url}) center left no-repeat`,
              backgroundSize: '50px'
            }}></div>
        </div>
        {leaderBoard}
      </div>
    </div>;


    return (
      <section className="fourth" id="hacktoberfest" style={{
        background: `#582D40 url(${this.props.data.section_info__background_image.assets[0].url}) top center no-repeat`
      }}>
        <div className="row-flex">
          <div className="box-100">
            <img src={this.props.data.icon.assets[3].url} alt="Hacktoberfest" className="hacktoberfest" />
            <h2>{this.props.data.section_info__title.text}</h2>
            <h3>{this.props.data.section_info__subtitle.text}</h3>
            {this.state.collapsed && <span className="btn" onClick={() => this.setState({collapsed: false})}>more</span>}
          </div>
        </div>
        {!this.state.collapsed && additionalContent}
        <div className="row-flex">
          <div className="box-100 partners">
            <img className="logo-do" src={this.props.data.icon.assets[0].url} alt="" />
            <img className="logo-git" src={this.props.data.icon.assets[1].url} alt="" />
            <img className="logo-tw" src={this.props.data.icon.assets[2].url} alt="" />
          </div>
        </div>
      </section>
    );
  }
}

BannerSection.propTypes = {
  data: PropTypes.shape({
    section_info__title: PropTypes.object,
    section_info__subtitle: PropTypes.object,
    section_info__background_image: PropTypes.object,
    icon: PropTypes.object,
    main_text: PropTypes.object,
    side_text: PropTypes.object
  }),
};

export default BannerSection;