import { useDispatch, } from "react-redux";
import { Appdispatch } from "../app/store/store";





// export const useAppdispatch = () => useDispatch();


export const useAppdispatch = () => useDispatch<Appdispatch>

