import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import './directory.styles.scss';

class Directory extends React.Component{
    constructor(){
        super();

        this.state = {
            sections :[
                {
                  title: 'Photography',
                  imageUrl: 'https://i.ibb.co/cK532fJ/download.jpg',
                  id: 1,
                  
                },
                {
                  title: 'Vintage',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,

                },
                {
                  title: 'Hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 3,
                  
                },
                {
                  title: 'Rock Climbing',
                  imageUrl: 'https://i.ibb.co/chnsrzc/rock-climbing7.jpg',
                  size: 'large',
                  id: 4,
                  
                },
                {
                  title: 'Kittens',
                  imageUrl: 'https://i.ibb.co/4s2mYLh/cat5.jpg',
                  size: 'large',
                  id: 5,
                 
                }
              ]
            }   
        }
            render(){
                return(
                    <div className='directory-menu'>
                         {
                            this.state.sections.map(({title, imageUrl, id, size}) =>(
                               <MenuItem key ={id} title={title} imageUrl={imageUrl} size ={size} />
                            ))
                        }
                    </div>
                );
            } 
        } 

export default Directory;