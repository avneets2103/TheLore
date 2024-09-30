"use client"
import { useTheme } from 'next-themes';
import React, { useEffect } from 'react'

interface Props {}

function ThemeComponent(props: Props) {
    const {theme, setTheme} = useTheme();
    useEffect(() => {
        setTheme("dark");
    })
    return (
        <></>
    )
}

export default ThemeComponent
