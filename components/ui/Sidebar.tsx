import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import DescriptionIcon from '@mui/icons-material/Description';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { useContext } from "react";
import { UIContext } from "../../context/ui";
import { useRouter } from "next/router";

interface MenuItem{
  text:string;
  icon: any;
  to: string;
}

const menuItems: MenuItem[] = [{text:"Sobre mi", icon:<EmojiPeopleIcon/> , to:"about"},{text:"CV",icon:<DescriptionIcon/>,to:"cv"},{text:"Contacto",icon:<EmailOutlinedIcon/>,to:"contact"}];

export const Sidebar = () => {

  const router= useRouter()
  const {sideMenuOpen,closeSideMenu} = useContext(UIContext)
  const handleMenuItem = (itemTo:string)=>{
    router.push(itemTo)
    closeSideMenu()
  }

  return (
    <Drawer anchor="left" open={sideMenuOpen} onClose={closeSideMenu}>
      <Box
        sx={{
          width: 250,
        }}
      >
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menú</Typography>
        </Box>
        <List>
          {menuItems.map((item, index) => (
            <ListItem button key={item.text} onClick={()=>handleMenuItem(item.to)}>
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
        <Divider />
{/*         <List>
          {menuItems.map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List> */}
      </Box>
    </Drawer>
  );
};
