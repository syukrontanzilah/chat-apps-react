const ContactDummy = [
  {
    name: "Hendika",
    status: "Online",
    image:"https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    lastmessage: "Iya teimaksih ya",
    badgeNumber: 2,
    date: "10:11",
    description: 'Marketing'
  },
  {
    name: "Siti Halimah Sadiah",
    status: "2 minutes ago",
    image:"https://i.pinimg.com/564x/d1/e0/2e/d1e02eb46bdcbc7efab0338f24904f17.jpg",
    lastmessage: "iya sampai kita ketemu lagi ya by my friend",
    badgeNumber: 0,
    date: 'Yesterday 12:09',
    description: 'Frontend Developer'
  },
]

  const dataDummy = (state = ContactDummy, action) => {
    console.log(action.type)
    console.log()
    switch (action.type) {
      case "ADD":
        return [...state, 
          action.data,
        ];
      case "REDUCE":
        return {
          ...state,
          // ...action.data,  
        };
      default:
        return state;
    }
  };
  
  export default dataDummy;
  