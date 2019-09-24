import React from 'react';

class SearchBox extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            initialItems:[],
            items:[]
        }
    }
   

    filterList = (event) =>{
        var items1 = this.state.initialItems;
        var items2=[];
        items2 = items1.filter((item)=>{
            if(item.toLowerCase().includes(event.target.value.toLowerCase())){
                return item;
            }    
        });
        if(items2==''){
            this.setState({items:['NOT FOUND']})
        }else{
            this.setState({items:items2});
        }
        
    }

    static getDerivedStateFromProps(props, state){
        if(state.items == ''){
            return {...state,items: props.content, initialItems: props.content}
        }
        
    }

    render(){      
        const {items} = this.state; 
        return(
            <div>
                <form>
                    <input type="text" className="form-control" placeholder="Search" onChange={this.filterList}/>
                </form>
                <ul style={{textAlign:'left'}}>
                    {                         
                        items.map(function(item,key){
                            return <li key={key} style={{padding:10,border:1}}> <h5>{item}</h5></li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default SearchBox;