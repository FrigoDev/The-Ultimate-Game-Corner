import getDBGames from "../utils/dbSocket";
import { debounceTimer } from "../constants/constants";
import { useState, useEffect,useRef,useCallback} from "react";
import { debounce } from "lodash";
import { Game } from "../types/Game";
import { useSearchParams } from "react-router-dom";
import { paramsToObject } from "../utils/paramsToObject";

const GAMES_PER_PAGE = 10;
const useGames = () => {
  const [params,setParams]=useSearchParams();
  const [games, setGames] = useState([]as Game[]);
  const [totalPages, setTotalPages] = useState(0);
  const {page,filter:paramfilter}=paramsToObject(params.entries());
  const [filter,setFilter]= useState<string>("");

  const prevGames=useRef([{
     page:"0",
     paramfilter,
     games,
     totalPages,
  },{
    page:"0",
    paramfilter,
    games,
    totalPages,
 }])

  useEffect(()=>{
    const isundef={} as {[key:string]:string};
    
    if(!page){
      isundef.page="1";
    }
    if(!paramfilter){
      isundef.filter="";
    }
   if(!page||!paramfilter){
    setParams({
      ...{page,filter:paramfilter},
      ...isundef
    })
   }
    setFilter(paramfilter?paramfilter:"");
 },[])
 const getGames = async () => {
  const cache=prevGames.current.find(oldPage=>oldPage.page===page);
  if(cache&&cache.paramfilter===paramfilter){
    setGames(cache.games);
    setTotalPages(cache.totalPages);
    return
  }
  if (page){
    const actualPage=Number(page)
    const { games: newGames, totalPages: total } = await getDBGames(actualPage, GAMES_PER_PAGE, paramfilter?paramfilter:"");
  if (actualPage < 1 && newGames.length > 0) {
    return 
  }
  setGames(newGames);
  setTotalPages(total);
  if (actualPage > total) {
    return //setPage(total);
  }

  }
};
const goOnePageBack = () => {
  if (Number(page)> 1) {
    prevGames.current[0] ={
      ...prevGames.current[0],
      games,
      paramfilter,
      page,
      totalPages
    }
    setParams({page:String( Number(page)-1),
      filter:paramfilter});
  }
};

const goOnePageForward = () => {
  if (Number(page) < totalPages) {
    prevGames.current[1] ={
      ...prevGames.current[1],
      games,
      paramfilter,
      page,
      totalPages
    }
    setParams({
      page:String( Number(page)+1),
      filter:paramfilter});
  }
};
 useEffect(()=>{
    setFilter(paramfilter?paramfilter:"");
    getGames();
    
  },[params])

const updateFilter = useCallback(debounce((newFilter:string) => {
    if (newFilter !== paramfilter &&newFilter!=="") {
      return setParams({
        page:"1",
        filter:newFilter
      })
    }
    if (newFilter==="" &&(paramfilter!=="")){
      return setParams({
        page:"1",
        filter:""
      })
    }
  }, debounceTimer),[params])
  useEffect(()=>updateFilter(filter!),[filter])
  return {
    games,
    page:Number(page),
    totalPages,
    goOnePageBack,
    goOnePageForward,
    updateFilter:setFilter,
    filter
   } 
}

export default useGames;