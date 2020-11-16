import React, { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    toTop: {
        zIndex: 2,
        bottom: '1vh',
        backgroundColor: '#DCDCDC',
        color: 'black',
        "&:hover, &.Mui-focusVisible": {
            transition: '0.3s',
            color: '#FFFFFF',
            backgroundColor: 'rgb(176 113 41)'
        },
        display: 'flex',
        justifyContent: 'center',
        marginLeft: 'auto',
        marginRight: 'auto'
    }
}))

const PageScroll = (
    showBelow
) => {

    const classes = useStyles();

    const [show, setShow] = useState(showBelow ? false : true)

    const handleScroll = () => {
        if (window.pageYOffset > showBelow) {
            if (!show) setShow(true)
        } else {
            if (show) setShow(false)
        }
    }

    const handleClick = () => {
        window[`scrollTo`]({ top: 0, behavior: `smooth` })
    }

    useEffect(() => {
        if (showBelow) {
            window.addEventListener(`PageScroll`, handleScroll)
            return () => window.removeEventListener(`PageScroll`, handleScroll)
        }
    })

    return (
        <div>
                <IconButton onClick={handleClick} className={classes.toTop}>
                    <ExpandLessIcon />
                </IconButton>
        </div>
    )
}

export default PageScroll