import React, { Fragment } from 'react'
import {page_blocks} from './data'
import Swiper from 'react-id-swiper';
import { SocialIcon } from 'react-social-icons';
import contentEditable from './contentEditable';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data:page_blocks,
            editing_block:"header_logo"
        }
    }


    handleClick = (block,index) =>{
        this.setState({editing_block:block,index})
    }

    handleImage = (e,editing_block) =>{
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        if (e.target.files.length === 0) {
        return;
        }
        reader.onloadend = (e) => {
            let state = this.state.data
            state[editing_block].image = [reader.result]
        this.setState({state});
        }
        reader.readAsDataURL(file);
    }

    handleVideo = (e,editing_block) =>{
        e.preventDefault();
        let file = e.target.files[0];
        let reader = new FileReader();
        if (e.target.files.length === 0) {
        return;
        }
        reader.onloadend = (e) => {
            let state = this.state.data
            state[editing_block].video = [reader.result]
        this.setState({state});
        }
        reader.readAsDataURL(file);
    }

    handleRange=(e,editing_block)=>{
        let state = this.state.data
        state[editing_block].slider = e.target.value
        this.setState({state});
    }

    handleURL=(e,editing_block,index)=>{
        let state = this.state.data
        if(Array.isArray(state[editing_block].array)){
            state[editing_block].array[index].url = e.target.value
            this.setState({state});
        }else{
            state[editing_block].url = e.target.value
            this.setState({state});
        }
    }

    handleText=(e,editing_block,key)=>{
        console.log('test')
        let state = this.state.data
        state[editing_block].key = e.target.value
        this.setState({state});
    }


    render() {
        console.log(this.state)
        let data = this.state.data
        let index = this.state.index
        let editing_block = this.state.editing_block

        let Editable = contentEditable('div')

        const params = {
            slidesPerView: 3,
            spaceBetween: 20,
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
          };
        return (
            <Fragment>
                <div className="preview_wrap">
                    <div>Preview Page</div>
                </div>
                <div className="editor_container">
               {
                   data[editing_block].editor.indexOf("change_image")!== -1?
                   <div className="change_image flex_center">
                       <div>Choose Image:</div>
                       <input type="file" onChange={(e)=>{this.handleImage(e,editing_block)}}/>
                   </div>:null
               }
               {
                   data[editing_block].editor.indexOf("change_video")!== -1?
                   <div className="change_video flex_center">
                       <div>Choose Video:</div>
                       <input type="file" onChange={this.handleVideo}/>
                   </div>:null
               }
               {
                   data[editing_block].editor.indexOf("size")!== -1?
                   <div className="size flex_center">
                       <div>Size:</div>
                       <input onChange={(e)=>this.handleRange(e,editing_block)} type="range" min="1" max="200" defaultValue={data[editing_block].slider} className="slider" id="myRange"/>
                   </div>:null
               }
               {
                   data[editing_block].editor.indexOf("url")!== -1?
                   <div className="url flex_center">
                       <div>Link URL:</div>
                       <input type="text" value={Array.isArray(data[editing_block].array)?data[editing_block].array[index].url:data[editing_block].url} onChange={(e)=>this.handleURL(e,editing_block,index)}/>
                   </div>:null
               }
                </div>
                <div className="container">
                    <div className="header_nav">
                        <div tabIndex="1"  id="header_logo" onClick={()=>this.handleClick("header_logo")} className="header_logo">
                            <a tabIndex="1"  href="#">
                            <img src={data.header_logo.image} alt="Header logo" width={data.header_logo.width*(data.header_logo.slider*0.01)} height={data.header_logo.height*(data.header_logo.slider*0.01)}/>
                            </a>
                        </div>
                        <div className="social_icons_and_contact_wrap">
                            <div id="social_icons" className="social_icons">
                                {Object.values(data.social_icons.array).map((value, index)=>
                                    <SocialIcon  tabIndex="1"  onClick={()=>{this.handleClick("social_icons",index)}} key={index} network={value.name} style={{width:value.width*(data.social_icons.slider*0.01),height:value.height*(data.social_icons.slider*0.01),margin:10}}/>
                                )}
                            </div>
                            <div onClick={()=>this.handleClick("contact")} tabIndex="1"  id="contact" className="contact">
                                    <Editable value={data.contact.name} onChange={(e)=>{this.handleText(e,"contact","name")}}/>
                                    <Editable value={data.contact.designation}/>
                                    <Editable value={data.contact.email}/>
                                    <Editable value={data.contact.phone}/>
                            </div>
                        </div>
                    </div>
                    <div className="bottom_container">
                        <div tabIndex="1"  onClick={this.handleClick}  id="header_text" className="header_text">
                            <div style={{fontSize:data.header_text.title_font_size}} className="title">{data.header_text.title}</div>
                            <div style={{fontSize:data.header_text.subtitle_font_size}} className="subtitle">{data.header_text.subtitle}</div>
                        </div>
                        <div tabIndex="1"  id="header_video" className="header_video">
                        <video onClick={this.handleClick}  className="videoplayer" width={data.header_video.width} controls>
                            <source src={data.header_video.source} type="video/mp4"/>
                        </video>
                        </div>
                        <div className="header_buttons">
                            {Object.values(data.header_buttons.array).map((value,index)=>
                                <a key={index} tabIndex="1"  onClick={this.handleClick}  id="button" width={value.width} height={value.height} className="button" href={value.url}>
                                    {value.name}
                                </a>
                            )}
                        </div>
                        <div tabIndex="1"  onClick={this.handleClick}  id="content_title" style={{fontSize:data.content_title.font_size}} className="content_title">
                            {data.content_title.title}
                        </div>
                        <div className="content_slider">
                            <Swiper {...params}>
                                {Object.values(data.content_slider.array).map((value, index)=>
                                    <div key={index} onClick={this.handleClick}  id="video_slider">
                                        <video className="videoplayer" width={value.width+"%"} controls>
                                            <source src={value.source} type="video/mp4"/>
                                    </video>
                                    </div>
                                )}
                            </Swiper>
                        </div>

                    </div>
                </div>
                <div tabIndex="1"  onClick={this.handleClick}  id="footer_text" className="footer_text">
                            {data.footer_text.text}
                </div>
                <div className="footer_buttons">
                    <div className="cancel">CANCEL</div>
                    <div className="save">SAVE AND NEXT</div>
                </div>
            </Fragment>
         );
    }
}

export default Home;