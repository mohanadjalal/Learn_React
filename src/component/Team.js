import React,{Component} from 'react'
import TeamMember  from './TeamMember';
class Team extends Component { 
    constructor (){ 
        super() ; 
        this.state = {
             info :[{id:1  ,img:'https://picsum.photos/200' ,name : 'Mohannad Jayousi' ,jop : 'Programer',phone : '0597421443',email:'jaymohas@gamail.com',website: 'jay.com'},
                    {id:2  ,img:'https://picsum.photos/201' ,name : 'Mahmoud Jayousi' ,jop : 'Designer', phone : '0597458255',email:'darkola@gamail.com', website: ''},
                    {id:3  ,img:'https://picsum.photos/202' ,name : 'Hosam morad' ,jop : 'Web Designer',phone : '0598246551',email:'',website: 'hoso.com'},
                    {id:4  ,img:'https://picsum.photos/202' ,name : 'Anas saeed' ,jop : 'Photographer',phone : '',email:'Asaeed@hotmail.com',website: 'anaspic.com'},
                    {id:5  ,img:'https://picsum.photos/202' ,name : 'Anas saeed' ,jop : 'Photographer',phone : '',email:'Asaeed@hotmail.com',website: 'anaspic.com'},
                    {id:6  ,img:'https://picsum.photos/201' ,name : 'Mahmoud Jayousi' ,jop : 'Designer', phone : '0597458255',email:'darkola@gamail.com', website: ''}
                    ] 

        }
    }

    mapping(arr){
        return arr.map((member)=><TeamMember key = {member.id}
                            img = {member.img} 
                            name ={member.name} 
                            jop = {member.jop}
                            phone = {member.phone}
                            email = {member.email}
                            website = {member.website} 
                            />);

    }
 
    render(){
        
         
        return (
            <div className = "row bg-gray"> 
            {this.mapping(this.state.info)}
             
             
       </div>
        );
    }
}

export default Team ; 