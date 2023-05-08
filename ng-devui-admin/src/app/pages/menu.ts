export default function (values: any) {
  return [
    // Dashboared
    {

      title: values['dashboard']['title'],
      link: '/pages/dashboard/monitor',
      menuIcon: 'icon icon-console',
    },

    //Gestion Municipality 
    {
      title: "Municipality",
      children: [
        { title: "Municipality List", link: '/pages/list/municipalityList' },
        
        { title: "Municipality List Management", link: '/pages/list/advance' },
        { title: "Add New Municipality", link: '/pages/form/municipalityForm' },
      ],
      link: '/pages/list',
      menuIcon: 'icon icon-table',
    },

    // Gestion admin
    {
      title: "Admins",
      children: [
        { title: "Admins List", link: '/pages/list/adminList' },
        { title: "Admins List Management", link: '/pages/list/advance' },
        { title: "Add New Admins", link: '/pages/form/adminForm' },
      ],
      link: '/pages/list',
      menuIcon: 'icon icon-mine',
    },

    // Gestion User
    {
      title: "Users",
      children:[
        { title: "User List", link: '/pages/list/userList' },
        { title: "User By Municipality", link: '/pages/list/tree' },
      ],
      link: '/pages/list/',
      menuIcon: 'icon icon-mine',
    },

  // Gestion Demande

  {
    title: "Demands",
    children:[
      { title: "Demand List", link: '/pages/list/demandList' },
    ],
    link: '/pages/list/',
    menuIcon: 'icon icon-table',
  },
  {
    title: "Profile",
    children: [
      // { title: values['user']['center'], link: '/pages/user/center' },
      { title: "Profile Settings", link: '/pages/user/settings' },
    ],
    link: '/pages/user',
    menuIcon: 'icon icon-mine',
  },

    // {
    //   title: values['form']['title'],
    //   children: [
    //     {
    //       title: values['form']['basicForm'],
    //       link: '/pages/form/basic-form',
    //     },
    //     // {
    //     //   title: values['form']['formLayout'],
    //     //   link: '/pages/form/form-layout',
    //     // },
    //     // {
    //     //   title: values['form']['advancedForm'],
    //     //   link: '/pages/form/advanced-form',
    //     // },
    //     // {
    //     //   title: values['form']['dynamicForm'],
    //     //   link: '/pages/form/dynamic-form',
    //     // },
    //   ],
    //   link: '/pages/form',
    //   menuIcon: 'icon icon-modify',
    // },
    
    // {
    //   title: values['list']['title'],
    //   children: [
    //     { title: values['list']['basicList'], link: '/pages/list/basic' },
    //     // { title: values['list']['cardList'], link: '/pages/list/card' },
    //     // {
    //     //   title: values['list']['editableList'],
    //     //   link: '/pages/list/editable',
    //     // },
    //     { title: values['list']['advanceList'], link: '/pages/list/advance' },
    //     // { title: values['list']['treeList'], link: '/pages/list/tree' },
    //   ],
    //   link: '/pages/list',
    //   menuIcon: 'icon icon-table',
    // },
    // {
    //   title: values['abnormal']['title'],
    //   children: [
    //     { title: '403', link: '/pages/abnormal/abnormal403' },
    //     { title: '404', link: '/pages/abnormal/abnormal404' },
    //     { title: '500', link: '/pages/abnormal/abnormal500' },
    //   ],
    //   link: '/pages/abnormal',
    //   menuIcon: 'icon icon-unload',
    // },
    
  ];
}
