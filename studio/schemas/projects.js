export default{
    name: "projects",
    title: "Projects",
    type: "document",
    fields: [{
        name: "title",
        type: "string",
    },{
        name: "date",
        type: "datetime",
    },{
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },{
        name:"description",
        type:"text",
    },{
        name: "projectsType",
        title: "Projects type",
        type: "string",
        options: {
            list:[
                {value: "personal", title: "Personal"},
                {value: "client", title: "Client"},
                {value: "school", title: "School"},
            ]
        }
    },{
        name: "link",
        type: "url",
    },{
        name: "tags",
        type: "array",
        of: [
            {type: "string"}
        ],
        options: {
            layout: "tags",
        }
    },
],
};