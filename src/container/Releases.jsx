import React, { Component } from 'react'
import ReleaseForm from '../ui/releaseFrom'
export default class Releases extends Component {
    constructor(props) {
        super(props)
        this.handleSubimit = this.handleSubimit.bind(this);
        this.remove = this.remove.bind(this);
        this.state = ({
            releases: []
        })
    }

    handleSubimit(e,{name, data}){
        e.preventDefault();

        var state =  this.state
        var myReleases = {
            id: state.releases.length  + 1,
            releaseName: name,
            releaseData: data,
        }

        this.setState({releases: state.releases.concat(myReleases)})
         var state1 = this.state;
        console.log(state1);
        
    }
    remove = (e) => {
       /* var myReleases = this.state.releases;
        myReleases.splice(e, 1)
        this.setState({releases: myReleases});
        */
       let arrayAtual = this.state.releases;
        console.log(e);
        
        arrayAtual.splice(e,1 );
        console.log(arrayAtual);
        this.setState({releases: arrayAtual})
        
    }

    render() {
        return (
            <div>
                <ReleaseForm submitHandler={this.handleSubimit}/>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Deletar</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.releases.map((release, index) => {
                            return (
                                <tr key={release.id}>
                                    <th   scope="row">{release.id}</th>
                                    <td>{release.releaseData}</td>
                                    <td>{release.releaseName}</td>
                                    <td><button type="button" onClick={()=> this.remove(index)} className="btn btn-outline-primary">Primary</button></td>

                                </tr>
                            )
                        })}

                    </tbody>
                </table>
            </div>
        )

    }
}