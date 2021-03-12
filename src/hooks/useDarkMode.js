import { useState } from "react";
import useLocalStorage from "./useLocalStorage"

function useDarkMode(initialValue) {

    const [darkmode, setDarkmode] = useLocalStorage("isDarkmode", (initialValue ? initialValue : false))

    return [darkmode, setDarkmode]

}

export default useDarkMode