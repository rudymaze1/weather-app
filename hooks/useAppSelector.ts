import { TypedUseSelectorHook, useSelector } from "react-redux";
import { Rootstate } from "../app/store/store";

export const useAppSelector : TypedUseSelectorHook<Rootstate> = useSelector;

