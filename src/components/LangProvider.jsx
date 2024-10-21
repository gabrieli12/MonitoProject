import { useState, createContext, useContext } from "react";
import { languages, langArr } from "../data/lang/script";
import { useForm } from "react-hook-form";
import { useLocation  } from "react-router-dom";



export const LangContext = createContext();

export const LangProvider = ({ children }) => {
    let [selectedLang, setSelectedLang] = useState(languages[0]);
    let [langSwitch, setLangSwitch] = useState(false);
    let [selectLang, setSelectLang] = useState(langArr[0]);
    let [otherLang, setOtherLang] = useState(langArr[1]);
    let prevLang;

    let [isMobile, setIsMobile] = useState(false)
    const exitBtnHandle = () => {
        setIsMobile(false)
      }

    const { register, handleSubmit, formState: {errors}} = useForm();
    const [data, setData] = useState("");

    const location = useLocation();

    let [isAutorized, setIsAutorized] = useState(Boolean(localStorage.getItem('isAutorized')))

    const [selectedGenders, setSelectedGenders] = useState([]);
    const [selectedColors, setSelectedColors] = useState([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);
    const [selectedBreeds, setSelectedBreeds] = useState([]);

    const [chatIsOpen, setChatIsOpen] = useState()

    const [filterDisplay, setFilterDisplay] = useState(false)


    


    


    const changeChoosenLang = () => {
        const newSelectLang = otherLang;
        const newOtherLang = selectLang;
    
        setSelectLang(newSelectLang);
        setOtherLang(newOtherLang);
    
        setSelectedLang(newSelectLang.lang === "ქარ" ? languages[1] : languages[0]);
    };
    return (
        <LangContext.Provider value={{ selectedLang, changeChoosenLang, langSwitch, setLangSwitch, selectLang, otherLang, isMobile, setIsMobile, exitBtnHandle, register, handleSubmit, data, setData, errors, location, isAutorized, setIsAutorized, selectedGenders, setSelectedGenders, selectedColors, setSelectedColors, minPrice, setMinPrice, maxPrice, setMaxPrice, selectedBreeds, setSelectedBreeds ,chatIsOpen, setChatIsOpen, filterDisplay, setFilterDisplay }}>
            {children}
        </LangContext.Provider>
    );
};

export const useLang = () => useContext(LangContext);
