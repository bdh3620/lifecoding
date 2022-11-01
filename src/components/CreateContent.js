import React, { Component } from 'react';

class CreateContent extends Component{
    render(){
      return (
        <article>
          <h2>Create</h2>
               <form action="/create_process" method="post"
                onSubmit={function(e){
                  e.preventDefault();
                 
                 
                  this.props.onSubmit(
                    //input과 textarea의 입력값들은 아래처럼 접근할 수 있음
                    e.target.title.value,
                    e.target.desc.value
                  )
                  
                  alert("submit");

                }.bind(this)}
               >
                 {} 
                   <p><input type = 'text' name='title' placeholder="title"></input></p>
                   {}
                   <p>
                     <textarea name="desc" placeholder="description"></textarea>
                     {}
                   </p>
                   <p>
                     <input type="submit"></input>
                     {}
                   </p>
               </form>
        </article>
      );
    }
}
export default CreateContent;