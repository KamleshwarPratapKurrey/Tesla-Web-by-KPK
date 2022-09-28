import React, { useState } from 'react'
import CardsCont from './CardsCont';
import NavBar from './NavBar';
import ProjectApis from './ProjectApis';
import './style.css';

const uniqueList = [
    ...new Set(ProjectApis.map((curElem) => {
        return curElem.category
    })),
    'All',
]
// console.log(uniqueList);

const MainCont = () => {

    const [menuData, setMenuData] = useState(ProjectApis);

    const [menuList, setMenuList] = useState(uniqueList);

    const filterItem = (category) => {

        if(category === 'All'){
            setMenuData(ProjectApis);
            return;
        }
        const updatedList = ProjectApis.filter((curElem) => {
            return curElem.category === category;
        })
        return setMenuData(updatedList);
    }



    return (
        <>
            <NavBar filterItem={filterItem}  menuList = {menuList}/>
            <CardsCont menuData={menuData} />
        </>

    )



}

export default MainCont