import CustomerList from "../../pages/customerlist/customerlist";
import CustomerView from "../../pages/customerview/customerview";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import PeopleIcon from '@mui/icons-material/People';

const navLinks = [
    {
      name:'Customer View',
      key:'customerview',
      component:<CustomerView/>,
      path:'/customerview',
      icon:<AccountBoxIcon/>
    },
    {
      name:'Customer List',
      key:'customerlist',
      component:<CustomerList/>,
      path:'/customerlist',
      icon:<PeopleIcon/>
    }

  ]


  export default navLinks;