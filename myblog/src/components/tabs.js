import * as React from "react"
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link } from "gatsby"

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      {...props}
    />
  );
}

const ZTabs = ({ navValue }) => {
  const [value, setValue] = React.useState(parseInt({navValue}.navValue))

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs value={value} onChange={handleChange} aria-label="navigation-tabs">
        <LinkTab label="Blog" to="/blog" />
        <LinkTab label="Open Source" to="/oss" />
        <LinkTab label="Research" to="/research" />
        <LinkTab label="Books" to="/books" />
      </Tabs>
    </Box>
  );
}

export default ZTabs
