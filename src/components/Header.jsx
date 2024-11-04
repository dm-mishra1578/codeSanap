import { AppBar, Toolbar, styled } from "@mui/material"
const Container = styled(AppBar)`
    background: #060606;
    position: static;
    border-bottom: 1px solid #2f2f2f;
    height: 9vh;
`;
const logo = {
    color:'#FF4136',
    fontweight: 'bold',
}
const logoname = {
    color:'#0074D9',
    fontweight: 'semi-bold',
}
const Header = () => {
    return (
        <Container>
            <Toolbar>
                <h2 style={logo}>Code</h2><h3 style={logoname}>Snap</h3>
            </Toolbar>
        </Container>
    )
}

export default Header