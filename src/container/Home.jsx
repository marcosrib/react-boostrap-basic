import React, { Component } from 'react'
import HomeCard from '../ui/HomeCard';
import {hashHistory} from 'react-router';

export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: 'backlog',
            text: 'testeando state',
            action: () => hashHistory.push('/BackLog')
        }
    }
   

    HomeCardReleases = {
        title: 'releases',
        text: 'manager release',
        action: () => hashHistory.push('/releases')
    }
    HomeCardSprits = {
        title: 'sprits',
        text: 'manager sprits',
        action: () => hashHistory.push('/Sprints')
    }
    HomeCardBacklog = {
        title: 'backlog',
        text: 'manager backlog',
        action: () => hashHistory.push('/BackLog')
    }


    render() {    
        return (
            <div className="container text-center" style={{ padding: '10px' }}>
                <div className="row">
                    <HomeCard title={this.HomeCardReleases.title}
                        text={this.HomeCardReleases.text}
                        action={this.HomeCardReleases.action}
                    />
                    <HomeCard  {...this.HomeCardSprits} />
                    <HomeCard  {...this.state} />
                </div>
            </div>
        )

    }
}