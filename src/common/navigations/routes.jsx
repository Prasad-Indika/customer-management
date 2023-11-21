import CustomerList from "../../pages/customerlist/customerlist";
import CustomerView from "../../pages/customerview/customerview";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const navLinks = [
    {
      name:'Customer View',
      key:'customerview',
      component:<CustomerView/>,
      path:'/customerview',
      icon:<InboxIcon/>
    },
    {
      name:'Customer List',
      key:'customerlist',
      component:<CustomerList/>,
      path:'/customerlist',
      icon:<MailIcon/>
    }

  ]


  export default navLinks;