import react , {Component} from 'react' ; 



class TeamMember extends Component { 

    
    render(){ 

        return(
            <div className='col-md-4 col-sm-6 ' >
                <div className = "card centeraize" style ={{borderColor : this.props.website ? '' : 'red' , 
                                                backgroundColor : this.props.email ? '' : 'dodgerblue' }  }>
                    <div>
                    <div className = 'card-header centeraize'> 
                        <img style={{maxWidth :"100%"}} src={this.props.img} className='border border-light' alt ="pic" />
                    </div>

                    <div className='card-body text-center'> 
                        <h2 className = "">{this.props.name}</h2>
                        <h5 className = "">{this.props.jop}</h5>
                        <p>{this.props.phone}</p>
                        <p>{this.props.email}</p>
                        <p>{this.props.website}</p>
 
                    </div>
                    </div>
                </div>

            </div>
        ) ; 
    }
}

export default TeamMember ; 