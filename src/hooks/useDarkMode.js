import { useState } from "react";
import useLocalStorage from "./useLocalStorage"

function useDarkMode() {

    const [darkmode, setDarkmode] = useLocalStorage("isDarkmode", false)

    return [darkmode, setDarkmode]

}

export default useDarkMode