export const page_blocks = {
    header_logo:{
        image:require("../logo.svg"),
        url:"",
        width:200,
        height:100,
        slider:100,
        editor:["change_image", "size", "url"],
    },
    social_icons:{
        array:
        [
            {
                name:"facebook",
                url:"",
                icon:require("../logo.svg"),
                width:50,
                height:50,
            },
            {
                name:"twitter",
                url:"",
                icon:require("../logo.svg"),
                width:50,
                height:50,
            },
            {
                name:"google",
                url:"",
                icon:require("../logo.svg"),
                width:50,
                height:50,
            },
        ],
        slider:100,
        editor:["size", "url"]
    },
    contact:{
        name:"John doe",
        designation:"Sales Development Representative",
        email:"johndoe@gmail.com",
        phone:"7845124587",
        editor:['change_name', "change_designation", "change_email", "change_phone"]
    },
    header_text:{
        title:"The Lorem ipsum",
        subtitle:"The Lorem ipsum The Lorem ipsum The Lorem ipsum The Lorem ipsum The Lorem ipsum The Lorem ipsum ",
        title_font_size:"30px",
        subtitle_font_size:"18px",
        editor:['change_title','change_subtitle','font_size']
    },
    header_video:{
        source:"http://augmo.net/videos/ciaz.mp4",
        width:"100%",
        editor:['change_video', 'size']
    },
    header_buttons:{
        array:[
            {
                name:"Button 1",
                url:"",
                width:100,
                height:50,
            },
            {
                name:"Button 2",
                url:"",
                width:100,
                height:50,
            },
            {
                name:"Button 3",
                url:"",
                width:100,
                height:50,
            }
        ],
        editor:['add_button', 'url', 'size', 'change_name']
    },
    content_title:{
        title:"The Lorem ipsum",
        font_size:"14px"
    },
    content_slider:{
        array:[
            {
                source:"http://augmo.net/videos/ciaz.mp4",
                width:100
            },
            {
                source:"http://augmo.net/videos/ciaz.mp4",
                width:100
            },
            {
                source:"http://augmo.net/videos/ciaz.mp4",
                width:100
            },
            {
                source:"http://augmo.net/videos/ciaz.mp4",
                width:100
            }
        ],
        editor:['url']
    },
    footer_text:{
        text:"The Lorem ipsum The Lorem ipsum The Lorem ipsum The Lorem ipsum The Lorem ipsum The Lorem ipsum The Lorem ipsum The Lorem ipsum",
        editor:['change_text']
    }
}
