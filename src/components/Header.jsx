import "./header.css"
import { Heading, IconButton, Box, useColorMode } from '@chakra-ui/react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box  p={6} className="topheading">
            <h1
                
                className='heading'
            >Todo App</h1>
        </Box>
    )
}

export default Header;