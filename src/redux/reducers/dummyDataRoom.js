const RoomDummy =[
    {
      name: "Mobile Developer",
      image:"https://mk0buildfireqbf86ll2.kinstacdn.com/wp-content/uploads/2017/04/how-not-to-get-screwed-by-app-developers.jpg",
      badgeNumber:20,
      date: "10:11",
      member: "Ana, tina, Geofani and other",
      description: "Grup mobile Development"
    },
    {
      name: "Sport LA3",
      image:"https://www.cityskills.org/wp-content/uploads/2020/02/Piala-Dunia.jpg",
      badgeNumber:200,
      date: 'Yesterday 12:09',
      member: "Starla, Mina, Sandra and other",
      description: "Grup Pecinta NBA"
    },
    {
      name: "Management Keuangan",
      image:"https://media.istockphoto.com/photos/dollars-in-100-bills-in-a-mans-hand-closeup-on-a-dark-background-picture-id1227594879",
      badgeNumber:0,
      date: 'Sunday 12:09',
      member: "Sandika, Jo, Prawito and other",
      description: "Grup keuangan kantor"
    }
  ]

  const dataDummyRoom = (state = RoomDummy, action) => {

        switch(action.type) {
            case "ADD__ROOM":
                return [ ...state,
                action.data,
            ]
            case "REDUCE":
                return {
                    ...state,
                }
            default:
                return state;
        }
  }

  export default dataDummyRoom;