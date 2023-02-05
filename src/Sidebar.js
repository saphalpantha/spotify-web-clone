import React from 'react'
import './Sidebar.css'
import SidebarOption from './sidebarOption'
import {HomeMaxOutlined} from "@mui/icons-material/"
import SearchIcon from "@mui/icons-material/SearchOffOutlined"
import LibraryMusicIcon from "@mui/icons-material/LibraryMusicOutlined"
import { useDataLayerValue } from './DataLayer'

const Sidebar = () => {
  const [{playlists}, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img className='sidebar__logo' src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt=""/>
      <SidebarOption Icon={HomeMaxOutlined} title="Home"/>
      <SidebarOption Icon={SearchIcon} title="Search"/>
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library"/>
      <br/>
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr/>
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name}/>
      )) }
      <SidebarOption title="Hip Pop"/>
      <SidebarOption title="Rock"/>
      <SidebarOption title="Hindi"/>
      <SidebarOption title="Nepali Pop"/>
      <SidebarOption title={"Lofi Songs"}/>
    </div>
  )
}

export default Sidebar